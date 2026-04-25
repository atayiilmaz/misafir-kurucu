import { CalendarDays, ChevronRight } from "lucide-react";
import { AppLink } from "@/components/ui/app-link";
import { type BlogPostListItem } from "@/features/blog/types";
import { formatBlogDate } from "@/features/blog/utils";

interface BlogCardProps {
  post: BlogPostListItem;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-white/70 bg-white/85 shadow-soft transition-[transform,box-shadow,border-color,background] duration-300 ease-out hover:-translate-y-1 hover:border-primary/20 hover:bg-white hover:shadow-[0_28px_54px_-32px_rgba(62,48,38,0.34)]">
      {post.coverImageUrl ? (
        <img
          src={post.coverImageUrl}
          alt={post.title}
          className="h-80 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      ) : (
        <div className="flex h-80 items-center justify-center bg-[#edf1f5] text-sm text-muted-foreground transition-colors duration-300 group-hover:bg-[#e3e8ed]">
          Kapak gorseli yok
        </div>
      )}

      <div className="p-6">
        <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          <CalendarDays className="h-4 w-4" />
          {formatBlogDate(post.publishedAt ?? post.updatedAt)}
        </div>
        <h2 className="text-2xl font-semibold leading-tight transition-colors duration-300 group-hover:text-primary">
          {post.title}
        </h2>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">
          {post.excerpt}
        </p>

        <AppLink
          href={`/blog/${post.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary"
        >
          YAZIYI OKU
          <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </AppLink>
      </div>
    </article>
  );
}
