import { useEffect, useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ArrowRight, FileText, LogOut, Plus, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { RevealSection } from "@/components/gsap/reveal-section";
import { AppLink } from "@/components/ui/app-link";
import { Button } from "@/components/ui/button";
import { useAdminSession } from "@/features/admin/admin-session";
import { deleteAdminBlogPost, fetchAdminBlogPosts, loginAdmin } from "@/features/blog/api";
import { formatBlogDate, getStatusLabel } from "@/features/blog/utils";
import { ApiError } from "@/lib/api-error";
import { hasSupabaseConfig } from "@/lib/supabase";

const fieldClassName =
  "h-12 w-full rounded-2xl border border-border/80 bg-white px-4 text-sm text-foreground outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-primary/15";

export function AdminPage() {
  const isConfigured = hasSupabaseConfig();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { session, setSession, clearSession } = useAdminSession();
  const [password, setPassword] = useState("");
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

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => deleteAdminBlogPost(session?.token ?? "", id),
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ["blog"] }),
        queryClient.invalidateQueries({ queryKey: ["admin", "blog"] }),
      ]);
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

  if (!isConfigured) {
    return (
      <RevealSection as="section" className="section-shell py-16">
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
    <RevealSection as="section" className="section-shell py-10">
      {!session ? (
        <div className="mx-auto max-w-xl glass-panel p-8 md:p-10">
          <p className="section-kicker">Admin Girişi</p>
          <h1 className="font-display text-5xl leading-[0.96]">Blog paneline giriş yapın</h1>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            Bu panel yalnızca blog yazısı yönetimi için kullanılır.
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
                <h1 className="font-display text-5xl leading-[0.96]">Blog içerik yönetimi</h1>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
                  Taslak oluşturabilir, yayınlanmış yazıları güncelleyebilir ve
                  kapak ya da gövde içi görsel yükleyebilirsiniz.
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
                <Button onClick={() => navigate("/admin/posts/new")}>
                  <Plus className="mr-2 h-4 w-4" />
                  Yeni yazı
                </Button>
              </div>
            </div>

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
          </div>

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
                {deleteMutation.isError ? (
                  <div className="rounded-[1.75rem] border border-red-200 bg-red-50 p-5 text-sm text-red-700">
                    {(deleteMutation.error as Error).message}
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
                        disabled={deleteMutation.isPending}
                        onClick={() => {
                          const confirmed = window.confirm(
                            `"${post.title}" kalıcı olarak silinecek. Devam etmek istiyor musunuz?`,
                          );

                          if (confirmed) {
                            deleteMutation.mutate(post.id);
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
        </div>
      )}
    </RevealSection>
  );
}
