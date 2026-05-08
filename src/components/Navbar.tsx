"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">PT</span>
            </div>
            <span className="text-xl font-bold text-slate-900">
              Prom<span className="text-brand-600">Trade</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/prompts"
              className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
            >
              Browse Prompts
            </Link>
            <Link
              href="/prompts?category=chatgpt"
              className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
            >
              Categories
            </Link>
            <Link
              href="/sell"
              className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
            >
              Sell Prompts
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
            >
              About
            </Link>
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            {/* Cart */}
            <Link
              href="/cart"
              className="relative p-2 text-slate-600 hover:text-brand-600 transition-colors"
              aria-label="Shopping cart"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand-600 text-[10px] font-bold text-white">
                  {itemCount}
                </span>
              )}
            </Link>

            <Link
              href="/dashboard"
              className="p-2 text-slate-600 hover:text-brand-600 transition-colors"
              aria-label="Dashboard"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </Link>

            <Link
              href="/signin"
              className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700 transition-colors"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/cart"
              className="relative p-2 text-slate-600"
              aria-label="Shopping cart"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand-600 text-[10px] font-bold text-white">
                  {itemCount}
                </span>
              )}
            </Link>
            <button
              className="p-2 text-slate-600"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/prompts"
              className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
              onClick={() => setMobileOpen(false)}
            >
              Browse Prompts
            </Link>
            <Link
              href="/prompts?category=chatgpt"
              className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
              onClick={() => setMobileOpen(false)}
            >
              Categories
            </Link>
            <Link
              href="/sell"
              className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
              onClick={() => setMobileOpen(false)}
            >
              Sell Prompts
            </Link>
            <Link
              href="/about"
              className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <Link
              href="/dashboard"
              className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
              onClick={() => setMobileOpen(false)}
            >
              Dashboard
            </Link>
            <hr className="border-slate-200" />
            <Link
              href="/signin"
              className="block rounded-lg bg-brand-600 px-3 py-2 text-sm font-medium text-white text-center"
              onClick={() => setMobileOpen(false)}
            >
              Sign In
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
