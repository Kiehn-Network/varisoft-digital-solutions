import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  Mail,
  CheckCircle2,
  Users,
  Leaf,
  Receipt,
  AlertTriangle,
  Gauge,
  MessageSquare,
  CalendarDays,
  ListChecks,
  BarChart3,
  Plug,
  Tag,
  UserCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const features = [
  { icon: Users, title: "Mitgliederverwaltung", desc: "Alle Mitgliedsdaten, Statusänderungen und Dokumentenablage zentral an einem Ort." },
  { icon: Leaf, title: "Parzellenverwaltung", desc: "Übersicht aller Parzellen, Zählerstände, Zuordnung zu Mitgliedern und Flächenangaben." },
  { icon: Receipt, title: "Rechnungen & Abrechnung", desc: "Automatische Jahresabrechnung, Rechnungsversand per E-Mail und Zahlungsverfolgung." },
  { icon: AlertTriangle, title: "Mahnwesen", desc: "Mehrstufiges Mahnwesen mit automatischer Gebührenberechnung und Versand." },
  { icon: Gauge, title: "Zählerablesung", desc: "Strom- und Wasserzähler digital erfassen – einzeln oder per Sammelablesung." },
  { icon: MessageSquare, title: "Kommunikation", desc: "Newsletter, E-Mail-Vorlagen und automatische Benachrichtigungen für Mitglieder." },
  { icon: CalendarDays, title: "Veranstaltungen", desc: "Arbeitseinsätze, Versammlungen und Feste planen und Einladungen versenden." },
  { icon: ListChecks, title: "Warteliste", desc: "Interessenten verwalten, priorisieren und bei freier Parzelle automatisch informieren." },
  { icon: BarChart3, title: "Verbrauchsstatistiken", desc: "Grafische Auswertung von Wasser- und Stromverbrauch über alle Parzellen." },
  { icon: Plug, title: "Elektroanlagen", desc: "Wartungsintervalle, Prüfhistorie und Statusüberwachung aller Elektroanlagen." },
  { icon: Tag, title: "Preiskatalog", desc: "Flexible Preisgestaltung für Pacht, Strom, Wasser und Umlagen." },
  { icon: UserCircle2, title: "Mitglieder-Portal", desc: "Mitglieder sehen ihre Rechnungen, Zählerstände und Veranstaltungen selbst ein." },
];

const portalItems = [
  "Rechnungen & Zahlungsstatus einsehen",
  "Zählerstand selbst einreichen",
  "Veranstaltungen & Arbeitseinsätze sehen",
  "Vorstand direkt kontaktieren",
];

