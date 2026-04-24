"use client";

import { ItineraryEvent } from "@/types";
import { getEventColor, getEventDot, getMapsUrl } from "@/utils";
import { MapPinIcon, ExternalLinkIcon, StickyNoteIcon, TicketIcon, FileTextIcon } from "lucide-react";
import clsx from "clsx";

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
        <div className={clsx("w-2.5 h-2.5 rounded-full mt-1.5 shrink-0", dotClass)} />
        {!isLast && <div className="w-px flex-1 bg-white/8 mt-1" />}
      </div>

      {/* Card */}
      <div className="flex-1 pb-4">
        <div className="bg-white/[0.04] border border-white/8 rounded-2xl p-4 hover:border-white/15 transition-colors duration-200">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-fg-muted mb-1">
                {event.time}
              </p>
              <h3 className="text-[15px] font-semibold text-white leading-tight">
                {event.title}
              </h3>
            </div>
            <span className={clsx("shrink-0 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-lg border", colorClass)}>
              {event.type}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-fg-tertiary">
            <MapPinIcon size={12} className="shrink-0" />
            <span className="text-[12px] truncate">{event.location}</span>
          </div>

          {event.notes && (
            <div className="flex items-start gap-1.5 mt-2 text-fg-muted">
              <StickyNoteIcon size={12} className="shrink-0 mt-0.5" />
              <span className="text-[11px] leading-snug">{event.notes}</span>
            </div>
          )}

          {(event.address || event.bookingUrl || event.docUrl) && (
            <div className="flex items-center gap-3 mt-3 flex-wrap">
              {event.address && (
                <a
                  href={getMapsUrl(event.address)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-accent hover:text-accent-subtle transition-colors"
                >
                  <span className="text-[11px] font-medium">Open in Maps</span>
                  <ExternalLinkIcon size={11} />
                </a>
              )}
              {event.bookingUrl && (
                <a
                  href={event.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-accent/10 border border-accent/25 text-accent hover:bg-accent/15 transition-colors px-2.5 py-1 rounded-lg"
                >
                  <TicketIcon size={11} />
                  <span className="text-[11px] font-semibold">{event.bookingLabel ?? "Book"}</span>
                </a>
              )}
              {event.docUrl && (
                <a
                  href={event.docUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-white/8 border border-white/12 text-fg-secondary hover:text-white hover:border-white/20 transition-colors px-2.5 py-1 rounded-lg"
                >
                  <FileTextIcon size={11} />
                  <span className="text-[11px] font-semibold">{event.docLabel ?? "Document"}</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
