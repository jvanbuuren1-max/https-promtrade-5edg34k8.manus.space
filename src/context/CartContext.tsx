"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { Prompt } from "@/data/prompts";

export interface CartItem {
  prompt: Prompt;
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  addItem: (prompt: Prompt) => void;
  removeItem: (promptId: string) => void;
  clearCart: () => void;
  itemCount: number;
  total: number;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = useCallback((prompt: Prompt) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.prompt.id === prompt.id);
      if (existing) return prev; // prompts are one-time purchase
      return [...prev, { prompt, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((promptId: string) => {
    setItems((prev) => prev.filter((i) => i.prompt.id !== promptId));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const itemCount = items.length;
  const total = items.reduce((sum, i) => sum + i.prompt.price, 0);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, clearCart, itemCount, total }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
