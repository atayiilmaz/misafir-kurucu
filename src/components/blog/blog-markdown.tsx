import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface BlogMarkdownProps {
  content: string;
}

export function BlogMarkdown({ content }: BlogMarkdownProps) {
  return (
    <div className="space-y-5 text-[15px] leading-8 text-foreground md:text-base">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node: _node, ...props }) => (
            <h1 className="font-display text-4xl leading-[1.02] md:text-5xl" {...props} />
          ),
          h2: ({ node: _node, ...props }) => (
            <h2 className="mt-10 font-display text-3xl leading-[1.05] md:text-4xl" {...props} />
          ),
          h3: ({ node: _node, ...props }) => (
            <h3 className="mt-8 text-2xl font-semibold leading-tight" {...props} />
          ),
          p: ({ node: _node, ...props }) => (
            <p className="text-base leading-8 text-foreground/90" {...props} />
          ),
          ul: ({ node: _node, ...props }) => (
            <ul className="list-disc space-y-3 pl-6 text-foreground/90" {...props} />
          ),
          ol: ({ node: _node, ...props }) => (
            <ol className="list-decimal space-y-3 pl-6 text-foreground/90" {...props} />
          ),
          blockquote: ({ node: _node, ...props }) => (
            <blockquote
              className="rounded-r-[1.5rem] border-l-4 border-primary/40 bg-primary/5 px-5 py-4 italic text-foreground/80"
              {...props}
            />
          ),
          a: ({ node: _node, ...props }) => (
            <a
              className="font-semibold text-primary underline decoration-primary/40 underline-offset-4"
              target="_blank"
              rel="noreferrer"
              {...props}
            />
          ),
          img: ({ node: _node, alt, ...props }) => (
            <img
              {...props}
              alt={alt ?? ""}
              className="my-8 w-full rounded-[1.75rem] object-cover shadow-soft"
            />
          ),
          code: ({ node: _node, className, children, ...props }) => {
            const isBlock = Boolean(className);

            if (isBlock) {
              return (
                <code
                  className="block overflow-x-auto rounded-[1.5rem] bg-[#1f2430] px-4 py-3 text-sm text-white"
                  {...props}
                >
                  {children}
                </code>
              );
            }

            return (
              <code
                className="rounded bg-primary/10 px-1.5 py-1 text-[0.92em] text-primary"
                {...props}
              >
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
