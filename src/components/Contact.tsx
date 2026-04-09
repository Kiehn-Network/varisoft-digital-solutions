import { Mail, ArrowRight } from "lucide-react";

const Contact = () => (
  <section id="kontakt" className="py-24 bg-background">
    <div className="container mx-auto px-4 max-w-2xl text-center">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-6">
        <Mail size={28} className="text-primary" />
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
        Lassen Sie uns sprechen
      </h2>
      <p className="text-muted-foreground mb-10 leading-relaxed">
        Sie haben eine Idee oder suchen eine Softwarelösung? Wir freuen uns auf
        Ihre Nachricht und melden uns zeitnah bei Ihnen.
      </p>
      <a
        href="mailto:info@varisoft.de"
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
      >
        info@varisoft.de <ArrowRight size={18} />
      </a>
    </div>
  </section>
);

export default Contact;
