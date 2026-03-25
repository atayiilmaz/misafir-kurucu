import { useState } from "react";
import { MessageCircleQuestion } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: string;
}

export function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-[1.5rem] border border-border/70 bg-white/75 p-5 shadow-sm">
      <button
        className="flex w-full items-center justify-between gap-4 text-left"
        onClick={() => setIsOpen((value) => !value)}
        type="button"
      >
        <span className="text-lg font-semibold">{question}</span>
        <MessageCircleQuestion className="h-5 w-5 shrink-0 text-primary" />
      </button>
      {isOpen && (
        <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">
          {answer}
        </p>
      )}
    </div>
  );
}
