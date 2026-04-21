"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Expense, Alert, ExpenseCategory } from "@/types";
import { itinerary, seedExpenses, initialAlerts } from "@/data/tripData";
import { format } from "date-fns";

interface TripStore {
  selectedDate: string;
  expenses: Expense[];
  totalBudget: number;
  alerts: Alert[];
  setSelectedDate: (date: string) => void;
  addExpense: (expense: Omit<Expense, "id">) => void;
  removeExpense: (id: string) => void;
  dismissAlert: (id: string) => void;
  setTotalBudget: (amount: number) => void;
  getTotalSpent: () => number;
  getSpentByCategory: () => Record<ExpenseCategory, number>;
  getActiveAlerts: () => Alert[];
  getCurrentCity: () => string;
}

export const useTripStore = create<TripStore>()(
  persist(
    (set, get) => ({
      selectedDate: format(new Date(), "yyyy-MM-dd"),
      expenses: seedExpenses,
      totalBudget: 4000,
      alerts: initialAlerts,

      setSelectedDate: (date) => set({ selectedDate: date }),

      addExpense: (expense) =>
        set((state) => ({
          expenses: [
            ...state.expenses,
            { ...expense, id: `exp_${Date.now()}` },
          ],
        })),

      removeExpense: (id) =>
        set((state) => ({
          expenses: state.expenses.filter((e) => e.id !== id),
        })),

      dismissAlert: (id) =>
        set((state) => ({
          alerts: state.alerts.map((a) =>
            a.id === id ? { ...a, dismissed: true } : a
          ),
        })),

      setTotalBudget: (amount) => set({ totalBudget: amount }),

      getTotalSpent: () => {
        return get().expenses.reduce((sum, e) => sum + e.amount, 0);
      },

      getSpentByCategory: () => {
        const categories: ExpenseCategory[] = [
          "Food", "Transit", "Accommodation", "Shopping", "Entertainment", "Other",
        ];
        const result = {} as Record<ExpenseCategory, number>;
        categories.forEach((c) => (result[c] = 0));
        get().expenses.forEach((e) => {
          result[e.category] = (result[e.category] || 0) + e.amount;
        });
        return result;
      },

      getActiveAlerts: () => get().alerts.filter((a) => !a.dismissed),

      getCurrentCity: () => {
        const today = format(new Date(), "yyyy-MM-dd");
        const day = itinerary.find((d) => d.date === today);
        if (day) return day.city;
        const sorted = [...itinerary].sort((a, b) =>
          a.date < b.date ? -1 : 1
        );
        const past = sorted.filter((d) => d.date <= today);
        return past.length > 0 ? past[past.length - 1].city : "London";
      },
    }),
    { name: "wayfind-storage" }
  )
);
