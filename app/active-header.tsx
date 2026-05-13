"use client";

import Image from "next/image";

const primaryWhatsapp =
  "https://wa.me/5579998221426?text=Ol%C3%A1,%20Wanderley.%20Quero%20receber%20atendimento%20imobili%C3%A1rio.";

const navItems = [
  { label: "Início", href: "#inicio", id: "inicio" },
  { label: "Serviços", href: "#servicos", id: "servicos" },
  { label: "Sobre", href: "#sobre", id: "sobre" },
  { label: "Imóveis", href: "#imoveis", id: "imoveis" },
  { label: "FAQ", href: "#faq", id: "faq" },
  { label: "Contato", href: "#contato", id: "contato" },
];

export function ActiveHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#D1AF66]/16 bg-black/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1540px] items-center justify-between gap-4 px-5 py-3 sm:px-10 lg:grid lg:grid-cols-[240px_1fr_240px] lg:px-16 lg:py-4">
        <a href="#inicio" className="justify-self-center lg:justify-self-start">
          <Image
            src="/brand/logotipo-wanderley.png.png"
            alt="Wanderley Oliveira Imóveis"
            width={178}
            height={62}
            priority
            className="h-auto w-28 sm:w-32 lg:w-40"
          />
        </a>
        <nav
          aria-label="Navegação principal"
          className="hidden w-full justify-self-center lg:block"
        >
          <ul className="grid grid-cols-2 place-items-center gap-x-4 gap-y-3 text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-white/82 sm:flex sm:flex-wrap sm:justify-center sm:gap-x-10 sm:text-[0.74rem] sm:tracking-[0.22em]">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group relative transition duration-300 hover:text-white"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-[#D1AF66] transition-all duration-300 group-hover:w-8 sm:-bottom-4" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={primaryWhatsapp}
          aria-label="Falar no WhatsApp"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#D1AF66]/58 bg-black/28 shadow-[0_14px_40px_rgba(0,0,0,0.32)] transition duration-300 hover:border-[#D1AF66] hover:bg-[#D1AF66]/10 lg:hidden"
        >
          <Image
            src="/icons/whatsapp-icon-rodape.png.png"
            alt=""
            width={22}
            height={22}
            aria-hidden="true"
            className="h-[1.18rem] w-[1.18rem] shrink-0 object-contain"
          />
        </a>
        <a
          href={primaryWhatsapp}
          className="hidden items-center gap-3 justify-self-end rounded-full border border-[#D1AF66]/38 px-7 py-3 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-white transition duration-300 hover:border-[#D1AF66] hover:bg-[#D1AF66]/10 lg:inline-flex"
        >
          <Image
            src="/icons/whatsapp-icon-rodape.png.png"
            alt=""
            width={22}
            height={22}
            aria-hidden="true"
            className="h-[1.15rem] w-[1.15rem] shrink-0 object-contain"
          />
          Falar no WhatsApp
        </a>
      </div>
    </header>
  );
}
