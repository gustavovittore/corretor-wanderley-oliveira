import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";

const page = readFileSync(new URL("../app/page.tsx", import.meta.url), "utf8");

const requiredBackgrounds = [
  "/brand/2/bg-section-02-servicos.jpg.png",
  "/brand/2/bg-section-03-sobre.jpg.png",
  "/brand/2/bg-section-04-tipos-imoveis.jpg.png",
  "/brand/2/bg-section-05-seguranca.jpg.png",
  "/brand/2/bg-section-06-processo.jpg.png",
  "/brand/2/bg-section-07-escolha-com-calma.jpg.png",
  "/brand/2/bg-section-08-compromisso-profissional.jpg.png",
  "/brand/2/bg-section-09-faq.jpg.png",
  "/brand/2/bg-section-10-cta-footer.jpg.png",
];

for (const background of requiredBackgrounds) {
  assert.ok(page.includes(background), `Missing section background: ${background}`);
}

const requiredMarkers = [
  "cinema-backdrop",
  "solid-card",
  "section-copy",
  "card-copy",
  "sectionTextClassName",
  "about-intro-copy",
  "about-copy",
  "about-title-tuned",
  "about-photo-card",
  "about-name-card",
  "premium-action",
  "section-shell",
  "luxury-card",
  "section-rule",
  "card-surface",
  "about-facts",
  "faq-panel",
  "footer-map",
  "Compromisso profissional",
  "Escolha com calma",
  "Fale agora com",
  "Wanderley Oliveira",
  "mobile-section-title",
  "services-title-mobile",
  "property-types-title-mobile",
  "process-title-mobile",
  "choice-title-mobile",
  "faq-title-mobile",
  "cta-final-title-mobile",
  "cta-final-mobile-content",
  "cta-final-kicker",
  "footer-pin-mobile",
];

for (const marker of requiredMarkers) {
  assert.ok(page.includes(marker), `Missing implementation marker: ${marker}`);
}

const forbiddenMarkers = [
  "sectionGlow",
  "reference-card-glow",
  "inner-asset",
  "radial-gradient(circle_at_90%_100%,rgba(209,175,102",
  "shadow-[0_0_120px_rgba(209,175,102",
  "shadow-[0_0_60px_rgba(209,175,102",
  "before:shadow-[0_0_18px_rgba(244,205,112",
  "after:shadow-[0_0_18px_rgba(244,205,112",
];

for (const marker of forbiddenMarkers) {
  assert.ok(!page.includes(marker), `Forbidden exaggerated glow marker remains: ${marker}`);
}

const css = readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
assert.ok(!css.includes(".sectionGlow"), "Global sectionGlow CSS must be removed");
assert.ok(!css.includes("radial-gradient(circle, rgba(209, 175, 102"), "Blurred gold title glow remains");

const aboutFactsStart = page.indexOf('className="about-facts');
assert.ok(aboutFactsStart !== -1, "About facts container is missing");
const aboutFactsEnd = page.indexOf("</div>", aboutFactsStart);
const aboutFactsSlice = page.slice(aboutFactsStart, aboutFactsEnd);
assert.ok(!aboutFactsSlice.includes("<LineIcon"), "About lower cards must not include icons");

const premiumCardStart = page.indexOf("function PremiumCard");
const premiumCardEnd = page.indexOf("export default function Home", premiumCardStart);
const premiumCardSlice = page.slice(premiumCardStart, premiumCardEnd);
assert.ok(
  premiumCardSlice.includes("solid-card") &&
    premiumCardSlice.includes("bg-[linear-gradient(180deg,#151515_0%,#090909_100%)]") &&
    premiumCardSlice.includes("border-[#D1AF66]/45"),
  "PremiumCard must use a solid dark card surface with subtle gold border",
);

