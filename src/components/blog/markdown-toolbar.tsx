import {
  Bold,
  Heading2,
  Heading3,
  Heading4,
  Italic,
  List,
  ListOrdered,
  Quote,
  Table2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { type MarkdownToolbarAction } from "@/features/blog/markdown-toolbar";

interface MarkdownToolbarProps {
  onAction: (action: MarkdownToolbarAction) => void;
  disabled?: boolean;
}

const toolbarItems: Array<{
  action: MarkdownToolbarAction;
  label: string;
  icon: typeof Bold;
}> = [
  { action: "bold", label: "Kalın", icon: Bold },
  { action: "italic", label: "İtalik", icon: Italic },
  { action: "heading-2", label: "H2", icon: Heading2 },
  { action: "heading-3", label: "H3", icon: Heading3 },
  { action: "heading-4", label: "H4", icon: Heading4 },
  { action: "bullet-list", label: "Liste", icon: List },
  { action: "ordered-list", label: "Numaralı", icon: ListOrdered },
  { action: "quote", label: "Alıntı", icon: Quote },
  { action: "table", label: "Tablo", icon: Table2 },
];

export function MarkdownToolbar({
  onAction,
  disabled = false,
}: MarkdownToolbarProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {toolbarItems.map(({ action, label, icon: Icon }) => (
        <Button
          key={action}
          type="button"
          variant="outline"
          size="sm"
          className="rounded-2xl"
          disabled={disabled}
          onClick={() => onAction(action)}
          title={label}
        >
          <Icon className="mr-2 h-4 w-4" />
          {label}
        </Button>
      ))}
    </div>
  );
}
