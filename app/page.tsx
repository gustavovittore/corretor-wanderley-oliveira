import Image from "next/image";
import { ActiveHeader } from "./active-header";

const primaryWhatsapp =
  "https://wa.me/5579998221426?text=Olá,%20Wanderley.%20Quero%20receber%20atendimento%20imobiliário.";
const secondaryWhatsapp =
  "https://wa.me/5579996626934?text=Olá,%20Wanderley.%20Vim%20pela%20landing%20page%20e%20gostaria%20de%20atendimento.";

const services = [
  {
    title: "Compra de imóveis",
    icon: "/icons/2/icon-compra-imoveis.png.png",
    text: "Curadoria de oportunidades, análise do perfil desejado e orientação para escolher com clareza, segurança e visão de futuro.",
  },
  {
    title: "Venda de imóveis",
    icon: "/icons/2/icon-venda-imoveis.png.png",
    text: "Apoio estratégico para posicionar melhor o imóvel, conduzir propostas e organizar cada etapa da negociação.",
  },
  {
    title: "Avaliação imobiliária",
    icon: "/icons/2/icon-avaliacao-imob.png.png",
    text: "Leitura criteriosa do imóvel e do contexto de mercado para precificar, comparar e decidir com mais confiança.",
  },
  {
    title: "Consultoria imobiliária",
    icon: "/icons/2/icon-consultoria-imob.png.png",
    text: "Direcionamento personalizado para entender possibilidades, riscos, documentação e caminhos antes de avançar.",
  },
  {
    title: "Imóveis residenciais",
    icon: "/icons/2/icon-imoveis-resid.png.png",
    text: "Atendimento para quem busca moradia, conforto, rotina e uma negociação conduzida com cuidado profissional.",
  },
  {
    title: "Imóveis comerciais",
    icon: "/icons/2/icon-imoveis-comerciais.png.png",
    text: "Suporte para identificar ou negociar espaços alinhados a operação, expansão e visão de investimento.",
  },
];

const propertyTypes = [
  {
    title: "Casas",
    icon: "/icons/casas-icon.png.png",
    text: "Espaço, privacidade e possibilidades para uma rotina mais independente.",
  },
  {
    title: "Apartamentos",
    icon: "/icons/apartamentos-icon.png.png",
    text: "Praticidade, segurança e boas alternativas para morar ou investir.",
  },
  {
    title: "Terrenos",
    icon: "/icons/terrenos-icon.png.png",
    text: "Opções para construir, ampliar patrimônio ou planejar novos projetos.",
  },
  {
    title: "Imóveis comerciais",
    icon: "/icons/imoveis-comerciais-icon.png.png",
    text: "Espaços voltados a operação, presença profissional e crescimento.",
  },
  {
    title: "Imóveis populares",
    icon: "/icons/imoveis-populares-icon.png.png",
    text: "Atendimento acessível, claro e cuidadoso para diferentes objetivos.",
  },
  {
    title: "Imóveis de alto padrão",
    icon: "/icons/imoveis-alto-padrao-icon.png.png",
    text: "Curadoria para quem valoriza localização, acabamento e exclusividade.",
  },
];

const heroHighlights = [
  {
    first: "Compra",
    second: "orientada",
    icon: "/icons/compra-orientada.png.png",
  },
  {
    first: "Venda",
    second: "estratégica",
    icon: "/icons/venda-estrategica.png.png",
  },
  {
    first: "Avaliação",
    second: "criteriosa",
    icon: "/icons/avaliacao-criteriosa.png.png",
  },
];

const valueItems = [
  {
    title: "Análise documental",
    text: "Verificação dos pontos essenciais para reduzir dúvidas antes da negociação.",
  },
  {
    title: "Orientação nas etapas",
    text: "Explicação simples de cada fase para evitar decisões apressadas.",
  },
  {
    title: "Suporte durante negociação",
    text: "Acompanhamento para alinhar expectativas, propostas e condições.",
  },
  {
    title: "Acompanhamento profissional",
    text: "Presença próxima para conduzir o processo com organização.",
  },
  {
    title: "Decisões mais seguras",
    text: "Informações melhores para comparar cenários e escolher com tranquilidade.",
  },
];

const process = [
  {
    title: "Contato via WhatsApp",
    text: "A conversa começa de forma direta para entender seu objetivo.",
  },
  {
    title: "Entendimento da necessidade",
    text: "Perfil, prazo e preferências são organizados com critério.",
  },
  {
    title: "Apresentação de opções",
    text: "As alternativas são selecionadas e explicadas com transparência.",
  },
  {
    title: "Análise e alinhamento",
    text: "Os detalhes da negociação são organizados com clareza para garantir decisões seguras e bem direcionadas.",
  },
  {
    title: "Acompanhamento da negociação",
    text: "Cada etapa recebe suporte para manter clareza e alinhamento.",
  },
  {
    title: "Finalização do processo",
    text: "O fechamento é conduzido com atenção aos detalhes.",
  },
];

const commitments = [
  {
    title: "Atendimento consultivo",
    icon: "/icons/2/icon-atend-consult.png.png",
    text: "Mais do que mostrar imóveis, o trabalho é entender contexto e orientar escolhas importantes.",
  },
  {
    title: "Comunicação clara",
    icon: "/icons/2/icon-comunicacao-clara.png.png",
    text: "Você recebe explicações objetivas para saber exatamente o que está acontecendo.",
  },
  {
    title: "Acompanhamento completo",
    icon: "/icons/2/icon-acompanhamento-completo.png.png",
    text: "Da primeira conversa aos encaminhamentos finais, cada fase é tratada com presença profissional.",
  },
];

