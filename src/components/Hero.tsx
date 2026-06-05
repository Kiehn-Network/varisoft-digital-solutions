import heroTeam from "@/assets/hero-team.jpg";
import { ArrowRight, Star, Sparkles, Code } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const Hero = () => (
  <section className="relative bg-background gradient-mesh pt-28 pb-20 overflow-hidden">
    {/* Decorative blobs */}
    <div className="pointer-events-none absolute top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-blob" />
    <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: "4s" }} />

    <div className="container mx-auto px-4 relative">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left */}
        <ScrollReveal className="flex-1 space-y-6 max-w-xl">
          <div className="flex gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-primary/10 text-primary px-3 py-1.5 rounded-full">
              <Sparkles size={12} /> Software
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full">
              <Code size={12} /> Kiehn Network
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
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-full hover:glow-primary hover:-translate-y-0.5 transition-all duration-300 text-sm"
            >
              Unsere Produkte <ArrowRight size={16} className="arrow-cta" />
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 border border-border text-foreground font-semibold px-6 py-3 rounded-full hover:bg-muted hover:border-primary/30 transition-all duration-300 text-sm"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200} className="flex-1 relative w-full max-w-lg lg:max-w-none">
          <div className="relative">
            {/* Glow ring behind image */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 via-primary/10 to-transparent rounded-[2rem] blur-2xl opacity-60" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-border/50">
              <img
                src={heroTeam}
                alt="VariSoft Team bei der Arbeit"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                width={1024}
                height={1024}
              />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-xl border border-border p-5 animate-fade-up hover-lift">
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
            <div className="absolute -top-4 -right-4 bg-card rounded-2xl shadow-xl border border-border px-4 py-3 animate-fade-up-delay-1 hover-lift">
              <p className="text-2xl font-bold text-primary">3+</p>
              <p className="text-xs text-muted-foreground">Aktive Produkte</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default Hero;
