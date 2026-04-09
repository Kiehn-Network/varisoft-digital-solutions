import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const Datenschutz = () => (
  <>
    <Navbar />
    <main className="pt-24 pb-16 bg-background min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <ScrollReveal>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">Datenschutzerklärung</h1>

          <div className="space-y-8 text-foreground/90 leading-relaxed">
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-2">
                1. Verantwortlicher
              </h2>
              <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
              <p className="mt-2">
                Léon Kiehn<br />
                Einzelunternehmen – Kiehn Dienstleistungen<br />
                Hardingstraße 6<br />
                21481 Lauenburg<br />
                Deutschland
              </p>
              <p className="mt-2">
                E-Mail:{" "}
                <a href="mailto:service@kiehn-systeme.de" className="text-primary hover:underline">
                  service@kiehn-systeme.de
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-2">
                2. Allgemeine Hinweise
              </h2>
              <p>
                Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen.
                Im Folgenden informieren wir Sie darüber, welche Daten bei Ihrem Besuch
                auf unserer Website erhoben und wie diese genutzt werden.
                Personenbezogene Daten werden von uns nur im Rahmen der geltenden
                Datenschutzgesetze, insbesondere der Datenschutz-Grundverordnung
                (DSGVO), verarbeitet.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-2">
                3. Erhebung und Speicherung personenbezogener Daten
              </h2>
              <p>
                Beim Besuch unserer Website werden automatisch Informationen durch den
                Browser übermittelt und in sogenannten Server-Log-Dateien gespeichert.
                Diese Informationen umfassen:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2 text-muted-foreground">
                <li>Browsertyp und -version</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer-URL (zuvor besuchte Seite)</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p className="mt-2">
                Diese Daten sind nicht bestimmten Personen zuordenbar. Eine
                Zusammenführung mit anderen Datenquellen wird nicht vorgenommen.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-2">
                4. Kontaktaufnahme per E-Mail
              </h2>
              <p>
                Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben (Name,
                E-Mail-Adresse, Inhalt der Nachricht) zum Zweck der Bearbeitung Ihrer
                Anfrage gespeichert. Eine Weitergabe an Dritte erfolgt nicht.
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung)
                bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-2">
                5. Cookies
              </h2>
              <p>
                Diese Website verwendet keine Tracking-Cookies und keine
                Analyse-Tools von Drittanbietern. Es werden lediglich technisch
                notwendige Cookies eingesetzt, die für den Betrieb der Website
                erforderlich sind.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-2">
                6. Ihre Rechte
              </h2>
              <p>Sie haben das Recht auf:</p>
              <ul className="list-disc list-inside space-y-1 mt-2 text-muted-foreground">
                <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
                <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
                <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
                <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              </ul>
              <p className="mt-2">
                Zur Ausübung Ihrer Rechte wenden Sie sich bitte an die oben genannte
                E-Mail-Adresse.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-2">
                7. Beschwerderecht
              </h2>
              <p>
                Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren,
                wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer
                personenbezogenen Daten gegen die DSGVO verstößt.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-2">
                8. Aktualität
              </h2>
              <p>
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand April 2026.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </main>
    <Footer />
  </>
);

export default Datenschutz;
