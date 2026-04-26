"use client";

import { useState } from "react";
import { useTripStore } from "@/store/tripStore";
import { ExpenseCategory } from "@/types";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const categories: ExpenseCategory[] = [
  "Food", "Transit", "Accommodation", "Shopping", "Entertainment", "Other",
];

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function AddExpenseModal({ open, onClose }: Props) {
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
    setAmount("");
    setDescription("");
    onClose();
  };

  return (
    <Sheet open={open} onOpenChange={(isOpen) => { if (!isOpen) onClose(); }}>
      <SheetContent
        side="bottom"
        showCloseButton={false}
        className="rounded-t-3xl bg-surface border-t border-white/10 px-6 pb-10 gap-0 max-w-[430px] mx-auto"
      >
        <SheetHeader className="px-0 pt-2 pb-5">
          <SheetTitle className="text-[17px] font-bold text-white">
            Add Expense
          </SheetTitle>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Amount + Currency */}
          <div className="flex gap-2">
            <div className="flex-1 space-y-1.5">
              <Label className="text-[11px] font-semibold uppercase tracking-widest text-fg-muted">
                Amount
              </Label>
              <Input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="h-12 bg-white/5 border-white/10 text-white text-[16px] font-semibold placeholder:text-fg-faint focus-visible:border-accent/50 focus-visible:ring-accent/20"
                required
              />
            </div>
            <div className="w-24 space-y-1.5">
              <Label className="text-[11px] font-semibold uppercase tracking-widest text-fg-muted">
                Currency
              </Label>
              <Select value={currency} onValueChange={(v) => v && setCurrency(v)}>
                <SelectTrigger className="h-12 w-full bg-white/5 border-white/10 text-white text-[13px] focus-visible:border-accent/50 focus-visible:ring-accent/20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {["EUR", "GBP", "DKK", "AUD"].map((c) => (
                    <SelectItem key={c} value={c}>{c}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-1.5">
            <Label className="text-[11px] font-semibold uppercase tracking-widest text-fg-muted">
              Description
            </Label>
            <Input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g. Dinner at Markthalle"
              className="h-12 bg-white/5 border-white/10 text-white text-[14px] placeholder:text-fg-faint focus-visible:border-accent/50 focus-visible:ring-accent/20"
            />
          </div>

          {/* Category */}
          <div className="space-y-2">
            <Label className="text-[11px] font-semibold uppercase tracking-widest text-fg-muted">
              Category
            </Label>
            <div className="grid grid-cols-3 gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={cn(
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

          <Button
            type="submit"
            className="w-full h-14 text-[15px] font-bold rounded-2xl mt-2 bg-accent hover:bg-accent-subtle text-black"
          >
            Add Expense
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  );
}
