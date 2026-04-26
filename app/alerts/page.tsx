"use client";

import { useTripStore } from "@/store/tripStore";
import { AlertTriangleIcon, InfoIcon, CheckCircle2Icon, XCircleIcon, BellOffIcon, XIcon } from "lucide-react";
import { format, parseISO } from "date-fns";
import { Alert as AlertType } from "@/types";
import { Alert, AlertTitle, AlertDescription, AlertAction } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const iconMap = {
  warning: AlertTriangleIcon,
  info:    InfoIcon,
  success: CheckCircle2Icon,
  error:   XCircleIcon,
};

const styleMap = {
  warning: {
    card:  "border-amber-500/20 bg-amber-500/[0.06]",
    icon:  "[&>svg]:text-warning",
    badge: "bg-warning/15 text-warning border-transparent",
    title: "text-amber-100",
    msg:   "text-amber-200/60",
  },
  info: {
    card:  "border-blue-500/20 bg-blue-500/[0.06]",
    icon:  "[&>svg]:text-blue-400",
    badge: "bg-blue-400/15 text-blue-400 border-transparent",
    title: "text-blue-100",
    msg:   "text-blue-200/60",
  },
  success: {
    card:  "border-green-500/20 bg-green-500/[0.06]",
    icon:  "[&>svg]:text-green-400",
    badge: "bg-green-400/15 text-green-400 border-transparent",
    title: "text-green-100",
    msg:   "text-green-200/60",
  },
  error: {
    card:  "border-red-500/20 bg-red-500/[0.06]",
    icon:  "[&>svg]:text-red-400",
    badge: "bg-red-400/15 text-red-400 border-transparent",
    title: "text-red-100",
    msg:   "text-red-200/60",
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
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
          Wayfind
        </p>
        <h1 className="text-[26px] font-bold text-white leading-tight mt-0.5">
          Alerts
        </h1>
        <p className="text-[13px] text-fg-muted mt-0.5">
          {active.length} active · {dismissed.length} dismissed
        </p>
      </div>

      {/* Active alerts */}
      {active.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
          <BellOffIcon size={40} className="text-fg-ghost mb-4" />
          <p className="text-[15px] font-semibold text-fg-tertiary">All clear</p>
          <p className="text-[12px] text-fg-faint mt-1">No active alerts for your trip</p>
        </div>
      ) : (
        <div className="px-4 space-y-3 mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-fg-muted mb-2">
            Active
          </p>
          {active.map((a) => (
            <AlertCard key={a.id} alert={a} onDismiss={dismissAlert} />
          ))}
        </div>
      )}

      {/* Dismissed */}
      {dismissed.length > 0 && (
        <div className="px-4 space-y-3 pb-6">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-fg-muted mb-2">
            Dismissed
          </p>
          {dismissed.map((a) => (
            <AlertCard key={a.id} alert={a} onDismiss={dismissAlert} isDismissed />
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
  alert: AlertType;
  onDismiss: (id: string) => void;
  isDismissed?: boolean;
}) {
  const s = styleMap[alert.type];
  const Icon = iconMap[alert.type];

  return (
    <Alert
      className={cn(
        "rounded-2xl p-4 transition-opacity duration-300",
        s.card,
        s.icon,
        isDismissed && "opacity-40"
      )}
    >
      <Icon size={18} />
      <AlertTitle className={cn("text-[14px] font-semibold leading-tight", s.title)}>
        <div className="flex items-center gap-2 mb-1">
          <Badge className={cn("text-[10px] font-bold uppercase tracking-wider rounded-full h-auto px-2 py-0.5", s.badge)}>
            {alert.type}
          </Badge>
          <span className="text-[11px] text-fg-faint font-normal">
            {format(parseISO(alert.date), "MMM d")}
          </span>
        </div>
        {alert.title}
      </AlertTitle>
      <AlertDescription className={cn("text-[12px] leading-snug mt-1", s.msg)}>
        {alert.message}
      </AlertDescription>
      {!isDismissed && (
        <AlertAction>
          <Button
            variant="ghost"
            size="icon-xs"
            onClick={() => onDismiss(alert.id)}
            className="text-fg-faint hover:text-fg-secondary"
          >
            <XIcon size={16} />
          </Button>
        </AlertAction>
      )}
    </Alert>
  );
}
