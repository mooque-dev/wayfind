"use client";

import { useState } from "react";
import { locations } from "@/data/tripData";
import { getMapsUrl, getFlagEmoji } from "@/utils";
import { Location, Place } from "@/types";
import { MapPinIcon, ExternalLinkIcon, SearchIcon } from "lucide-react";
import clsx from "clsx";

const categoryColors: Record<string, string> = {
  Accommodation: "bg-green-400",
  Transit: "bg-blue-400",
  Food: "bg-amber-400",
  Music: "bg-purple-400",
  Sights: "bg-sky-400",
  Shopping: "bg-pink-400",
  Museum: "bg-orange-400",
};

const categoryFilters = ["All", "Accommodation", "Transit", "Food", "Music", "Shopping", "Sights", "Museum"];

export default function MapPage() {
  const [activeCity, setActiveCity] = useState<string>("All");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredLocations = locations
    .map((loc) => ({
      ...loc,
      places: loc.places.filter(
        (p) => activeCategory === "All" || p.category === activeCategory
      ),
    }))
    .filter(
      (loc) =>
        (activeCity === "All" || loc.city === activeCity) && loc.places.length > 0
    );

  const totalPlaces = filteredLocations.reduce((s, l) => s + l.places.length, 0);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="px-4 pt-12 pb-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400">
          Wayfind
        </p>
        <h1 className="text-[26px] font-bold text-white leading-tight mt-0.5">
          Places
        </h1>
        <p className="text-[13px] text-neutral-500 mt-0.5">
          {totalPlaces} saved across 4 cities
        </p>
      </div>

      {/* City filter */}
      <div
        className="flex gap-2 overflow-x-auto px-4 pb-3 scrollbar-hide"
        style={{ scrollbarWidth: "none" }}
      >
        {["All", ...locations.map((l) => l.city)].map((city) => (
          <button
            key={city}
            onClick={() => setActiveCity(city)}
            className={clsx(
              "shrink-0 px-4 py-2 rounded-full border text-[12px] font-semibold transition-all duration-200",
              activeCity === city
                ? "bg-amber-400 border-amber-400 text-black"
                : "bg-white/5 border-white/10 text-neutral-400 hover:border-white/20"
            )}
          >
            {city}
          </button>
        ))}
      </div>

      {/* Category filter */}
      <div
        className="flex gap-2 overflow-x-auto px-4 pb-4 scrollbar-hide"
        style={{ scrollbarWidth: "none" }}
      >
        {categoryFilters.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={clsx(
              "shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[11px] font-semibold transition-all duration-200",
              activeCategory === cat
                ? "bg-white/15 border-white/30 text-white"
                : "bg-white/[0.03] border-white/8 text-neutral-500 hover:border-white/15"
            )}
          >
            {cat !== "All" && (
              <span
                className={clsx("w-1.5 h-1.5 rounded-full", categoryColors[cat] ?? "bg-neutral-500")}
              />
            )}
            {cat}
          </button>
        ))}
      </div>

      {/* Map placeholder with deep link */}
      <div className="mx-4 mb-4 rounded-2xl overflow-hidden border border-white/8 bg-white/[0.03] h-48 flex flex-col items-center justify-center gap-3">
        <div className="text-4xl">🗺️</div>
        <div className="text-center px-4">
          <p className="text-[14px] font-semibold text-neutral-300">Interactive Map</p>
          <p className="text-[11px] text-neutral-600 mt-0.5">
            Add a Google Maps API key to enable
          </p>
        </div>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=London+UK`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-amber-400 text-[12px] font-medium hover:text-amber-300 transition-colors"
        >
          Open in Google Maps <ExternalLinkIcon size={12} />
        </a>
      </div>

      {/* Places list */}
      <div className="px-4 space-y-4 pb-4">
        {filteredLocations.map((loc) => (
          <CitySection key={loc.id} location={loc} />
        ))}
      </div>
    </div>
  );
}

function CitySection({ location }: { location: Location }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[20px]">{getFlagEmoji(location.country)}</span>
        <div>
          <h2 className="text-[16px] font-bold text-white">{location.city}</h2>
          <p className="text-[11px] text-neutral-500">{location.country}</p>
        </div>
      </div>
      <div className="space-y-2">
        {location.places.map((place) => (
          <PlaceCard key={place.name} place={place} />
        ))}
      </div>
    </div>
  );
}

function PlaceCard({ place }: { place: Place }) {
  const dot = categoryColors[place.category] ?? "bg-neutral-500";
  return (
    <div className="bg-white/[0.04] border border-white/8 rounded-xl px-4 py-3 flex items-center justify-between gap-3 hover:border-white/15 transition-colors">
      <div className="flex items-center gap-3 min-w-0">
        <span className={clsx("w-2 h-2 rounded-full shrink-0", dot)} />
        <div className="min-w-0">
          <p className="text-[13px] font-semibold text-white truncate">{place.name}</p>
          <p className="text-[11px] text-neutral-500 truncate">{place.address}</p>
        </div>
      </div>
      <a
        href={getMapsUrl(place.address)}
        target="_blank"
        rel="noopener noreferrer"
        className="text-amber-400 hover:text-amber-300 transition-colors shrink-0"
      >
        <MapPinIcon size={16} />
      </a>
    </div>
  );
}
