export type MarkdownToolbarAction =
  | "bold"
  | "italic"
  | "heading-2"
  | "heading-3"
  | "heading-4"
  | "bullet-list"
  | "ordered-list"
  | "quote"
  | "table";

export interface MarkdownTransformResult {
  value: string;
  selectionStart: number;
  selectionEnd: number;
}

export function applyMarkdownToolbarAction(
  value: string,
  selectionStart: number,
  selectionEnd: number,
  action: MarkdownToolbarAction,
): MarkdownTransformResult {
  switch (action) {
    case "bold":
      return wrapSelection(value, selectionStart, selectionEnd, "**", "**", "kalın metin");
    case "italic":
      return wrapSelection(value, selectionStart, selectionEnd, "*", "*", "italik metin");
    case "heading-2":
      return prefixLines(value, selectionStart, selectionEnd, "## ", "Alt başlık");
    case "heading-3":
      return prefixLines(value, selectionStart, selectionEnd, "### ", "Alt başlık");
    case "heading-4":
      return prefixLines(value, selectionStart, selectionEnd, "#### ", "Alt başlık");
    case "bullet-list":
      return prefixLines(value, selectionStart, selectionEnd, "- ", "Liste maddesi");
    case "ordered-list":
      return prefixOrderedLines(value, selectionStart, selectionEnd);
    case "quote":
      return prefixLines(value, selectionStart, selectionEnd, "> ", "Alıntı");
    case "table":
      return insertBlock(
        value,
        selectionStart,
        selectionEnd,
        "\n| Başlık | Detay |\n| --- | --- |\n| Örnek | Açıklama |\n",
      );
    default:
      return {
        value,
        selectionStart,
        selectionEnd,
      };
  }
}

function wrapSelection(
  value: string,
  selectionStart: number,
  selectionEnd: number,
  prefix: string,
  suffix: string,
  fallbackText: string,
): MarkdownTransformResult {
  const selectedText = value.slice(selectionStart, selectionEnd) || fallbackText;
  const insertion = `${prefix}${selectedText}${suffix}`;
  const nextValue =
    value.slice(0, selectionStart) + insertion + value.slice(selectionEnd);
  const start = selectionStart + prefix.length;
  const end = start + selectedText.length;

  return {
    value: nextValue,
    selectionStart: start,
    selectionEnd: end,
  };
}

function prefixLines(
  value: string,
  selectionStart: number,
  selectionEnd: number,
  prefix: string,
  fallbackText: string,
): MarkdownTransformResult {
  const { lineStart, lineEnd, block } = getLineBlock(
    value,
    selectionStart,
    selectionEnd,
    fallbackText,
  );
  const lines = block.split("\n");
  const nextBlock = lines
    .map((line) =>
      line.trim().length > 0
        ? `${prefix}${stripExistingLinePrefix(line)}`
        : prefix.trimEnd(),
    )
    .join("\n");
  const nextValue = value.slice(0, lineStart) + nextBlock + value.slice(lineEnd);

  return {
    value: nextValue,
    selectionStart: lineStart,
    selectionEnd: lineStart + nextBlock.length,
  };
}

function prefixOrderedLines(
  value: string,
  selectionStart: number,
  selectionEnd: number,
): MarkdownTransformResult {
  const { lineStart, lineEnd, block } = getLineBlock(
    value,
    selectionStart,
    selectionEnd,
    "Liste maddesi",
  );
  const lines = block.split("\n");
  const nextBlock = lines
    .map((line, index) => `${index + 1}. ${stripExistingLinePrefix(line)}`)
    .join("\n");
  const nextValue = value.slice(0, lineStart) + nextBlock + value.slice(lineEnd);

  return {
    value: nextValue,
    selectionStart: lineStart,
    selectionEnd: lineStart + nextBlock.length,
  };
}

function insertBlock(
  value: string,
  selectionStart: number,
  selectionEnd: number,
  block: string,
): MarkdownTransformResult {
  const nextValue = value.slice(0, selectionStart) + block + value.slice(selectionEnd);

  return {
    value: nextValue,
    selectionStart: selectionStart + 1,
    selectionEnd: selectionStart + block.length - 1,
  };
}

function getLineBlock(
  value: string,
  selectionStart: number,
  selectionEnd: number,
  fallbackText: string,
) {
  if (selectionStart === selectionEnd) {
    return {
      lineStart: selectionStart,
      lineEnd: selectionEnd,
      block: fallbackText,
    };
  }

  const lineStart = value.lastIndexOf("\n", selectionStart - 1) + 1;
  const nextBreak = value.indexOf("\n", selectionEnd);
  const lineEnd = nextBreak === -1 ? value.length : nextBreak;

  return {
    lineStart,
    lineEnd,
    block: value.slice(lineStart, lineEnd),
  };
}

function stripExistingLinePrefix(line: string) {
  return line.replace(/^\s*(?:#{1,6}\s+|[-*+]\s+|>\s+|\d+\.\s+)/, "").trimStart();
}
