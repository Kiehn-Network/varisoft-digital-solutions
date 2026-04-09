import { Code2, Zap, Users } from "lucide-react";

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
];

const About = () => (
  <section id="ueber-uns" className="py-24 bg-muted/50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
          Über VariSoft
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground max-w-2xl mx-auto">
          Wir machen komplexe Prozesse einfach – mit Software, die begeistert
        </h2>
      </div>

      <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {values.map((v) => {
          const Icon = v.icon;
          return (
            <div
              key={v.title}
              className="bg-card rounded-2xl p-8 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-shadow duration-300 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-5">
                <Icon size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {v.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default About;
