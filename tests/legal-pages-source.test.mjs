import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";

const privacyRoute = new URL("../app/politica-de-privacidade/page.tsx", import.meta.url);
const termsRoute = new URL("../app/termos-de-uso/page.tsx", import.meta.url);
const legalPage = new URL("../app/_components/legal-page.tsx", import.meta.url);
const privacyMarkdown = readFileSync(
  new URL("../docs/10-politica-privacidade.md", import.meta.url),
  "utf8",
);
const termsMarkdown = readFileSync(
  new URL("../docs/11-termos-de-uso.md", import.meta.url),
  "utf8",
);

assert.ok(existsSync(privacyRoute), "Privacy policy route must exist");
assert.ok(existsSync(termsRoute), "Terms of use route must exist");
assert.ok(existsSync(legalPage), "Legal page component must exist");

const privacySource = readFileSync(privacyRoute, "utf8");
const termsSource = readFileSync(termsRoute, "utf8");
const legalSource = readFileSync(legalPage, "utf8");

assert.ok(
  privacySource.includes("LegalPage") &&
    privacySource.includes("10-politica-privacidade.md") &&
    privacySource.includes("Política de Privacidade"),
  "Privacy route must render the privacy markdown with the expected title",
);
assert.ok(
  termsSource.includes("LegalPage") &&
    termsSource.includes("11-termos-de-uso.md") &&
    termsSource.includes("Termos de Uso"),
  "Terms route must render the terms markdown with the expected title",
);
assert.ok(
  legalSource.includes("readFileSync") &&
    legalSource.includes("markdownToBlocks") &&
    legalSource.includes('href="/"') &&
    legalSource.includes("bg-black") &&
    legalSource.includes("text-[#D1AF66]") &&
    legalSource.includes("max-w-4xl"),
  "Legal pages must use a simple premium layout and render markdown content",
);

for (const marker of [
  "Última atualização",
  "WhatsApp: (79) 99662-6934",
  "consultoriacanna06@gmail.com",
]) {
  assert.ok(privacyMarkdown.includes(marker), `Privacy markdown source must include: ${marker}`);
  assert.ok(termsMarkdown.includes(marker), `Terms markdown source must include: ${marker}`);
}
