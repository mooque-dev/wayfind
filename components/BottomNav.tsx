"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapIcon, CalendarDaysIcon, BanknoteIcon, BellIcon } from "lucide-react";
import clsx from "clsx";

const tabs = [
  { href: "/itinerary", label: "Plan", Icon: CalendarDaysIcon },
  { href: "/map", label: "Map", Icon: MapIcon },
  { href: "/budget", label: "Budget", Icon: BanknoteIcon },
  { href: "/alerts", label: "Alerts", Icon: BellIcon },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-[#0e0e0e]/95 backdrop-blur-xl border-t border-white/5 z-50">
      <div className="flex items-center justify-around px-2 pb-[env(safe-area-inset-bottom)] h-16">
        {tabs.map(({ href, label, Icon }) => {
          const active = pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={clsx(
                "flex flex-col items-center gap-1 flex-1 py-2 transition-all duration-200",
                active ? "text-amber-400" : "text-neutral-500 hover:text-neutral-300"
              )}
            >
              <Icon
                size={22}
                strokeWidth={active ? 2.5 : 1.8}
                className="transition-transform duration-200"
              />
              <span className="text-[10px] font-medium tracking-wide uppercase">
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
