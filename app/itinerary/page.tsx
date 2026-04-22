"use client";

import { useTripStore } from "@/store/tripStore";
import { itinerary } from "@/data/tripData";
import DatePicker from "@/components/DatePicker";
import EventCard from "@/components/EventCard";
import AlertBanner from "@/components/AlertBanner";
import { getFlagEmoji } from "@/utils";
import { format, parseISO } from "date-fns";

export default function ItineraryPage() {
  const { selectedDate, getActiveAlerts } = useTripStore();
  const day = itinerary.find((d) => d.date === selectedDate);
  const alertCount = getActiveAlerts().length;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="px-4 pt-12 pb-2">
        <div className="flex items-center justify-between mb-1">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
              Wayfind
            </p>
            <h1 className="text-[26px] font-bold text-white leading-tight mt-0.5">
              Europe Trip
            </h1>
            <p className="text-[13px] text-fg-muted mt-0.5">
              Apr 25 – May 8, 2026
            </p>
          </div>
          <div className="text-right">
            <p className="text-[32px] leading-none">{day ? getFlagEmoji(day.country) : "✈️"}</p>
            <p className="text-[12px] font-semibold text-fg-secondary mt-1">
              {day?.city ?? "—"}
            </p>
          </div>
        </div>
      </div>

      {/* Sticky date picker */}
      <div className="sticky top-0 z-10 bg-base/95 backdrop-blur-xl border-b border-white/5">
        <DatePicker />
      </div>

      {/* Alert banner */}
      {alertCount > 0 && (
        <div className="pt-3">
          <AlertBanner />
        </div>
      )}

      {/* Day header */}
      <div className="px-4 pt-4 pb-2">
        {day ? (
          <>
            <p className="text-[13px] font-semibold text-fg-muted uppercase tracking-widest">
              {format(parseISO(day.date), "EEEE, d MMMM")}
            </p>
            <h2 className="text-[20px] font-bold text-white mt-0.5">
              {getFlagEmoji(day.country)} {day.city}, {day.country}
            </h2>
            <p className="text-[12px] text-fg-muted mt-0.5">
              {day.events.length} event{day.events.length !== 1 ? "s" : ""} today
            </p>
          </>
        ) : (
          <p className="text-[15px] text-fg-muted">No events for this day.</p>
        )}
      </div>

      {/* Timeline */}
      {day && (
        <div className="px-4 pt-2">
          {day.events.map((event, i) => (
            <EventCard
              key={event.id}
              event={event}
              isLast={i === day.events.length - 1}
            />
          ))}
        </div>
      )}

      {!day && (
        <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
          <span className="text-5xl mb-4">🗺️</span>
          <p className="text-[16px] font-semibold text-fg-secondary">No events scheduled</p>
          <p className="text-[13px] text-fg-muted mt-1">Free day — explore at your own pace</p>
        </div>
      )}
    </div>
  );
}
