"use client";

import { useTripStore } from "@/store/tripStore";
import { formatCurrency, getCategoryColor, getCategoryIcon } from "@/utils";
import { ExpenseCategory } from "@/types";
import clsx from "clsx";

export default function BudgetWidget() {
  const { totalBudget, getTotalSpent, getSpentByCategory } = useTripStore();
  const spent = getTotalSpent();
  const remaining = totalBudget - spent;
  const pct = Math.min((spent / totalBudget) * 100, 100);
  const byCategory = getSpentByCategory();

  const categories: ExpenseCategory[] = [
    "Accommodation", "Transit", "Food", "Shopping", "Entertainment", "Other",
  ];

  return (
    <div className="bg-white/[0.04] border border-white/8 rounded-2xl p-4">
      {/* Header */}
      <div className="flex items-baseline justify-between mb-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-fg-muted">
            Trip Budget
          </p>
          <p className="text-[28px] font-bold text-white leading-tight mt-0.5">
            {formatCurrency(spent)}
          </p>
          <p className="text-[12px] text-fg-muted mt-0.5">
            of {formatCurrency(totalBudget)} total
          </p>
        </div>
        <div className="text-right">
          <p className={clsx("text-[20px] font-bold", remaining >= 0 ? "text-success" : "text-danger")}>
            {formatCurrency(Math.abs(remaining))}
          </p>
          <p className="text-[11px] text-fg-muted">{remaining >= 0 ? "remaining" : "over budget"}</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-2 bg-white/8 rounded-full overflow-hidden mb-5">
        <div
          className={clsx(
            "h-full rounded-full transition-all duration-700",
            pct > 90 ? "bg-danger" : pct > 70 ? "bg-accent" : "bg-success"
          )}
          style={{ width: `${pct}%` }}
        />
      </div>

      {/* Categories */}
      <div className="space-y-2.5">
        {categories
          .filter((c) => byCategory[c] > 0)
          .sort((a, b) => byCategory[b] - byCategory[a])
          .map((cat) => {
            const catPct = (byCategory[cat] / totalBudget) * 100;
            const color = getCategoryColor(cat);
            return (
              <div key={cat}>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[14px]">{getCategoryIcon(cat)}</span>
                    <span className="text-[12px] font-medium text-fg-secondary">{cat}</span>
                  </div>
                  <span className="text-[12px] font-semibold text-fg-secondary">
                    {formatCurrency(byCategory[cat])}
                  </span>
                </div>
                <div className="h-1 bg-white/8 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${catPct}%`, backgroundColor: color }}
                  />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
