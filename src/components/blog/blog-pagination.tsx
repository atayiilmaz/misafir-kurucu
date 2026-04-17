import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { cn } from "@/lib/utils";

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  className?: string;
}

export function BlogPagination({
  currentPage,
  totalPages,
  className,
}: BlogPaginationProps) {
  const [, setSearchParams] = useSearchParams();

  if (totalPages <= 1) {
    return null;
  }

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const updatePage = (page: number) => {
    const nextParams = new URLSearchParams();
    nextParams.set("page", String(page));
    setSearchParams(nextParams, { replace: true });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-2", className)}>
      <button
        type="button"
        className="inline-flex h-11 items-center gap-2 rounded-full border border-border/70 bg-white px-4 text-sm font-semibold transition hover:border-primary/30 hover:text-primary disabled:cursor-not-allowed disabled:opacity-45"
        disabled={currentPage <= 1}
        onClick={() => updatePage(currentPage - 1)}
      >
        <ChevronLeft className="h-4 w-4" />
        Onceki
      </button>

      {pages.map((page) => (
        <button
          key={page}
          type="button"
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center rounded-full border text-sm font-semibold transition",
            page === currentPage
              ? "border-primary bg-primary text-white"
              : "border-border/70 bg-white hover:border-primary/30 hover:text-primary",
          )}
          onClick={() => updatePage(page)}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        className="inline-flex h-11 items-center gap-2 rounded-full border border-border/70 bg-white px-4 text-sm font-semibold transition hover:border-primary/30 hover:text-primary disabled:cursor-not-allowed disabled:opacity-45"
        disabled={currentPage >= totalPages}
        onClick={() => updatePage(currentPage + 1)}
      >
        Sonraki
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}
