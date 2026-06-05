import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  Mail,
  CheckCircle2,
  Zap,
  Wrench,
  TrendingUp,
  SlidersHorizontal,
  ClipboardList,
  ShieldCheck,
  Monitor,
  Map,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import dashboardAsset from "@/assets/alarmdesk-dashboard.png.asset.json";
import fahrerAsset from "@/assets/alarmdesk-fahrer.png.asset.json";

const stats = [
  { value: "3", label: "Lizenzpakete" },
  { value: "∞", label: "Custom Module" },
  { value: "24h", label: "Support" },
  { value: "On‑Prem", label: "verfügbar" },
];

const network = [
  { name: "Kiehn Systeme", role: "Entwicklung" },
  { name: "Blue-host.eu", role: "Hosting & Betrieb" },
  { name: "Kiehn Dienstleistungen", role: "Lizenz & Verträge" },
];

const modules = [
  {
    icon: Zap,
    title: "Modul-System",
    description:
      "Module werden je nach Lizenz freigeschaltet – so bleibt AlarmDesk schlank und klar erweiterbar.",
    meta: "Starter · Business · Enterprise",
    span: "third" as const,
  },
  {
    icon: Wrench,
    title: "Individuelle Module",
    description:
      "Fehlt ein Workflow oder eine Schnittstelle? Wir entwickeln das passende Modul und integrieren es sauber.",
    meta: "Projektbezogen kalkuliert",
    span: "third" as const,
  },
  {
    icon: TrendingUp,
    title: "Skalierbar",
    description:
      "Von kleinen Teams bis zu Mehrstandort-Betrieben – kein Systemwechsel, kein Neustart.",
    meta: "Starter → Business → Enterprise",
    span: "third" as const,
  },
  {
    icon: SlidersHorizontal,
    title: "Leitstelle & Disposition",
    description:
      "Übersicht, Zuweisung, Status und Notizen – damit Leitstellen schnell reagieren können.",
    items: ["Einsatzübersicht & Zuweisung", "Status- und Notizsystem", "Rollen & Rechteverwaltung"],
    span: "half" as const,
  },
  {
    icon: ClipboardList,
    title: "Nachweise & Reports",
    description:
      "Prozesse lückenlos dokumentieren – für interne Qualität und externe Prüfungen.",
    items: ["Ereignis- und Zeitprotokoll", "Strukturierte Berichte", "Export-Funktion (optional)"],
    span: "half" as const,
  },
  {
    icon: ShieldCheck,
    title: "Hosting & Updates",
    description:
      "Managed über Blue-host.eu: Hosting, Updates, Backups und optionales Monitoring.",
    items: ["Managed oder On-Premises", "Automatisierte Backups", "Security-Updates inklusive"],
    span: "full" as const,
  },
];

const spanClasses: Record<string, string> = {
  full: "sm:col-span-6",
  half: "sm:col-span-3",
  third: "sm:col-span-2",
};

