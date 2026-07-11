import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Moon,
  Sun,
  ArrowRight,
  ArrowUpRight,
  Mail,
  MessageCircle,
  Send,
  Twitter,
  Briefcase,
  MapPin,
  Bot,
  Mic,
  MessageSquare,
  Workflow,
  Compass,
  LayoutGrid,
  Code2,
  ShieldCheck,
  Rocket,
  Sparkles,
  Github,
  ChevronDown,
  CircleDot,
  Linkedin,
} from "lucide-react";
import mikeyPhoto from "@/assets/mikey.jpg";
import { useReveal } from "@/lib/use-reveal";
import { useTheme } from "@/lib/theme";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mikey — AI Automation Engineer & Full-Stack Developer" },
      {
        name: "description",
        content:
          "Egbeneye Michael (Mikey) builds AI systems, automations, and full-stack platforms for real scale. Engineered in Lagos, deployed globally.",
      },
      { property: "og:title", content: "Mikey — AI Automation Engineer" },
      {
        property: "og:description",
        content:
          "High-performance automation, AI agents, and full-stack systems built for real scale.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const EMAIL = "egbeneyemichaelo@gmail.com";
const WHATSAPP = "https://wa.me/2349073661738";
const TELEGRAM = "https://t.me/michaelpel";
const TWITTER = "https://x.com/mikeyaruto09";
const UPWORK = "https://www.upwork.com/freelancers/michaele79";
const LINKEDIN = "https://ng.linkedin.com/in/michael-egbeneye-294623334";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Blog", href: "#blog" },
];

function Home() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <AiSection />
      <Process />
      <CaseStudies />
      <WhyMe />
      <TechStack />
      <Faq />
      <FooterCta />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------------- Navbar ---------------- */
