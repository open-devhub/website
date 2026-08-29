import { Components } from "react-markdown";

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

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const headingComponents: Components = {
  h1: ({ children, ...props }) => {
    const id = slugify(String(children));
    return (
      <h1 id={id} {...props}>
        {children}
      </h1>
    );
  },
  h2: ({ children, ...props }) => {
    const id = slugify(String(children));
    return (
      <h2 id={id} {...props}>
        {children}
      </h2>
    );
  },
  h3: ({ children, ...props }) => {
    const id = slugify(String(children));
    return (
      <h3 id={id} {...props}>
        {children}
      </h3>
    );
  },
  h4: ({ children, ...props }) => {
    const id = slugify(String(children));
    return (
      <h4 id={id} {...props}>
        {children}
      </h4>
    );
  },
  h5: ({ children, ...props }) => {
    const id = slugify(String(children));
    return (
      <h5 id={id} {...props}>
        {children}
      </h5>
    );
  },
  h6: ({ children, ...props }) => {
    const id = slugify(String(children));
    return (
      <h6 id={id} {...props}>
        {children}
      </h6>
    );
  },
};

export interface TocItem {
  id: string;
  text: string;
  level: 1 | 2;
}

export function getTOC(markdown: string): TocItem[] {
  const headings: TocItem[] = [];
  const headingRegex = /^(#{1,2})\s+(.+)$/gm;

  let match: RegExpExecArray | null;

  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length as 1 | 2;
    const text = match[2].trim();
    const id = slugify(text);

    headings.push({ id, text, level });
  }

  return headings;
}
