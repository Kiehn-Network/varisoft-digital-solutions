import ProductDetailLayout from "@/components/ProductDetailLayout";
import alarmPreview from "@/assets/alarmdesk-preview.jpg";
import alarm3d from "@/assets/alarmdesk-3d.jpg";
import { Globe, Users, Bell, Shield, MapPin, FileText } from "lucide-react";

const AlarmDesk = () => (
  <ProductDetailLayout
    badge="Flaggschiff-Produkt"
    badgeColor="border-product-alarm/50 text-product-alarm"
    title="Alarm"
    titleAccent="Desk."
    accentColorClass="text-product-alarm"
    subtitle="Erlebe die nächste Generation der Einsatzverwaltung."
    description="AlarmDesk bündelt Leitstelle, Einsätze und Dokumentation in einer Oberfläche."
    features={[
      {
        title: "Digitales Einsatzmanagement",
        description: "Digitalisiere deine Leitstelle mit AlarmDesk – von der Einsatzannahme über die Ressourcenverwaltung bis zur Einsatzdokumentation, alles in einer Lösung.",
        icon: Globe,
        image: alarmPreview,
        span: "half",
      },
      {
        title: "Echtzeit-Einblicke",
        description: "Verfolge alle Ereignisse live auf interaktiven Karten mit sofortiger Benachrichtigung bei kritischen Alarmen.",
        icon: MapPin,
        span: "half",
        badgeText: "Live-Daten",
        accentBorder: "bg-product-alarm/20 text-product-alarm",
      },
      {
        title: "Modular aufgebaut",
        description: "Wähle die Module, die du brauchst – von der Einsatzplanung über die Ressourcenverwaltung bis zum Berichtswesen.",
        icon: Shield,
        span: "third",
      },
      {
        title: "Disponentensteuerung",
        description: "Einsätze zuweisen, Teams koordinieren und Schichten effizient planen.",
        icon: Users,
        span: "third",
      },
      {
        title: "Einsatz-Protokollierung",
        description: "Lückenlose Dokumentation aller Einsätze, Maßnahmen und Ergebnisse für maximale Transparenz.",
        icon: Bell,
        span: "third",
      },
      {
        title: "Berichtswesen",
        description: "Automatische Reports, Statistiken und Auswertungen – alles auf Knopfdruck exportierbar.",
        icon: FileText,
        span: "full",
      },
    ]}
    actionTitle="Erlebe AlarmDesk"
    actionTitleAccent="in Aktion."
    actionDescription="Keine geschönten Renderings. So sieht AlarmDesk wirklich aus."
    actionImage={alarm3d}
    highlights={[
      { value: "99.9%", label: "Verfügbarkeit" },
      { value: "< 2s", label: "Reaktionszeit" },
      { value: "24/7", label: "Support" },
    ]}
  />
);

export default AlarmDesk;
