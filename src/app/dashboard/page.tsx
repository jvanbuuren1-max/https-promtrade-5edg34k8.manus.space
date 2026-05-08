"use client";

import Link from "next/link";
import { useState } from "react";
import { prompts } from "@/data/prompts";

type Tab = "purchased" | "listed" | "settings";

const purchasedPrompts = prompts.slice(0, 3);
const listedPrompts = prompts.slice(3, 5);

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<Tab>("purchased");

  const tabs: { key: Tab; label: string; count?: number }[] = [
    { key: "purchased", label: "Purchased", count: purchasedPrompts.length },
    { key: "listed", label: "My Listings", count: listedPrompts.length },
    { key: "settings", label: "Settings" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">JD</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">John Doe</h1>
              <p className="text-sm text-slate-500">john@example.com</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Purchased", value: "3" },
              { label: "Listed", value: "2" },
              { label: "Total Sales", value: "$47.50" },
              { label: "Rating", value: "4.8" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-center"
              >
                <div className="text-xl font-bold text-slate-900">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex gap-1 rounded-xl bg-slate-100 p-1 mb-8 max-w-md">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 rounded-lg py-2 text-sm font-medium transition-colors ${
                activeTab === tab.key
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {tab.label}
              {tab.count !== undefined && (
                <span className="ml-1.5 text-xs text-slate-400">
                  ({tab.count})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Purchased tab */}
        {activeTab === "purchased" && (
          <div className="space-y-4">
            {purchasedPrompts.map((prompt) => (
              <div
                key={prompt.id}
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5"
              >
                <div className="flex-1 min-w-0">
                  <Link
                    href={`/prompts/${prompt.id}`}
                    className="text-base font-semibold text-slate-900 hover:text-brand-600 transition-colors"
                  >
                    {prompt.title}
                  </Link>
                  <p className="text-sm text-slate-500 mt-1">
                    {prompt.platform} &middot; Purchased on Jan 15, 2025
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-slate-600">
                    ${prompt.price.toFixed(2)}
                  </span>
                  <button className="rounded-lg bg-brand-50 px-4 py-2 text-xs font-medium text-brand-700 hover:bg-brand-100 transition-colors">
                    View Prompt
                  </button>
                </div>
              </div>
            ))}
            {purchasedPrompts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-slate-500">No purchased prompts yet.</p>
                <Link
                  href="/prompts"
                  className="text-sm text-brand-600 hover:text-brand-700 mt-2 inline-block"
                >
                  Browse marketplace
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Listed tab */}
        {activeTab === "listed" && (
          <div className="space-y-4">
            <div className="flex justify-end mb-2">
              <Link
                href="/create"
                className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700 transition-colors"
              >
                + New Listing
              </Link>
            </div>
            {listedPrompts.map((prompt) => (
              <div
                key={prompt.id}
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/prompts/${prompt.id}`}
                      className="text-base font-semibold text-slate-900 hover:text-brand-600 transition-colors"
                    >
                      {prompt.title}
                    </Link>
                    <span className="rounded-full bg-emerald-100 text-emerald-700 px-2 py-0.5 text-xs font-medium">
                      Active
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 mt-1">
                    {prompt.platform} &middot; {prompt.reviews} sales &middot;{" "}
                    {prompt.rating} rating
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-slate-600">
                    ${prompt.price.toFixed(2)}
                  </span>
                  <button className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors">
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Settings tab */}
        {activeTab === "settings" && (
          <div className="max-w-2xl space-y-6">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Profile Information
              </h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Display Name
                    </label>
                    <input
                      type="text"
                      defaultValue="John Doe"
                      className="w-full rounded-xl border border-slate-200 py-2.5 px-4 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Username
                    </label>
                    <input
                      type="text"
                      defaultValue="johndoe"
                      className="w-full rounded-xl border border-slate-200 py-2.5 px-4 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue="john@example.com"
                    className="w-full rounded-xl border border-slate-200 py-2.5 px-4 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Bio
                  </label>
                  <textarea
                    rows={3}
                    defaultValue="Prompt engineer and AI enthusiast."
                    className="w-full rounded-xl border border-slate-200 py-2.5 px-4 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-xl bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
                >
                  Save Changes
                </button>
              </form>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Payout Settings
              </h3>
              <p className="text-sm text-slate-500 mb-4">
                Connect your Stripe account to receive payouts for your prompt sales.
              </p>
              <button className="rounded-xl border border-slate-200 px-6 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                Connect Stripe Account
              </button>
            </div>

            <div className="rounded-xl border border-red-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-red-600 mb-2">
                Danger Zone
              </h3>
              <p className="text-sm text-slate-500 mb-4">
                Permanently delete your account and all associated data.
              </p>
              <button className="rounded-xl border border-red-200 px-6 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors">
                Delete Account
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