function sectionSlice(startMarker, endMarker) {
  const start = page.indexOf(startMarker);
  assert.ok(start !== -1, `Missing section marker: ${startMarker}`);
  const end = endMarker ? page.indexOf(endMarker, start) : page.length;
  assert.ok(end === -1 || end > start, `Invalid section bounds for: ${startMarker}`);
  return page.slice(start, end === -1 ? page.length : end);
}

const servicesSlice = sectionSlice('id="servicos"', 'id="sobre"');
const aboutSlice = sectionSlice('id="sobre"', 'id="imoveis"');
const propertyTypesSlice = sectionSlice('id="imoveis"', 'src="/brand/2/bg-section-05-seguranca.jpg.png"');
const securitySlice = sectionSlice('security-backdrop', 'src="/brand/2/bg-section-06-processo.jpg.png"');
const processSlice = sectionSlice('process-backdrop', 'src="/brand/2/bg-section-07-escolha-com-calma.jpg.png"');
const choiceSlice = sectionSlice('choice-section', 'src="/brand/2/bg-section-08-compromisso-profissional.jpg.png"');
const commitmentSlice = sectionSlice('commitment-backdrop', 'id="faq"');
const faqSlice = sectionSlice('id="faq"', 'id="contato"');
const finalCtaSlice = sectionSlice('id="contato"', '<footer');
const finalCtaCardStart = finalCtaSlice.indexOf("cta-final-card");
assert.ok(finalCtaCardStart !== -1, "Final CTA card marker is missing");
const finalCtaBeforeCard = finalCtaSlice.slice(0, finalCtaCardStart);
const finalCtaCardSlice = finalCtaSlice.slice(finalCtaCardStart);
const footerSlice = sectionSlice("<footer");
const activeHeader = readFileSync(new URL("../app/active-header.tsx", import.meta.url), "utf8");

assert.ok(
  aboutSlice.includes("about-title-tuned") &&
    aboutSlice.includes("mobile-section-title") &&
    aboutSlice.includes("max-sm:!text-[1.95rem]") &&
    aboutSlice.includes("max-sm:whitespace-nowrap") &&
    aboutSlice.includes("Autoridade, escuta e") &&
    aboutSlice.includes("condu") &&
    aboutSlice.includes("decis"),
  "About title must be explicitly tuned into balanced lines",
);
assert.ok(
  aboutSlice.includes("about-copy") &&
    aboutSlice.includes("text-[1.22rem]") &&
    aboutSlice.includes("sm:text-[1.34rem]"),
  "About body copy must be larger and more legible",
);
assert.ok(
  aboutSlice.includes("about-intro-copy") &&
    aboutSlice.includes("max-w-none") &&
    aboutSlice.includes("lg:max-w-[800px]"),
  "About intro copy must use the available text column width",
);
assert.ok(
  aboutSlice.includes("about-facts") &&
    aboutSlice.includes("min-h-[108px]") &&
    aboutSlice.includes("py-5"),
  "About mini cards must be shorter while preserving readable text",
);
assert.ok(
  aboutSlice.includes("about-photo-card") &&
    aboutSlice.includes("about-name-card") &&
    aboutSlice.includes("bg-[linear-gradient(180deg,#151515_0%,#090909_100%)]"),
  "About photo/name card must use the same solid dark card language",
);

