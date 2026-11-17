import {
  ArrowLeftRight,
  Blocks,
  Boxes,
  Cpu,
  Database,
  Gauge,
  Layers,
  Network,
  Orbit,
  RefreshCw,
  Rocket,
  Share2,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wand2,
  Waves,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { BRAND_SKILL_ICONS } from "@/data/skillIcons";

const CONCEPT_ICON_MAP: Record<string, { Icon: LucideIcon; color?: string }> = {
  SQL: { Icon: Database, color: "#0F80CC" },
  "REST APIs": { Icon: ArrowLeftRight, color: "#0284C7" },
  "Clean Architecture": { Icon: Layers, color: "#7C3AED" },
  "Domain-Driven Design": { Icon: Boxes, color: "#6D28D9" },
  "Modular Architecture": { Icon: Blocks, color: "#4F46E5" },
  RBAC: { Icon: ShieldCheck, color: "#15803D" },
  "REST API Design": { Icon: Network, color: "#0284C7" },
  "Bloc / Cubit": { Icon: Workflow, color: "#0284C7" },
  Riverpod: { Icon: Waves, color: "#0891B2" },
  Provider: { Icon: Share2, color: "#2563EB" },
  Antigravity: { Icon: Orbit, color: "#4F46E5" },
  Stitch: { Icon: Wand2, color: "#2563EB" },
  "System Design": { Icon: Cpu, color: "#475569" },
  "Agile / Scrum": { Icon: RefreshCw, color: "#0D9488" },
  "Product Development": { Icon: Rocket, color: "#EA580C" },
  "Performance Optimization": { Icon: Gauge, color: "#16A34A" },
  "Responsive UI": { Icon: Smartphone, color: "#2563EB" },
};

export function SkillLogo({ skill }: { skill: string }) {
  const brand = BRAND_SKILL_ICONS[skill];

  if (brand) {
    return (
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill={brand.color}
        aria-hidden="true"
        className="shrink-0"
      >
        <path d={brand.path} />
      </svg>
    );
  }

  const concept = CONCEPT_ICON_MAP[skill];
  const Icon = concept?.Icon ?? Sparkles;

  return (
    <Icon
      size={13}
      strokeWidth={1.9}
      style={concept?.color ? { color: concept.color } : undefined}
      className="shrink-0"
      aria-hidden="true"
    />
  );
}
