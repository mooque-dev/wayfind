"use client";

import { useTripStore } from "@/store/tripStore";
import { AlertTriangleIcon, InfoIcon, CheckCircle2Icon, XCircleIcon, BellOffIcon, XIcon } from "lucide-react";
import { format, parseISO } from "date-fns";
import clsx from "clsx";
import { Alert } from "@/types";

const iconMap = {
  warning: AlertTriangleIcon,
  info: InfoIcon,
  success: CheckCircle2Icon,
  error: XCircleIcon,
};

const styleMap = {
  warning: {
    border: "border-amber-500/20",
    bg: "bg-amber-500/[0.06]",
    icon: "text-amber-400",
    badge: "bg-amber-400/15 text-amber-400",
    title: "text-amber-100",
    msg: "text-amber-200/60",
  },
  info: {
    border: "border-blue-500/20",
    bg: "bg-blue-500/[0.06]",
    icon: "text-blue-400",
    badge: "bg-blue-400/15 text-blue-400",
    title: "text-blue-100",
    msg: "text-blue-200/60",
  },
  success: {
    border: "border-green-500/20",
    bg: "bg-green-500/[0.06]",
    icon: "text-green-400",
    badge: "bg-green-400/15 text-green-400",
    title: "text-green-100",
    msg: "text-green-200/60",
  },
  error: {
    border: "border-red-500/20",
    bg: "bg-red-500/[0.06]",
    icon: "text-red-400",
    badge: "bg-red-400/15 text-red-400",
    title: "text-red-100",
    msg: "text-red-200/60",
  },
};

export default function AlertsPage() {
  const { alerts, dismissAlert } = useTripStore();
  const active = alerts.filter((a) => !a.dismissed);
  const dismissed = alerts.filter((a) => a.dismissed);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="px-4 pt-12 pb-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400">
          Wayfind
        </p>
        <h1 className="text-[26px] font-bold text-white leading-tight mt-0.5">
          Alerts
        </h1>
        <p className="text-[13px] text-neutral-500 mt-0.5">
          {active.length} active · {dismissed.length} dismissed
        </p>
      </div>

      {/* Active alerts */}
      {active.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
          <BellOffIcon size={40} className="text-neutral-700 mb-4" />
          <p className="text-[15px] font-semibold text-neutral-400">All clear</p>
          <p className="text-[12px] text-neutral-600 mt-1">No active alerts for your trip</p>
        </div>
      ) : (
        <div className="px-4 space-y-3 mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-neutral-500 mb-2">
            Active
          </p>
          {active.map((alert) => (
            <AlertCard key={alert.id} alert={alert} onDismiss={dismissAlert} />
          ))}
        </div>
      )}

      {/* Dismissed */}
      {dismissed.length > 0 && (
        <div className="px-4 space-y-3 pb-6">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-neutral-500 mb-2">
            Dismissed
          </p>
          {dismissed.map((alert) => (
            <AlertCard key={alert.id} alert={alert} onDismiss={dismissAlert} isDismissed />
          ))}
        </div>
      )}
    </div>
  );
}

function AlertCard({
  alert,
  onDismiss,
  isDismissed,
}: {
  alert: Alert;
  onDismiss: (id: string) => void;
  isDismissed?: boolean;
}) {
  const s = styleMap[alert.type];
  const Icon = iconMap[alert.type];

  return (
    <div
      className={clsx(
        "rounded-2xl border p-4 transition-opacity duration-300",
        s.bg,
        s.border,
        isDismissed && "opacity-40"
      )}
    >
      <div className="flex items-start gap-3">
        <Icon size={18} className={clsx("mt-0.5 shrink-0", s.icon)} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className={clsx("text-[10px] font-bold uppercase px-2 py-0.5 rounded-full tracking-wider", s.badge)}>
              {alert.type}
            </span>
            <span className="text-[11px] text-neutral-600">
              {format(parseISO(alert.date), "MMM d")}
            </span>
          </div>
          <p className={clsx("text-[14px] font-semibold leading-tight", s.title)}>
            {alert.title}
          </p>
          <p className={clsx("text-[12px] leading-snug mt-1", s.msg)}>
            {alert.message}
          </p>
        </div>
        {!isDismissed && (
          <button
            onClick={() => onDismiss(alert.id)}
            className="text-neutral-600 hover:text-neutral-300 transition-colors shrink-0"
          >
            <XIcon size={16} />
          </button>
        )}
      </div>
    </div>
  );
}
