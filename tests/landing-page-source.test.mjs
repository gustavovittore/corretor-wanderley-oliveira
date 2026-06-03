import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

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
  "Fale agora com Wanderley Oliveira",
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

assert.ok(
  aboutSlice.includes("about-title-tuned") &&
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
  choiceSlice.includes("choice-section") &&
    choiceSlice.includes("choice-bg-image") &&
    choiceSlice.includes("choice-card") &&
    choiceSlice.includes("choice-title") &&
    choiceSlice.includes("choice-cta") &&
    choiceSlice.includes("choice-chevron"),
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
    choiceSlice.includes("você imagina.") &&
    choiceSlice.includes("max-w-[860px]"),
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
    finalCtaSlice.includes("cta-final-copy") &&
    finalCtaSlice.includes("cta-final-actions") &&
    finalCtaSlice.includes("Quero falar no WhatsApp") &&
    finalCtaSlice.includes("Segundo WhatsApp"),
  "Final CTA content and desktop actions must keep the current text with reference spacing",
);
assert.ok(
  finalCtaSlice.includes("[object-position:29%_center]") &&
    !finalCtaSlice.includes("cta-final-chevron"),
  "Final CTA must frame the property on the left without rendering the lower arrow",
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
