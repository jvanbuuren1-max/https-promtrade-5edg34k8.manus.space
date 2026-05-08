"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, removeItem, clearCart, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="text-6xl mb-6">🛒</div>
          <h1 className="text-2xl font-bold text-slate-900 mb-3">
            Your cart is empty
          </h1>
          <p className="text-slate-500 mb-8">
            Browse our marketplace to find the perfect AI prompts for your needs.
          </p>
          <Link
            href="/prompts"
            className="inline-block rounded-xl bg-brand-600 px-8 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
          >
            Browse Prompts
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Shopping Cart</h1>
          <button
            onClick={clearCart}
            className="text-sm text-slate-500 hover:text-red-600 transition-colors"
          >
            Clear cart
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map(({ prompt }) => (
              <div
                key={prompt.id}
                className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5"
              >
                <div className="flex-1 min-w-0">
                  <Link
                    href={`/prompts/${prompt.id}`}
                    className="text-base font-semibold text-slate-900 hover:text-brand-600 transition-colors"
                  >
                    {prompt.title}
                  </Link>
                  <p className="text-sm text-slate-500 mt-1 line-clamp-1">
                    {prompt.description}
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-xs text-slate-400">
                      {prompt.platform}
                    </span>
                    <span className="text-xs text-slate-400">
                      by {prompt.seller}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="text-lg font-bold text-brand-600">
                    ${prompt.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => removeItem(prompt.id)}
                    className="text-xs text-slate-400 hover:text-red-500 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-xl border border-slate-200 bg-white p-6 space-y-4">
              <h2 className="text-lg font-semibold text-slate-900">
                Order Summary
              </h2>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">
                    Subtotal ({items.length} item{items.length !== 1 && "s"})
                  </span>
                  <span className="text-slate-900 font-medium">
                    ${total.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Platform fee</span>
                  <span className="text-slate-900 font-medium">$0.00</span>
                </div>
              </div>

              <hr className="border-slate-100" />

              <div className="flex justify-between text-base">
                <span className="font-semibold text-slate-900">Total</span>
                <span className="font-bold text-brand-600">
                  ${total.toFixed(2)}
                </span>
              </div>

              <button className="w-full rounded-xl bg-brand-600 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 hover:bg-brand-700 transition-colors">
                Proceed to Checkout
              </button>

              <p className="text-xs text-slate-400 text-center">
                Secure payment powered by Stripe
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