assert.ok(
  propertyTypesSlice.includes("property-types-backdrop") &&
    propertyTypesSlice.includes("property-types-bg-image") &&
    propertyTypesSlice.includes("/brand/2/bg-section-04-tipos-imoveis.jpg.png"),
  "Property types section must use the controlled section 4 background treatment",
);
assert.ok(
  !propertyTypesSlice.includes("LuxuryFocusLine"),
  "Property types section must not render the extra gold rule below the subtitle",
);
assert.ok(
  propertyTypesSlice.includes("property-type-card") &&
    propertyTypesSlice.includes("min-h-[250px]") &&
    propertyTypesSlice.includes("lg:min-h-[284px]") &&
    propertyTypesSlice.includes("px-7 py-7"),
  "Property type cards must be compact and proportional to their content",
);
assert.ok(
  propertyTypesSlice.includes("property-type-icon") &&
    propertyTypesSlice.includes("src={type.icon}") &&
    propertyTypesSlice.includes("width={48}") &&
    propertyTypesSlice.includes("height={48}") &&
    propertyTypesSlice.includes("sm:h-12 sm:w-12"),
  "Property type cards must render the golden icons at a balanced size",
);
assert.ok(
  servicesSlice.includes("services-title-mobile") &&
    servicesSlice.includes("mobile-section-title") &&
    servicesSlice.includes("max-sm:max-w-[21.5rem]") &&
    servicesSlice.includes("max-sm:!text-[2.02rem]"),
  "Services title must be tuned only on mobile to reduce excessive line breaks",
);
assert.ok(
  propertyTypesSlice.includes("property-types-title-mobile") &&
    propertyTypesSlice.includes("mobile-section-title") &&
    propertyTypesSlice.includes("max-sm:mx-auto") &&
    propertyTypesSlice.includes("max-sm:!text-[1.95rem]") &&
    propertyTypesSlice.includes("Atendimento para") &&
    propertyTypesSlice.includes("block sm:inline"),
  "Property types title must be tuned only on mobile for a balanced three-line layout",
);

assert.ok(
  securitySlice.includes("security-backdrop") &&
    securitySlice.includes("security-bg-image") &&
    securitySlice.includes("/brand/2/bg-section-05-seguranca.jpg.png"),
  "Security section must use a controlled background treatment",
);
assert.ok(
  securitySlice.includes("lg:items-start") &&
    securitySlice.includes("security-copy-panel") &&
    securitySlice.includes("lg:pt-1"),
  "Security section left copy must align higher with the first card",
);
assert.ok(
  securitySlice.includes("security-title") &&
    securitySlice.includes("mobile-section-title") &&
    securitySlice.includes("max-sm:max-w-[21.5rem]") &&
    securitySlice.includes("max-sm:!text-[1.82rem]") &&
    securitySlice.includes("max-sm:whitespace-nowrap") &&
    securitySlice.includes("<span className=\"block\">Comprar ou vender</span>") &&
    securitySlice.includes("<span className=\"block\">") &&
    securitySlice.includes("encontrar oportunidade."),
  "Security title must be split into controlled lines",
);
assert.ok(
  securitySlice.includes("security-section-copy") &&
    securitySlice.includes("lg:max-w-[620px]"),
  "Security description width must follow the tuned title block",
);
assert.ok(
  securitySlice.includes("security-value-card") &&
    securitySlice.includes("min-h-[138px]") &&
    securitySlice.includes("sm:h-[176px]") &&
    securitySlice.includes("sm:grid-cols-[86px_1px_1fr]") &&
    securitySlice.includes("sm:gap-5") &&
    securitySlice.includes("sm:p-7"),
  "Security cards must have equal compact desktop heights with the divider closer to the number",
);
assert.ok(
  securitySlice.includes("h-20 w-px"),
  "Security card divider must be closer and shorter",
);
assert.ok(
  securitySlice.includes("security-value-title") &&
    securitySlice.includes("whitespace-nowrap") &&
    securitySlice.includes("xl:text-[1.72rem]"),
  "Security card titles must stay on one line without a drastic font reduction",
);

assert.ok(
  processSlice.includes("process-backdrop") &&
    processSlice.includes("process-bg-image") &&
    processSlice.includes("/brand/2/bg-section-06-processo.jpg.png"),
  "Process section must use a controlled section 6 background treatment",
);
assert.ok(
  !processSlice.includes("LuxuryFocusLine") &&
    processSlice.includes("min-h-[310px]") &&
    processSlice.includes("md:min-h-[335px]"),
  "Process section cards must remain while the gold rule below the subtitle is removed",
);
assert.ok(
  processSlice.includes("process-bg-soft-vignette") &&
    processSlice.includes("opacity-100"),
  "Process section background must use the tuned visible reference framing",
);
assert.ok(
  processSlice.includes("process-title-mobile") &&
    processSlice.includes("mobile-section-title") &&
    processSlice.includes("max-sm:max-w-[22.5rem]") &&
    processSlice.includes("max-sm:!text-[1.82rem]") &&
    processSlice.includes("Atendimento claro,") &&
    processSlice.includes("direto e acompanhado.") &&
    processSlice.includes("block whitespace-nowrap sm:inline"),
  "Process title must use mobile-only controlled line breaks while preserving desktop flow",
);

