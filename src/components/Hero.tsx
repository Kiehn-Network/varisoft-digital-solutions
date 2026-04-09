import heroTeam from "@/assets/hero-team.jpg";
import { ArrowRight, Star, Sparkles, Code } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const Hero = () => (
  <section className="relative bg-background pt-28 pb-16 overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left */}
        <ScrollReveal className="flex-1 space-y-6 max-w-xl">
          <div className="flex gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-primary/10 text-primary px-3 py-1.5 rounded-full">
              <Sparkles size={12} /> Software
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full">
              <Code size={12} /> Entwicklung
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-foreground tracking-tight">
            Digitale Lösungen für Ihr{" "}
            <span className="text-primary">Unternehmen</span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Unser Team entwickelt moderne, maßgeschneiderte Webanwendungen –
            von der Idee bis zum Go-Live. Zuverlässig, effizient und immer an Ihrer Seite.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#produkte"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity text-sm"
            >
              Unsere Produkte <ArrowRight size={16} />
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 border border-border text-foreground font-semibold px-6 py-3 rounded-full hover:bg-muted transition-colors text-sm"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200} className="flex-1 relative w-full max-w-lg lg:max-w-none">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroTeam}
                alt="VariSoft Team bei der Arbeit"
                className="w-full h-auto object-cover"
                width={1024}
                height={1024}
              />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-lg border border-border p-5 animate-fade-up">
              <div className="flex items-center gap-3">
                <span className="text-4xl font-extrabold text-foreground">4.9</span>
                <div>
                  <div className="flex gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">Kundenzufriedenheit</p>
                </div>
              </div>
            </div>

            {/* Floating projects card */}
            <div className="absolute -top-4 -right-4 bg-card rounded-2xl shadow-lg border border-border px-4 py-3 animate-fade-up-delay-1">
              <p className="text-2xl font-bold text-primary">3+</p>
              <p className="text-xs text-muted-foreground">Aktive Produkte</p>
            </div>
          </div>
        </ScrollReveal>
    </div>
  </section>
);

export default Hero;