const faqs = [
  {
    question: "Trabalha com imóveis de diferentes valores e perfis?",
    answer:
      "Sim. O atendimento contempla diferentes objetivos, desde imóveis populares e residenciais até opções comerciais e de alto padrão.",
  },
  {
    question: "Posso conversar antes de decidir comprar ou vender?",
    answer:
      "Sim. A conversa inicial ajuda a organizar dúvidas, entender possibilidades e avaliar qual caminho faz mais sentido.",
  },
  {
    question: "Como funciona a avaliação imobiliária?",
    answer:
      "A avaliação considera características do imóvel, contexto de mercado, estado de conservação e potencial de negociação.",
  },
  {
    question: "O atendimento ajuda com documentação?",
    answer:
      "Sim. O acompanhamento inclui orientação sobre pontos importantes da documentação e encaminhamentos necessários.",
  },
  {
    question: "Também atende imóveis comerciais?",
    answer:
      "Sim. Há suporte para compra, venda e intermediação de imóveis comerciais conforme a necessidade do cliente.",
  },
  {
    question: "Como saber se estou pagando ou pedindo um valor justo?",
    answer:
      "Uma análise profissional ajuda a comparar contexto, características do imóvel e condições de negociação.",
  },
  {
    question: "Qual é o primeiro passo para iniciar o atendimento?",
    answer:
      "Basta chamar no WhatsApp. A partir da conversa inicial, Wanderley entende sua necessidade e orienta os próximos passos.",
  },
];

function SectionBackdrop({
  src,
  className = "object-center",
}: {
  src: string;
  className?: string;
}) {
  return (
    <>
      <Image
        src={src}
        alt=""
        fill
        sizes="100vw"
        aria-hidden="true"
        className={`object-cover opacity-100 ${className}`}
      />
      <div className="cinema-backdrop absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.36)_34%,rgba(0,0,0,0.28)_66%,rgba(0,0,0,0.66)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.44)_0%,rgba(0,0,0,0.1)_46%,rgba(0,0,0,0.62)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_34%,rgba(0,0,0,0.34)_78%,rgba(0,0,0,0.82)_100%)]" />
    </>
  );
}

