import { CalendarDays, ChevronRight } from "lucide-react";
import { AppLink } from "@/components/ui/app-link";
import { type BlogPostListItem } from "@/features/blog/types";
import { formatBlogDate } from "@/features/blog/utils";

interface BlogCardProps {
  post: BlogPostListItem;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/85 shadow-soft">
      {post.coverImageUrl ? (
        <img
          src={post.coverImageUrl}
          alt={post.title}
          className="h-80 w-full object-cover"
        />
      ) : (
        <div className="flex h-80 items-center justify-center bg-[#eef2f6] text-sm text-muted-foreground">
          Kapak gorseli yok
        </div>
      )}

      <div className="p-6">
        <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          <CalendarDays className="h-4 w-4" />
          {formatBlogDate(post.publishedAt ?? post.updatedAt)}
        </div>
        <h2 className="text-2xl font-semibold leading-tight">
          {post.title}
        </h2>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">
          {post.excerpt}
        </p>

        <AppLink
          href={`/blog/${post.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary"
        >
          Yaziyi oku
          <ChevronRight className="h-4 w-4" />
        </AppLink>
      </div>
    </article>
  );
}
