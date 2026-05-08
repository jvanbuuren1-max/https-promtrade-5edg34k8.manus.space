"use client";

import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

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
          </div>

          {/* Auth buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/signin"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/signin"
              className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-slate-600"
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
            <hr className="border-slate-200" />
            <Link
              href="/signin"
              className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
              onClick={() => setMobileOpen(false)}
            >
              Sign In
            </Link>
            <Link
              href="/signin"
              className="block rounded-lg bg-brand-600 px-3 py-2 text-sm font-medium text-white text-center"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