const AlarmDesk = () => (
  <>
    <Navbar />
    <div className="bg-product-section min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 gradient-mesh-dark overflow-hidden">
        <div className="pointer-events-none absolute top-20 -left-20 w-96 h-96 bg-product-alarm/10 rounded-full blur-3xl animate-blob" />
        <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: "4s" }} />

        <div className="container mx-auto px-4 relative">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs text-product-section-muted hover:text-product-section-foreground transition-colors mb-6"
          >
            <ArrowLeft size={14} /> Zurück
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal className="space-y-6">
              <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-product-alarm/50 text-product-alarm">
                Flaggschiff-Produkt
              </span>
              <h1 className="text-5xl sm:text-6xl font-extrabold text-product-section-foreground leading-[1.05] tracking-tight">
                Das Einsatz­dashboard für{" "}
                <span className="text-product-alarm">Sicherheits­unternehmen.</span>
              </h1>
              <p className="text-lg text-product-section-muted leading-relaxed max-w-xl">
                AlarmDesk bündelt Leitstelle, Einsätze und Dokumentation in einer Oberfläche – modular, lizenzbasiert und bereit für individuelle Erweiterungen.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="mailto:info@varisoft.de?subject=AlarmDesk%20Demo"
                  className="group inline-flex items-center gap-2 bg-product-alarm text-white font-semibold px-6 py-3 rounded-full hover:-translate-y-0.5 transition-all duration-300 text-sm"
                  style={{ boxShadow: "0 10px 40px -10px hsl(var(--product-alarm) / 0.5)" }}
                >
                  <Mail size={16} /> Demo anfragen
                  <ArrowRight size={16} className="arrow-cta" />
                </a>
                <a
                  href="#module"
                  className="inline-flex items-center gap-2 border border-product-section-border text-product-section-foreground font-semibold px-6 py-3 rounded-full hover:border-product-section-muted/60 transition-all duration-300 text-sm"
                >
                  Module ansehen
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-4 pt-8">
                {stats.map((s) => (
                  <div key={s.label} className="border-l border-product-section-border pl-3">
                    <p className="text-2xl sm:text-3xl font-extrabold text-product-section-foreground">{s.value}</p>
                    <p className="text-[11px] text-product-section-muted mt-0.5 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Status card */}
            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-product-alarm/20 via-product-alarm/5 to-transparent rounded-[2rem] blur-2xl" />
                <div className="relative rounded-3xl border border-product-section-border bg-product-section-card p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-product-alarm animate-pulse" />
                      <span className="text-xs font-mono text-product-section-muted">AlarmDesk · Dashboard</span>
                    </div>
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-product-section-border" />
                      <span className="w-2.5 h-2.5 rounded-full bg-product-section-border" />
                      <span className="w-2.5 h-2.5 rounded-full bg-product-section-border" />
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 rounded-xl bg-product-alarm/10 border border-product-alarm/20 mb-6">
                    <CheckCircle2 size={22} className="text-product-alarm flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-product-section-foreground">AlarmDesk V4</p>
                      <p className="text-xs text-product-section-muted">in Entwicklung</p>
                    </div>
                  </div>

                  <p className="text-[11px] font-semibold uppercase tracking-widest text-product-section-muted mb-3">
                    Kiehn Network
                  </p>
                  <div className="space-y-2">
                    {network.map((n) => (
                      <div
                        key={n.name}
                        className="flex items-center justify-between p-3 rounded-lg bg-product-section-border/30 border border-product-section-border"
                      >
                        <span className="text-sm font-semibold text-product-section-foreground">{n.name}</span>
                        <span className="text-xs text-product-section-muted">{n.role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Einblicke */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-product-section-border text-product-section-muted mb-4">
              Einblicke
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-product-section-foreground">
              AlarmDesk <span className="text-product-alarm">in Aktion.</span>
            </h2>
            <p className="mt-4 text-sm text-product-section-muted">
              Ein Blick in die echte Oberfläche – Dashboard für Disponenten und die Kartenansicht für Fahrer.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { img: dashboardAsset.url, icon: Monitor, title: "Disponenten-Dashboard", desc: "Einsätze erstellen, überwachen und verwalten" },
              { img: fahrerAsset.url, icon: Map, title: "Fahrer-Ansicht", desc: "Karte, aktive Einsätze und Dokumente für unterwegs" },
            ].map((v, i) => {
              const Icon = v.icon;
              return (
                <ScrollReveal key={v.title} delay={i * 120}>
                  <div className="group relative rounded-2xl border border-product-section-border bg-product-section-card overflow-hidden hover:border-product-section-muted/40 hover:-translate-y-1 transition-all duration-300">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={v.img}
                        alt={v.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-product-section-card via-product-section-card/30 to-transparent" />
                    </div>
                    <div className="p-6 flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-product-alarm/15 flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-product-alarm" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-product-section-foreground">{v.title}</h3>
                        <p className="text-sm text-product-section-muted mt-1">{v.desc}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Architektur */}
      <section id="module" className="pb-24">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-product-section-border text-product-section-muted mb-4">
              Architektur
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-product-section-foreground leading-tight">
              Modular aufgebaut –<br />
              <span className="text-product-alarm">passend zu eurer Lizenz.</span>
            </h2>
            <p className="mt-4 text-sm text-product-section-muted">
              Aktiviert nur was ihr braucht. Kein Overhead, keine ungenutzten Features. Wächst Schritt für Schritt mit.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-6 gap-4">
            {modules.map((m, i) => {
              const Icon = m.icon;
              return (
                <ScrollReveal key={m.title} delay={i * 80} className={spanClasses[m.span]}>
                  <div className="h-full rounded-2xl border border-product-section-border bg-product-section-card p-6 hover:border-product-section-muted/40 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-xl bg-product-alarm/15 group-hover:bg-product-alarm/25 flex items-center justify-center mb-4 transition-colors">
                      <Icon size={20} className="text-product-alarm" />
                    </div>
                    <h3 className="text-lg font-bold text-product-section-foreground mb-1.5">{m.title}</h3>
                    <p className="text-sm text-product-section-muted leading-relaxed">{m.description}</p>

                    {m.items && (
                      <ul className="mt-4 space-y-2">
                        {m.items.map((it) => (
                          <li key={it} className="flex items-center gap-2 text-sm text-product-section-foreground/90">
                            <CheckCircle2 size={14} className="text-product-alarm flex-shrink-0" />
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {m.meta && (
                      <p className="mt-4 text-xs font-mono text-product-section-muted border-t border-product-section-border pt-3">
                        {m.meta}
                      </p>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl border border-product-section-border bg-product-section-card p-10 sm:p-14 text-center overflow-hidden">
            <div className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 bg-product-alarm/10 rounded-full blur-3xl" />
            <h3 className="text-2xl sm:text-3xl font-bold text-product-section-foreground mb-3 relative">
              Bereit für AlarmDesk?
            </h3>
            <p className="text-sm text-product-section-muted mb-8 max-w-md mx-auto relative">
              Lass uns gemeinsam herausfinden, welche Lizenz und Module zu deinem Unternehmen passen.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 relative">
              <a
                href="mailto:info@varisoft.de?subject=AlarmDesk%20Demo"
                className="group inline-flex items-center gap-2 bg-product-alarm text-white font-semibold px-6 py-3 rounded-full hover:-translate-y-0.5 transition-all text-sm"
                style={{ boxShadow: "0 10px 40px -10px hsl(var(--product-alarm) / 0.5)" }}
              >
                <Mail size={16} /> Demo anfragen
                <ArrowRight size={16} className="arrow-cta" />
              </a>
              <Link
                to="/"
                className="inline-flex items-center gap-2 border border-product-section-border text-product-section-foreground font-semibold px-6 py-3 rounded-full hover:border-product-section-muted/40 transition-all text-sm"
              >
                <ArrowLeft size={16} /> Zur Übersicht
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </>
);

export default AlarmDesk;
