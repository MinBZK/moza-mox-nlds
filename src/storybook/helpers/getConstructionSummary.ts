export const getConstructionSummary = (code: string) => {
  // Parse and indent JSX/TSX code properly
  // First, ensure each tag is on its own line
  let normalized = code
    .trim()
    // Add newline before opening tags (except first character)
    .replace(/(.)<(?!\/)/g, "$1\n<")
    // Add newline after closing tags
    .replace(/<\/[^>]+>/g, "$&\n")
    // Add newline before closing tags
    .replace(/([^>])(<\/)/g, "$1\n$2")
    // Add newline before self-closing /> when preceded by attributes
    .replace(/([^\s])\s*\/>/g, "$1\n/>")
    // Clean up multiple newlines
    .replace(/\n\s*\n/g, "\n");

  const lines = normalized.split("\n").filter((line) => line.trim());
  let indentLevel = 0;

  const formatted = lines
    .map((line) => {
      const trimmed = line.trim();

      // Decrease indent for closing tags and braces
      if (trimmed.startsWith("</") || trimmed.startsWith("}")) {
        indentLevel = Math.max(0, indentLevel - 1);
      }

      // Decrease indent for self-closing tag end on its own line
      if (trimmed === "/>") {
        indentLevel = Math.max(0, indentLevel - 1);
      }

      const indented = "\t".repeat(indentLevel) + trimmed;

      // Increase indent for opening tags (but not self-closing on same line)
      const isSelfClosingSameLine =
        trimmed.startsWith("<") && trimmed.endsWith("/>");
      if (
        (trimmed.startsWith("<") &&
          !trimmed.startsWith("</") &&
          !isSelfClosingSameLine) ||
        trimmed.endsWith("{") ||
        trimmed.endsWith("(")
      ) {
        indentLevel++;
      }

      // Decrease for closing parenthesis or braces on same line
      if (
        trimmed.endsWith(")") ||
        trimmed.endsWith("})") ||
        trimmed.endsWith("};")
      ) {
        indentLevel = Math.max(0, indentLevel - 1);
      }

      return indented;
    })
    .join("\n");

  return `<details>
<summary>Hoe dit component is opgebouwd 🧩</summary>

\`\`\`tsx
${formatted}
\`\`\`
</details>`;
};
