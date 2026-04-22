"use client";

import { useState } from "react";
import { useTripStore } from "@/store/tripStore";
import { ExpenseCategory } from "@/types";
import { XIcon } from "lucide-react";
import { format } from "date-fns";
import clsx from "clsx";

const categories: ExpenseCategory[] = [
  "Food", "Transit", "Accommodation", "Shopping", "Entertainment", "Other",
];

interface Props {
  onClose: () => void;
}

export default function AddExpenseModal({ onClose }: Props) {
  const { addExpense, selectedDate } = useTripStore();
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<ExpenseCategory>("Food");
  const [currency, setCurrency] = useState("EUR");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || isNaN(parseFloat(amount))) return;
    addExpense({
      amount: parseFloat(amount),
      currency,
      category,
      description,
      date: selectedDate,
      city: "Trip",
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-end justify-center"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[430px] bg-surface border border-white/10 rounded-t-3xl p-6 pb-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[17px] font-bold text-white">Add Expense</h2>
          <button onClick={onClose} className="text-fg-muted hover:text-white transition-colors">
            <XIcon size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Amount + Currency */}
          <div className="flex gap-2">
            <div className="flex-1">
              <label className="text-[11px] font-semibold uppercase tracking-widest text-fg-muted block mb-1.5">
                Amount
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-3 text-white text-[16px] font-semibold placeholder:text-fg-faint focus:outline-none focus:border-accent/50"
                required
              />
            </div>
            <div className="w-20">
              <label className="text-[11px] font-semibold uppercase tracking-widest text-fg-muted block mb-1.5">
                Currency
              </label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-2 py-3 text-white text-[13px] focus:outline-none focus:border-accent/50"
              >
                {["EUR", "GBP", "DKK"].map((c) => (
                  <option key={c} value={c} className="bg-neutral-900">{c}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="text-[11px] font-semibold uppercase tracking-widest text-fg-muted block mb-1.5">
              Description
            </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g. Dinner at Markthalle"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-3 text-white text-[14px] placeholder:text-fg-faint focus:outline-none focus:border-accent/50"
            />
          </div>

          {/* Category */}
          <div>
            <label className="text-[11px] font-semibold uppercase tracking-widest text-fg-muted block mb-2">
              Category
            </label>
            <div className="grid grid-cols-3 gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={clsx(
                    "py-2.5 rounded-xl border text-[12px] font-semibold transition-all duration-200",
                    category === cat
                      ? "bg-accent border-accent text-black"
                      : "bg-white/5 border-white/10 text-fg-tertiary hover:border-white/20"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-accent hover:bg-accent-subtle text-black font-bold py-4 rounded-2xl text-[15px] transition-colors duration-200 mt-2"
          >
            Add Expense
          </button>
        </form>
      </div>
    </div>
  );
}
