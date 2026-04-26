"use client";

import { useTripStore } from "@/store/tripStore";
import { XIcon, AlertTriangleIcon, InfoIcon, CheckCircle2Icon, XCircleIcon } from "lucide-react";
import { Alert, AlertTitle, AlertDescription, AlertAction } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const iconMap = {
  warning: AlertTriangleIcon,
  info: InfoIcon,
  success: CheckCircle2Icon,
  error: XCircleIcon,
};

const colorMap = {
  warning: "border-amber-500/30 bg-amber-500/10 [&>svg]:text-warning",
  info:    "border-blue-500/30  bg-blue-500/10  [&>svg]:text-blue-400",
  success: "border-green-500/30 bg-green-500/10 [&>svg]:text-green-400",
  error:   "border-red-500/30   bg-red-500/10   [&>svg]:text-red-400",
};

const titleColor = {
  warning: "text-amber-100",
  info:    "text-blue-100",
  success: "text-green-100",
  error:   "text-red-100",
};

const descColor = {
  warning: "text-amber-200/60",
  info:    "text-blue-200/60",
  success: "text-green-200/60",
  error:   "text-red-200/60",
};

export default function AlertBanner() {
  const { getActiveAlerts, dismissAlert } = useTripStore();
  const alerts = getActiveAlerts();
  if (alerts.length === 0) return null;

  const top = alerts[0];
  const Icon = iconMap[top.type];

  return (
    <Alert className={cn("mx-4 mb-3 rounded-xl px-4 py-3", colorMap[top.type])}>
      <Icon size={16} />
      <AlertTitle className={cn("text-[13px] font-semibold leading-tight", titleColor[top.type])}>
        {top.title}
      </AlertTitle>
      <AlertDescription className={cn("text-[12px]", descColor[top.type])}>
        {top.message}
        {alerts.length > 1 && (
          <span className="block text-fg-muted mt-1 text-[11px]">
            +{alerts.length - 1} more alert{alerts.length > 2 ? "s" : ""}
          </span>
        )}
      </AlertDescription>
      <AlertAction>
        <Button
          variant="ghost"
          size="icon-xs"
          className="text-fg-muted hover:text-fg-secondary"
          onClick={() => dismissAlert(top.id)}
        >
          <XIcon size={14} />
        </Button>
      </AlertAction>
    </Alert>
  );
}
