import ProductDetailLayout from "@/components/ProductDetailLayout";
import winterPreview from "@/assets/winterflow-preview.jpg";
import winter3d from "@/assets/winterflow-3d.jpg";
import { Workflow, Zap, Clock, GitBranch, BarChart3, Settings } from "lucide-react";

const WinterFlow = () => (
  <ProductDetailLayout
    badge="WinterFlow"
    badgeColor="border-product-winter/50 text-product-winter"
    title="Winterdienst."
    titleAccent="Digital verwaltet."
    accentColorClass="text-product-winter"
    subtitle="Professionelle Auftragsverwaltung für Ihren Winterdienst – von der Disposition bis zur Abrechnung, alles in einer Lösung."
    description="Weniger Klicks. Mehr Ergebnisse."
    features={[
      {
        title: "Winterdienst, Digitalisiert",
        description: "Erstellen Sie die perfekten Winterdienst-Workflows – von der Auftragsannahme bis zur Abrechnung, alles in einer Lösung.",
        icon: Workflow,
        image: winterPreview,
        span: "half",
      },
      {
        title: "Aufgabenmanagement",
        description: "Aufgaben zuweisen, Fristen setzen und Fortschritte in Echtzeit tracken.",
        icon: Zap,
        span: "half",
        badgeText: "Neu",
        accentBorder: "bg-product-winter/20 text-product-winter",
      },
      {
        title: "Echtzeit-Synchronisation",
        description: "Alle Änderungen sofort für das gesamte Team sichtbar – überall und jederzeit.",
        icon: Clock,
        span: "third",
      },
      {
        title: "Fahren & Routenplanung",
        description: "Erstelle optimale Routen für deine Fahrer und halte sie über Änderungen auf dem Laufenden.",
        icon: GitBranch,
        span: "third",
      },
      {
        title: "Analytics & Reports",
        description: "Verstehe Engpässe und optimiere Prozesse mit detaillierten Auswertungen.",
        icon: BarChart3,
        span: "third",
      },
      {
        title: "Live-Karte & Tracking",
        description: "Behalte den Überblick über alle laufenden Aufträge mit unserer interaktiven Karte.",
        icon: Settings,
        span: "full",
      },
    ]}
    actionTitle="Workflows"
    actionTitleAccent="neu gedacht."
    actionDescription="Sehe wie WinterFlow Prozesse automatisiert und Teams verbindet."
    actionImage={winter3d}
    highlights={[
      { value: "10x", label: "Schnellere Prozesse" },
      { value: "0", label: "Code erforderlich" },
      { value: "∞", label: "Integrationen" },
    ]}
  />
);

export default WinterFlow;