const KleingartenManager = () => (
  <>
    <Navbar />
    <div className="bg-product-section min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 gradient-mesh-dark overflow-hidden">
        <div className="pointer-events-none absolute top-20 -left-20 w-96 h-96 bg-product-garden/10 rounded-full blur-3xl animate-blob" />
        <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 bg-product-garden/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: "4s" }} />

        <div className="container mx-auto px-4 relative">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs text-product-section-muted hover:text-product-section-foreground transition-colors mb-6"
          >
            <ArrowLeft size={14} /> Zurück
          </Link>

          <ScrollReveal className="text-center max-w-3xl mx-auto space-y-6">
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-product-garden/50 text-product-garden">
              Vereinsverwaltung
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-product-section-foreground leading-[1.05] tracking-tight">
              Kleingärten <span className="text-product-garden">digital</span> einfach verwalten
            </h1>
            <p className="text-lg text-product-section-muted leading-relaxed max-w-2xl mx-auto">
              KleingärtnerManager – Die moderne Softwarelösung für Ihre Vereinsverwaltung. Mitgliederverwaltung, Rechnungsstellung, Zählerablesung, Mahnwesen und Kommunikation in einer Plattform – für Kleingartenvereine, Schrebergärten und Kleingartenanlagen.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <a
                href="mailto:info@varisoft.de?subject=KleingartenManager%20Demo"
                className="group inline-flex items-center gap-2 bg-product-garden text-white font-semibold px-6 py-3 rounded-full hover:-translate-y-0.5 transition-all duration-300 text-sm"
                style={{ boxShadow: "0 10px 40px -10px hsl(var(--product-garden) / 0.5)" }}
              >
                <Mail size={16} /> Demo anfragen
                <ArrowRight size={16} className="arrow-cta" />
              </a>
              <a
                href="#funktionen"
                className="inline-flex items-center gap-2 border border-product-section-border text-product-section-foreground font-semibold px-6 py-3 rounded-full hover:border-product-section-muted/60 transition-all duration-300 text-sm"
              >
                Funktionen ansehen
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Funktionen Grid */}
      <section id="funktionen" className="pb-24">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-product-section-border text-product-section-muted mb-4">
              Funktionsumfang
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-product-section-foreground">
              Alle Tools für Ihre <span className="text-product-garden">Kleingartenanlage</span>
            </h2>
            <p className="mt-4 text-sm text-product-section-muted">
              Von der Mitgliederverwaltung, Parzellenverwaltung bis zur Jahresabrechnung – KleingärtenManager deckt alle Verwaltungsprozesse Ihres Vereins digital und effizient ab.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <ScrollReveal key={f.title} delay={(i % 3) * 80}>
                  <div className="h-full rounded-2xl border border-product-section-border bg-product-section-card p-6 hover:border-product-garden/40 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-xl bg-product-garden/15 group-hover:bg-product-garden/25 flex items-center justify-center mb-4 transition-colors">
                      <Icon size={20} className="text-product-garden" />
                    </div>
                    <h3 className="text-lg font-bold text-product-section-foreground mb-1.5">{f.title}</h3>
                    <p className="text-sm text-product-section-muted leading-relaxed">{f.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mitglieder-Portal */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal className="space-y-6">
              <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-product-garden/50 text-product-garden">
                Mitglieder-Portal
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-product-section-foreground leading-tight">
                Ihre Mitglieder <span className="text-product-garden">immer informiert</span>
              </h2>
              <p className="text-base text-product-section-muted leading-relaxed">
                Jedes Mitglied erhält einen eigenen Zugang zum Portal – dort sieht es seine Rechnungen, Zählerstände, offene Mahnungen und bevorstehende Veranstaltungen.
              </p>
              <ul className="space-y-3 pt-2">
                {portalItems.map((it) => (
                  <li key={it} className="flex items-center gap-3 text-product-section-foreground">
                    <span className="w-6 h-6 rounded-full bg-product-garden/15 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={14} className="text-product-garden" />
                    </span>
                    <span className="text-sm">{it}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-product-garden/20 via-product-garden/5 to-transparent rounded-[2rem] blur-2xl" />
                <div className="relative rounded-3xl border border-product-section-border bg-product-section-card p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-product-section-border">
                    <div>
                      <p className="text-[11px] uppercase tracking-widest text-product-section-muted">Mein Garten</p>
                      <p className="text-base font-bold text-product-section-foreground">Parzelle 42 · Max Mustermann</p>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-product-garden/15 text-product-garden font-semibold">Aktiv</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="rounded-xl bg-product-section-border/30 border border-product-section-border p-4">
                      <p className="text-[11px] uppercase tracking-wider text-product-section-muted">Offene Rechnung</p>
                      <p className="text-xl font-bold text-product-section-foreground mt-1">€ 142,50</p>
                      <p className="text-[11px] text-product-garden mt-0.5">Fällig 30.06.</p>
                    </div>
                    <div className="rounded-xl bg-product-section-border/30 border border-product-section-border p-4">
                      <p className="text-[11px] uppercase tracking-wider text-product-section-muted">Zählerstand</p>
                      <p className="text-xl font-bold text-product-section-foreground mt-1">2.481 kWh</p>
                      <p className="text-[11px] text-product-section-muted mt-0.5">Letzte Ablesung</p>
                    </div>
                  </div>

                  <div className="rounded-xl bg-product-section-border/30 border border-product-section-border p-4">
                    <p className="text-[11px] uppercase tracking-wider text-product-section-muted mb-2">Nächste Veranstaltung</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-product-garden/15 flex items-center justify-center flex-shrink-0">
                        <CalendarDays size={18} className="text-product-garden" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-product-section-foreground">Gemeinschaftsarbeit</p>
                        <p className="text-xs text-product-section-muted">Samstag, 14.06. · 09:00 Uhr</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl border border-product-section-border bg-product-section-card p-10 sm:p-14 text-center overflow-hidden">
            <div className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 bg-product-garden/10 rounded-full blur-3xl" />
            <h3 className="text-2xl sm:text-3xl font-bold text-product-section-foreground mb-3 relative">
              Bereit für den digitalen Verein?
            </h3>
            <p className="text-sm text-product-section-muted mb-8 max-w-md mx-auto relative">
              Wir zeigen Ihnen in einer kostenlosen Demo, wie KleingärtenManager Ihren Verein entlastet.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 relative">
              <a
                href="mailto:info@varisoft.de?subject=KleingartenManager%20Demo"
                className="group inline-flex items-center gap-2 bg-product-garden text-white font-semibold px-6 py-3 rounded-full hover:-translate-y-0.5 transition-all text-sm"
                style={{ boxShadow: "0 10px 40px -10px hsl(var(--product-garden) / 0.5)" }}
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

export default KleingartenManager;
