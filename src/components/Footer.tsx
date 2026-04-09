const Footer = () => (
  <footer className="border-t border-border py-8 bg-card">
    <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <span>© {new Date().getFullYear()} VariSoft. Alle Rechte vorbehalten.</span>
      <div className="flex gap-6">
        <a href="#" className="hover:text-foreground transition-colors">Impressum</a>
        <a href="#" className="hover:text-foreground transition-colors">Datenschutz</a>
      </div>
    </div>
  </footer>
);

export default Footer;
