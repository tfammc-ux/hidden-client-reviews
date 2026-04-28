import { createFileRoute } from "@tanstack/react-router";
import { Star, Search, Check, Sparkles, ShieldCheck, TrendingUp, MessageCircle, ChevronDown, CreditCard, BadgeCheck } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";
import mbwayLogo from "@/assets/mbway.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP = "https://wa.me/351930918066?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Cliente%20Oculto";

function Logo({ size = 36 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2.5">
      <img src={logo} alt="Cliente Oculto" width={size} height={size} className="drop-shadow-[0_2px_8px_rgba(212,175,55,0.3)]" />
      <span className="font-serif text-xl font-bold tracking-tight">
        Cliente <span className="text-gradient-gold">Oculto</span>
      </span>
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#planos" className="hover:text-gold transition-colors">Planos</a>
          <a href="#como-funciona" className="hover:text-gold transition-colors">Como Funciona</a>
          <a href="#casos" className="hover:text-gold transition-colors">Casos</a>
          <a href="#faq" className="hover:text-gold transition-colors">FAQ</a>
        </div>
        <a href="#oferta" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.82_0.16_85)] to-[oklch(0.88_0.13_90)] text-primary-foreground px-5 py-2.5 text-sm font-semibold shadow-[var(--shadow-gold)] hover:scale-105 transition-transform">
          <Sparkles className="w-4 h-4" /> Oferta Starter 300€
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>
      <div className="relative max-w-5xl mx-auto px-6 text-center animate-fade-up">
        <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium text-gold mb-8">
          <Star className="w-3.5 h-3.5 fill-gold" /> Reputação Digital · 100% Real
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-6">
          Mais Avaliações.<br />
          <span className="text-gradient-gold">Mais Confiança.</span><br />
          Mais Vendas.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Avaliações Google escritas por contas portuguesas reais, entregues em pacotes fixos. Sem mensalidades, sem contratos longos — pagamento único.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#oferta" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.82_0.16_85)] to-[oklch(0.88_0.13_90)] text-primary-foreground px-8 py-4 font-semibold shadow-[var(--shadow-gold)] hover:scale-105 transition-transform glow-pulse">
            Ver Planos · desde 300€
          </a>
          <a href="#como-funciona" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-8 py-4 font-medium hover:border-gold/50 transition">
            Como Funciona?
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><div className="flex">{[...Array(5)].map((_,i)=><Star key={i} className="w-4 h-4 fill-gold text-gold" />)}</div> Avaliações Reais</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-accent" /> Contas Portuguesas</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-accent" /> Sem Mensalidade</span>
        </div>
      </div>
    </section>
  );
}

const stats = [
  { num: "97%", text: "dos consumidores lêem reviews antes de escolher um negócio local", src: "BrightLocal, 2026" },
  { num: "+20%", text: "de aumento de receita por cada 0,5★ a mais no Google Maps", src: "Harvard Business School, 2025" },
  { num: "88%", text: "confiam nas reviews do Google tanto como numa recomendação pessoal", src: "Podium, 2025" },
  { num: "270×", text: "mais probabilidade de venda em negócios com 5+ reviews", src: "Spiegel Research Center" },
];

