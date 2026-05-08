"use client";

import { useState } from "react";
import Link from "next/link";
import { categories } from "@/data/prompts";

export default function CreatePromptPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    prompt: "",
    category: "",
    price: "",
    tags: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-4">
            <Link href="/dashboard" className="hover:text-brand-600">
              Dashboard
            </Link>
            <span>/</span>
            <span className="text-slate-900">Create Listing</span>
          </nav>
          <h1 className="text-3xl font-bold text-slate-900">
            Create New Prompt Listing
          </h1>
          <p className="text-slate-600 mt-1">
            Fill in the details below to list your prompt on the marketplace.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
        <form
          className="space-y-8"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Prompt listing created! (demo)");
          }}
        >
          {/* Basic info */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 space-y-5">
            <h2 className="text-lg font-semibold text-slate-900">
              Basic Information
            </h2>

            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Title <span className="text-red-500">*</span>
              </label>
              <input
                id="title"
                name="title"
                type="text"
                required
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g. Ultimate Blog Post Generator"
                className="w-full rounded-xl border border-slate-200 py-2.5 px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={3}
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe what your prompt does and what results users can expect..."
                className="w-full rounded-xl border border-slate-200 py-2.5 px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-none"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Platform / Category <span className="text-red-500">*</span>
                </label>
                <select
                  id="category"
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 py-2.5 px-4 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500"
                >
                  <option value="">Select a platform</option>
                  {categories.map((cat) => (
                    <option key={cat.slug} value={cat.slug}>
                      {cat.icon} {cat.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Price (USD) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                    $
                  </span>
                  <input
                    id="price"
                    name="price"
                    type="number"
                    min="0.99"
                    max="99.99"
                    step="0.01"
                    required
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="4.99"
                    className="w-full rounded-xl border border-slate-200 py-2.5 pl-8 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="tags"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Tags
              </label>
              <input
                id="tags"
                name="tags"
                type="text"
                value={formData.tags}
                onChange={handleChange}
                placeholder="Comma-separated, e.g. SEO, blogging, content"
                className="w-full rounded-xl border border-slate-200 py-2.5 px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
              />
              <p className="text-xs text-slate-400 mt-1">
                Add up to 5 tags to help buyers find your prompt.
              </p>
            </div>
          </div>

          {/* Prompt content */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 space-y-5">
            <h2 className="text-lg font-semibold text-slate-900">
              Prompt Content
            </h2>
            <p className="text-sm text-slate-500">
              Enter the full prompt text. Use <code className="bg-slate-100 px-1 rounded">[brackets]</code> for
              variables that buyers should customize.
            </p>

            <div>
              <label
                htmlFor="prompt"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Full Prompt <span className="text-red-500">*</span>
              </label>
              <textarea
                id="prompt"
                name="prompt"
                required
                rows={10}
                value={formData.prompt}
                onChange={handleChange}
                placeholder="Enter your complete prompt here..."
                className="w-full rounded-xl border border-slate-200 py-3 px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent font-mono resize-none"
              />
            </div>

            <div className="rounded-lg bg-amber-50 border border-amber-200 p-4">
              <div className="flex items-start gap-3">
                <svg
                  className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                  />
                </svg>
                <div>
                  <p className="text-sm font-medium text-amber-800">
                    Preview vs. Full Prompt
                  </p>
                  <p className="text-xs text-amber-700 mt-1">
                    Only the first 150 characters will be shown as a preview.
                    The full prompt is only visible to buyers after purchase.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between">
            <Link
              href="/dashboard"
              className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
            >
              Cancel
            </Link>
            <div className="flex gap-3">
              <button
                type="button"
                className="rounded-xl border border-slate-200 px-6 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Save Draft
              </button>
              <button
                type="submit"
                className="rounded-xl bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 hover:bg-brand-700 transition-colors"
              >
                Publish Listing
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
