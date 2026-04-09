import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const Impressum = () => (
  <>
    <Navbar />
    <main className="pt-24 pb-16 bg-background min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <ScrollReveal>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">Impressum</h1>

          <div className="space-y-8 text-foreground/90 leading-relaxed">
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-2">
                Angaben gemäß § 5 TMG und § 18 MStV
              </h2>
              <p className="text-muted-foreground">Einzelunternehmen</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-2">Betreiber</h2>
              <p>Léon Kiehn</p>
              <p className="text-muted-foreground">
                Einzelunternehmen – Kiehn Dienstleistungen
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-2">Anschrift</h2>
              <p>Hardingstraße 6</p>
              <p>21481 Lauenburg</p>
              <p>Deutschland</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-2">Kontakt</h2>
              <p>
                E-Mail:{" "}
                <a href="mailto:service@kiehn-systeme.de" className="text-primary hover:underline">
                  service@kiehn-systeme.de
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-2">
                Verantwortlich für Inhalte
              </h2>
              <p>Verantwortlich gemäß § 18 Abs. 2 MStV:</p>
              <p>Léon Kiehn, Hardingstraße 6, 21481 Lauenburg</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-2">Geltungsbereich</h2>
              <p className="mb-2">Dieses Impressum gilt für folgende Domains:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>kiehn-systeme.de</li>
                <li>kiehn-dienstleistungen.de</li>
                <li>niftly.de</li>
                <li>alarmdesk-software.de</li>
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </main>
    <Footer />
  </>
);

export default Impressum;