function SectionHeader({
  eyebrow,
  title,
  text,
  align = "center",
  titleClassName = "",
  sectionTextClassName = "",
}: {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
  align?: "center" | "left";
  titleClassName?: string;
  sectionTextClassName?: string;
}) {
  return (
    <div
      className={`section-heading mb-12 md:mb-16 ${
        align === "center" ? "mx-auto max-w-6xl text-center" : "max-w-4xl"
      }`}
    >
      <div
        className={`mb-7 flex items-center gap-5 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="h-[2px] w-14 bg-[#D1AF66]" />
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.42em] text-[#D1AF66] sm:text-[0.78rem]">
          {eyebrow}
        </p>
        {align === "center" ? (
          <span className="h-[2px] w-14 bg-[#D1AF66]" />
        ) : null}
      </div>
      <h2
        className={`font-serif text-[2.22rem] font-normal leading-[1.04] text-white sm:text-[3.5rem] md:text-[4.2rem] ${titleClassName}`}
      >
        {title}
      </h2>
      <span
        className={`section-rule mt-7 block h-px w-16 bg-[#D1AF66]/85 ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
      {text ? (
        <p
          className={`section-copy mt-7 text-[1.18rem] leading-9 text-white/82 sm:text-[1.36rem] sm:leading-10 ${
            align === "center" ? "mx-auto max-w-4xl" : "max-w-3xl"
          } ${sectionTextClassName}`}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}

function LineIcon({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  const paths: Record<string, React.ReactNode> = {
    home: (
      <>
        <path {...common} d="M3.5 11.5 12 4l8.5 7.5" />
        <path {...common} d="M6 10.5V20h12v-9.5" />
        <path {...common} d="M10 20v-5h4v5" />
      </>
    ),
    house: (
      <>
        <path {...common} d="M4 12 12 5l8 7" />
        <path {...common} d="M6.5 10.5V20h15V9.5" />
        <path {...common} d="M10 20v-5h4v5" />
      </>
    ),
    handshake: (
      <>
        <path {...common} d="m7 12 3-3 3 3 2-2 5 5-3 3-3-3-2 2-5-5Z" />
        <path {...common} d="m4 14 4 4" />
        <path {...common} d="m16 8 4 4" />
      </>
    ),
    search: (
      <>
        <circle {...common} cx="11" cy="11" r="6" />
        <path {...common} d="m16 16 5 5" />
      </>
    ),
    user: (
      <>
        <circle {...common} cx="12" cy="8" r="3.5" />
        <path {...common} d="M5.5 20c1.2-4 4-6 6.5-6s5.3 2 6.5 6" />
      </>
    ),
    building: (
      <>
        <path {...common} d="M5 20V6h9v14" />
        <path {...common} d="M14 10h5v10" />
        <path {...common} d="M8 9h3M8 13h3M8 17h3M17 14h1M17 17h1" />
      </>
    ),
    users: (
      <>
        <circle {...common} cx="9" cy="9" r="3" />
        <circle {...common} cx="17" cy="10" r="2.5" />
        <path {...common} d="M4 20c1-4 3.4-6 6-6 2.4 0 4.5 1.5 5.6 4" />
        <path {...common} d="M14.5 15.5c2 .3 3.6 1.7 4.5 4" />
      </>
    ),
    chat: (
      <>
        <path {...common} d="M5 6h14v9H9l-4 4V6Z" />
        <path {...common} d="M9 10h.01M12 10h.01M15 10h.01" />
      </>
    ),
    clipboard: (
      <>
        <path {...common} d="M8 5h8v3H8z" />
        <path {...common} d="M6 7H4v16h16V7h-2" />
        <path {...common} d="m8 15 2 2 5-5" />
        <path {...common} d="m8 20 2 2 6-7" />
      </>
    ),
    pin: (
      <>
        <path {...common} d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 0 1 14 0Z" />
        <circle {...common} cx="12" cy="10" r="2.5" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`h-10 w-10 text-[#D1AF66] ${className}`}
    >
      {paths[name] ?? paths.home}
    </svg>
  );
}

function GoldButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "inline-flex min-h-[62px] w-full items-center justify-center rounded px-5 py-4 text-[0.72rem] font-bold uppercase tracking-[0.14em] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#D1AF66] focus:ring-offset-2 focus:ring-offset-black sm:w-auto sm:px-10 sm:text-[0.76rem] sm:tracking-[0.16em]";

  if (variant === "secondary") {
    return (
      <a
        href={href}
        className={`${base} border border-[#D1AF66]/70 bg-black/22 text-white hover:border-[#D1AF66] hover:bg-[#D1AF66]/10`}
      >
        {children}
        <span className="text-xl leading-none text-[#D1AF66]">→</span>
      </a>
    );
  }

  return (
    <a
      href={href}
      className={`${base} border border-[#f1d48b] bg-[linear-gradient(135deg,#f4d98d,#c89b3d)] text-black shadow-[0_18px_42px_rgba(0,0,0,0.32)] hover:-translate-y-0.5 hover:brightness-105`}
    >
      <Image
        src="/icons/whatsapp-icon-botao-falar-whatsapp-png.png"
        alt=""
        width={26}
        height={26}
        aria-hidden="true"
        className="mr-3 h-6 w-6 object-contain"
      />
      {children}
    </a>
  );
}

function PremiumActionButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "premium-action inline-flex min-h-[68px] w-full items-center justify-center rounded-[7px] px-6 py-4 text-[0.78rem] font-black uppercase tracking-[0.22em] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#f5d77a] focus:ring-offset-2 focus:ring-offset-black sm:w-auto sm:min-w-[340px] sm:px-12";

  if (variant === "secondary") {
    return (
      <a
        href={href}
        className={`${base} border border-[#D1AF66]/82 bg-black/28 text-white shadow-[inset_0_0_0_1px_rgba(244,205,112,0.18),0_20px_54px_rgba(0,0,0,0.48)] hover:-translate-y-0.5 hover:bg-[#D1AF66]/8`}
      >
        {children}
        <span className="ml-3 text-xl leading-none text-[#D1AF66]">→</span>
      </a>
    );
  }

  return (
    <a
      href={href}
      className={`${base} border border-[#fff1b8] bg-[linear-gradient(135deg,#f8df8d_0%,#d8ad4c_48%,#b98222_100%)] text-black shadow-[inset_0_0_0_2px_rgba(255,246,196,0.34),0_0_18px_rgba(244,205,112,0.46),0_24px_70px_rgba(0,0,0,0.54)] hover:-translate-y-0.5 hover:brightness-110`}
    >
      <Image
        src="/icons/whatsapp-icon-botao-falar-whatsapp-png.png"
        alt=""
        width={28}
        height={28}
        aria-hidden="true"
        className="mr-4 h-7 w-7 object-contain"
      />
      {children}
    </a>
  );
}

function PremiumCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <article
      className={`solid-card luxury-card card-surface group relative overflow-hidden rounded-[14px] border border-[#D1AF66]/45 bg-[linear-gradient(180deg,#151515_0%,#090909_100%)] shadow-[0_24px_68px_rgba(0,0,0,0.48)] transition duration-300 hover:-translate-y-1 hover:border-[#D1AF66]/62 ${className}`}
    >
      {children}
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ActiveHeader />

      <section
        id="inicio"
        className="relative min-h-[104svh] overflow-hidden border-b border-[#D1AF66]/18"
      >
        <Image
          src="/brand/hero-background.jpg.png"
          alt="Imóvel sofisticado usado como fundo da landing page"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,0.94)_18%,rgba(0,0,0,0.58)_52%,rgba(0,0,0,0.42)_76%,#000_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#000_0%,rgba(0,0,0,0.44)_28%,rgba(0,0,0,0.58)_62%,#000_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.62)_74%,#000_100%)]" />
        <div className="absolute inset-y-0 right-0 w-[62%] bg-[radial-gradient(circle_at_45%_44%,rgba(209,175,102,0.13),transparent_44%)]" />

        <div className="pointer-events-none absolute bottom-0 right-[3vw] z-20 flex w-[47vw] max-w-[700px] justify-center max-lg:hidden">
          <Image
            src="/brand/foto-wanderley-sem-fundo-principal.png.png"
            alt="Wanderley Oliveira, corretor de imóveis"
            width={760}
            height={960}
            priority
            className="h-auto w-full drop-shadow-[0_38px_90px_rgba(0,0,0,0.78)]"
          />
        </div>

        <div className="relative z-30 mx-auto flex min-h-[100svh] w-full max-w-[1540px] items-end px-6 pb-12 pt-32 sm:px-10 sm:pb-16 sm:pt-44 lg:items-center lg:px-16 lg:pb-20 lg:pt-28">
          <div className="w-full min-w-0 max-w-[760px] lg:translate-y-8 xl:translate-y-10">
            <div className="mb-9 flex items-center gap-6">
              <span className="h-[2px] w-12 bg-[#D1AF66]" />
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.42em] text-[#D1AF66]">
                Consultoria imobiliária premium
              </p>
            </div>
            <h1 className="max-w-[21rem] font-serif text-[2.34rem] font-normal leading-[1.02] text-white sm:max-w-none sm:text-[4.55rem] sm:leading-[0.96] lg:text-[4.62rem] xl:text-[5rem]">
              <span className="block whitespace-nowrap">Negocie imóveis</span>
              <span className="block">
                com <span className="text-[#D1AF66]">confiança</span>
              </span>
              <span className="block">e direção.</span>
            </h1>
            <span className="mt-8 block h-[3px] w-14 bg-[#D1AF66]" />
            <p className="mt-7 max-w-[330px] text-[1.2rem] leading-9 text-white/80 sm:max-w-2xl sm:text-[1.35rem] sm:leading-10">
              Atendimento imobiliário personalizado para comprar, vender ou
              avaliar com acompanhamento profissional, leitura de mercado e
              segurança em cada decisão.
            </p>
            <div className="mt-11 flex max-w-[330px] flex-col gap-5 sm:max-w-none sm:flex-row">
              <GoldButton href={primaryWhatsapp}>Falar no WhatsApp</GoldButton>
              <GoldButton href="#servicos" variant="secondary">
                Conhecer serviços
              </GoldButton>
            </div>
            <div className="relative mx-auto mt-9 flex w-full max-w-[430px] justify-center overflow-hidden border-b border-[#D1AF66]/24 lg:hidden">
              <Image
                src="/brand/foto-wanderley-sem-fundo-principal.png.png"
                alt="Wanderley Oliveira, corretor de imóveis"
                width={760}
                height={960}
                priority
                className="h-auto w-[96%] translate-y-2 drop-shadow-[0_30px_70px_rgba(0,0,0,0.75)]"
              />
            </div>
            <div className="mt-8 grid max-w-[360px] grid-cols-1 gap-3 text-white sm:mt-14 sm:max-w-3xl sm:grid-cols-3 sm:gap-5">
              {heroHighlights.map((item, index) => (
                <div
                  key={item.first}
                  className={`flex items-center gap-4 border border-white/10 bg-white/[0.035] px-4 py-4 sm:border-y-0 sm:border-r-0 sm:border-l-0 sm:bg-transparent sm:p-0 ${
                    index > 0 ? "sm:border-l sm:border-white/18 sm:pl-8" : ""
                  }`}
                >
                  <Image
                    src={item.icon}
                    alt=""
                    width={52}
                    height={52}
                    aria-hidden="true"
                    className="h-11 w-11 shrink-0 object-contain sm:h-12 sm:w-12"
                  />
                  <p className="text-[0.78rem] font-semibold uppercase leading-6 tracking-[0.2em]">
                    {item.first}
                    <span className="block">{item.second}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="servicos"
        className="section-shell relative overflow-hidden px-6 py-32 sm:px-10 md:py-44 lg:px-16"
      >
        <SectionBackdrop
          src="/brand/2/bg-section-02-servicos.jpg.png"
          className="object-[70%_center]"
        />
        <div className="relative z-10 mx-auto max-w-[1540px]">
          <SectionHeader
            eyebrow="Serviços"
            title={
              <>
                Soluções imobiliárias com{" "}
                <span className="text-[#D1AF66]">estratégia, critério</span> e
                presença.
              </>
            }
            text="Cada atendimento parte de uma leitura real da necessidade do cliente para reduzir ruídos e conduzir negociações com mais confiança."
            align="left"
            titleClassName="max-w-5xl"
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <PremiumCard
                key={service.title}
                className="min-h-[360px] p-8 md:p-10 xl:min-h-[390px]"
              >
                <div className="relative z-10 mb-10 flex items-center justify-between">
                  <div className="flex flex-1 items-center gap-7">
                    <Image
                      src={service.icon}
                      alt=""
                      width={48}
                      height={48}
                      aria-hidden="true"
                      className="service-card-icon h-11 w-11 shrink-0 object-contain sm:h-12 sm:w-12"
                    />
                  </div>
                </div>
                <h3 className="relative z-10 font-serif text-[1.72rem] font-normal leading-tight text-white sm:text-[1.98rem]">
                  {service.title}
                </h3>
                <span className="relative z-10 mt-6 block h-[2px] w-10 bg-[#D1AF66]" />
                <p className="card-copy relative z-10 mt-6 text-[1.1rem] leading-8 text-white/82 sm:text-[1.2rem] sm:leading-9">
                  {service.text}
                </p>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      <section
        id="sobre"
        className="section-shell relative overflow-hidden px-6 py-32 sm:px-10 md:py-44 lg:px-16"
      >
        <SectionBackdrop
          src="/brand/2/bg-section-03-sobre.jpg.png"
          className="object-[62%_center]"
        />
        <div className="relative z-10 mx-auto grid max-w-[1540px] gap-14 lg:grid-cols-[0.92fr_1fr] lg:items-center xl:gap-20">
          <div>
            <SectionHeader
              eyebrow="Sobre Wanderley Oliveira"
              title={
                <>
                  <span className="block">Autoridade, escuta e</span>
                  <span className="block">condução segura para</span>
                  <span className="block text-[#D1AF66]">
                    decisões importantes.
                  </span>
                </>
              }
              text="Wanderley Oliveira atua como especialista imobiliário para quem busca orientação personalizada, análise cuidadosa e apoio completo durante a negociação."
              align="left"
              titleClassName="about-title-tuned max-w-[760px] !text-[2.08rem] sm:!text-[3rem] md:!text-[3.15rem] lg:!text-[3.25rem]"
              sectionTextClassName="about-intro-copy max-w-none lg:max-w-[800px]"
            />
            <p className="about-copy max-w-none text-[1.22rem] leading-9 text-white/82 sm:text-[1.34rem] sm:leading-10 lg:max-w-[800px]">
              Seu trabalho combina atendimento humano, postura profissional e
              clareza para transformar um processo complexo em uma jornada mais
              organizada, sem promessas exageradas e sem atalhos que comprometam
              a confiança.
            </p>
            <div className="about-facts mt-10 grid gap-4 sm:grid-cols-2">
              {[
                "CRECI 5355",
                "Atendimento personalizado",
                "Apoio na negociação",
                "Orientação documental",
              ].map((item) => (
                <PremiumCard key={item} className="min-h-[108px] px-7 py-5 md:px-8 md:py-6">
                  <div className="relative z-10 flex h-full flex-col justify-center">
                    <span className="mb-4 block h-px w-16 bg-[#D1AF66]/65" />
                    <p className="text-[0.96rem] font-bold uppercase leading-7 tracking-[0.22em] text-white sm:text-[1.02rem]">
                      {item}
                    </p>
                  </div>
                </PremiumCard>
              ))}
            </div>
          </div>

          <div className="about-photo-card relative mx-auto w-full max-w-[800px] overflow-hidden rounded-[14px] border border-[#D1AF66]/50 bg-[linear-gradient(180deg,#151515_0%,#090909_100%)] shadow-[0_28px_78px_rgba(0,0,0,0.5)] lg:mx-0 lg:min-h-[780px]">
            <div className="relative min-h-[630px] lg:min-h-[780px]">
              <Image
                src="/brand/foto-wanderley-2.jpg.png"
                alt="Retrato profissional de Wanderley Oliveira"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover object-[50%_18%]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_52%,rgba(0,0,0,0.82)_100%)]" />
            </div>
            <div className="about-name-card absolute bottom-8 left-8 right-8 rounded-[12px] border border-[#D1AF66]/45 bg-[linear-gradient(180deg,#151515_0%,#090909_100%)] px-6 py-7 text-center shadow-[0_22px_58px_rgba(0,0,0,0.48)]">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.34em] text-[#D1AF66]">
                Corretor de imóveis
              </p>
              <span className="mx-auto mt-5 block h-px w-24 bg-[#D1AF66]/60" />
              <p className="mt-5 font-serif text-[2.05rem] leading-none text-white sm:text-[2.55rem]">
                Wanderley Oliveira
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="imoveis"
        className="section-shell relative overflow-hidden px-6 py-32 sm:px-10 md:py-44 lg:px-16"
      >
        <div
          className="property-types-backdrop absolute inset-0 bg-[#020202]"
          aria-hidden="true"
        >
          <Image
            src="/brand/2/bg-section-04-tipos-imoveis.jpg.png"
            alt=""
            fill
            sizes="100vw"
            className="property-types-bg-image opacity-95"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.22)_36%,rgba(0,0,0,0.25)_64%,rgba(0,0,0,0.55)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.42)_0%,rgba(0,0,0,0.18)_42%,rgba(0,0,0,0.66)_100%)]" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1540px]">
          <SectionHeader
            eyebrow="Tipos de imóveis"
            title={
              <>
                Atendimento para <span className="text-[#D1AF66]">diferentes</span>{" "}
                perfis, objetivos e{" "}
                <span className="text-[#D1AF66]">momentos.</span>
              </>
            }
            text="Uma experiência premium não precisa ser distante. O atendimento é claro, acessível e preparado para realidades diversas."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {propertyTypes.map((type) => (
              <article
                key={type.title}
                className="property-type-card solid-card card-surface relative min-h-[250px] overflow-hidden rounded-[10px] border border-[#D1AF66]/48 bg-[#101010] px-7 py-7 shadow-[0_16px_42px_rgba(0,0,0,0.42)] sm:min-h-[262px] sm:px-8 sm:py-8 lg:min-h-[284px]"
              >
                <div className="relative z-10 flex h-full flex-col items-start">
                  <Image
                    src={type.icon}
                    alt=""
                    width={48}
                    height={48}
                    aria-hidden="true"
                    className="property-type-icon h-11 w-11 shrink-0 object-contain sm:h-12 sm:w-12"
                  />
                  <span className="mt-5 block h-px w-16 bg-[#D1AF66]/70" />
                  <h3 className="mt-5 font-serif text-[1.62rem] font-normal leading-tight text-white sm:text-[1.86rem]">
                    {type.title}
                  </h3>
                  <p className="card-copy mt-4 max-w-md text-[1.1rem] leading-8 text-white/82 sm:text-[1.2rem] sm:leading-9">
                    {type.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell relative overflow-hidden px-6 py-32 sm:px-10 md:py-44 lg:px-16">
        <div
          className="security-backdrop absolute inset-0 bg-[#020202]"
          aria-hidden="true"
        >
          <Image
            src="/brand/2/bg-section-05-seguranca.jpg.png"
            alt=""
            fill
            sizes="100vw"
            className="security-bg-image opacity-95"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.28)_0%,rgba(0,0,0,0.5)_46%,rgba(0,0,0,0.78)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.2)_48%,rgba(0,0,0,0.44)_100%)]" />
        </div>
        <div className="relative z-10 mx-auto grid max-w-[1540px] gap-12 lg:grid-cols-2 lg:items-start xl:gap-16">
          <div className="security-copy-panel lg:pt-1">
            <SectionHeader
              eyebrow="Segurança e valor"
              title={
                <>
                  <span className="block">Comprar ou vender</span>
                  <span className="block">
                    exige{" "}
                    <span className="font-serif italic text-[#D1AF66]">
                      mais
                    </span>{" "}
                    que
                  </span>
                  <span className="block">encontrar oportunidade.</span>
                </>
              }
              text="Um processo imobiliário bem conduzido depende de método, leitura, documentação, negociação e acompanhamento atento."
              align="left"
              titleClassName="security-title max-w-[660px] max-sm:!text-[1.9rem] max-sm:leading-[1.08] sm:!text-[3.18rem] md:!text-[3.52rem] lg:!text-[3.55rem]"
              sectionTextClassName="security-section-copy lg:max-w-[620px]"
            />
          </div>
          <div className="grid gap-5">
            {valueItems.map((item, index) => (
              <PremiumCard
                key={item.title}
                className="security-value-card min-h-[138px] p-6 sm:grid sm:h-[176px] sm:grid-cols-[86px_1px_1fr] sm:items-center sm:gap-5 sm:p-7"
              >
                <span className="relative z-10 font-serif text-[2.55rem] text-[#D1AF66] sm:text-[3.3rem]">
                  0{index + 1}
                </span>
                <span className="relative z-10 hidden h-20 w-px bg-[#D1AF66]/58 sm:block" />
                <div className="relative z-10 mt-4 sm:mt-0">
                  <h3 className="security-value-title whitespace-nowrap font-serif text-[1.5rem] font-normal text-white sm:text-[1.62rem] xl:text-[1.72rem]">
                    {item.title}
                  </h3>
                  <p className="card-copy mt-3 text-[1.1rem] leading-8 text-white/82 sm:text-[1.2rem] sm:leading-9">
                    {item.text}
                  </p>
                </div>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell relative overflow-hidden px-6 py-32 sm:px-10 md:py-44 lg:px-16">
        <div
          className="process-backdrop absolute inset-0 bg-[#020202]"
          aria-hidden="true"
        >
          <Image
            src="/brand/2/bg-section-06-processo.jpg.png"
            alt=""
            fill
            sizes="100vw"
            className="process-bg-image opacity-100"
          />
          <div className="process-bg-soft-vignette absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.22)_0%,rgba(0,0,0,0.1)_30%,rgba(0,0,0,0.2)_68%,rgba(0,0,0,0.46)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.34)_0%,rgba(0,0,0,0.05)_44%,rgba(0,0,0,0.46)_100%)]" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1540px]">
          <SectionHeader
            eyebrow="Processo"
            title="Atendimento claro, direto e acompanhado."
            text="Uma jornada organizada ajuda você a entender o que acontece em cada fase e a tomar decisões com mais tranquilidade."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {process.map((step, index) => (
              <PremiumCard key={step.title} className="min-h-[310px] p-8 md:min-h-[335px] md:p-10">
                <div className="relative z-10 mb-14 flex items-center justify-between">
                  <span className="text-[0.8rem] font-bold uppercase tracking-[0.28em] text-[#D1AF66]">
                    Etapa {index + 1}
                  </span>
                  <span className="h-px w-14 bg-[#D1AF66]/72" />
                </div>
                <h3 className="relative z-10 font-serif text-[1.55rem] font-normal leading-tight text-white sm:text-[1.85rem]">
                  {step.title}
                </h3>
                <p className="card-copy relative z-10 mt-5 text-[1.1rem] leading-8 text-white/82 sm:text-[1.2rem] sm:leading-9">
                  {step.text}
                </p>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      <section className="choice-section section-shell relative flex min-h-[820px] items-center overflow-hidden px-5 py-20 sm:min-h-[900px] sm:px-10 md:min-h-[960px] md:py-22 lg:px-16">
        <Image
          src="/brand/2/bg-section-07-escolha-com-calma.jpg.png"
          alt=""
          fill
          sizes="100vw"
          aria-hidden="true"
          className="choice-bg-image object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.14)_0%,rgba(0,0,0,0)_22%,rgba(0,0,0,0)_78%,rgba(0,0,0,0.1)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0)_30%,rgba(0,0,0,0)_70%,rgba(0,0,0,0.24)_100%)]" />

        <div className="relative z-10 mx-auto w-full max-w-[1090px]">
          <div className="choice-card solid-card relative mx-auto flex min-h-[560px] w-full max-w-[1080px] flex-col items-center justify-center overflow-hidden rounded-[18px] border border-[#f3cd71]/72 bg-black/[0.56] px-5 py-11 text-center shadow-[0_30px_90px_rgba(0,0,0,0.58)] backdrop-blur-[2px] sm:min-h-[610px] sm:px-12 sm:py-14 md:min-h-[650px] md:px-18 lg:px-22">
            <div className="mb-7 flex w-full items-center justify-center gap-5 sm:mb-9 sm:gap-8">
              <span className="h-[2px] w-12 bg-[#f3cd71] sm:w-[74px]" />
              <p className="text-[0.72rem] font-black uppercase tracking-[0.42em] text-[#f3cd71] sm:text-[0.9rem] sm:tracking-[0.5em]">
                Escolha com calma
              </p>
              <span className="h-[2px] w-12 bg-[#f3cd71] sm:w-[74px]" />
            </div>

            <h2 className="choice-title mx-auto max-w-[860px] font-serif text-[2.45rem] font-normal leading-[1.04] text-white sm:text-[4.2rem] md:text-[4.65rem]">
              <span className="block">Seu próximo imóvel pode</span>
              <span className="block">estar mais perto do que</span>
              <span className="block">você imagina.</span>
            </h2>

            <span className="mt-7 block h-[2px] w-16 bg-[#f3cd71] sm:mt-8" />

            <p className="mx-auto mt-7 max-w-[780px] text-[1.04rem] leading-8 text-white/86 sm:text-[1.24rem] sm:leading-9">
              Com orientação profissional, fica mais simples transformar
              dúvida em direção e comparar oportunidades com mais segurança.
            </p>

            <a
              href={primaryWhatsapp}
              className="choice-cta mt-10 inline-flex min-h-[76px] w-full max-w-[660px] items-center justify-center rounded-[10px] border border-[#fff0b7] bg-[linear-gradient(135deg,#ffe58f_0%,#d7a942_48%,#b87f1f_100%)] px-4 py-4 text-[0.66rem] font-black uppercase tracking-[0.18em] text-black shadow-[inset_0_0_0_3px_rgba(255,247,200,0.34),0_0_14px_rgba(244,205,112,0.28),0_18px_48px_rgba(0,0,0,0.5)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110 sm:min-h-[88px] sm:px-10 sm:text-[0.82rem] sm:tracking-[0.22em]"
            >
              <Image
                src="/icons/whatsapp-icon-botao-falar-whatsapp-png.png"
                alt=""
                width={34}
                height={34}
                aria-hidden="true"
                className="mr-3 h-8 w-8 shrink-0 object-contain sm:mr-5 sm:h-9 sm:w-9"
              />
              <span>Receber atendimento personalizado</span>
            </a>
          </div>

          <div className="choice-chevron mt-10 flex justify-center text-[#f3cd71]" aria-hidden="true">
            <svg
              viewBox="0 0 44 44"
              className="h-12 w-12 drop-shadow-[0_0_12px_rgba(244,205,112,0.36)]"
            >
              <path
                d="M10 14l12 12 12-12"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
              />
              <path
                d="M14 25l8 8 8-8"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
              />
            </svg>
          </div>
        </div>
      </section>

      <section className="section-shell relative overflow-hidden px-6 py-32 sm:px-10 md:py-44 lg:px-16">
        <div
          className="commitment-backdrop absolute inset-0 bg-[#020202]"
          aria-hidden="true"
        >
          <Image
            src="/brand/2/bg-section-08-compromisso-profissional.jpg.png"
            alt=""
            fill
            sizes="100vw"
            className="commitment-bg-image opacity-100"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0.2)_38%,rgba(0,0,0,0.3)_72%,rgba(0,0,0,0.46)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.36)_0%,rgba(0,0,0,0.06)_42%,rgba(0,0,0,0.52)_100%)]" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1540px]">
          <SectionHeader
            eyebrow="Compromisso profissional"
            title={
              <>
                Uma experiência feita para gerar confiança{" "}
                <span className="font-serif italic text-[#D1AF66]">
                  antes, durante e depois.
                </span>
              </>
            }
            text="O valor de um bom acompanhamento aparece nos detalhes: escuta, organização, transparência e presença quando a decisão importa."
            titleClassName="mx-auto max-w-6xl"
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {commitments.map((item) => (
              <PremiumCard
                key={item.title}
                className="min-h-[360px] p-8 text-center md:min-h-[360px] md:p-10 lg:min-h-[360px]"
              >
                <Image
                  src={item.icon}
                  alt=""
                  width={48}
                  height={48}
                  aria-hidden="true"
                  className="commitment-card-icon relative z-10 mx-auto mb-7 h-14 w-14 object-contain sm:h-[3.75rem] sm:w-[3.75rem]"
                />
                <h3 className="relative z-10 mx-auto max-w-[280px] font-serif text-[1.85rem] font-normal leading-tight text-white sm:text-[2rem]">
                  {item.title}
                </h3>
                <p className="card-copy relative z-10 mx-auto mt-7 max-w-[340px] text-[1.1rem] leading-8 text-white/82 sm:text-[1.2rem] sm:leading-9">
                  {item.text}
                </p>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="section-shell relative overflow-hidden px-6 py-28 sm:px-10 md:py-40 lg:px-16"
      >
        <div className="faq-backdrop absolute inset-0 bg-[#020202]" aria-hidden="true">
          <Image
            src="/brand/2/bg-section-09-faq.jpg.png"
            alt=""
            fill
            sizes="100vw"
            className="faq-bg-image opacity-100"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.06)_0%,rgba(0,0,0,0.12)_42%,rgba(0,0,0,0.1)_76%,rgba(0,0,0,0.18)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0)_42%,rgba(0,0,0,0.28)_100%)]" />
        </div>
        <div className="faq-reference-shell relative z-10 mx-auto max-w-[1400px] rounded-[12px] border border-[#D1AF66]/58 bg-black/[0.58] px-6 py-10 shadow-[0_28px_92px_rgba(0,0,0,0.58)] backdrop-blur-[2px] sm:px-10 sm:py-12 md:px-14 lg:min-h-[820px] lg:px-16 lg:py-14">
          <div className="grid h-full gap-12 lg:grid-cols-[minmax(320px,0.8fr)_minmax(0,1.45fr)] lg:items-start lg:gap-12">
            <div className="faq-copy lg:pl-1 lg:pt-10">
              <div className="mb-8 flex items-center gap-5">
                <span className="h-[2px] w-10 bg-[#D1AF66]" />
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.42em] text-[#D1AF66]">
                  FAQ
                </p>
              </div>
              <h2 className="faq-title max-w-[420px] font-serif text-[3.15rem] font-normal leading-[1.02] text-white sm:text-[4.6rem] lg:text-[5rem]">
                <span className="block">Perguntas</span>
                <span className="block">frequentes</span>
              </h2>
              <span className="mt-9 block h-px w-48 max-w-full bg-[#D1AF66]/62" />
              <p className="mt-9 max-w-[360px] text-[1.14rem] leading-9 text-white/82 sm:text-[1.2rem]">
                Respostas diretas para dúvidas comuns antes de iniciar uma
                conversa sobre compra, venda ou avaliação.
              </p>
            </div>
            <div className="faq-panel w-full min-w-0 max-w-none justify-self-stretch rounded-[8px] border border-[#D1AF66]/42 bg-black/[0.32] px-5 shadow-[0_20px_62px_rgba(0,0,0,0.45)] sm:px-7 lg:px-8">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group border-b border-[#D1AF66]/26 py-6 last:border-b-0 sm:py-7"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-8 text-left font-serif text-[1.22rem] font-normal leading-tight text-white sm:text-[1.48rem]">
                    {faq.question}
                    <span className="shrink-0 text-[2.1rem] font-light leading-none text-[#D1AF66] transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-5 max-w-4xl text-[1.1rem] leading-8 text-white/76 sm:text-[1.2rem] sm:leading-9">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="contato"
        className="cta-final-section relative overflow-hidden bg-[#020202] px-5 pb-10 pt-16 sm:px-10 md:pb-14 md:pt-20 lg:px-16"
      >
        <div className="cta-final-card solid-card relative z-10 mx-auto flex min-h-[500px] max-w-[1420px] flex-col items-center justify-center overflow-hidden rounded-[16px] border border-[#D1AF66]/58 bg-black/[0.58] px-6 py-14 text-center shadow-[0_30px_96px_rgba(0,0,0,0.6)] backdrop-blur-[2px] sm:px-12 md:min-h-[530px] md:px-16 md:py-16 lg:px-20">
          <Image
            src="/brand/2/bg-section-10-cta-footer.jpg.png"
            alt=""
            fill
            sizes="100vw"
            aria-hidden="true"
            className="cta-final-bg-image object-cover [object-position:29%_center] opacity-100"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.16)_0%,rgba(0,0,0,0.12)_35%,rgba(0,0,0,0.34)_63%,rgba(0,0,0,0.82)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.36)_0%,rgba(0,0,0,0.04)_42%,rgba(0,0,0,0.76)_100%)]" />
          <div className="relative z-10 mx-auto mb-9 max-w-[1180px] md:mb-11">
            <div className="mb-7 flex items-center justify-center gap-6">
              <span className="h-[2px] w-14 bg-[#D1AF66]" />
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.42em] text-[#D1AF66] sm:text-[0.78rem]">
                Atendimento direto
              </p>
              <span className="h-[2px] w-14 bg-[#D1AF66]" />
            </div>
            <h2 className="cta-final-title mx-auto max-w-[1180px] font-serif text-[2.55rem] font-normal leading-[1.04] text-white sm:text-[4.1rem] md:text-[4.2rem] lg:text-[4.35rem]">
              Fale agora com Wanderley Oliveira
            </h2>
            <p className="cta-final-copy mx-auto mt-8 max-w-[840px] text-[1.08rem] leading-8 text-white/82 sm:text-[1.28rem] sm:leading-10">
              Tire dúvidas, solicite atendimento ou converse sobre compra, venda
              ou avaliação de imóvel com acompanhamento profissional.
            </p>
          </div>
          <div className="cta-final-actions relative z-10 flex w-full flex-col justify-center gap-5 sm:w-auto sm:flex-row">
            <PremiumActionButton href={primaryWhatsapp}>
              Quero falar no WhatsApp
            </PremiumActionButton>
            <PremiumActionButton href={secondaryWhatsapp} variant="secondary">
              Segundo WhatsApp
            </PremiumActionButton>
          </div>
        </div>
      </section>

      <footer className="relative border-t border-[#D1AF66]/30 bg-[#020202] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1540px] gap-12 md:grid-cols-[1fr_1px_0.95fr_1px_1.15fr] lg:gap-16">
          <div>
            <Image
              src="/brand/logotipo-wanderley.png.png"
              alt="Wanderley Oliveira Imóveis"
              width={178}
              height={62}
              className="h-auto w-44"
            />
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#D1AF66]">
              CRECI 5355
            </p>
            <p className="mt-5 max-w-md leading-8 text-white/58">
              Corretor de imóveis com atendimento para compra, venda, avaliação
              e intermediação imobiliária.
            </p>
          </div>
          <span className="hidden h-full w-px bg-[#D1AF66]/38 md:block" />
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#D1AF66]">
              Contatos
            </p>
            <div className="space-y-3 text-[0.98rem] leading-7 text-white/72">
              <p className="flex items-center gap-3.5">
                <Image
                  src="/icons/whatsapp-icon-rodape.png.png"
                  alt=""
                  width={24}
                  height={24}
                  aria-hidden="true"
                  className="h-6 w-6 shrink-0 object-contain"
                />
                <span>(79) 99822-1426</span>
              </p>
              <p className="flex items-center gap-3.5">
                <Image
                  src="/icons/whatsapp-icon-rodape.png.png"
                  alt=""
                  width={24}
                  height={24}
                  aria-hidden="true"
                  className="h-6 w-6 shrink-0 object-contain"
                />
                <span>(79) 99662-6934</span>
              </p>
              <p className="flex items-center gap-3.5">
                <Image
                  src="/icons/email-icon-rodape.png.png"
                  alt=""
                  width={24}
                  height={24}
                  aria-hidden="true"
                  className="h-6 w-6 shrink-0 object-contain"
                />
                <span>swanderley60@gmail.com</span>
              </p>
              <p className="flex items-center gap-3.5">
                <Image
                  src="/icons/instagram-icon-rodape.png.png"
                  alt=""
                  width={24}
                  height={24}
                  aria-hidden="true"
                  className="h-6 w-6 shrink-0 object-contain"
                />
                <span>@canna77_</span>
              </p>
            </div>
          </div>
          <span className="hidden h-full w-px bg-[#D1AF66]/38 md:block" />
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#D1AF66]">
              Endereços
            </p>
            <div className="footer-map space-y-6 text-[0.98rem] leading-7 text-white/72">
              <p className="flex gap-4">
                <LineIcon name="pin" className="h-7 w-7 shrink-0" />
                <span>
                Av. Augusto Franco, 2980 - Porto Novo - Aracaju-SE
                </span>
              </p>
              <p className="flex gap-4">
                <LineIcon name="pin" className="h-7 w-7 shrink-0" />
                <span>
                Av. Luíz Viana Filho, nº 13223, Hangar Business Park, Torre 2,
                Sala 228, São Cristóvão, Salvador-BA CEP 41500-300
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
