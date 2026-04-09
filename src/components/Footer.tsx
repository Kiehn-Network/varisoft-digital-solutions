import { Link } from "react-router-dom";
import logo from "@/assets/varisoft-logo.png";

const Footer = () => (
  <footer className="border-t border-border py-12 bg-card">
    <div className="container mx-auto px-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="VariSoft" className="h-10 w-10" width={80} height={80} />
          <span className="text-lg font-bold tracking-tight text-foreground">
            Vari<span className="text-primary">Soft</span>.
          </span>
        </Link>

        <div className="flex gap-8 text-sm text-muted-foreground">
          <Link to="/impressum" className="hover:text-foreground transition-colors">Impressum</Link>
          <Link to="/datenschutz" className="hover:text-foreground transition-colors">Datenschutz</Link>
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