function Stats() {
  return (
    <section className="py-24 px-6 border-y border-border/50 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Os Números Não Mentem</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Avaliações positivas são o fator nº 1 de decisão para novos clientes.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.num} className="rounded-2xl border border-border bg-card p-8 hover:border-gold/40 transition-all hover:-translate-y-1">
              <div className="text-5xl font-serif font-black text-gradient-gold mb-3">{s.num}</div>
              <p className="text-sm text-foreground/80 mb-3 leading-relaxed">{s.text}</p>
              <p className="text-xs text-muted-foreground italic">Fonte: {s.src}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { n: "01", t: "Contacte-nos", d: "Entre em contacto via WhatsApp para analisarmos o seu negócio." },
  { n: "02", t: "Escolha o Pacote", d: "50, 100 ou 200 avaliações — entregues ao longo de 4 meses." },
  { n: "03", t: "Pagamento Único", d: "Pague uma única vez por transferência ou MBWay. Zero mensalidades." },
  { n: "04", t: "Receba Avaliações", d: "Distribuímos avaliações reais, faseadas e naturais ao longo do período." },
];

function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Como Funciona?</h2>
          <p className="text-muted-foreground">Um processo simples e transparente em 4 passos.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="relative rounded-2xl border border-border bg-card p-8 hover:border-gold/40 transition">
              <div className="font-serif text-6xl font-black text-gold/20 mb-4">{s.n}</div>
              <h3 className="text-xl font-bold mb-2">{s.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SpecialOffer() {
  return (
    <section id="oferta" className="py-24 px-6 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden border border-gold/40 bg-gradient-to-br from-card via-card to-[oklch(0.25_0.06_165)] p-10 md:p-14 shadow-[var(--shadow-gold)]">
          <div className="absolute top-6 right-6 inline-flex items-center gap-1.5 rounded-full bg-gold text-primary-foreground px-3 py-1 text-xs font-bold">
            <Sparkles className="w-3 h-3" /> EXCLUSIVO NOVOS CLIENTES
          </div>
          <div className="max-w-2xl">
            <p className="text-gold uppercase tracking-widest text-xs font-semibold mb-3">Pacote de Lançamento</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Starter — 300€</h2>
            <p className="text-lg text-muted-foreground mb-6">
              <span className="text-foreground font-semibold">50 avaliações escritas Google</span> entregues em <span className="text-foreground font-semibold">2 meses</span>. O arranque ideal para colocar o seu negócio no mapa.
            </p>
            <div className="inline-flex items-center gap-2 rounded-lg border border-gold/40 bg-gold/10 px-4 py-2 mb-8 text-sm">
              <Sparkles className="w-4 h-4 text-gold" />
              <span><span className="font-semibold text-gold">Oferta limitada</span> · apenas para <span className="font-semibold">novos clientes</span> · válida até <span className="font-semibold">30/04/2026</span></span>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {["50 avaliações escritas", "Entregues em 2 meses", "Contas portuguesas reais", "Pagamento único · sem renovação"].map(f => (
                <div key={f} className="flex items-center gap-2 text-sm">
                  <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center"><Check className="w-3 h-3 text-gold" /></div>
                  {f}
                </div>
              ))}
            </div>
            <a href={WHATSAPP} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.82_0.16_85)] to-[oklch(0.88_0.13_90)] text-primary-foreground px-8 py-4 font-semibold shadow-[var(--shadow-gold)] hover:scale-105 transition">
              <MessageCircle className="w-5 h-5" /> Quero o Starter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const plans = [
  {
    name: "Essencial",
    reviews: 50,
    price: 400,
    months: 4,
    perReview: 8.0,
    features: [
      "50 avaliações escritas Google",
      "Entregues ao longo de 4 meses",
      "Contas portuguesas reais",
      "Linguagem adaptada ao setor",
      "Suporte por email e WhatsApp",
    ],
  },
  {
    name: "Profissional",
    reviews: 100,
    price: 750,
    months: 4,
    perReview: 7.5,
    popular: true,
    features: [
      "100 avaliações escritas Google",
      "Entregues ao longo de 4 meses",
      "Contas portuguesas reais",
      "Linguagem adaptada ao setor",
      "Relatório mensal de progresso",
      "Suporte prioritário",
    ],
  },
  {
    name: "Premium",
    reviews: 200,
    price: 1200,
    months: 4,
    perReview: 6.0,
    features: [
      "200 avaliações escritas Google",
      "Entregues ao longo de 4 meses",
      "Contas portuguesas reais",
      "Linguagem adaptada ao setor",
      "Relatório mensal detalhado",
      "Gestor de conta dedicado",
      "Suporte 7 dias/semana",
    ],
  },
];

function Plans() {
  return (
    <section id="planos" className="py-24 px-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium text-gold mb-4">
            <ShieldCheck className="w-3.5 h-3.5" /> Pagamento Único · Sem Mensalidades
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Escolha o Seu Pacote</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Avaliações Google reais, distribuídas naturalmente ao longo de 4 meses para crescer com autoridade aos olhos do algoritmo.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`relative rounded-3xl border p-8 flex flex-col transition-all hover:-translate-y-2 ${p.popular ? "border-gold bg-gradient-to-b from-card to-[oklch(0.25_0.06_165)] shadow-[var(--shadow-gold)] lg:scale-105" : "border-border bg-card hover:border-gold/40"}`}>
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-gold text-primary-foreground px-4 py-1 text-xs font-bold">
                  <Star className="w-3 h-3 fill-current" /> MAIS POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold mb-1">{p.name}</h3>
              <p className="text-sm text-muted-foreground mb-6">{p.reviews} avaliações em {p.months} meses</p>
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg text-muted-foreground line-through decoration-gold/60">{(p.price * 2).toLocaleString("pt-PT")}€</span>
                  <span className="inline-flex items-center rounded-full bg-gold/15 text-gold px-2 py-0.5 text-[10px] font-bold tracking-wider">-50%</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-serif font-black text-gradient-gold">{p.price.toLocaleString("pt-PT")}€</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">≈ {p.perReview.toFixed(2).replace(".",",")}€ por avaliação · pagamento único</p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map(f => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center shrink-0"><Check className="w-3 h-3 text-gold" /></div>
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>
              <a href={WHATSAPP} className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold transition ${p.popular ? "bg-gradient-to-r from-[oklch(0.82_0.16_85)] to-[oklch(0.88_0.13_90)] text-primary-foreground shadow-[var(--shadow-gold)] hover:scale-105" : "border border-gold/40 text-gold hover:bg-gold hover:text-primary-foreground"}`}>
                Quero {p.name}
              </a>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground mt-8">Aos valores apresentados acresce IVA à taxa legal em vigor. Pagamento via transferência ou MBWay.</p>
      </div>
    </section>
  );
}

const why = [
  { icon: ShieldCheck, t: "Contas Portuguesas Reais", d: "Avaliações de perfis reais portugueses. O Google reconhece a autenticidade e valoriza-o no ranking local." },
  { icon: TrendingUp, t: "Crescimento Natural", d: "Distribuímos as avaliações ao longo de 4 meses para um padrão orgânico — nada de picos suspeitos." },
  { icon: Search, t: "Algoritmo + Cliente", d: "Avaliações reais e recentes ativam dois motores: o algoritmo do Google e a confiança do cliente final." },
];

function WhyReal() {
  return (
    <section className="py-24 px-6 bg-card/30 border-y border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Porquê Avaliações Reais Fazem a Diferença</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Não somos uma fábrica de reviews falsas. E isso protege o seu negócio.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {why.map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-8">
              <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center mb-5"><Icon className="w-6 h-6 text-gold" /></div>
              <h3 className="text-xl font-bold mb-3">{t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const cases = [
  { sector: "Setor Automóvel", title: "Stand de Lisboa passa de 23 para 91 avaliações", before: { stars: 3.8, n: 23 }, after: { stars: 4.7, n: 91 }, note: "+34% de contactos via Google no 3.º mês.", plan: "Pacote Profissional" },
  { sector: "Setor Saúde", title: "Clínica de estética do Porto triplica visibilidade", before: { stars: 4.1, n: 17 }, after: { stars: 4.8, n: 74 }, note: "Marcações online +48% no 4.º mês.", plan: "Pacote Profissional" },
  { sector: "Restauração", title: "Restaurante familiar sai do 'efeito invisível'", before: { stars: 4.0, n: 31 }, after: { stars: 4.6, n: 112 }, note: "Ocupação ao jantar +28%.", plan: "Pacote Premium" },
];

function Cases() {
  return (
    <section id="casos" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Resultados Reais. Clientes Reais.</h2>
          <p className="text-muted-foreground">O que os nossos clientes conseguiram nos primeiros meses.</p>
        </div>

        <div className="relative rounded-3xl border border-gold/40 bg-gradient-to-br from-[oklch(0.22_0.06_165)] via-card to-[oklch(0.18_0.04_165)] p-8 md:p-12 mb-10 shadow-[var(--shadow-gold)] overflow-hidden">
          <div className="absolute top-6 right-6 inline-flex items-center gap-1.5 rounded-full bg-gold text-primary-foreground px-3 py-1 text-xs font-bold">
            <TrendingUp className="w-3 h-3" /> DESDE 2023
          </div>
          <div className="grid md:grid-cols-[auto_1fr] items-center gap-8">
            <div className="text-center md:text-left">
              <div className="text-7xl md:text-8xl font-serif font-black text-gradient-gold leading-none">60%</div>
              <div className="text-2xl md:text-3xl font-serif font-black text-gold mt-2">3× ROI</div>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Em média, 60% dos nossos clientes triplicam o investimento</h3>
              <p className="text-foreground/80 leading-relaxed">
                Desde o início da nossa atividade em <span className="font-semibold text-gold">2023</span>, observámos que mais de metade dos clientes recuperam <span className="font-semibold text-foreground">3× o custo do nosso serviço</span> através do aumento de contactos, marcações e vendas geradas pela melhoria da reputação no Google.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map(c => (
            <div key={c.title} className="rounded-2xl border border-border bg-card p-8 hover:border-gold/40 transition">
              <p className="text-xs text-gold uppercase tracking-widest font-semibold mb-3">{c.sector}</p>
              <h3 className="text-lg font-bold mb-6 leading-snug">{c.title}</h3>
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="rounded-xl bg-background/60 p-4 text-center">
                  <p className="text-xs text-muted-foreground mb-1">Antes</p>
                  <p className="text-2xl font-bold">{c.before.stars}★</p>
                  <p className="text-xs text-muted-foreground">{c.before.n} reviews</p>
                </div>
                <div className="rounded-xl bg-gold/10 border border-gold/30 p-4 text-center">
                  <p className="text-xs text-gold mb-1">Depois</p>
                  <p className="text-2xl font-bold text-gold">{c.after.stars}★</p>
                  <p className="text-xs text-gold/80">{c.after.n} reviews</p>
                </div>
              </div>
              <p className="text-sm text-foreground/80 mb-4">{c.note}</p>
              <p className="text-xs text-muted-foreground">{c.plan}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground mt-8 max-w-2xl mx-auto italic">* Resultados representativos. Os resultados individuais variam consoante setor, localização e ponto de partida.</p>
      </div>
    </section>
  );
}

const faqs = [
  { q: "Garantem a entrega das avaliações no prazo?", a: "Sim. Garantimos a entrega do número total de avaliações contratadas dentro do prazo estabelecido. Caso não cumpramos o prazo, devolvemos 100% do valor pago — sem questões." },
  { q: "Divulgam o nome dos vossos clientes?", a: "Nunca. A confidencialidade é uma das nossas garantias mais importantes — em nenhum momento divulgamos, partilhamos ou referimos publicamente o nome dos nossos clientes. Toda a relação é tratada com total discrição." },
  { q: "As avaliações são reais ou podem ser removidas pelo Google?", a: "Todas as avaliações são feitas por contas portuguesas reais com histórico de utilização. Por isso, o Google reconhece-as como autênticas e não as remove — ao contrário das reviews falsas geradas por bots." },
  { q: "Quanto tempo demora a ver resultados?", a: "Os primeiros impactos no ranking local começam tipicamente a partir do 2.º mês. O ROI máximo costuma surgir entre o 4.º e o 6.º mês de presença consistente." },
  { q: "Isto é legal?", a: "Sim. As avaliações são feitas por pessoas reais que tiveram contacto com o seu negócio (presencial ou online). Não usamos perfis falsos nem geramos conteúdo fraudulento." },
  { q: "Tenho de assinar um contrato longo?", a: "Não. Todos os pacotes são pagamento único, sem renovação automática e sem fidelização. Pode renovar quando quiser." },
  { q: "As avaliações são adaptadas ao meu negócio?", a: "Sim. Cada avaliação é escrita com linguagem natural adaptada ao seu setor, serviço e perfil de cliente típico." },
  { q: "Como é feito o pagamento?", a: "Por transferência bancária ou MBWay. Após confirmação, o serviço inicia em 24-48h." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 px-6 border-t border-border/50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Perguntas Frequentes</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-secondary/30 transition">
                <span className="font-semibold">{f.q}</span>
                <ChevronDown className={`w-5 h-5 text-gold shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center rounded-3xl border border-gold/30 bg-gradient-to-br from-card via-[oklch(0.22_0.05_165)] to-[oklch(0.18_0.04_165)] p-12 md:p-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Pronto para crescer no Google?</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">Fale connosco hoje e receba um diagnóstico gratuito do seu perfil Google Business.</p>
        <a href={WHATSAPP} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.82_0.16_85)] to-[oklch(0.88_0.13_90)] text-primary-foreground px-10 py-4 font-semibold shadow-[var(--shadow-gold)] hover:scale-105 transition">
          <MessageCircle className="w-5 h-5" /> Falar no WhatsApp
        </a>
      </div>
    </section>
  );
}

