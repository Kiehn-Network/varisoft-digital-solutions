import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight } from "lucide-react";

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden hero-bg">
    <img
      src={heroBg}
      alt=""
      className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-lighten"
      width={1920}
      height={1024}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/10" />

    <div className="container mx-auto px-4 relative z-10 py-32">
      <p className="animate-fade-up text-sm font-semibold uppercase tracking-widest text-primary-foreground/60 mb-4">
        Software, die begeistert
      </p>
      <h1 className="animate-fade-up text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight text-primary-foreground max-w-3xl">
        Moderne Webanwendungen
        <br />
        <span className="text-gradient">für Ihr Unternehmen</span>
      </h1>
      <p className="animate-fade-up-delay-1 mt-6 text-lg sm:text-xl text-primary-foreground/70 max-w-xl">
        VariSoft entwickelt einfache, leistungsstarke Softwarelösungen –
        maßgeschneidert für Ihren Erfolg.
      </p>
      <div className="animate-fade-up-delay-2 mt-10 flex flex-wrap gap-4">
        <a
          href="#produkte"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity text-sm"
        >
          Unsere Produkte <ArrowRight size={18} />
        </a>
        <a
          href="#kontakt"
          className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground font-semibold px-7 py-3.5 rounded-xl hover:bg-primary-foreground/10 transition-colors text-sm"
        >
          Kontakt aufnehmen
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
