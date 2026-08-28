interface ASTNode {
  type: string;
  value?: string;
  children?: ASTNode[];
  data?: {
    hName?: string;
    hProperties?: {
      className?: string;
    };
  };
}

export function remarkCustomAlerts() {
  return (tree: ASTNode): void => {
    if (!tree.children) return;

    for (const node of tree.children) {
      if (node.type !== "blockquote") continue;

      const firstParagraph = node.children?.[0];

      if (firstParagraph?.type !== "paragraph") continue;

      const firstChild = firstParagraph.children?.[0];

      if (firstChild?.type !== "text" || !firstChild.value) continue;

      const match = firstChild.value.match(/^\[!([a-zA-Z0-9_-]+)\]\s*/);

      if (!match) continue;

      const alertType = match[1].toLowerCase();

      firstChild.value = firstChild.value.replace(
        /^\[![a-zA-Z0-9_-]+\]\s*/,
        "",
      );

      const titleNode: ASTNode = {
        type: "paragraph",
        data: {
          hName: "div",
          hProperties: {
            className: "markdown-alert-title",
          },
        },
        children: [
          {
            type: "text",
            value: alertType.charAt(0).toUpperCase() + alertType.slice(1),
          },
        ],
      };

      node.children = [titleNode, ...(node.children ?? [])];

      node.data = node.data ?? {};
      node.data.hName = "div";
      node.data.hProperties = {
        className: `markdown-alert markdown-alert-${alertType}`,
      };
    }
  };
}
