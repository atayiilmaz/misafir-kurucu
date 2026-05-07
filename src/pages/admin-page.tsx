import { useEffect, useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ArrowRight, Download, FileText, LogOut, Mail, Plus, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { RevealSection } from "@/components/gsap/reveal-section";
import { AppLink } from "@/components/ui/app-link";
import { Button } from "@/components/ui/button";
import { useAdminSession } from "@/features/admin/admin-session";
import { deleteAdminBlogPost, fetchAdminBlogPosts, loginAdmin } from "@/features/blog/api";
import { formatBlogDate, getStatusLabel } from "@/features/blog/utils";
import { deleteAdminSubscriber, fetchAdminSubscribers } from "@/features/subscribers/api";
import { ApiError } from "@/lib/api-error";
import { hasSupabaseConfig } from "@/lib/supabase";

const fieldClassName =
  "h-12 w-full rounded-2xl border border-border/80 bg-white px-4 text-sm text-foreground outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-primary/15";

type AdminTab = "blog" | "subscribers";

export function AdminPage() {
  const isConfigured = hasSupabaseConfig();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { session, setSession, clearSession } = useAdminSession();
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState<AdminTab>("blog");

  const loginMutation = useMutation({
    mutationFn: loginAdmin,
    onSuccess: (nextSession) => {
      setSession(nextSession);
      setPassword("");
    },
  });

  const postsQuery = useQuery({
    queryKey: ["admin", "blog", "list"],
    queryFn: () => fetchAdminBlogPosts(session?.token ?? ""),
    enabled: Boolean(session) && isConfigured,
    staleTime: 60 * 1000,
  });

  const deletePostMutation = useMutation({
    mutationFn: async (id: string) => deleteAdminBlogPost(session?.token ?? "", id),
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ["blog"] }),
        queryClient.invalidateQueries({ queryKey: ["admin", "blog"] }),
      ]);
    },
  });

  const subscribersQuery = useQuery({
    queryKey: ["admin", "subscribers", "list"],
    queryFn: () => fetchAdminSubscribers(session?.token ?? ""),
    enabled: Boolean(session) && isConfigured && activeTab === "subscribers",
    staleTime: 60 * 1000,
  });

  const deleteSubscriberMutation = useMutation({
    mutationFn: async (id: string) => deleteAdminSubscriber(session?.token ?? "", id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "subscribers"] });
    },
  });

  useEffect(() => {
    if (postsQuery.error instanceof ApiError && postsQuery.error.status === 401) {
      clearSession();
    }
  }, [clearSession, postsQuery.error]);

  const statusCounts = useMemo(() => {
    const items = postsQuery.data ?? [];
    return {
      total: items.length,
      drafts: items.filter((item) => item.status === "draft").length,
      published: items.filter((item) => item.status === "published").length,
    };
  }, [postsQuery.data]);

  const subscriberStats = useMemo(() => {
    const items = subscribersQuery.data ?? [];
    const now = new Date();
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    return {
      total: items.length,
      thisWeek: items.filter((s) => new Date(s.subscribedAt) >= oneWeekAgo).length,
      thisMonth: items.filter((s) => new Date(s.subscribedAt) >= oneMonthAgo).length,
    };
  }, [subscribersQuery.data]);

  const handleExportCsv = () => {
    const items = subscribersQuery.data ?? [];
    if (items.length === 0) return;

    const header = "Ad,Soyad,E-posta,Kaynak,Tarih\n";
    const rows = items
      .map((s) => `${s.firstName},${s.lastName},${s.email},${s.source},${new Date(s.subscribedAt).toLocaleString("tr-TR")}`)
      .join("\n");

    const blob = new Blob([header + rows], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `eposta-listesi-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  if (!isConfigured) {
    return (
      <RevealSection as="section" className="section-shell section-space">
        <div className="glass-panel p-8 text-center">
          <p className="section-kicker">Admin</p>
          <h1 className="font-display text-5xl">Supabase kurulumu eksik</h1>
          <p className="mt-4 text-muted-foreground">
            Admin panelini açmak için `VITE_SUPABASE_URL` ve
            `VITE_SUPABASE_ANON_KEY` değişkenlerini tanımlayın.
          </p>
        </div>
      </RevealSection>
    );
  }

  return (
    <RevealSection as="section" className="section-shell section-space">
      {!session ? (
        <div className="mx-auto max-w-xl glass-panel p-8 md:p-10">
          <p className="section-kicker">Admin Girişi</p>
          <h1 className="font-display text-5xl leading-[1.02]">Admin paneline giriş yapın</h1>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            Blog yazısı ve e-posta abone yönetimi paneli.
          </p>

          <form
            className="mt-8 space-y-4"
            onSubmit={(event) => {
              event.preventDefault();
              loginMutation.mutate(password);
            }}
          >
            <label className="block text-sm font-semibold text-foreground">
              Şifre
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className={`${fieldClassName} mt-2`}
                placeholder="Panel şifresini girin"
                autoComplete="current-password"
              />
            </label>

            {loginMutation.isError ? (
              <p className="text-sm text-red-600">
                {(loginMutation.error as Error).message}
              </p>
            ) : null}

            <Button
              type="submit"
              className="w-full"
              disabled={loginMutation.isPending || password.trim().length === 0}
            >
              {loginMutation.isPending ? "Giriş yapılıyor..." : "Panele gir"}
            </Button>
          </form>
        </div>
      ) : (
        <div className="space-y-8">
          <div className="glass-panel p-8 md:p-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="section-kicker">Admin</p>
                <h1 className="font-display text-5xl leading-[1.02]">İçerik yönetimi</h1>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
                  Blog yazıları ve e-posta abonelerini yönetin.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  variant="outline"
                  onClick={() => {
                    clearSession();
                    navigate("/admin", { replace: true });
                  }}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Çıkış yap
                </Button>
                {activeTab === "blog" && (
                  <Button onClick={() => navigate("/admin/posts/new")}>
                    <Plus className="mr-2 h-4 w-4" />
                    Yeni yazı
                  </Button>
                )}
                {activeTab === "subscribers" && subscribersQuery.data && subscribersQuery.data.length > 0 && (
                  <Button variant="outline" onClick={handleExportCsv}>
                    <Download className="mr-2 h-4 w-4" />
                    CSV İndir
                  </Button>
                )}
              </div>
            </div>

            <div className="mt-6 flex gap-2">
              <button
                onClick={() => setActiveTab("blog")}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  activeTab === "blog"
                    ? "surface-primary-gradient text-primary-foreground"
                    : "border border-border/70 bg-white text-foreground hover:border-primary/30"
                }`}
              >
                <FileText className="mr-2 inline h-4 w-4" />
                Blog Yazıları
              </button>
              <button
                onClick={() => setActiveTab("subscribers")}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  activeTab === "subscribers"
                    ? "surface-primary-gradient text-primary-foreground"
                    : "border border-border/70 bg-white text-foreground hover:border-primary/30"
                }`}
              >
                <Mail className="mr-2 inline h-4 w-4" />
                E-posta Listesi
              </button>
            </div>

            {activeTab === "blog" && (
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div className="rounded-[1.75rem] border border-border/70 bg-white/80 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    Toplam
                  </p>
                  <p className="mt-3 font-display text-4xl">{statusCounts.total}</p>
                </div>
                <div className="rounded-[1.75rem] border border-border/70 bg-white/80 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    Taslak
                  </p>
                  <p className="mt-3 font-display text-4xl">{statusCounts.drafts}</p>
                </div>
                <div className="rounded-[1.75rem] border border-border/70 bg-white/80 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    Yayınlanan
                  </p>
                  <p className="mt-3 font-display text-4xl">{statusCounts.published}</p>
                </div>
              </div>
            )}

            {activeTab === "subscribers" && (
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div className="rounded-[1.75rem] border border-border/70 bg-white/80 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    Toplam Abone
                  </p>
                  <p className="mt-3 font-display text-4xl">{subscriberStats.total}</p>
                </div>
                <div className="rounded-[1.75rem] border border-border/70 bg-white/80 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    Bu Hafta
                  </p>
                  <p className="mt-3 font-display text-4xl">{subscriberStats.thisWeek}</p>
                </div>
                <div className="rounded-[1.75rem] border border-border/70 bg-white/80 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    Bu Ay
                  </p>
                  <p className="mt-3 font-display text-4xl">{subscriberStats.thisMonth}</p>
                </div>
              </div>
            )}
          </div>

          {activeTab === "blog" && (
            <div className="glass-panel p-6 md:p-8">
              {postsQuery.isLoading ? (
                <div className="space-y-3">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <div
                      key={index}
                      className="h-24 animate-pulse rounded-[1.5rem] bg-white/70"
                    />
                  ))}
                </div>
              ) : postsQuery.isError ? (
                <div className="rounded-[1.75rem] border border-red-200 bg-red-50 p-5 text-sm text-red-700">
                  {(postsQuery.error as Error).message}
                </div>
              ) : postsQuery.data && postsQuery.data.length > 0 ? (
                <div className="space-y-4">
                  {deletePostMutation.isError ? (
                    <div className="rounded-[1.75rem] border border-red-200 bg-red-50 p-5 text-sm text-red-700">
                      {(deletePostMutation.error as Error).message}
                    </div>
                  ) : null}
                  {postsQuery.data.map((post) => (
                    <article
                      key={post.id}
                      className="flex flex-col gap-4 rounded-[1.75rem] border border-border/70 bg-white/80 p-5 md:flex-row md:items-center md:justify-between"
                    >
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                            {getStatusLabel(post.status)}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {post.status === "published" && post.publishedAt
                              ? `Yayında: ${formatBlogDate(post.publishedAt)}`
                              : `Güncellendi: ${formatBlogDate(post.updatedAt)}`}
                          </span>
                        </div>

                        <h2 className="mt-3 text-2xl font-semibold leading-tight">
                          {post.title}
                        </h2>
                        <p className="mt-2 text-sm leading-7 text-muted-foreground">
                          {post.excerpt}
                        </p>
                        <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                          /blog/{post.slug}
                        </p>
                      </div>

                      <div className="flex shrink-0 flex-wrap gap-3">
                        <Button
                          variant="outline"
                          disabled={deletePostMutation.isPending}
                          onClick={() => {
                            const confirmed = window.confirm(
                              `"${post.title}" kalıcı olarak silinecek. Devam etmek istiyor musunuz?`,
                            );

                            if (confirmed) {
                              deletePostMutation.mutate(post.id);
                            }
                          }}
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          Sil
                        </Button>
                        <AppLink
                          href={`/admin/posts/${post.id}`}
                          className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-white px-4 py-2 text-sm font-semibold transition hover:border-primary/30 hover:text-primary"
                        >
                          <FileText className="h-4 w-4" />
                          Düzenle
                        </AppLink>
                        {post.status === "published" ? (
                          <AppLink
                            href={`/blog/${post.slug}`}
                            className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-white px-4 py-2 text-sm font-semibold transition hover:border-primary/30 hover:text-primary"
                          >
                            Yazıyı gör
                            <ArrowRight className="h-4 w-4" />
                          </AppLink>
                        ) : null}
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="rounded-[1.75rem] border border-border/70 bg-white/80 p-8 text-center">
                  <h2 className="font-display text-4xl">Henüz yazı yok</h2>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    İlk taslağı oluşturmak için yeni yazı ekranına geçin.
                  </p>
                  <Button className="mt-6" onClick={() => navigate("/admin/posts/new")}>
                    <Plus className="mr-2 h-4 w-4" />
                    Yeni yazı
                  </Button>
                </div>
              )}
            </div>
          )}

          {activeTab === "subscribers" && (
            <div className="glass-panel p-6 md:p-8">
              {subscribersQuery.isLoading ? (
                <div className="space-y-3">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <div
                      key={index}
                      className="h-16 animate-pulse rounded-[1.5rem] bg-white/70"
                    />
                  ))}
                </div>
              ) : subscribersQuery.isError ? (
                <div className="rounded-[1.75rem] border border-red-200 bg-red-50 p-5 text-sm text-red-700">
                  {(subscribersQuery.error as Error).message}
                </div>
              ) : subscribersQuery.data && subscribersQuery.data.length > 0 ? (
                <div className="space-y-4">
                  {deleteSubscriberMutation.isError ? (
                    <div className="rounded-[1.75rem] border border-red-200 bg-red-50 p-5 text-sm text-red-700">
                      {(deleteSubscriberMutation.error as Error).message}
                    </div>
                  ) : null}
                  {subscribersQuery.data.map((subscriber) => (
                    <div
                      key={subscriber.id}
                      className="flex flex-col gap-4 rounded-[1.75rem] border border-border/70 bg-white/80 p-5 md:flex-row md:items-center md:justify-between"
                    >
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                            {subscriber.source}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {new Date(subscriber.subscribedAt).toLocaleDateString("tr-TR", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                        <p className="mt-3 text-lg font-semibold">{subscriber.email}</p>
                        <p className="text-sm text-muted-foreground">
                          {subscriber.firstName} {subscriber.lastName}
                        </p>
                      </div>

                      <Button
                        variant="outline"
                        disabled={deleteSubscriberMutation.isPending}
                        onClick={() => {
                          const confirmed = window.confirm(
                            `"${subscriber.email}" listeden kaldırılacak. Devam etmek istiyor musunuz?`,
                          );

                          if (confirmed) {
                            deleteSubscriberMutation.mutate(subscriber.id);
                          }
                        }}
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Sil
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rounded-[1.75rem] border border-border/70 bg-white/80 p-8 text-center">
                  <h2 className="font-display text-4xl">Henüz abone yok</h2>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    Ücretsiz kaynak sayfasından e-posta toplanmaya başlandığında burada görünecek.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </RevealSection>
  );
}
