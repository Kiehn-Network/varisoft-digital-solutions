import { Link } from "react-router-dom";
import alarmImg from "@/assets/alarmdesk-preview.jpg";
import gardenImg from "@/assets/kleingarten-preview.jpg";
import winterImg from "@/assets/winterflow-preview.jpg";
import { Shield, Flower2, Snowflake, Globe, Users, Bell, BarChart3, Leaf, CalendarDays, Workflow, Zap, Clock, ArrowRight, type LucideIcon } from "lucide-react";

interface ProductSectionProps {
  badge: string;
  badgeColor: string;
  title: string;
  titleAccent: string;
  accentColor: string;
  description: string;
  ctaLabel: string;
  cards: {
    title: string;
    description: string;
    icon: LucideIcon;
    image?: string;
    span?: "large" | "small";
    badgeText?: string;
  }[];
}

const ProductSection = ({ badge, badgeColor, title, titleAccent, accentColor, description, ctaLabel, cards }: ProductSectionProps) => (
  <div className="py-24">
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        {/* Left text */}
        <div className="lg:w-[38%] lg:sticky lg:top-32 space-y-6">
          <span className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${badgeColor}`}>
            {badge}
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight text-product-section-foreground">
            {title}
            <br />
            <span className={accentColor}>{titleAccent}</span>
          </h2>
          <p className="text-product-section-muted leading-relaxed text-base">
            {description}
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-3 mt-4 bg-product-section-card text-product-section-foreground border border-product-section-border rounded-2xl px-5 py-3.5 hover:border-product-section-muted/40 transition-colors group"
          >
            <span className="w-10 h-10 rounded-xl bg-product-section-border/60 flex items-center justify-center">
              <ArrowRight size={18} className="text-product-section-muted group-hover:text-product-section-foreground transition-colors" />
            </span>
            <div>
              <p className="text-sm font-semibold">{ctaLabel}</p>
              <p className="text-xs text-product-section-muted">Entdecke das volle Potenzial</p>
            </div>
          </a>
        </div>

        {/* Right bento grid */}
        <div className="lg:w-[62%] grid grid-cols-1 sm:grid-cols-5 gap-4">
          {cards.map((card, i) => {
            const Icon = card.icon;
            const isLarge = card.span === "large";
            return (
              <div
                key={i}
                className={`relative rounded-2xl border border-product-section-border bg-product-section-card p-6 flex flex-col justify-end overflow-hidden ${
                  isLarge ? "sm:col-span-3 min-h-[280px]" : "sm:col-span-2 min-h-[220px]"
                } ${i === 0 ? "sm:col-span-5 min-h-[260px]" : ""}`}
              >
                {card.image && (
                  <img
                    src={card.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-20 rounded-2xl"
                    loading="lazy"
                  />
                )}
                {card.badgeText && (
                  <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider bg-product-section-border/80 text-product-section-muted px-2.5 py-1 rounded-full">
                    {card.badgeText}
                  </span>
                )}
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-product-section-border/60 flex items-center justify-center mb-4">
                    <Icon size={20} className={accentColor} />
                  </div>
                  <h3 className="text-lg font-bold text-product-section-foreground mb-1.5">{card.title}</h3>
                  <p className="text-sm text-product-section-muted leading-relaxed">{card.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </div>
);

const Products = () => (
  <section id="produkte" className="bg-product-section">
    <ProductSection
      badge="Flaggschiff"
      badgeColor="border-product-alarm/50 text-product-alarm"
      title="Sicherheit auf"
      titleAccent="höchstem Niveau."
      accentColor="text-product-alarm"
      description="AlarmDesk ist die moderne Leitstellensoftware für Sicherheitsdienste. Alarme empfangen, verarbeiten und dokumentieren – alles in Echtzeit, alles in einer Oberfläche."
      ctaLabel="Alle Funktionen"
      cards={[
        {
          title: "Echtzeit-Monitoring",
          description: "Alle Alarme und Ereignisse live im Blick. Kartenansicht, Statusübersicht und sofortige Benachrichtigung.",
          icon: Globe,
          image: alarmImg,
          span: "large",
        },
        {
          title: "Disponentensteuerung",
          description: "Einsätze zuweisen, Ressourcen koordinieren und Teams effizient steuern.",
          icon: Users,
          span: "small",
        },
        {
          title: "Alarm-Annahme",
          description: "Alarme automatisch empfangen und nach Priorität klassifizieren. Lückenlose Protokollierung.",
          icon: Bell,
          span: "small",
          badgeText: "Kernfeature",
        },
      ]}
    />

    <ProductSection
      badge="Verwaltung"
      badgeColor="border-product-garden/50 text-product-garden"
      title="Gartenvereine"
      titleAccent="digital verwalten."
      accentColor="text-product-garden"
      description="KleingartenManager digitalisiert die Vereinsverwaltung: Parzellen, Mitglieder, Abrechnungen und Kommunikation – alles an einem Ort."
      ctaLabel="Mehr erfahren"
      cards={[
        {
          title: "Parzellenverwaltung",
          description: "Alle Grundstücke im Überblick mit Belegung, Verträgen und Historie.",
          icon: Leaf,
          image: gardenImg,
          span: "large",
        },
        {
          title: "Mitgliederverwaltung",
          description: "Kontakte, Beiträge und Dokumente zentral verwalten.",
          icon: CalendarDays,
          span: "small",
        },
        {
          title: "Abrechnungen",
          description: "Wasser, Strom und Pacht automatisch berechnen und abrechnen.",
          icon: BarChart3,
          span: "small",
        },
      ]}
    />

    <ProductSection
      badge="Workflow"
      badgeColor="border-product-winter/50 text-product-winter"
      title="Prozesse, die"
      titleAccent="einfach fließen."
      accentColor="text-product-winter"
      description="WinterFlow automatisiert Ihre Geschäftsprozesse. Aufgaben steuern, Teams koordinieren und Workflows optimieren – mit einer Plattform, die mitdenkt."
      ctaLabel="Alle Funktionen"
      cards={[
        {
          title: "Workflow-Automatisierung",
          description: "Prozesse visuell gestalten und automatisieren. Weniger Klicks, mehr Ergebnisse.",
          icon: Workflow,
          image: winterImg,
          span: "large",
        },
        {
          title: "Aufgabenmanagement",
          description: "Aufgaben zuweisen, Fristen setzen und Fortschritte tracken.",
          icon: Zap,
          span: "small",
        },
        {
          title: "Echtzeit-Synchronisation",
          description: "Alle Änderungen sofort für das gesamte Team sichtbar.",
          icon: Clock,
          span: "small",
          badgeText: "Neu",
        },
      ]}
    />
  </section>
);

export default Products;
