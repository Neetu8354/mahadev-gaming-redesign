// Lightweight markdown renderer (no external dep) for blog posts.
// Supports: # headings, paragraphs, lists, bold, italic, [links](url), tables, inline code.

import { ReactNode } from "react";

const inline = (text: string): ReactNode[] => {
  const nodes: ReactNode[] = [];
  let rest = text;
  let key = 0;
  const patterns: { re: RegExp; render: (m: RegExpMatchArray) => ReactNode }[] = [
    { re: /\[([^\]]+)\]\(([^)]+)\)/, render: (m) => <a key={key++} href={m[2]} className="text-gold underline underline-offset-4 hover:text-gold-light font-semibold">{m[1]}</a> },
    { re: /\*\*([^*]+)\*\*/, render: (m) => <strong key={key++} className="text-gold-light font-bold">{m[1]}</strong> },
    { re: /\*([^*]+)\*/, render: (m) => <em key={key++}>{m[1]}</em> },
    { re: /`([^`]+)`/, render: (m) => <code key={key++} className="px-1.5 py-0.5 rounded bg-muted text-gold text-sm">{m[1]}</code> },
  ];
  outer: while (rest.length) {
    for (const p of patterns) {
      const m = rest.match(p.re);
      if (m && m.index !== undefined) {
        if (m.index > 0) nodes.push(rest.slice(0, m.index));
        nodes.push(p.render(m));
        rest = rest.slice(m.index + m[0].length);
        continue outer;
      }
    }
    nodes.push(rest);
    break;
  }
  return nodes;
};

export const renderMarkdown = (md: string): ReactNode => {
  const lines = md.trim().split("\n");
  const out: ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) { i++; continue; }

    // Headings
    const h = line.match(/^(#{1,4})\s+(.*)$/);
    if (h) {
      const level = h[1].length;
      const content = inline(h[2]);
      const classes = ["text-3xl md:text-4xl mt-10 mb-4 font-display font-bold text-gradient-gold", "text-2xl md:text-3xl mt-8 mb-3 font-display font-bold text-gold", "text-xl md:text-2xl mt-6 mb-2 font-bold text-gold-light", "text-lg mt-4 mb-2 font-semibold text-foreground"][level - 1];
      const Tag = (`h${level + 1}`) as "h2" | "h3" | "h4" | "h5";
      out.push(<Tag key={key++} className={classes}>{content}</Tag>);
      i++; continue;
    }

    // Lists
    if (/^(\d+\.|[-*])\s/.test(line)) {
      const ordered = /^\d+\./.test(line);
      const items: ReactNode[] = [];
      while (i < lines.length && /^(\d+\.|[-*])\s/.test(lines[i])) {
        const text = lines[i].replace(/^(\d+\.|[-*])\s/, "");
        items.push(<li key={key++} className="ml-6 mb-1.5 leading-relaxed">{inline(text)}</li>);
        i++;
      }
      const ListTag = ordered ? "ol" : "ul";
      out.push(<ListTag key={key++} className={`${ordered ? "list-decimal" : "list-disc"} my-4 text-foreground/90`}>{items}</ListTag>);
      continue;
    }

    // Tables (very basic: | a | b |)
    if (line.startsWith("|")) {
      const rows: string[][] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        const cells = lines[i].split("|").slice(1, -1).map(c => c.trim());
        rows.push(cells);
        i++;
      }
      const [head, , ...body] = rows;
      out.push(
        <div key={key++} className="my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead><tr className="border-b border-gold/30">{head.map((c, j) => <th key={j} className="px-3 py-2 text-left text-gold font-bold">{inline(c)}</th>)}</tr></thead>
            <tbody>{body.map((r, ri) => <tr key={ri} className="border-b border-border/40">{r.map((c, j) => <td key={j} className="px-3 py-2">{inline(c)}</td>)}</tr>)}</tbody>
          </table>
        </div>
      );
      continue;
    }

    // Paragraph
    const paraLines = [line];
    i++;
    while (i < lines.length && lines[i].trim() && !/^(#{1,4}\s|[-*]\s|\d+\.\s|\|)/.test(lines[i])) {
      paraLines.push(lines[i]);
      i++;
    }
    out.push(<p key={key++} className="my-4 leading-relaxed text-foreground/90 text-base md:text-lg">{inline(paraLines.join(" "))}</p>);
  }

  return <>{out}</>;
};