function Guarantee() {
  return (
    <section className="py-20 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        <div className="rounded-3xl border border-gold/40 bg-gradient-to-br from-card to-[oklch(0.22_0.05_165)] p-8 md:p-10">
          <div className="w-14 h-14 rounded-2xl bg-gold/15 flex items-center justify-center mb-5">
            <BadgeCheck className="w-7 h-7 text-gold" />
          </div>
          <h3 className="text-2xl font-bold mb-3">Garantia 100% — Entrega no Prazo ou Devolução Total</h3>
          <p className="text-foreground/80 leading-relaxed">
            Comprometemo-nos a entregar todas as avaliações dentro do prazo estabelecido. Se por qualquer motivo não cumprirmos, devolvemos <span className="font-semibold text-gold">100% do valor pago</span> — sem burocracias nem letras pequenas.
          </p>
        </div>
        <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
          <div className="w-14 h-14 rounded-2xl bg-gold/15 flex items-center justify-center mb-5">
            <CreditCard className="w-7 h-7 text-gold" />
          </div>
          <h3 className="text-2xl font-bold mb-3">Pagamento Disponível</h3>
          <p className="text-muted-foreground mb-5">Pagamento único, simples e seguro através de:</p>
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-2.5">
              <div className="bg-white rounded-md p-1.5"><img src={mbwayLogo} alt="MB WAY" className="h-5 w-auto" /></div>
              <span className="text-sm font-semibold">MB WAY</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-2.5">
              <CreditCard className="w-5 h-5 text-gold" />
              <span className="text-sm font-semibold">Transferência Bancária</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">Início do serviço em 24-48h após confirmação do pagamento.</p>
        </div>
      </div>
    </section>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 group inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white pl-4 pr-5 py-3 shadow-2xl shadow-[#25D366]/40 hover:scale-105 transition-transform"
    >
      <span className="relative flex">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40 opacity-75"></span>
        <MessageCircle className="w-6 h-6 relative" />
      </span>
      <span className="font-semibold text-sm hidden sm:inline">Fale connosco</span>
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/50 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <Logo size={28} />
        <p className="text-xs text-muted-foreground">© 2023 Cliente Oculto. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Stats />
        <HowItWorks />
        <SpecialOffer />
        <Plans />
        <WhyReal />
        <Cases />
        <Guarantee />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
