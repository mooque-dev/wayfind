export type EventType =
  | "Transit"
  | "Check-in"
  | "Food"
  | "Music"
  | "Sights"
  | "Shopping"
  | "Museum"
  | "Accommodation"
  | "Activity"
  | "Social"
  | "Free";

export interface Location {
  id: string;
  city: string;
  country: string;
  places: Place[];
}

export interface Place {
  name: string;
  address: string;
  category: EventType;
  coordinates?: { lat: number; lng: number };
}

export interface ItineraryEvent {
  id: string;
  time: string;
  title: string;
  location: string;
  type: EventType;
  address?: string;
  notes?: string;
  bookingUrl?: string;
  bookingLabel?: string;
}

export interface ItineraryDay {
  date: string;
  city: string;
  country: string;
  events: ItineraryEvent[];
}

export type ExpenseCategory =
  | "Food"
  | "Transit"
  | "Accommodation"
  | "Shopping"
  | "Entertainment"
  | "Other";

export interface Expense {
  id: string;
  amount: number;
  currency: string;
  category: ExpenseCategory;
  description: string;
  date: string;
  city: string;
}

export interface BudgetState {
  totalBudget: number;
  expenses: Expense[];
}

export interface Alert {
  id: string;
  type: "warning" | "info" | "success" | "error";
  title: string;
  message: string;
  date: string;
  dismissed: boolean;
}

export interface TripData {
  title: string;
  startDate: string;
  endDate: string;
  locations: Location[];
  itinerary: ItineraryDay[];
}
