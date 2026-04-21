import { EventType, ExpenseCategory } from "@/types";

export function getMapsUrl(address: string): string {
  const query = encodeURIComponent(address);
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

export function getEventColor(type: EventType): string {
  const map: Record<EventType, string> = {
    Transit: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    "Check-in": "text-green-400 bg-green-400/10 border-green-400/20",
    Food: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    Music: "text-purple-400 bg-purple-400/10 border-purple-400/20",
    Sights: "text-sky-400 bg-sky-400/10 border-sky-400/20",
    Shopping: "text-pink-400 bg-pink-400/10 border-pink-400/20",
    Museum: "text-orange-400 bg-orange-400/10 border-orange-400/20",
    Accommodation: "text-green-400 bg-green-400/10 border-green-400/20",
    Free: "text-neutral-400 bg-neutral-400/10 border-neutral-400/20",
  };
  return map[type] || "text-neutral-400 bg-neutral-400/10 border-neutral-400/20";
}

export function getEventDot(type: EventType): string {
  const map: Record<EventType, string> = {
    Transit: "bg-blue-400",
    "Check-in": "bg-green-400",
    Food: "bg-amber-400",
    Music: "bg-purple-400",
    Sights: "bg-sky-400",
    Shopping: "bg-pink-400",
    Museum: "bg-orange-400",
    Accommodation: "bg-green-400",
    Free: "bg-neutral-500",
  };
  return map[type] || "bg-neutral-500";
}

export function getCategoryIcon(category: ExpenseCategory): string {
  const map: Record<ExpenseCategory, string> = {
    Food: "🍽",
    Transit: "🚆",
    Accommodation: "🏨",
    Shopping: "🛍",
    Entertainment: "🎷",
    Other: "📌",
  };
  return map[category] || "📌";
}

export function getCategoryColor(category: ExpenseCategory): string {
  const map: Record<ExpenseCategory, string> = {
    Food: "#F59E0B",
    Transit: "#3B82F6",
    Accommodation: "#22C55E",
    Shopping: "#EC4899",
    Entertainment: "#A855F7",
    Other: "#6B7280",
  };
  return map[category] || "#6B7280";
}

export function formatCurrency(amount: number, currency = "EUR"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function getFlagEmoji(country: string): string {
  const map: Record<string, string> = {
    UK: "🇬🇧",
    Germany: "🇩🇪",
    Denmark: "🇩🇰",
  };
  return map[country] || "🌍";
}
