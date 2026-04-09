import alarmImg from "@/assets/alarmdesk-preview.jpg";
import gardenImg from "@/assets/kleingarten-preview.jpg";
import winterImg from "@/assets/winterflow-preview.jpg";
import { Shield, Flower2, Snowflake } from "lucide-react";

const products = [
  {
    name: "AlarmDesk",
    tagline: "Leitstellensoftware für Sicherheitsdienste",
    description:
      "Alarme empfangen, verarbeiten und dokumentieren – alles in einer modernen Oberfläche. Echtzeit-Monitoring, Disponentensteuerung und lückenlose Protokollierung.",
    image: alarmImg,
    icon: Shield,
    color: "text-product-alarm",
    borderColor: "border-product-alarm/30",
    bgAccent: "bg-product-alarm/10",
  },
  {
    name: "KleingartenManager",
    tagline: "Verwaltung für Kleingartenvereine",
    description:
      "Parzellenverwaltung, Mitgliederdaten, Abrechnungen und Kommunikation – digital und übersichtlich für jeden Verein.",
    image: gardenImg,
    icon: Flower2,
    color: "text-product-garden",
    borderColor: "border-product-garden/30",
    bgAccent: "bg-product-garden/10",
  },
  {
    name: "WinterFlow",
    tagline: "Workflow-Management neu gedacht",
    description:
      "Prozesse automatisieren, Aufgaben steuern und Teams koordinieren – mit einer intuitiven Plattform, die mitdenkt.",
    image: winterImg,
    icon: Snowflake,
    color: "text-product-winter",
    borderColor: "border-product-winter/30",
    bgAccent: "bg-product-winter/10",
  },
];

const Products = () => (
  <section id="produkte" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
          Unsere Produkte
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
          Software, die Arbeit vereinfacht
        </h2>
      </div>

      <div className="space-y-20">
        {products.map((p, i) => {
          const Icon = p.icon;
          const reversed = i % 2 !== 0;
          return (
            <div
              key={p.name}
              className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12`}
            >
              <div className="flex-1 w-full">
                <div
                  className={`rounded-2xl overflow-hidden border ${p.borderColor} shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-shadow duration-300`}
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                    width={1024}
                    height={768}
                  />
                </div>
              </div>

              <div className="flex-1 space-y-5">
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${p.bgAccent}`}>
                  <Icon size={16} className={p.color} />
                  <span className={`text-xs font-semibold ${p.color}`}>
                    {p.tagline}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                  {p.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Products;
