import { ChangeEvent, KeyboardEvent, useEffect, useMemo, useRef, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Eye, ImagePlus, PenLine, Save, Trash2 } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { BlogMarkdown } from "@/components/blog/blog-markdown";
import { MarkdownToolbar } from "@/components/blog/markdown-toolbar";
import { RevealSection } from "@/components/gsap/reveal-section";
import { AppLink } from "@/components/ui/app-link";
import { Button } from "@/components/ui/button";
import { useAdminSession } from "@/features/admin/admin-session";
import {
  deleteAdminBlogPost,
  EMPTY_BLOG_POST_FORM,
  fetchAdminBlogPostById,
  requestMediaUpload,
  upsertAdminBlogPost,
} from "@/features/blog/api";
import {
  applyMarkdownToolbarAction,
  type MarkdownToolbarAction,
} from "@/features/blog/markdown-toolbar";
import { type BlogPostFormValues, type BlogPostStatus } from "@/features/blog/types";
import { slugify } from "@/features/blog/utils";
import { ApiError } from "@/lib/api-error";
import { hasSupabaseConfig } from "@/lib/supabase";

const inputClassName =
  "h-12 w-full rounded-2xl border border-border/80 bg-white px-4 text-sm text-foreground outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-primary/15";
const textareaClassName =
  "min-h-[10rem] w-full rounded-[1.5rem] border border-border/80 bg-white px-4 py-3 text-sm leading-7 text-foreground outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-primary/15";

type PreviewMode = "write" | "preview" | "split";

type EditorSnapshot = {
  value: string;
  selectionStart: number;
  selectionEnd: number;
};

function focusEditorWithoutScroll(
  textarea: HTMLTextAreaElement,
  selectionStart: number,
  selectionEnd: number,
) {
  const scrollX = window.scrollX;
  const scrollY = window.scrollY;

  textarea.focus({ preventScroll: true });
  textarea.setSelectionRange(selectionStart, selectionEnd);
  window.scrollTo(scrollX, scrollY);
}

