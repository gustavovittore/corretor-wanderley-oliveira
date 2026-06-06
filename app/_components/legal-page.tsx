import { readFileSync } from "node:fs";
import { join } from "node:path";
import Link from "next/link";
import type { ReactNode } from "react";

type MarkdownBlock =
  | { type: "heading"; level: number; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "rule" };

function markdownToBlocks(markdown: string): MarkdownBlock[] {
  const blocks: MarkdownBlock[] = [];
  const paragraph: string[] = [];
  let list: string[] = [];

  function flushParagraph() {
    if (paragraph.length > 0) {
      blocks.push({ type: "paragraph", text: paragraph.join(" ") });
      paragraph.length = 0;
    }
  }

  function flushList() {
    if (list.length > 0) {
      blocks.push({ type: "list", items: list });
      list = [];
    }
  }

  for (const rawLine of markdown.replace(/\r\n/g, "\n").split("\n")) {
    const line = rawLine.trim();

    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }

    if (line === "---") {
      flushParagraph();
      flushList();
      blocks.push({ type: "rule" });
      continue;
    }

    const heading = /^(#{1,3})\s+(.+)$/.exec(line);
    if (heading) {
      flushParagraph();
      flushList();
      blocks.push({
        type: "heading",
        level: heading[1].length,
        text: heading[2],
      });
      continue;
    }

    if (line.startsWith("* ")) {
      flushParagraph();
      list.push(line.slice(2).trim());
      continue;
    }

    flushList();
    paragraph.push(line);
  }

  flushParagraph();
  flushList();

  return blocks;
}

function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const tokenPattern = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = tokenPattern.exec(text))) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    if (match[1] && match[2]) {
      nodes.push(
        <a
          key={`link-${match.index}`}
          href={match[2]}
          className="text-[#D1AF66] underline decoration-[#D1AF66]/40 underline-offset-4 transition hover:text-white"
        >
          {match[1]}
        </a>,
      );
    } else if (match[3]) {
      nodes.push(
        <strong key={`strong-${match.index}`} className="font-semibold text-white">
          {match[3]}
        </strong>,
      );
    }

    lastIndex = tokenPattern.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

export function LegalPage({
  title,
  markdownFile,
}: {
  title: string;
  markdownFile: string;
}) {
  const markdown = readFileSync(join(process.cwd(), "docs", markdownFile), "utf8");
  const blocks = markdownToBlocks(markdown);
  const content =
    blocks[0]?.type === "heading" && blocks[0].level === 1 ? blocks.slice(1) : blocks;

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white sm:px-10 lg:px-16">
      <article className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center border-b border-[#D1AF66]/50 pb-1 text-[0.74rem] font-bold uppercase tracking-[0.22em] text-[#D1AF66] transition hover:border-[#D1AF66] hover:text-white"
        >
          Voltar ao início
        </Link>

        <header className="mt-14 border-b border-[#D1AF66]/28 pb-10">
          <p className="mb-6 text-[0.72rem] font-bold uppercase tracking-[0.34em] text-[#D1AF66]">
            Canna Consultoria Imobiliária
          </p>
          <h1 className="font-serif text-[2.55rem] font-normal leading-tight text-white sm:text-[4.25rem]">
            {title}
          </h1>
        </header>

        <div className="space-y-7 py-12 text-[1.02rem] leading-8 text-white/74 sm:text-[1.13rem] sm:leading-9">
          {content.map((block, index) => {
            if (block.type === "heading") {
              const Heading = block.level === 2 ? "h2" : "h3";
              return (
                <Heading
                  key={`${block.text}-${index}`}
                  className="pt-4 font-serif text-[1.7rem] font-normal leading-tight text-white sm:text-[2.15rem]"
                >
                  {renderInline(block.text)}
                </Heading>
              );
            }

            if (block.type === "list") {
              return (
                <ul
                  key={`list-${index}`}
                  className="space-y-3 border-l border-[#D1AF66]/35 pl-6"
                >
                  {block.items.map((item) => (
                    <li key={item} className="text-white/76">
                      {renderInline(item)}
                    </li>
                  ))}
                </ul>
              );
            }

            if (block.type === "rule") {
              return (
                <hr key={`rule-${index}`} className="border-0 border-t border-[#D1AF66]/18" />
              );
            }

            return <p key={`${block.text}-${index}`}>{renderInline(block.text)}</p>;
          })}
        </div>
      </article>
    </main>
  );
}
