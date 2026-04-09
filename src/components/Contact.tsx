import { Mail, ArrowRight, MapPin, Phone } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const Contact = () => (
  <section id="kontakt" className="py-24 bg-muted/30">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-primary/10 text-primary px-3 py-1.5 rounded-full mb-4">
            Kontakt
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Lassen Sie uns <span className="text-primary">sprechen</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Sie haben eine Idee oder suchen eine Softwarelösung? Wir freuen uns auf
            Ihre Nachricht und melden uns zeitnah bei Ihnen.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={150} className="grid sm:grid-cols-3 gap-6">
          <a
            href="mailto:info@varisoft.de"
            className="bg-card rounded-2xl border border-border p-6 text-center hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
              <Mail size={22} className="text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">E-Mail</h3>
            <p className="text-sm text-muted-foreground">info@varisoft.de</p>
          </a>

          <div className="bg-card rounded-2xl border border-border p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
              <Phone size={22} className="text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Telefon</h3>
            <p className="text-sm text-muted-foreground">Auf Anfrage</p>
          </div>

          <div className="bg-card rounded-2xl border border-border p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
              <MapPin size={22} className="text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Standort</h3>
            <p className="text-sm text-muted-foreground">Deutschland</p>
          </div>
        </ScrollReveal>

        <div className="text-center mt-10">
          <a
            href="mailto:info@varisoft.de"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity text-sm"
          >
            Projekt anfragen <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