assert.ok(
  choiceSlice.includes("choice-section") &&
    choiceSlice.includes("choice-bg-image") &&
    choiceSlice.includes("choice-card") &&
    choiceSlice.includes("choice-title") &&
    choiceSlice.includes("choice-title-mobile") &&
    choiceSlice.includes("choice-cta") &&
    !choiceSlice.includes("choice-chevron"),
  "Choice section must use the tuned reference-matching structure",
);
assert.ok(
  choiceSlice.includes("max-w-[1080px]") &&
    choiceSlice.includes("md:min-h-[650px]") &&
    choiceSlice.includes("bg-black/[0.56]") &&
    choiceSlice.includes("backdrop-blur-[2px]"),
  "Choice card must be dark translucent, proportionally smaller, and close to the reference proportions",
);
assert.ok(
  choiceSlice.includes("Seu próximo imóvel pode") &&
    choiceSlice.includes("estar mais perto do que") &&
    choiceSlice.includes("Seu próximo</span>") &&
    choiceSlice.includes("imóvel pode estar") &&
    choiceSlice.includes("mais perto do que") &&
    choiceSlice.includes("você imagina.") &&
    choiceSlice.includes("hidden sm:block") &&
    choiceSlice.includes("sm:hidden") &&
    choiceSlice.includes("max-w-[860px]") &&
    choiceSlice.includes("max-sm:max-w-[21.5rem]") &&
    choiceSlice.includes("text-[1.74rem]"),
  "Choice title must use controlled premium line breaks",
);
assert.ok(
  choiceSlice.includes("min-h-[76px]") &&
    choiceSlice.includes("sm:min-h-[88px]") &&
    choiceSlice.includes("max-w-[660px]") &&
    choiceSlice.includes("/icons/whatsapp-icon-botao-falar-whatsapp-png.png"),
  "Choice CTA must be centered, proportional to the card, and use the WhatsApp button icon",
);
assert.ok(
  !choiceSlice.includes("rgba(0,0,0,0.55)_0%") &&
    !choiceSlice.includes("rgba(0,0,0,0.48)_0%") &&
    !choiceSlice.includes("radial-gradient(ellipse_at_center,rgba(0,0,0,0.42)"),
  "Choice section must not apply a heavy black overlay across the entire background",
);

assert.ok(
  commitmentSlice.includes("commitment-backdrop") &&
    commitmentSlice.includes("commitment-bg-image") &&
    commitmentSlice.includes("/brand/2/bg-section-08-compromisso-profissional.jpg.png"),
  "Commitment section must use a controlled section 8 background treatment",
);
assert.ok(
  !commitmentSlice.includes("LuxuryFocusLine"),
  "Commitment section must remove the gold rule below the description",
);
assert.ok(
  commitmentSlice.includes("min-h-[360px]") &&
    commitmentSlice.includes("md:min-h-[360px]") &&
    commitmentSlice.includes("lg:min-h-[360px]"),
  "Commitment cards must keep equal height after adding icons",
);

