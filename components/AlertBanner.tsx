"use client";

import { useTripStore } from "@/store/tripStore";
import { XIcon, AlertTriangleIcon, InfoIcon } from "lucide-react";
import clsx from "clsx";

export default function AlertBanner() {
  const { getActiveAlerts, dismissAlert } = useTripStore();
  const alerts = getActiveAlerts();
  if (alerts.length === 0) return null;

  const top = alerts[0];

  const styles = {
    warning: {
      bg: "bg-amber-500/10 border-amber-500/30",
      icon: "text-amber-400",
      text: "text-amber-100",
      sub: "text-amber-300/70",
    },
    info: {
      bg: "bg-blue-500/10 border-blue-500/30",
      icon: "text-blue-400",
      text: "text-blue-100",
      sub: "text-blue-300/70",
    },
    success: {
      bg: "bg-green-500/10 border-green-500/30",
      icon: "text-green-400",
      text: "text-green-100",
      sub: "text-green-300/70",
    },
    error: {
      bg: "bg-red-500/10 border-red-500/30",
      icon: "text-red-400",
      text: "text-red-100",
      sub: "text-red-300/70",
    },
  };

  const s = styles[top.type];

  return (
    <div className={clsx("mx-4 mb-3 rounded-xl border px-4 py-3 flex items-start gap-3", s.bg)}>
      <div className={clsx("mt-0.5 shrink-0", s.icon)}>
        {top.type === "warning" ? (
          <AlertTriangleIcon size={16} />
        ) : (
          <InfoIcon size={16} />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className={clsx("text-[13px] font-semibold leading-tight", s.text)}>
          {top.title}
        </p>
        <p className={clsx("text-[12px] leading-snug mt-0.5", s.sub)}>
          {top.message}
        </p>
        {alerts.length > 1 && (
          <p className="text-[11px] text-neutral-500 mt-1">
            +{alerts.length - 1} more alert{alerts.length > 2 ? "s" : ""}
          </p>
        )}
      </div>
      <button
        onClick={() => dismissAlert(top.id)}
        className="text-neutral-500 hover:text-neutral-300 transition-colors shrink-0 mt-0.5"
      >
        <XIcon size={14} />
      </button>
    </div>
  );
}
