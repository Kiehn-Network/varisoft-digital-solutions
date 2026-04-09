import { Shield, Leaf, Workflow } from "lucide-react";
import { Link } from "react-router-dom";

const clients = [
  { icon: Shield, name: "AlarmDesk", desc: "Leitstellensoftware", color: "text-product-alarm", link: "/alarmdesk" },
  { icon: Leaf, name: "KleingartenManager", desc: "Vereinsverwaltung", color: "text-product-garden", link: "/kleingartenmanager" },
  { icon: Workflow, name: "WinterFlow", desc: "Workflow-Engine", color: "text-product-winter", link: "/winterflow" },
];

const TrustedBy = () => (
  <section className="py-12 border-y border-border bg-muted/30">
    <div className="container mx-auto px-4">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">
        Unsere Produkte im Einsatz
      </p>
      <div className="flex flex-wrap justify-center gap-10">
        {clients.map((c) => {
          const Icon = c.icon;
          return (
            <Link
              key={c.name}
              to={c.link}
              className="flex items-center gap-3 group"
            >
              <Icon size={24} className={`${c.color} opacity-60 group-hover:opacity-100 transition-opacity`} />
              <div>
                <p className="text-sm font-semibold text-foreground/70 group-hover:text-foreground transition-colors">{c.name}</p>
                <p className="text-xs text-muted-foreground">{c.desc}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  </section>
);

export default TrustedBy;
