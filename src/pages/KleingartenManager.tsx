import ProductDetailLayout from "@/components/ProductDetailLayout";
import gardenPreview from "@/assets/kleingarten-preview.jpg";
import garden3d from "@/assets/kleingarten-3d.jpg";
import { Leaf, CalendarDays, BarChart3, Users, Mail, FileText } from "lucide-react";

const KleingartenManager = () => (
  <ProductDetailLayout
    badge="Vereinsverwaltung"
    badgeColor="border-product-garden/50 text-product-garden"
    title="DIGITAL"
    titleAccent="VERWALTEN."
    accentColorClass="text-product-garden"
    subtitle="Die komplette Verwaltungslösung für Kleingartenvereine."
    description="Parzellen. Mitglieder. Abrechnungen. Alles an einem Ort."
    features={[
      {
        title: "Parzellenverwaltung",
        description: "Alle Grundstücke im Überblick mit Belegung, Verträgen, Zählerständen und lückenloser Historie.",
        icon: Leaf,
        image: gardenPreview,
        span: "half",
      },
      {
        title: "Mitgliederverwaltung",
        description: "Kontakte, Beiträge, Dokumente und Kommunikation zentral verwalten.",
        icon: Users,
        span: "half",
      },
      {
        title: "Automatische Abrechnungen",
        description: "Wasser, Strom und Pacht automatisch berechnen, abrechnen und versenden.",
        icon: BarChart3,
        span: "third",
        badgeText: "Automatisiert",
        accentBorder: "bg-product-garden/20 text-product-garden",
      },
      {
        title: "Terminplanung",
        description: "Gemeinschaftsarbeit, Versammlungen und Termine einfach planen und kommunizieren.",
        icon: CalendarDays,
        span: "third",
      },
      {
        title: "Kommunikation",
        description: "Nachrichten an einzelne Mitglieder oder den ganzen Verein – direkt aus der App.",
        icon: Mail,
        span: "third",
      },
      {
        title: "Dokumentenverwaltung",
        description: "Satzungen, Protokolle und Verträge digital archivieren und jederzeit abrufen.",
        icon: FileText,
        span: "full",
      },
    ]}
    actionTitle="Der Verein"
    actionTitleAccent="im Überblick."
    actionDescription="Alles was Ihr Verein braucht – übersichtlich und digital."
    actionImage={garden3d}
    highlights={[
      { value: "500+", label: "Vereine nutzen es" },
      { value: "100%", label: "Papierlos" },
      { value: "DSGVO", label: "Konform" },
    ]}
  />
);

export default KleingartenManager;
