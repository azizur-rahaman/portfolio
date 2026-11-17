import {
  BookOpen,
  Building2,
  Camera,
  Cloud,
  GraduationCap,
  HeartHandshake,
  Newspaper,
  QrCode,
  Scale,
  ShoppingBag,
  Smartphone,
  Sun,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import type { AppIconName } from "@/data/portfolio";

const APP_ICON_MAP: Record<AppIconName | string, LucideIcon> = {
  cloud: Cloud,
  sun: Sun,
  wallet: Wallet,
  shoppingBag: ShoppingBag,
  scale: Scale,
  heartHandshake: HeartHandshake,
  bookOpen: BookOpen,
  newspaper: Newspaper,
  qrCode: QrCode,
  building2: Building2,
  camera: Camera,
  graduationCap: GraduationCap,
  // Product slug fallbacks so ProductCard and DetailPage reuse the exact same mapping
  "a-cloud-planet": Cloud,
  "good-morning-quotes": Sun,
  lenden: Wallet,
  zabihaty: ShoppingBag,
  weightnote: Scale,
  "bhalo-kaj": HeartHandshake,
  "al-quran": BookOpen,
  "news-app-flash": Newspaper,
  safeqr: QrCode,
  ghorlagbee: Building2,
  "passport-photo-editor": Camera,
  classmates: GraduationCap,
};

export function AppIcon({
  name,
  size = 16,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Icon = APP_ICON_MAP[name] ?? Smartphone;
  return <Icon size={size} strokeWidth={1.75} className={className} aria-hidden="true" />;
}