assert.ok(
  faqSlice.includes("faq-backdrop") &&
    faqSlice.includes("faq-bg-image") &&
    faqSlice.includes("/brand/2/bg-section-09-faq.jpg.png"),
  "FAQ section must use a controlled reference-matching background",
);
assert.ok(
  faqSlice.includes("faq-reference-shell") &&
    faqSlice.includes("max-w-[1400px]") &&
    faqSlice.includes("lg:grid-cols-[minmax(320px,0.8fr)_minmax(0,1.45fr)]") &&
    faqSlice.includes("lg:items-start"),
  "FAQ section must use the reference outer frame and two-column proportions",
);
assert.ok(
  faqSlice.includes("faq-title") &&
    faqSlice.includes("faq-title-mobile") &&
    faqSlice.includes("text-[2.92rem]") &&
    faqSlice.includes("faq-panel") &&
    faqSlice.includes("w-full") &&
    faqSlice.includes("min-w-0") &&
    faqSlice.includes("max-w-none") &&
    faqSlice.includes("justify-self-stretch") &&
    faqSlice.includes("Perguntas") &&
    faqSlice.includes("frequentes"),
  "FAQ section must preserve the reference title hierarchy and FAQ panel",
);

assert.ok(
  finalCtaSlice.includes("cta-final-section") &&
    finalCtaSlice.includes("bg-[#020202]") &&
    finalCtaCardSlice.includes("cta-final-bg-image") &&
    finalCtaCardSlice.includes("/brand/2/bg-section-10-cta-footer.jpg.png") &&
    !finalCtaBeforeCard.includes("/brand/2/bg-section-10-cta-footer.jpg.png"),
  "Final CTA background image must live only inside the bordered card",
);
assert.ok(
  finalCtaCardSlice.includes("max-w-[1420px]") &&
    finalCtaCardSlice.includes("md:min-h-[530px]") &&
    finalCtaCardSlice.includes("border-[#D1AF66]/58") &&
    finalCtaCardSlice.includes("bg-black/[0.58]") &&
    finalCtaCardSlice.includes("backdrop-blur-[2px]"),
  "Final CTA card must be wide, reference-height, and translucent like the reference",
);
assert.ok(
  finalCtaSlice.includes("cta-final-title") &&
    finalCtaSlice.includes("cta-final-title-mobile") &&
    finalCtaSlice.includes("cta-final-mobile-content") &&
    finalCtaSlice.includes("cta-final-kicker") &&
    finalCtaSlice.includes("max-sm:gap-3") &&
    finalCtaSlice.includes("max-sm:w-8") &&
    finalCtaSlice.includes("max-sm:tracking-[0.28em]") &&
    finalCtaSlice.includes("text-[1.98rem]") &&
    finalCtaSlice.includes("block whitespace-nowrap sm:inline") &&
    finalCtaSlice.includes("cta-final-copy") &&
    finalCtaSlice.includes("cta-final-actions") &&
    finalCtaSlice.includes("cta-final-signature") &&
    !finalCtaSlice.includes("font-[family:var(--font-signature)]") &&
    finalCtaSlice.includes("Quero falar no WhatsApp") &&
    finalCtaSlice.includes("Segundo WhatsApp") &&
    finalCtaSlice.includes("Não é sobre imóveis, é sobre pessoas."),
  "Final CTA content, desktop actions, and signature phrase must keep the current reference spacing without the broken Tailwind font utility",
);
assert.ok(
  finalCtaSlice.includes("[object-position:29%_center]") &&
    !finalCtaSlice.includes("cta-final-chevron"),
  "Final CTA must frame the property on the left without rendering the lower arrow",
);
assert.ok(
  footerSlice.includes("footer-pin-mobile") &&
    footerSlice.includes("!h-6 !w-6 shrink-0 sm:!h-7 sm:!w-7"),
  "Footer location icon must match the mobile size of the other footer icons without changing desktop",
);

