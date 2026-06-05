import { type LucideIcon, ArrowLeft, ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export interface ProductFeature {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
  span: "full" | "half" | "third";
  badgeText?: string;
  accentBorder?: string;
}

interface ProductDetailLayoutProps {
  badge: string;
  badgeColor: string;
  title: string;
  titleAccent: string;
  accentColorClass: string;
  subtitle: string;
  description: string;
  features: ProductFeature[];
  actionTitle: string;
  actionTitleAccent: string;
  actionDescription: string;
  actionImage: string;
  highlights: { label: string; value: string }[];
}

const spanClasses: Record<string, string> = {
  full: "sm:col-span-6 min-h-[220px]",
  half: "sm:col-span-3 min-h-[200px]",
  third: "sm:col-span-2 min-h-[200px]",
};

const ProductDetailLayout = ({
  badge,
  badgeColor,
  title,
  titleAccent,
  accentColorClass,
  subtitle,
  description,
  features,
  actionTitle,
  actionTitleAccent,
  actionDescription,
  actionImage,
  highlights,
}: ProductDetailLayoutProps) => (
  <>
    <Navbar />
    <div className="bg-product-section min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 gradient-mesh-dark overflow-hidden">
        <div className="pointer-events-none absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-blob" />
        <div className="container mx-auto px-4 text-center relative">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs text-product-section-muted hover:text-product-section-foreground transition-colors mb-6"
          >
            <ArrowLeft size={14} /> Zurück
          </Link>
          <div>
          <span className={`inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border ${badgeColor} mb-6`}>
            {badge}
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-product-section-foreground leading-tight tracking-tight">
            {title}
            <br />
            <span className={accentColorClass}>{titleAccent}</span>
          </h1>
          <p className="mt-6 text-lg text-product-section-muted max-w-xl mx-auto">
            {subtitle}
          </p>
          <p className="mt-2 text-sm text-product-section-muted/70 font-medium">
            {description}
          </p>
          </div>
        </div>
      </section>

      {/* Bento Feature Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-6 gap-4">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={i}
                  className={`relative rounded-2xl border border-product-section-border bg-product-section-card p-6 flex flex-col justify-end overflow-hidden group hover:border-product-section-muted/40 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 ${spanClasses[f.span]}`}
                >
                  {f.image && (
                    <>
                      <img
                        src={f.image}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover opacity-15 group-hover:opacity-30 group-hover:scale-105 transition-all duration-500 rounded-2xl"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-product-section-card via-product-section-card/60 to-transparent rounded-2xl" />
                    </>
                  )}
                  {f.badgeText && (
                    <span className={`absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${f.accentBorder || "bg-product-section-border/80 text-product-section-muted"}`}>
                      {f.badgeText}
                    </span>
                  )}
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-product-section-border/60 group-hover:bg-product-section-border flex items-center justify-center mb-4 transition-colors">
                      <Icon size={20} className={accentColorClass} />
                    </div>
                    <h3 className="text-lg font-bold text-product-section-foreground mb-1.5">
                      {f.title}
                    </h3>
                    <p className="text-sm text-product-section-muted leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Action / Showcase Section */}
      <section className="pb-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-product-section-foreground mb-3">
            {actionTitle} <span className={accentColorClass}>{actionTitleAccent}</span>
          </h2>
          <p className="text-sm text-product-section-muted mb-12 max-w-lg mx-auto">
            {actionDescription}
          </p>

          <div className="flex flex-col lg:flex-row gap-6 items-stretch">
            <div className="flex-[2] rounded-2xl overflow-hidden border border-product-section-border group">
              <img
                src={actionImage}
                alt=""
                className="w-full h-full object-cover min-h-[300px] group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                width={1280}
                height={768}
              />
            </div>
            <div className="flex-1 flex flex-col gap-4">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-2xl border border-product-section-border bg-product-section-card p-6 flex flex-col justify-center hover:-translate-y-1 hover:border-product-section-muted/40 transition-all duration-300"
                >
                  <p className={`text-2xl font-bold ${accentColorClass}`}>{h.value}</p>
                  <p className="text-sm text-product-section-muted mt-1">{h.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl border border-product-section-border bg-product-section-card p-10 sm:p-14 text-center overflow-hidden">
            <div className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <h3 className="text-2xl sm:text-3xl font-bold text-product-section-foreground mb-3 relative">
              Bereit für den nächsten Schritt?
            </h3>
            <p className="text-sm text-product-section-muted mb-8 max-w-md mx-auto relative">
              Lass uns gemeinsam herausfinden, wie {titleAccent.replace(".", "")} dein Team unterstützen kann.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 relative">
              <a
                href="mailto:info@varisoft.de"
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-full hover:glow-primary hover:-translate-y-0.5 transition-all text-sm"
              >
                <Mail size={16} /> Demo anfragen
                <ArrowRight size={16} className="arrow-cta" />
              </a>
              <Link
                to="/"
                className="inline-flex items-center gap-2 border border-product-section-border text-product-section-foreground font-semibold px-6 py-3 rounded-full hover:border-product-section-muted/40 transition-all text-sm"
              >
                <ArrowLeft size={16} /> Zur Übersicht
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </>
);

export default ProductDetailLayout;
