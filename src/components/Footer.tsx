import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border py-12 bg-card">
    <div className="container mx-auto px-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <Link to="/" className="text-lg font-bold tracking-tight text-foreground">
          Vari<span className="text-primary">Soft</span>.
        </Link>

        <div className="flex gap-8 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Impressum</a>
          <a href="#" className="hover:text-foreground transition-colors">Datenschutz</a>
          <a href="mailto:info@varisoft.de" className="hover:text-foreground transition-colors">Kontakt</a>
        </div>

        <span className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} VariSoft
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