for (const serviceIcon of [
  "/icons/2/icon-compra-imoveis.png.png",
  "/icons/2/icon-venda-imoveis.png.png",
  "/icons/2/icon-avaliacao-imob.png.png",
  "/icons/2/icon-consultoria-imob.png.png",
  "/icons/2/icon-imoveis-resid.png.png",
  "/icons/2/icon-imoveis-comerciais.png.png",
]) {
  assert.ok(page.includes(serviceIcon), `Services section must use icon: ${serviceIcon}`);
}
assert.ok(
  servicesSlice.includes("service-card-icon") &&
    servicesSlice.includes("h-11 w-11") &&
    !servicesSlice.includes("0{index + 1}"),
  "Services cards must replace numeric labels with proportional icon images",
);
for (const [title, text] of [
  [
    "Regularização de imóvel",
    "Organização de documentos e orientação para deixar o imóvel em conformidade",
  ],
  [
    "Inventário",
    "Apoio na condução de processos envolvendo imóveis herdados",
  ],
  [
    "Usucapião",
    "Orientação para entender possibilidades de regularização por posse",
  ],
  [
    "Projeto arquitetônico",
    "Suporte para conectar o cliente a soluções de projeto",
  ],
  [
    "Financiamento",
    "Orientação para analisar possibilidades de crédito",
  ],
]) {
  assert.ok(page.includes(title), `Services data must include: ${title}`);
  assert.ok(page.includes(text), `Services data must include copy for: ${title}`);
}
for (const [title, icon] of [
  ["Regularização de imóvel", "/icons/3/icon-regularizacao-de-imoveis.png.png"],
  ["Inventário", "/icons/3/icon-inventario.png.png"],
  ["Usucapião", "/icons/3/icon-usucapiao.png.png"],
  ["Projeto arquitetônico", "/icons/3/icon-projeto-arquitetônico.png.png"],
  ["Financiamento", "/icons/3/icon-financiamento.png.png"],
]) {
  assert.ok(page.includes(`title: "${title}"`), `Services data must include title: ${title}`);
  assert.ok(page.includes(`icon: "${icon}"`), `Services data must use icon for: ${title}`);
  assert.ok(
    existsSync(new URL(`../public${icon}`, import.meta.url)),
    `Service icon file must exist: ${icon}`,
  );
}
assert.ok(
  servicesSlice.includes("md:grid-cols-2") &&
    servicesSlice.includes("lg:grid-cols-3") &&
    !servicesSlice.includes("2xl:grid-cols-4"),
  "Services grid must use three desktop columns without switching to four columns on wide screens",
);

for (const commitmentIcon of [
  "/icons/2/icon-atend-consult.png.png",
  "/icons/2/icon-comunicacao-clara.png.png",
  "/icons/2/icon-acompanhamento-completo.png.png",
]) {
  assert.ok(page.includes(commitmentIcon), `Commitment section must use icon: ${commitmentIcon}`);
}
assert.ok(
  commitmentSlice.includes("commitment-card-icon") &&
    commitmentSlice.includes("h-14 w-14") &&
    commitmentSlice.includes("sm:h-[3.75rem] sm:w-[3.75rem]") &&
    commitmentSlice.includes("min-h-[360px]") &&
    commitmentSlice.includes("lg:min-h-[360px]"),
  "Commitment cards must show centered equal icons above titles with equal card height",
);

for (const [name, slice] of [
  ["services", servicesSlice],
  ["property types", propertyTypesSlice],
  ["security", securitySlice],
  ["process", processSlice],
  ["commitment", commitmentSlice],
]) {
  assert.ok(slice.includes("card-copy"), `${name} card descriptions must use global card-copy sizing`);
}

assert.ok(
  page.includes("section-copy mt-7 text-[1.18rem]") &&
    page.includes("sm:text-[1.36rem]"),
  "Section subtitles must use the larger global section-copy scale",
);
assert.ok(
  page.includes("card-copy") &&
    page.includes("text-[1.1rem]") &&
    page.includes("sm:text-[1.2rem]"),
  "Card descriptions must use the larger global card-copy scale",
);

for (const [name, slice] of [
  ["services", servicesSlice],
  ["about", aboutSlice],
  ["property types", propertyTypesSlice],
  ["security", securitySlice],
  ["process", processSlice],
  ["commitment", commitmentSlice],
]) {
  assert.ok(!slice.includes('className="inner-asset'), `${name} cards must not render internal background images`);
}

