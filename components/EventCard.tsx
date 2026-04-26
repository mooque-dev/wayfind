"use client";

import { ItineraryEvent } from "@/types";
import { getEventColor, getEventDot, getMapsUrl } from "@/utils";
import { MapPinIcon, ExternalLinkIcon, StickyNoteIcon, TicketIcon, FileTextIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface EventCardProps {
  event: ItineraryEvent;
  isLast?: boolean;
}

export default function EventCard({ event, isLast }: EventCardProps) {
  const colorClass = getEventColor(event.type);
  const dotClass = getEventDot(event.type);

  return (
    <div className="flex gap-3">
      {/* Timeline column */}
      <div className="flex flex-col items-center">
        <div className={cn("w-2.5 h-2.5 rounded-full mt-1.5 shrink-0", dotClass)} />
        {!isLast && <div className="w-px flex-1 bg-white/8 mt-1" />}
      </div>

      {/* Card */}
      <div className="flex-1 pb-4">
        <Card className="bg-white/[0.04] border-white/8 ring-0 hover:border-white/15 transition-colors duration-200 rounded-2xl gap-0 py-4">
          <CardContent className="px-4 space-y-2">
            {/* Time + type row */}
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-fg-muted mb-1">
                  {event.time}
                </p>
                <h3 className="text-[15px] font-semibold text-white leading-tight">
                  {event.title}
                </h3>
              </div>
              <Badge
                className={cn(
                  "shrink-0 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-lg h-auto border",
                  colorClass
                )}
              >
                {event.type}
              </Badge>
            </div>

            {/* Location */}
            <div className="flex items-center gap-1.5 text-fg-tertiary">
              <MapPinIcon size={12} className="shrink-0" />
              <span className="text-[12px] truncate">{event.location}</span>
            </div>

            {/* Notes */}
            {event.notes && (
              <div className="flex items-start gap-1.5 text-fg-muted">
                <StickyNoteIcon size={12} className="shrink-0 mt-0.5" />
                <span className="text-[11px] leading-snug">{event.notes}</span>
              </div>
            )}

            {/* Action links */}
            {(event.address || event.bookingUrl || event.docUrl) && (
              <div className="flex items-center gap-2 pt-1 flex-wrap">
                {event.address && (
                  <a
                    href={getMapsUrl(event.address)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-accent hover:text-accent-subtle transition-colors text-[11px] font-medium"
                  >
                    Open in Maps <ExternalLinkIcon size={11} />
                  </a>
                )}
                {event.bookingUrl && (
                  <a
                    href={event.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-accent/10 border border-accent/25 text-accent hover:bg-accent/15 transition-colors px-2.5 py-1 rounded-lg text-[11px] font-semibold"
                  >
                    <TicketIcon size={11} />
                    {event.bookingLabel ?? "Book"}
                  </a>
                )}
                {event.docUrl && (
                  <a
                    href={event.docUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-info/10 border border-info/25 text-info hover:bg-info/15 transition-colors px-2.5 py-1 rounded-lg text-[11px] font-semibold"
                  >
                    <FileTextIcon size={11} />
                    {event.docLabel ?? "Document"}
                  </a>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