export function AdminPostEditorPage() {
  const { id } = useParams();
  const isEditMode = Boolean(id);
  const isConfigured = hasSupabaseConfig();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { session, clearSession } = useAdminSession();
  const [values, setValues] = useState<BlogPostFormValues>(EMPTY_BLOG_POST_FORM);
  const [previewMode, setPreviewMode] = useState<PreviewMode>("split");
  const [slugEdited, setSlugEdited] = useState(false);
  const [uploadMessage, setUploadMessage] = useState<string | null>(null);
  const contentRef = useRef<HTMLTextAreaElement | null>(null);
  const coverInputRef = useRef<HTMLInputElement | null>(null);
  const inlineInputRef = useRef<HTMLInputElement | null>(null);
  const undoStackRef = useRef<EditorSnapshot[]>([]);
  const redoStackRef = useRef<EditorSnapshot[]>([]);
  const selectionRef = useRef({
    selectionStart: 0,
    selectionEnd: 0,
  });

  const postQuery = useQuery({
    queryKey: ["admin", "blog", "detail", id],
    queryFn: () => fetchAdminBlogPostById(session?.token ?? "", id ?? ""),
    enabled: Boolean(session && id && isConfigured),
    staleTime: 60 * 1000,
  });

  useEffect(() => {
    if (postQuery.error instanceof ApiError && postQuery.error.status === 401) {
      clearSession();
      navigate("/admin", { replace: true });
    }
  }, [clearSession, navigate, postQuery.error]);

  useEffect(() => {
    if (postQuery.data) {
      setValues({
        id: postQuery.data.id,
        title: postQuery.data.title,
        slug: postQuery.data.slug,
        excerpt: postQuery.data.excerpt,
        coverImageUrl: postQuery.data.coverImageUrl ?? "",
        contentMarkdown: postQuery.data.contentMarkdown,
      });
      undoStackRef.current = [];
      redoStackRef.current = [];
      selectionRef.current = {
        selectionStart: postQuery.data.contentMarkdown.length,
        selectionEnd: postQuery.data.contentMarkdown.length,
      };
      setSlugEdited(true);
    }
  }, [postQuery.data]);

  const saveMutation = useMutation({
    mutationFn: async (status: BlogPostStatus) =>
      upsertAdminBlogPost(session?.token ?? "", values, status),
    onSuccess: async (savedPost) => {
      setValues({
        id: savedPost.id,
        title: savedPost.title,
        slug: savedPost.slug,
        excerpt: savedPost.excerpt,
        coverImageUrl: savedPost.coverImageUrl ?? "",
        contentMarkdown: savedPost.contentMarkdown,
      });

      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ["blog"] }),
        queryClient.invalidateQueries({ queryKey: ["admin", "blog"] }),
      ]);

      navigate(`/admin/posts/${savedPost.id}`, { replace: true });
    },
  });

  const uploadMutation = useMutation({
    mutationFn: async ({
      file,
      target,
    }: {
      file: File;
      target: "cover" | "inline";
    }) => requestMediaUpload(session?.token ?? "", file, target),
    onError: (error) => {
      setUploadMessage((error as Error).message);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async () => {
      if (!values.id) {
        throw new Error("Silinecek yazı bulunamadı.");
      }

      await deleteAdminBlogPost(session?.token ?? "", values.id);
    },
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ["blog"] }),
        queryClient.invalidateQueries({ queryKey: ["admin", "blog"] }),
      ]);
      navigate("/admin", { replace: true });
    },
  });

  const canSave =
    values.title.trim().length > 0 &&
    values.slug.trim().length > 0 &&
    values.contentMarkdown.trim().length > 0;

  const previewContent = useMemo(() => {
    return values.contentMarkdown.trim().length > 0
      ? values.contentMarkdown
      : "## Önizleme\n\nYazmaya başladığınızda önizleme burada görünecek.";
  }, [values.contentMarkdown]);

  if (!session) {
    return <NavigateToAdmin />;
  }

  if (!isConfigured) {
    return (
      <RevealSection as="section" className="section-shell py-16">
        <div className="glass-panel p-8 text-center">
          <p className="section-kicker">Admin</p>
          <h1 className="font-display text-5xl">Supabase kurulumu eksik</h1>
          <p className="mt-4 text-muted-foreground">
            Editörü kullanmak için public Supabase env değişkenlerini tanımlayın.
          </p>
        </div>
      </RevealSection>
    );
  }

  if (isEditMode && postQuery.isLoading) {
    return (
      <RevealSection as="section" className="section-shell py-16">
        <div className="glass-panel animate-pulse p-8">
          <div className="h-10 w-40 rounded-full bg-muted" />
          <div className="mt-6 h-14 rounded-3xl bg-muted" />
          <div className="mt-4 h-[32rem] rounded-[2rem] bg-muted" />
        </div>
      </RevealSection>
    );
  }

  if (isEditMode && postQuery.isError) {
    return (
      <RevealSection as="section" className="section-shell py-16">
        <div className="glass-panel p-8 text-center">
          <p className="section-kicker">Admin</p>
          <h1 className="font-display text-5xl">Yazı yüklenemedi</h1>
          <p className="mt-4 text-muted-foreground">
            {(postQuery.error as Error).message}
          </p>
        </div>
      </RevealSection>
    );
  }

  const isBusy =
    saveMutation.isPending || uploadMutation.isPending || deleteMutation.isPending;

  const handleFieldChange =
    (field: keyof BlogPostFormValues) =>
    (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      const nextValue = event.target.value;

      setValues((current) => {
        if (field === "title" && !slugEdited) {
          return {
            ...current,
            title: nextValue,
            slug: slugify(nextValue),
          };
        }

        return {
          ...current,
          [field]: nextValue,
        };
      });
    };

  const handleSlugChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSlugEdited(true);
    setValues((current) => ({
      ...current,
      slug: slugify(event.target.value),
    }));
  };

  const handleUpload = async (file: File, target: "cover" | "inline") => {
    setUploadMessage(null);

    const uploaded = await uploadMutation.mutateAsync({ file, target });

    if (target === "cover") {
      setValues((current) => ({
        ...current,
        coverImageUrl: uploaded.publicUrl,
      }));
      setUploadMessage("Kapak görseli yüklendi.");
      return;
    }

    const imageMarkdown = `![${file.name}](${uploaded.publicUrl})`;
    const nextState = insertAtCursor(
      values.contentMarkdown,
      imageMarkdown,
      contentRef.current,
    );
    applyEditorState(nextState);
    setUploadMessage("Görsel markdown gövdesine eklendi.");
  };

  const applyToolbarAction = (action: MarkdownToolbarAction) => {
    const textarea = contentRef.current;

    if (!textarea) {
      return;
    }

    if (action === "link") {
      const linkUrl = window.prompt("Eklemek istediğiniz link URL'sini girin", "https://");

      if (!linkUrl) {
        return;
      }

      const result = applyMarkdownToolbarAction(
        values.contentMarkdown,
        textarea.selectionStart,
        textarea.selectionEnd,
        action,
        { linkUrl },
      );

      applyEditorState(result);
      return;
    }

    const result = applyMarkdownToolbarAction(
      values.contentMarkdown,
      textarea.selectionStart,
      textarea.selectionEnd,
      action,
    );

    applyEditorState(result);
  };

  const applyEditorState = (
    nextState: EditorSnapshot,
    options?: {
      pushToUndo?: boolean;
      clearRedo?: boolean;
    },
  ) => {
    const { pushToUndo = true, clearRedo = true } = options ?? {};

    if (pushToUndo && nextState.value !== values.contentMarkdown) {
      undoStackRef.current.push({
        value: values.contentMarkdown,
        selectionStart: selectionRef.current.selectionStart,
        selectionEnd: selectionRef.current.selectionEnd,
      });
    }

    if (clearRedo) {
      redoStackRef.current = [];
    }

    selectionRef.current = {
      selectionStart: nextState.selectionStart,
      selectionEnd: nextState.selectionEnd,
    };

    setValues((current) => ({
      ...current,
      contentMarkdown: nextState.value,
    }));

    window.requestAnimationFrame(() => {
      const textarea = contentRef.current;

      if (!textarea) {
        return;
      }

      focusEditorWithoutScroll(
        textarea,
        nextState.selectionStart,
        nextState.selectionEnd,
      );
    });
  };

  const restoreSnapshot = (snapshot: EditorSnapshot) => {
    selectionRef.current = {
      selectionStart: snapshot.selectionStart,
      selectionEnd: snapshot.selectionEnd,
    };
    setValues((current) => ({
      ...current,
      contentMarkdown: snapshot.value,
    }));
    window.requestAnimationFrame(() => {
      const textarea = contentRef.current;

      if (!textarea) {
        return;
      }

      focusEditorWithoutScroll(
        textarea,
        snapshot.selectionStart,
        snapshot.selectionEnd,
      );
    });
  };

  const handleUndo = () => {
    const previousSnapshot = undoStackRef.current.pop();

    if (!previousSnapshot) {
      return;
    }

    redoStackRef.current.push({
      value: values.contentMarkdown,
      selectionStart: selectionRef.current.selectionStart,
      selectionEnd: selectionRef.current.selectionEnd,
    });
    restoreSnapshot(previousSnapshot);
  };

  const handleRedo = () => {
    const nextSnapshot = redoStackRef.current.pop();

    if (!nextSnapshot) {
      return;
    }

    undoStackRef.current.push({
      value: values.contentMarkdown,
      selectionStart: selectionRef.current.selectionStart,
      selectionEnd: selectionRef.current.selectionEnd,
    });
    restoreSnapshot(nextSnapshot);
  };

  const handleContentKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    const hasModifier = event.ctrlKey || event.metaKey;

    if (!hasModifier) {
      return;
    }

    const key = event.key.toLowerCase();
    const isRedoShortcut =
      key === "y" || (key === "z" && event.shiftKey);

    if (key === "z" && !event.shiftKey) {
      event.preventDefault();
      handleUndo();
      return;
    }

    if (isRedoShortcut) {
      event.preventDefault();
      handleRedo();
    }
  };

  const syncSelection = (textarea: HTMLTextAreaElement) => {
    selectionRef.current = {
      selectionStart: textarea.selectionStart,
      selectionEnd: textarea.selectionEnd,
    };
  };

  return (
    <RevealSection as="section" className="section-shell py-10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <AppLink
          href="/admin"
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary"
        >
          Panele dön
        </AppLink>

        <div className="flex flex-wrap gap-2">
          {(["write", "preview", "split"] as const).map((mode) => (
            <button
              key={mode}
              type="button"
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                previewMode === mode
                  ? "border-primary/30 bg-primary text-white"
                  : "border-border/70 bg-white text-foreground"
              }`}
              onClick={() => setPreviewMode(mode)}
            >
              {mode === "write" ? "Yaz" : mode === "preview" ? "Önizle" : "Bölünmüş"}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 glass-panel p-6 md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="section-kicker">{isEditMode ? "Düzenle" : "Yeni Yazı"}</p>
            <h1 className="font-display text-5xl leading-[1.02]">
              {isEditMode ? "Blog yazısını düzenle" : "Yeni blog yazısı oluştur"}
            </h1>
          </div>

          <div className="flex flex-wrap gap-3">
            {isEditMode ? (
              <Button
                variant="outline"
                disabled={isBusy}
                onClick={() => {
                  const confirmed = window.confirm(
                    `"${values.title || "Bu yazı"}" kalıcı olarak silinecek. Devam etmek istiyor musunuz?`,
                  );

                  if (confirmed) {
                    deleteMutation.mutate();
                  }
                }}
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Sil
              </Button>
            ) : null}
            <Button
              variant="outline"
              disabled={!canSave || isBusy}
              onClick={() => saveMutation.mutate("draft")}
            >
              <Save className="mr-2 h-4 w-4" />
              Taslak kaydet
            </Button>
            <Button
              disabled={!canSave || isBusy}
              onClick={() => saveMutation.mutate("published")}
            >
              <Eye className="mr-2 h-4 w-4" />
              Yayınla
            </Button>
          </div>
        </div>

        {(saveMutation.isError || deleteMutation.isError || uploadMessage) && (
          <div
            className={`mt-6 rounded-[1.5rem] border px-4 py-3 text-sm ${
              saveMutation.isError || deleteMutation.isError
                ? "border-red-200 bg-red-50 text-red-700"
                : "border-emerald-200 bg-emerald-50 text-emerald-700"
            }`}
          >
            {saveMutation.isError
              ? (saveMutation.error as Error).message
              : deleteMutation.isError
                ? (deleteMutation.error as Error).message
              : uploadMessage}
          </div>
        )}

        <div className="mt-8 grid gap-6">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <label className="block text-sm font-semibold text-foreground">
              Başlık
              <input
                value={values.title}
                onChange={handleFieldChange("title")}
                className={`${inputClassName} mt-2`}
                placeholder="Yazı başlığını girin"
              />
            </label>

            <label className="block text-sm font-semibold text-foreground">
              Slug
              <input
                value={values.slug}
                onChange={handleSlugChange}
                className={`${inputClassName} mt-2`}
                placeholder="yazi-slug"
              />
            </label>
          </div>

          <label className="block text-sm font-semibold text-foreground">
            Özet
            <textarea
              value={values.excerpt}
              onChange={handleFieldChange("excerpt")}
              className={`${textareaClassName} mt-2 min-h-[8rem]`}
              placeholder="Kart ve detay sayfasında görünecek kısa açıklama"
            />
          </label>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[1.75rem] border border-border/70 bg-white/70 p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-foreground">Kapak görseli</p>
                  <p className="mt-1 text-xs leading-6 text-muted-foreground">
                    Kapak görseli `blog-media` bucket&apos;ına yüklenir.
                  </p>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => coverInputRef.current?.click()}
                  disabled={uploadMutation.isPending}
                >
                  <ImagePlus className="mr-2 h-4 w-4" />
                  Görsel yükle
                </Button>
              </div>

              <input
                ref={coverInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={async (event) => {
                  const file = event.target.files?.[0];
                  if (file) {
                    await handleUpload(file, "cover");
                    event.target.value = "";
                  }
                }}
              />

              {values.coverImageUrl ? (
                <img
                  src={values.coverImageUrl}
                  alt="Kapak onizleme"
                  className="mt-5 h-64 w-full rounded-[1.5rem] object-cover"
                />
              ) : (
                <div className="mt-5 flex h-64 items-center justify-center rounded-[1.5rem] border border-dashed border-border/80 bg-background text-sm text-muted-foreground">
                  Henüz kapak görseli seçilmedi
                </div>
              )}
            </div>

            <div className="rounded-[1.75rem] border border-border/70 bg-white/70 p-5">
              <p className="text-sm font-semibold text-foreground">Yayın notları</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
                <li>Slug benzersiz olmalıdır; aynı slug tekrar kullanılamaz.</li>
                <li>Taslaklar public blog sayfasında listelenmez.</li>
                <li>Yayınla butonu ilk yayın anında `published_at` alanını set eder.</li>
              </ul>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-border/70 bg-white/70 p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-foreground">Markdown gövdesi</p>
                <p className="mt-1 text-xs leading-6 text-muted-foreground">
                  Medium benzeri yazım için markdown kullanılır. Gövde içi
                  görseller markdown olarak otomatik eklenir.
                </p>
              </div>
            </div>

            <div className="sticky top-[5.6rem] z-20 mt-5 flex flex-wrap items-center justify-between gap-3 rounded-[1.5rem] border border-border/70 bg-background/90 p-3 shadow-[0_18px_36px_-30px_rgba(58,44,31,0.28)] backdrop-blur">
              <MarkdownToolbar
                onAction={applyToolbarAction}
                disabled={isBusy}
              />

              <div className="flex flex-wrap gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => inlineInputRef.current?.click()}
                  disabled={uploadMutation.isPending}
                >
                  <ImagePlus className="mr-2 h-4 w-4" />
                  Gövdeye görsel ekle
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => applyToolbarAction("heading-2")}
                  disabled={isBusy}
                >
                  <PenLine className="mr-2 h-4 w-4" />
                  Başlık ekle
                </Button>
              </div>
            </div>

            <input
              ref={inlineInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={async (event) => {
                const file = event.target.files?.[0];
                if (file) {
                  await handleUpload(file, "inline");
                  event.target.value = "";
                }
              }}
            />

            <div
              className={`mt-5 grid gap-5 ${
                previewMode === "split"
                  ? "lg:grid-cols-2"
                  : "lg:grid-cols-1"
              }`}
            >
              {(previewMode === "write" || previewMode === "split") && (
                <textarea
                  ref={contentRef}
                  value={values.contentMarkdown}
                  onChange={(event) => {
                    applyEditorState(
                      {
                        value: event.target.value,
                        selectionStart: event.target.selectionStart,
                        selectionEnd: event.target.selectionEnd,
                      },
                      {
                        pushToUndo: event.target.value !== values.contentMarkdown,
                      },
                    );
                  }}
                  onKeyDown={handleContentKeyDown}
                  onSelect={(event) => syncSelection(event.currentTarget)}
                  onClick={(event) => syncSelection(event.currentTarget)}
                  onKeyUp={(event) => syncSelection(event.currentTarget)}
                  className={`${textareaClassName} min-h-[30rem] font-mono text-[13px]`}
                  placeholder="# Yazınız burada başlasın"
                />
              )}

              {(previewMode === "preview" || previewMode === "split") && (
                <div className="min-h-[30rem] rounded-[1.5rem] border border-border/70 bg-white px-5 py-4">
                  <BlogMarkdown content={previewContent} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}

function insertAtCursor(
  currentValue: string,
  snippet: string,
  textarea: HTMLTextAreaElement | null,
) {
  if (!textarea) {
    return {
      value: `${currentValue}\n\n${snippet}\n`,
      selectionStart: currentValue.length + 2,
      selectionEnd: currentValue.length + 2 + snippet.length,
    };
  }

  const selectionStart = textarea.selectionStart;
  const selectionEnd = textarea.selectionEnd;
  const nextValue = `${currentValue.slice(0, selectionStart)}${snippet}${currentValue.slice(selectionEnd)}`;

  return {
    value: nextValue,
    selectionStart,
    selectionEnd: selectionStart + snippet.length,
  };
}

function NavigateToAdmin() {
  return (
    <RevealSection as="section" className="section-shell py-16">
      <div className="glass-panel p-8 text-center">
        <p className="section-kicker">Admin</p>
        <h1 className="font-display text-5xl">Oturum gerekli</h1>
        <p className="mt-4 text-muted-foreground">
          Yazı editörünü açmak için önce admin panelinden giriş yapın.
        </p>
        <AppLink
          href="/admin"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary"
        >
          Admin paneline dön
        </AppLink>
      </div>
    </RevealSection>
  );
}