for (const [name, slice] of [
  ["services", servicesSlice],
  ["about", aboutSlice],
  ["property types", propertyTypesSlice],
  ["commitment", commitmentSlice],
]) {
  assert.ok(!slice.includes("<LineIcon"), `${name} cards must not include line icons`);
}

const heroStart = page.indexOf('<section\n        id="inicio"');
const servicesStart = page.indexOf('<section\n        id="servicos"');
assert.ok(heroStart !== -1, "Hero section is missing");
assert.ok(servicesStart > heroStart, "Services section must remain after hero");

const heroSlice = page.slice(heroStart, servicesStart);
assert.ok(
  heroSlice.includes("/brand/hero-background.jpg.png") &&
    heroSlice.includes("/brand/foto-wanderley-sem-fundo-principal.png.png") &&
    heroSlice.includes("Negocie im") &&
    heroSlice.includes("Conhecer servi"),
  "Hero section source markers changed unexpectedly",
);

for (const marker of [
  "(79) 99662-6934",
  "(79) 99822-1426",
  "consultoriacanna06@gmail.com",
  "swanderley60@gmail.com",
  "@cannaconsultoria",
  "@wanderleydeoliveira",
  "Rua Fausto Cardoso, número 1080",
  "Capela/SE",
  "Copyright © 2026 Corretor Wanderley Oliveira | Todos os direitos reservados.",
  "Política de privacidade",
  "Termos de uso",
]) {
  assert.ok(footerSlice.includes(marker), `Footer must include: ${marker}`);
}

assert.ok(
  footerSlice.indexOf("(79) 99662-6934") < footerSlice.indexOf("(79) 99822-1426"),
  "Footer must list the main WhatsApp before the secondary WhatsApp",
);
assert.ok(
  !footerSlice.includes("Av. Augusto Franco") &&
    !footerSlice.includes("Hangar Business Park") &&
    footerSlice.includes("Endereço"),
  "Footer must remove old addresses and use the singular address title",
);
assert.ok(
  footerSlice.includes("footer-legal") &&
    footerSlice.includes('href="/politica-de-privacidade"') &&
    footerSlice.includes('href="/termos-de-uso"') &&
    !footerSlice.includes('href="#"') &&
    footerSlice.includes("md:flex-row") &&
    footerSlice.includes("md:text-left"),
  "Footer legal line must be discreet, responsive, and link to the legal pages",
);
assert.ok(
  css.includes('@font-face') &&
    css.includes('font-family: "AstonScriptBold-Bold"') &&
    css.includes('url("/fonts/Aston Script.ttf")') &&
    css.includes("font-weight: 700"),
  "Global CSS must load the Aston Script font file with @font-face",
);
assert.ok(
  css.includes('--font-signature: "AstonScriptBold-Bold"') &&
    css.includes(".cta-final-signature") &&
    css.includes("font-family: var(--font-signature);") &&
    !page.includes("font-[family:var(--font-signature)]"),
  "Aston Script must be applied only to the final CTA signature phrase through CSS",
);

assert.ok(
  aboutSlice.includes("CRECI: 5355 PF") && !aboutSlice.includes('"CRECI 5355"'),
  "About section CRECI card must show the individual registration with PF",
);
assert.ok(
  footerSlice.includes("CRECI: 519 PJ") && !footerSlice.includes("CRECI 5355"),
  "Footer CRECI must show the company registration with PJ",
);
assert.ok(
  page.includes('const primaryWhatsapp =\n  "https://wa.me/5579996626934";') &&
    activeHeader.includes('const primaryWhatsapp =\n  "https://wa.me/5579996626934";'),
  "All primary WhatsApp buttons must use the main number link exactly",
);
assert.ok(
  page.includes('const secondaryWhatsapp =\n  "https://wa.me/5579998221426";'),
  "The final CTA secondary WhatsApp button must use the secondary number link exactly",
);