function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground font-black">
            M
          </span>
          <span className="text-lg font-bold tracking-tight">Mikey</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-foreground transition-colors">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-card hover:bg-accent transition-colors"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-90 transition"
          >
            Contact <ArrowRight className="h-4 w-4" />
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden grid h-9 w-9 place-items-center rounded-lg border border-border"
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-page py-4 flex flex-col gap-3">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted-foreground"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
      style={{ backgroundImage: "var(--gradient-hero)" }}
    >
      <div className="container-page grid gap-12 md:grid-cols-[1.15fr_1fr] items-center">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            Available for New Projects
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight">
            I Build AI Systems <br />
            That{" "}
            <span className="text-gradient">Actually Run.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            High-performance automation, AI agents, and full-stack systems built for real
            scale. Engineered in Lagos, deployed globally.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-90 transition"
            >
              Start a Project <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold hover:bg-accent transition"
            >
              See My Work
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 hover:text-foreground">
              <Mail className="h-4 w-4 text-primary" /> {EMAIL}
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" /> Lagos, Nigeria
            </span>
          </div>
        </div>

        <div className="relative reveal">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/30 to-primary-glow/10 blur-2xl" />
          <div className="relative rounded-[2rem] border border-border bg-card p-3 shadow-[var(--shadow-card)]">
            <img
              src={mikeyPhoto}
              alt="Egbeneye Michael (Mikey), AI Automation Engineer"
              width={1024}
              height={1280}
              className="w-full h-auto rounded-[1.6rem] object-cover"
            />
            <div className="absolute -bottom-4 -left-4 rounded-2xl border border-border bg-background/95 backdrop-blur px-4 py-3 shadow-[var(--shadow-soft)]">
              <div className="flex items-center gap-2 text-xs font-semibold">
                <CircleDot className="h-3.5 w-3.5 text-primary" />
                Egbeneye Michael
              </div>
              <div className="text-[11px] text-muted-foreground">
                AI Automation Engineer · Full-Stack Dev
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- AI Section ---------------- */
function AiSection() {
  const tags = ["AI Agents", "Voice Agents", "Chatbots", "Automation"];
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container-page grid gap-10 md:grid-cols-2 items-center">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
            <Sparkles className="h-4 w-4" /> AI, done right
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-black leading-tight">
            I Also Build With AI. <br />
            <span className="text-gradient">Not a Buzzword.</span>
          </h2>
        </div>
        <div className="reveal">
          <p className="text-lg text-muted-foreground leading-relaxed">
            From automation to custom AI agents, I integrate AI into real workflows — no
            demos, no prototypes. Systems that save your team hours every week.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <div
              className="badge-base LI-profile-badge"
              data-locale="en_US"
              data-size="medium"
              data-theme="dark"
              data-type="VERTICAL"
              data-vanity="michael-egbeneye-294623334"
              data-version="v1"
            >
              <a
                className="badge-base__link LI-simple-link"
                href="https://ng.linkedin.com/in/michael-egbeneye-294623334?trk=profile-badge"
              >
                Michael Egbeneye
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Process ---------------- */
function Process() {
  const steps = [
    {
      icon: Compass,
      title: "Discovery & Strategy",
      body:
        "I get into the technical details of what you need before writing a line of code. No assumptions.",
    },
    {
      icon: LayoutGrid,
      title: "Solution Design",
      body:
        "Map the workflow, architecture, and integrations before development begins.",
    },
    {
      icon: Code2,
      title: "Agile Development",
      body: "Iterative sprints with regular working updates. No black boxes.",
    },
    {
      icon: ShieldCheck,
      title: "Testing & Security",
      body:
        "Functional testing, performance checks, and reliability review before every deployment.",
    },
    {
      icon: Rocket,
      title: "Launch & Scale",
      body:
        "I handle deployment and make sure your infrastructure holds up under real traffic.",
    },
  ];
  return (
    <section id="services" className="py-20 md:py-28 bg-surface border-y border-border">
      <div className="container-page">
        <div className="max-w-2xl reveal">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Process
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-black">From Concept to Market</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A process that keeps you informed at every step. No black boxes, no surprises.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="reveal group surface-card p-6 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)] transition"
              >
                <div className="flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-mono text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {s.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Case Studies ---------------- */
function CaseStudies() {
  const projects = [
    {
      tag: "AI & Automation",
      title: "AI WhatsApp Customer Support Platform",
      desc: "Automated WhatsApp system integrating AI, payments, and workflow automation.",
    },
    {
      tag: "AI & Voice",
      title: "AI Voice Receptionist",
      desc: "24/7 AI call handling and automated appointment booking.",
    },
    {
      tag: "Automation & CRM",
      title: "Business Workflow Automation",
      desc: "Automated lead pipeline with data enrichment and CRM sync.",
    },
    {
      tag: "Database",
      title: "PostgreSQL Optimization",
      desc: "Schema and query optimization for faster application performance.",
    },
    {
      tag: "AI Infrastructure",
      title: "OpenClaw Multi-Agent Setup",
      desc: "Production-ready multi-agent AI environment with Docker.",
    },
    {
      tag: "Open Source",
      title: "MT5-Copier",
      desc: "Trade copying system for MetaTrader 5.",
      href: "https://github.com/Mikeyaruto/MT5-Copier",
    },
  ];
  return (
    <section id="portfolio" className="py-20 md:py-28">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6 reveal">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Case Studies
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-black">Selected Work</h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-semibold hover:bg-accent transition"
          >
            View all projects <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.href ?? "#contact"}
              target={p.href ? "_blank" : undefined}
              rel={p.href ? "noopener noreferrer" : undefined}
              className="reveal group surface-card p-6 flex flex-col hover:-translate-y-1 hover:border-primary/40 transition"
            >
              <span className="inline-flex self-start rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
                {p.tag}
              </span>
              <h3 className="mt-5 text-xl font-bold group-hover:text-primary transition">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                {p.desc}
              </p>
              <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                {p.href ? (
                  <>
                    View on GitHub <Github className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    Read case study <ArrowUpRight className="h-4 w-4" />
                  </>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why Me ---------------- */
function WhyMe() {
  const cols = [
    {
      title: "Engineering Excellence",
      body:
        "Strong backend engineering, database optimization, and API-first development across every project.",
    },
    {
      title: "On-Time Delivery",
      body: "Clear milestones and regular updates. No ghosting, no delays.",
    },
    {
      title: "ROI-Focused",
      body:
        "I don't just write code. I build systems that save time, cut costs, and drive real business value.",
    },
  ];
  const stats = [
    { k: "50+", v: "Projects Delivered" },
    { k: "98%", v: "Satisfaction Rate" },
    { k: "24/7", v: "Support" },
  ];
  return (
    <section className="py-20 md:py-28 bg-surface border-y border-border">
      <div className="container-page">
        <div className="max-w-3xl reveal">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Why work with me
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-black">Not Just a Freelancer.</h2>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed border-l-4 border-primary pl-5 italic">
            "I bridge automation tooling with real backend engineering and travel-tech
            integration experience — depth most automation freelancers don't have."
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {cols.map((c) => (
            <div key={c.title} className="reveal surface-card p-6">
              <div className="h-1 w-10 rounded-full bg-primary" />
              <h3 className="mt-4 text-lg font-bold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {c.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 reveal grid gap-6 sm:grid-cols-3 rounded-2xl border border-border bg-card p-8">
          {stats.map((s) => (
            <div key={s.v} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-gradient">{s.k}</div>
              <div className="mt-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Tech Stack ---------------- */
function TechStack() {
  const groups = [
    { icon: Bot, title: "AI & LLMs", items: ["OpenAI (GPT)", "Claude", "Google Gemini", "Anthropic API", "RAG", "MCP"] },
    { icon: Workflow, title: "Automation", items: ["n8n", "Make.com", "Zapier"] },
    { icon: Mic, title: "AI Voice", items: ["Retell AI", "Vapi AI", "Telnyx", "Twilio"] },
    { icon: MessageSquare, title: "Messaging", items: ["WhatsApp Business API", "WATI", "Gupshup", "Zoko", "360dialog", "Meta Cloud API"] },
    { icon: Code2, title: "Backend", items: ["Node.js", "Python", "FastAPI", "Express.js", "REST APIs", "GraphQL"] },
    { icon: LayoutGrid, title: "Frontend", items: ["React", "Next.js", "Astro", "TypeScript"] },
    { icon: ShieldCheck, title: "Databases", items: ["PostgreSQL", "Supabase", "MySQL", "MongoDB", "SQLite"] },
    { icon: Rocket, title: "DevOps & Cloud", items: ["Docker", "Kubernetes", "GitHub Actions", "AWS", "DigitalOcean", "VPS", "Nginx"] },
    { icon: Briefcase, title: "Integrations", items: ["HubSpot", "Airtable", "Google Sheets", "Stripe", "Paystack", "Flutterwave", "Apify", "Cloudinary"] },
    { icon: Sparkles, title: "AI Dev Platforms", items: ["Cursor", "Lovable", "Bolt.new", "Replit", "OpenClaw", "Claude Code", "Hermes Agent"] },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-2xl reveal">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Tech Stack
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-black">
            Built on Advanced Foundations
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => {
            const Icon = g.icon;
            return (
              <div key={g.title} className="reveal surface-card p-6">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold">{g.title}</h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span
                      key={it}
                      className="rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function Faq() {
  const items = [
    {
      q: "How do you manage remote client projects?",
      a: "I run projects through structured async updates (Slack/Notion/email), scheduled check-ins, and shared boards. You always know what's shipped, what's in progress, and what's next.",
    },
    {
      q: "Do you provide post-launch support?",
      a: "Yes. Every project ships with a support window and optional retainer for monitoring, bug fixes, and iterative improvements.",
    },
    {
      q: "What's your typical project timeline?",
      a: "Automations and integrations usually ship in 1–3 weeks. Full-stack AI platforms typically take 4–10 weeks depending on scope.",
    },
    {
      q: "How do you ensure code quality?",
      a: "Typed codebases, linting, code review, and functional + load testing before deployment. Reliability isn't optional.",
    },
    {
      q: "What's your pricing structure?",
      a: "Fixed-price for well-scoped builds, hourly for exploratory work, and monthly retainers for ongoing systems. Quoted after the discovery call.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="blog" className="py-20 md:py-28 bg-surface border-y border-border">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div className="reveal">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-black">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Straight answers, no marketing language.
          </p>
        </div>
        <div className="reveal space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q} className="surface-card overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold">{it.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-primary transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                    {it.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer CTA ---------------- */
function FooterCta() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div
          className="reveal relative overflow-hidden rounded-3xl border border-primary/30 p-10 md:p-16 text-center"
          style={{ backgroundImage: "var(--gradient-hero)" }}
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            Tell Me What <span className="text-gradient">You're Building.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            The first call is free. I'll give you an honest picture of scope, cost, and
            timeline. No pressure, no pitch decks.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-90 transition"
            >
              Send an Inquiry <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={UPWORK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-accent transition"
            >
              View Upwork Profile <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            I typically respond within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  const [msg, setMsg] = useState("");
  const channels = [
    { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: MessageCircle, label: "WhatsApp", value: "+234 907 366 1738", href: WHATSAPP },
    { icon: Send, label: "Telegram", value: "@michaelpel", href: TELEGRAM },
    { icon: Twitter, label: "X / Twitter", value: "@mikeyaruto09", href: TWITTER },
    { icon: Briefcase, label: "Upwork", value: "michaele79", href: UPWORK },
    { icon: Linkedin, label: "LinkedIn", value: "Michael Egbeneye", href: LINKEDIN },
  ];
  const sendMail = () => {
    const url = `mailto:${EMAIL}?subject=${encodeURIComponent(
      "New Project Inquiry",
    )}&body=${encodeURIComponent(msg)}`;
    window.location.href = url;
  };
  return (
    <section id="contact" className="py-20 md:py-28 bg-surface border-t border-border">
      <div className="container-page grid gap-12 lg:grid-cols-2 items-start">
        <div className="reveal">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Contact
          </span>
          <h2 className="mt-3 text-4xl md:text-6xl font-black">
            Let's <span className="text-gradient">Build Something.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-md">
            Pick whichever channel works best. All roads lead to a real reply, usually
            within 24 hours.
          </p>
          <div className="mt-8 space-y-3">
            {channels.map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-xl border border-border bg-card px-4 py-3.5 hover:border-primary/40 hover:bg-accent transition"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {c.label}
                    </div>
                    <div className="text-sm font-semibold truncate">{c.value}</div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="reveal surface-card p-6 md:p-8">
          <h3 className="text-xl font-bold">Quick message</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Type below and hit send — it opens your email app pre-filled to me.
          </p>
          <textarea
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder="Tell me a bit about what you're building, timeline, and budget range."
            rows={8}
            className="mt-5 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary transition"
          />
          <button
            onClick={sendMail}
            className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-90 transition"
          >
            Send via Email <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  const services = [
    "Automation",
    "AI Chatbots",
    "Voice Agents",
    "Custom AI SaaS",
    "API Integration",
    "Database Optimization",
  ];
  const company = [
    { l: "About", h: "#about" },
    { l: "Portfolio", h: "#portfolio" },
    { l: "Blog", h: "#blog" },
    { l: "Contact", h: "#contact" },
  ];
  const socials = [
    { icon: Mail, href: `mailto:${EMAIL}`, label: "Email" },
    { icon: MessageCircle, href: WHATSAPP, label: "WhatsApp" },
    { icon: Send, href: TELEGRAM, label: "Telegram" },
    { icon: Twitter, href: TWITTER, label: "Twitter" },
    { icon: Briefcase, href: UPWORK, label: "Upwork" },
    { icon: Linkedin, href: LINKEDIN, label: "LinkedIn" },
    ];
  return (
    <footer className="border-t border-border py-14">
      <div className="container-page grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#home" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground font-black">
              M
            </span>
            <span className="text-lg font-bold">Mikey</span>
          </a>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            AI systems and full-stack engineering, built for real scale.
          </p>
          <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" /> Lagos, Nigeria
          </p>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {services.map((s) => (
              <li key={s}>
                <a href="#services" className="hover:text-foreground">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {company.map((c) => (
              <li key={c.l}>
                <a href={c.h} className="hover:text-foreground">
                  {c.l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider">Connect</h4>
          <div className="mt-4 flex flex-wrap gap-2">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-card hover:border-primary hover:text-primary transition"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="container-page mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground">
        <div>© 2026 Egbeneye Michael. All rights reserved.</div>
        <div>Engineered in Lagos · Deployed globally</div>
      </div>
    </footer>
  );
}
