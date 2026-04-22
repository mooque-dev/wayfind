"use client";

import { useRef, useEffect } from "react";
import { useTripStore } from "@/store/tripStore";
import { itinerary } from "@/data/tripData";
import { format, parseISO, isSameDay } from "date-fns";
import clsx from "clsx";

export default function DatePicker() {
  const { selectedDate, setSelectedDate } = useTripStore();
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    activeRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [selectedDate]);

  const days = itinerary.map((d) => d.date);
  const today = format(new Date(), "yyyy-MM-dd");

  return (
    <div
      ref={scrollRef}
      className="flex gap-2 overflow-x-auto px-4 py-3 scrollbar-hide"
      style={{ scrollbarWidth: "none" }}
    >
      {days.map((date) => {
        const parsed = parseISO(date);
        const isActive = date === selectedDate;
        const isToday = date === today;
        const day = itinerary.find((d) => d.date === date);

        return (
          <button
            key={date}
            ref={isActive ? activeRef : undefined}
            onClick={() => setSelectedDate(date)}
            className={clsx(
              "flex-shrink-0 flex flex-col items-center gap-1 w-14 py-2.5 rounded-xl border transition-all duration-200",
              isActive
                ? "bg-accent border-accent text-black"
                : "bg-white/5 border-white/8 text-fg-tertiary hover:border-white/20 hover:text-fg-secondary"
            )}
          >
            <span className="text-[10px] font-semibold uppercase tracking-widest">
              {format(parsed, "EEE")}
            </span>
            <span className={clsx("text-[18px] font-bold leading-none", isActive ? "text-black" : "text-white")}>
              {format(parsed, "d")}
            </span>
            <span className="text-[9px] font-medium uppercase tracking-wider opacity-80">
              {day?.city.slice(0, 3) ?? ""}
            </span>
            {isToday && !isActive && (
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            )}
          </button>
        );
      })}
    </div>
  );
}
