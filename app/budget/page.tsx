"use client";

import { useState } from "react";
import { useTripStore } from "@/store/tripStore";
import BudgetWidget from "@/components/BudgetWidget";
import AddExpenseModal from "@/components/AddExpenseModal";
import { formatCurrency, getCategoryIcon, getCategoryColor } from "@/utils";
import { PlusIcon, Trash2Icon } from "lucide-react";
import { format, parseISO } from "date-fns";
import clsx from "clsx";

export default function BudgetPage() {
  const { expenses, removeExpense, totalBudget, setTotalBudget } = useTripStore();
  const [showModal, setShowModal] = useState(false);
  const [editingBudget, setEditingBudget] = useState(false);
  const [budgetInput, setBudgetInput] = useState(String(totalBudget));

  const sorted = [...expenses].sort((a, b) => (a.date < b.date ? 1 : -1));

  const handleBudgetSave = () => {
    const val = parseFloat(budgetInput);
    if (!isNaN(val) && val > 0) setTotalBudget(val);
    setEditingBudget(false);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="px-4 pt-12 pb-4 flex items-start justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
            Wayfind
          </p>
          <h1 className="text-[26px] font-bold text-white leading-tight mt-0.5">
            Budget
          </h1>
          <p className="text-[13px] text-fg-muted mt-0.5">
            Track your trip spending
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-accent text-black px-4 py-2.5 rounded-xl font-bold text-[13px] hover:bg-accent-subtle transition-colors mt-8"
        >
          <PlusIcon size={16} />
          Add
        </button>
      </div>

      {/* Budget widget */}
      <div className="px-4 mb-4">
        <BudgetWidget />
      </div>

      {/* Budget limit editor */}
      <div className="mx-4 mb-4 bg-white/[0.04] border border-white/8 rounded-2xl px-4 py-3 flex items-center justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-fg-muted">
            Total Budget Limit
          </p>
          {editingBudget ? (
            <div className="flex items-center gap-2 mt-1">
              <input
                type="number"
                value={budgetInput}
                onChange={(e) => setBudgetInput(e.target.value)}
                className="bg-white/10 border border-accent/50 rounded-lg px-2 py-1 text-white text-[16px] font-bold w-28 focus:outline-none"
                autoFocus
              />
              <button
                onClick={handleBudgetSave}
                className="text-accent text-[12px] font-semibold hover:text-accent-subtle"
              >
                Save
              </button>
            </div>
          ) : (
            <p className="text-[20px] font-bold text-white mt-0.5">
              {formatCurrency(totalBudget)}
            </p>
          )}
        </div>
        {!editingBudget && (
          <button
            onClick={() => { setEditingBudget(true); setBudgetInput(String(totalBudget)); }}
            className="text-accent text-[12px] font-semibold hover:text-accent-subtle transition-colors"
          >
            Edit
          </button>
        )}
      </div>

      {/* Expense list */}
      <div className="px-4 pb-4">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-fg-muted mb-3">
          Expenses ({sorted.length})
        </p>
        <div className="space-y-2">
          {sorted.map((exp) => (
            <div
              key={exp.id}
              className="bg-white/[0.04] border border-white/8 rounded-xl px-4 py-3 flex items-center justify-between gap-3 hover:border-white/12 transition-colors"
            >
              <div className="flex items-center gap-3 min-w-0">
                <span
                  className="w-8 h-8 rounded-xl flex items-center justify-center text-[16px] shrink-0"
                  style={{ backgroundColor: getCategoryColor(exp.category) + "22" }}
                >
                  {getCategoryIcon(exp.category)}
                </span>
                <div className="min-w-0">
                  <p className="text-[13px] font-semibold text-white truncate">
                    {exp.description || exp.category}
                  </p>
                  <p className="text-[11px] text-fg-muted">
                    {format(parseISO(exp.date), "MMM d")} · {exp.city}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <p className="text-[14px] font-bold text-white">
                  {exp.currency} {exp.amount.toFixed(0)}
                </p>
                <button
                  onClick={() => removeExpense(exp.id)}
                  className="text-fg-faint hover:text-danger transition-colors"
                >
                  <Trash2Icon size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && <AddExpenseModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
