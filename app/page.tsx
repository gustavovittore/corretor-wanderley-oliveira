import Image from "next/image";
import { ActiveHeader } from "./active-header";

const primaryWhatsapp =
  "https://wa.me/5579998221426?text=Olá,%20Wanderley.%20Quero%20receber%20atendimento%20imobiliário.";
const secondaryWhatsapp =
  "https://wa.me/5579996626934?text=Olá,%20Wanderley.%20Vim%20pela%20landing%20page%20e%20gostaria%20de%20atendimento.";

const services = [
  {
    title: "Compra de imóveis",
    text: "Curadoria de oportunidades, análise do perfil desejado e orientação para escolher com clareza, segurança e visão de futuro.",
  },
  {
    title: "Venda de imóveis",
    text: "Apoio estratégico para posicionar melhor o imóvel, conduzir propostas e organizar cada etapa da negociação.",
  },
  {
    title: "Avaliação imobiliária",
    text: "Leitura criteriosa do imóvel e do contexto de mercado para precificar, comparar e decidir com mais confiança.",
  },
  {
    title: "Consultoria imobiliária",
    text: "Direcionamento personalizado para entender possibilidades, riscos, documentação e caminhos antes de avançar.",
  },
  {
    title: "Imóveis residenciais",
    text: "Atendimento para quem busca moradia, conforto, rotina e uma negociação conduzida com cuidado profissional.",
  },
  {
    title: "Imóveis comerciais",
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
    text: "Mais do que mostrar imóveis, o trabalho é entender contexto e orientar escolhas importantes.",
  },
  {
    title: "Comunicação clara",
    text: "Você recebe explicações objetivas para saber exatamente o que está acontecendo.",
  },
  {
    title: "Acompanhamento completo",
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

function SectionHeader({
  eyebrow,
  title,
  text,
  align = "center",
  titleClassName = "",
}: {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
  align?: "center" | "left";
  titleClassName?: string;
}) {
  return (
    <div
      className={`mb-14 md:mb-20 ${
        align === "center" ? "mx-auto max-w-5xl text-center" : "max-w-4xl"
      }`}
    >
      <div
        className={`mb-6 flex items-center gap-5 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="h-[2px] w-11 bg-[#D1AF66]" />
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.36em] text-[#D1AF66]">
          {eyebrow}
        </p>
        {align === "center" ? (
          <span className="h-[2px] w-11 bg-[#D1AF66]" />
        ) : null}
      </div>
      <h2
        className={`font-serif text-[1.92rem] font-normal leading-[1.08] text-white sm:text-[2.7rem] md:text-[3.02rem] ${titleClassName}`}
      >
        {title}
      </h2>
      {text ? (
        <p
          className={`mt-7 text-[1.14rem] leading-9 text-white/76 sm:text-[1.36rem] sm:leading-10 ${
            align === "center" ? "mx-auto max-w-3xl" : "max-w-3xl"
          }`}
        >
          {text}
        </p>
      ) : null}
    </div>
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
      className={`${base} border border-[#f1d48b] bg-[linear-gradient(135deg,#f4d98d,#c89b3d)] text-black shadow-[0_22px_80px_rgba(209,175,102,0.24)] hover:-translate-y-0.5 hover:shadow-[0_28px_90px_rgba(209,175,102,0.32)]`}
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

function PremiumCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <article
      className={`group relative overflow-hidden border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.075),rgba(255,255,255,0.018))] shadow-[0_30px_90px_rgba(0,0,0,0.32)] transition duration-300 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#D1AF66]/60 before:to-transparent hover:-translate-y-1 hover:border-[#D1AF66]/55 ${className}`}
    >
      {children}
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
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
        className="relative bg-[#030303] px-6 py-32 sm:px-10 md:py-44 lg:px-16"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(209,175,102,0.12),transparent_32%)]" />
        <div className="relative mx-auto max-w-[1540px]">
          <SectionHeader
            eyebrow="Serviços"
            title="Soluções imobiliárias com estratégia, critério e presença."
            text="Cada atendimento parte de uma leitura real da necessidade do cliente para reduzir ruídos e conduzir negociações com mais confiança."
            align="left"
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <PremiumCard key={service.title} className="min-h-[310px] p-8 md:p-9">
                <div className="mb-10 flex items-center justify-between">
                  <span className="font-serif text-[1.28rem] text-[#D1AF66]/90">
                    0{index + 1}
                  </span>
                  <span className="h-px w-14 bg-[#D1AF66]/60 transition group-hover:w-20" />
                </div>
                <h3 className="font-serif text-[1.38rem] font-normal leading-tight text-white sm:text-[1.56rem]">
                  {service.title}
                </h3>
                <p className="mt-6 text-[1.14rem] leading-9 text-white/76 sm:text-[1.18rem] sm:leading-10">
                  {service.text}
                </p>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="relative px-6 py-28 sm:px-10 md:py-40 lg:px-16">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#000,#050505_45%,#000)]" />
        <div className="relative mx-auto grid max-w-[1540px] gap-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Sobre Wanderley Oliveira"
              title="Autoridade, escuta e condução segura para decisões importantes."
              text="Wanderley Oliveira atua como especialista imobiliário para quem busca orientação personalizada, análise cuidadosa e apoio completo durante a negociação."
              align="left"
            />
            <p className="max-w-3xl text-[1.12rem] leading-9 text-white/76 sm:text-[1.3rem] sm:leading-10">
              Seu trabalho combina atendimento humano, postura profissional e
              clareza para transformar um processo complexo em uma jornada mais
              organizada, sem promessas exageradas e sem atalhos que comprometam
              a confiança.
            </p>
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {["CRECI 5355", "Atendimento personalizado", "Apoio na negociação", "Orientação documental"].map(
                (item) => (
                  <div
                    key={item}
                    className="border border-white/10 bg-white/[0.035] px-6 py-6"
                  >
                    <span className="mb-5 block h-px w-12 bg-[#D1AF66]" />
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
                      {item}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="relative min-h-[480px] overflow-hidden border border-[#D1AF66]/24 bg-[#080808] shadow-[0_40px_120px_rgba(0,0,0,0.45)] lg:min-h-[600px]">
            <Image
              src="/brand/foto-wanderley-2.jpg.png"
              alt="Retrato profissional de Wanderley Oliveira"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_38%,rgba(0,0,0,0.92)_100%)]" />
            <div className="absolute bottom-7 left-7 right-7 border border-white/10 bg-black/72 p-7 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D1AF66]">
                Corretor de Imóveis
              </p>
              <p className="mt-3 font-serif text-3xl text-white">
                Wanderley Oliveira
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="imoveis"
        className="relative bg-[#030303] px-6 py-28 sm:px-10 md:py-40 lg:px-16"
      >
        <div className="relative mx-auto max-w-[1540px]">
          <SectionHeader
            eyebrow="Tipos de imóveis"
            title="Atendimento para diferentes perfis, objetivos e momentos."
            text="Uma experiência premium não precisa ser distante. O atendimento é claro, acessível e preparado para realidades diversas."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {propertyTypes.map((type) => (
              <PremiumCard key={type.title} className="min-h-[240px] p-8">
                <span className="mb-9 block h-px w-14 bg-[#D1AF66]" />
                <div className="flex items-center gap-5">
                  <Image
                    src={type.icon}
                    alt=""
                    width={58}
                    height={58}
                    aria-hidden="true"
                    className="h-[3.25rem] w-[3.25rem] shrink-0 object-contain sm:h-14 sm:w-14"
                  />
                  <h3 className="font-serif text-[1.36rem] font-normal text-white sm:text-[1.54rem]">
                    {type.title}
                  </h3>
                </div>
                <p className="mt-5 text-[1.14rem] leading-9 text-white/76 sm:text-[1.18rem] sm:leading-10">
                  {type.text}
                </p>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-28 sm:px-10 md:py-40 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_20%,rgba(209,175,102,0.12),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-[1540px] gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <SectionHeader
              eyebrow="Segurança e valor"
              title={"Comprar ou vender exige mais que encontrar\u00A0oportunidade."}
              text="Um processo imobiliário bem conduzido depende de método, leitura, documentação, negociação e acompanhamento atento."
              align="left"
            />
          </div>
          <div className="grid gap-5">
            {valueItems.map((item, index) => (
              <PremiumCard
                key={item.title}
                className="grid gap-4 p-6 sm:grid-cols-[82px_1fr] sm:p-7"
              >
                <span className="font-serif text-4xl text-[#D1AF66]">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="font-serif text-[1.34rem] font-normal text-white sm:text-[1.52rem]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[1.14rem] leading-9 text-white/76 sm:text-[1.18rem] sm:leading-10">
                    {item.text}
                  </p>
                </div>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#030303] px-6 py-28 sm:px-10 md:py-40 lg:px-16">
        <div className="mx-auto max-w-[1540px]">
          <SectionHeader
            eyebrow="Processo"
            title="Atendimento claro, direto e acompanhado."
            text="Uma jornada organizada ajuda você a entender o que acontece em cada fase e a tomar decisões com mais tranquilidade."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {process.map((step, index) => (
              <PremiumCard key={step.title} className="min-h-[250px] p-8">
                <div className="mb-10 flex items-center justify-between">
                  <span className="text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-[#D1AF66]">
                    Etapa {index + 1}
                  </span>
                  <span className="h-px w-12 bg-[#D1AF66]/50" />
                </div>
                <h3 className="font-serif text-[1.34rem] font-normal leading-tight text-white sm:text-[1.52rem]">
                  {step.title}
                </h3>
                <p className="mt-5 text-[1.14rem] leading-9 text-white/76 sm:text-[1.18rem] sm:leading-10">
                  {step.text}
                </p>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-32 sm:px-10 md:py-48 lg:px-16">
        <Image
          src="/brand/luxury-property.jpg.png"
          alt="Imóvel contemporâneo em destaque"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/76" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(209,175,102,0.2),transparent_43%)]" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
          <SectionHeader
            eyebrow="Escolha com calma"
            title="Seu próximo imóvel pode estar mais perto do que você imagina."
            text="Com orientação profissional, fica mais simples transformar dúvida em direção e comparar oportunidades com mais segurança."
          />
          <GoldButton href={primaryWhatsapp}>
            Receber atendimento personalizado
          </GoldButton>
        </div>
      </section>

      <section className="relative px-6 py-28 sm:px-10 md:py-40 lg:px-16">
        <div className="relative mx-auto max-w-[1540px]">
          <SectionHeader
            eyebrow="Compromisso profissional"
            title="Uma experiência feita para gerar confiança antes, durante e depois."
            text="O valor de um bom acompanhamento aparece nos detalhes: escuta, organização, transparência e presença quando a decisão importa."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {commitments.map((item) => (
              <PremiumCard key={item.title} className="p-8">
                <span className="mb-10 block h-px w-14 bg-[#D1AF66]" />
                <h3 className="font-serif text-[1.36rem] font-normal text-white sm:text-[1.54rem]">
                  {item.title}
                </h3>
                <p className="mt-6 text-[1.14rem] leading-9 text-white/76 sm:text-[1.18rem] sm:leading-10">
                  {item.text}
                </p>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-[#030303] px-6 py-28 sm:px-10 md:py-40 lg:px-16">
        <div className="mx-auto grid max-w-[1540px] gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <SectionHeader
            eyebrow="FAQ"
            title="Perguntas frequentes"
            text="Respostas diretas para dúvidas comuns antes de iniciar uma conversa sobre compra, venda ou avaliação."
            align="left"
          />
          <div className="divide-y divide-white/10 border-y border-[#D1AF66]/22">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-8">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-8 text-left font-serif text-[1.32rem] leading-tight text-white sm:text-[1.58rem]">
                  {faq.question}
                  <span className="shrink-0 text-3xl font-light text-[#D1AF66] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-6 max-w-4xl text-[1.14rem] leading-9 text-white/76 sm:text-[1.22rem] sm:leading-10">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="px-6 py-28 sm:px-10 md:py-40 lg:px-16">
        <div className="mx-auto max-w-6xl border border-[#D1AF66]/32 bg-[linear-gradient(135deg,rgba(209,175,102,0.18),rgba(255,255,255,0.028))] px-7 py-16 text-center shadow-[0_40px_120px_rgba(0,0,0,0.45)] sm:px-12 md:py-24">
          <SectionHeader
            eyebrow="Atendimento direto"
            title={
              <>
                Fale agora com{" "}
                <span className="block sm:inline">Wanderley Oliveira</span>
              </>
            }
            titleClassName="max-sm:mx-auto max-sm:max-w-[20rem] max-sm:text-[1.74rem] max-sm:leading-[1.08]"
            text="Tire dúvidas, solicite atendimento ou converse sobre compra, venda ou avaliação de imóvel com acompanhamento profissional."
          />
          <div className="flex flex-col justify-center gap-5 sm:flex-row">
            <GoldButton href={primaryWhatsapp}>Quero falar no WhatsApp</GoldButton>
            <GoldButton href={secondaryWhatsapp} variant="secondary">
              Segundo WhatsApp
            </GoldButton>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#D1AF66]/18 bg-[#020202] px-6 py-14 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1540px] gap-10 md:grid-cols-[1.06fr_0.92fr_1.02fr] lg:gap-14">
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
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#D1AF66]">
              Endereços
            </p>
            <div className="space-y-4 text-[0.98rem] leading-7 text-white/72">
              <p className="border-l border-[#D1AF66]/42 pl-4">
                Av. Augusto Franco, 2980 - Porto Novo - Aracaju-SE
              </p>
              <p className="border-l border-[#D1AF66]/42 pl-4">
                Av. Luíz Viana Filho, nº 13223, Hangar Business Park, Torre 2,
                Sala 228, São Cristóvão, Salvador-BA CEP 41500-300
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
