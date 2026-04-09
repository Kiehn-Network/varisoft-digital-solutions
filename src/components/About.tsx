import { Code2, Zap, Users, ShieldCheck, Headphones, Rocket } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const values = [
  {
    icon: Code2,
    title: "Moderne Technologien",
    text: "Wir setzen auf aktuelle Frameworks und bewährte Architekturmuster für zukunftssichere Lösungen.",
  },
  {
    icon: Zap,
    title: "Einfach & Effizient",
    text: "Unsere Software ist intuitiv bedienbar – damit Ihr Team sofort produktiv arbeiten kann.",
  },
  {
    icon: Users,
    title: "Partnerschaftlich",
    text: "Wir verstehen uns als Teil Ihres Teams und begleiten Sie von der Idee bis zum Go-Live.",
  },
  {
    icon: ShieldCheck,
    title: "Sicher & Zuverlässig",
    text: "Höchste Sicherheitsstandards und eine Verfügbarkeit von 99.9% für Ihre kritischen Prozesse.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    text: "Unser Support-Team ist rund um die Uhr für Sie erreichbar – per Telefon, E-Mail oder Chat.",
  },
  {
    icon: Rocket,
    title: "Schnelle Umsetzung",
    text: "Von der Idee zum fertigen Produkt in Rekordzeit – agil, transparent und effizient.",
  },
];

const About = () => (
  <section id="ueber-uns" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <ScrollReveal className="text-center mb-16 max-w-2xl mx-auto">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-primary/10 text-primary px-3 py-1.5 rounded-full mb-4">
          Warum VariSoft?
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
          Wir machen komplexe Prozesse{" "}
          <span className="text-primary">einfach</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Mit über 3 erfolgreichen Produkten und zufriedenen Kunden wissen wir,
          worauf es ankommt.
        </p>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {values.map((v, i) => {
          const Icon = v.icon;
          return (
            <ScrollReveal key={v.title} delay={i * 100}>
              <div className="bg-card rounded-2xl p-7 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group h-full">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
                  <Icon size={22} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {v.text}
                </p>
              </div>
            </ScrollReveal>
          );
        })}
          );
        })}
      </div>
    </div>
  </section>
);

export default About;
