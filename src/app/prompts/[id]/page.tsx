"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { prompts } from "@/data/prompts";
import { PromptCard } from "@/components/PromptCard";
import { useCart } from "@/context/CartContext";

const platformColors: Record<string, string> = {
  ChatGPT: "bg-emerald-100 text-emerald-700",
  Midjourney: "bg-blue-100 text-blue-700",
  "DALL-E": "bg-orange-100 text-orange-700",
  "Stable Diffusion": "bg-purple-100 text-purple-700",
  Claude: "bg-amber-100 text-amber-700",
  "GitHub Copilot": "bg-slate-100 text-slate-700",
};

type Tab = "overview" | "reviews" | "qa";

const sampleReviews = [
  {
    id: 1,
    user: "Emily R.",
    rating: 5,
    date: "Mar 12, 2025",
    text: "Incredible quality! The outputs were exactly what I needed. The prompt is well-structured and easy to customize.",
  },
  {
    id: 2,
    user: "David K.",
    rating: 4,
    date: "Feb 28, 2025",
    text: "Very good prompt. Works well for most use cases. Would love a few more variable options but overall very satisfied.",
  },
  {
    id: 3,
    user: "Lisa M.",
    rating: 5,
    date: "Feb 15, 2025",
    text: "Saved me hours of work! The instructions included were clear and helpful. Worth every penny.",
  },
];

const sampleQA = [
  {
    id: 1,
    question: "Does this work with GPT-4o?",
    askedBy: "Mike T.",
    date: "Mar 5, 2025",
    answer: "Yes, it works great with GPT-4o and GPT-4 Turbo. Also tested with GPT-3.5.",
    answeredBy: "Seller",
  },
  {
    id: 2,
    question: "Can I modify the prompt for my specific niche?",
    askedBy: "Anna S.",
    date: "Feb 20, 2025",
    answer: "Absolutely! The prompt uses [brackets] for customizable sections. You can tailor it to any industry or niche.",
    answeredBy: "Seller",
  },
];

export default function PromptDetailPage() {
  const params = useParams();
  const { addItem, items } = useCart();
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [added, setAdded] = useState(false);

  const prompt = prompts.find((p) => p.id === params.id);

  if (!prompt) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Prompt not found</h1>
          <Link href="/prompts" className="text-brand-600 hover:text-brand-700 text-sm">
            Browse all prompts
          </Link>
        </div>
      </div>
    );
  }

  const related = prompts
    .filter((p) => p.category === prompt.category && p.id !== prompt.id)
    .slice(0, 3);

  const colorClass =
    platformColors[prompt.platform] ?? "bg-gray-100 text-gray-700";

  const isInCart = items.some((i) => i.prompt.id === prompt.id);

  const handleAddToCart = () => {
    addItem(prompt);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const tabs: { key: Tab; label: string }[] = [
    { key: "overview", label: "Overview" },
    { key: "reviews", label: `Reviews (${sampleReviews.length})` },
    { key: "qa", label: `Q&A (${sampleQA.length})` },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-brand-600">
            Home
          </Link>
          <span>/</span>
          <Link href="/prompts" className="hover:text-brand-600">
            Prompts
          </Link>
          <span>/</span>
          <span className="text-slate-900">{prompt.title}</span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${colorClass}`}
                >
                  {prompt.platform}
                </span>
                {prompt.featured && (
                  <span className="rounded-full bg-yellow-100 text-yellow-700 px-3 py-1 text-xs font-medium">
                    Featured
                  </span>
                )}
              </div>
              <h1 className="text-3xl font-bold text-slate-900 mb-3">
                {prompt.title}
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                {prompt.description}
              </p>
            </div>

            {/* Tabs */}
            <div className="border-b border-slate-200">
              <div className="flex gap-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === tab.key
                        ? "border-brand-600 text-brand-600"
                        : "border-transparent text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Overview tab */}
            {activeTab === "overview" && (
              <div className="space-y-8">
                {/* Prompt preview */}
                <div>
                  <h2 className="text-lg font-semibold text-slate-900 mb-3">
                    Prompt Preview
                  </h2>
                  <div className="rounded-xl bg-slate-900 p-6">
                    <p className="font-mono text-sm text-slate-300 leading-relaxed whitespace-pre-wrap">
                      {prompt.preview}
                    </p>
                    <div className="mt-4 pt-4 border-t border-slate-700">
                      <p className="text-xs text-slate-500">
                        Full prompt available after purchase
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <h2 className="text-lg font-semibold text-slate-900 mb-3">
                    Tags
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {prompt.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-white border border-slate-200 px-3 py-1.5 text-sm text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* What you get */}
                <div>
                  <h2 className="text-lg font-semibold text-slate-900 mb-3">
                    What You Get
                  </h2>
                  <ul className="space-y-3">
                    {[
                      "Full prompt text with all variables and instructions",
                      "Detailed usage guide with tips for best results",
                      "Example outputs and variations",
                      "Free updates when the prompt is improved",
                      "Access to seller Q&A for support",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <svg
                          className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-sm text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Reviews tab */}
            {activeTab === "reviews" && (
              <div className="space-y-6">
                {/* Rating summary */}
                <div className="flex items-center gap-6 rounded-xl bg-white border border-slate-200 p-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-slate-900">
                      {prompt.rating}
                    </div>
                    <div className="flex items-center gap-0.5 justify-center mt-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.round(prompt.rating)
                              ? "text-yellow-400"
                              : "text-slate-200"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      {prompt.reviews} reviews
                    </p>
                  </div>
                  <div className="flex-1 space-y-1.5">
                    {[5, 4, 3, 2, 1].map((stars) => {
                      const pct =
                        stars === 5
                          ? 72
                          : stars === 4
                          ? 20
                          : stars === 3
                          ? 5
                          : stars === 2
                          ? 2
                          : 1;
                      return (
                        <div key={stars} className="flex items-center gap-2">
                          <span className="text-xs text-slate-500 w-3">
                            {stars}
                          </span>
                          <svg
                            className="h-3.5 w-3.5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-yellow-400 rounded-full"
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                          <span className="text-xs text-slate-400 w-8 text-right">
                            {pct}%
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Review list */}
                <div className="space-y-4">
                  {sampleReviews.map((review) => (
                    <div
                      key={review.id}
                      className="rounded-xl bg-white border border-slate-200 p-5"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-600">
                            {review.user.charAt(0)}
                          </div>
                          <span className="text-sm font-medium text-slate-900">
                            {review.user}
                          </span>
                        </div>
                        <span className="text-xs text-slate-400">
                          {review.date}
                        </span>
                      </div>
                      <div className="flex items-center gap-0.5 mb-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg
                            key={i}
                            className={`h-3.5 w-3.5 ${
                              i < review.rating
                                ? "text-yellow-400"
                                : "text-slate-200"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-sm text-slate-600">{review.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Q&A tab */}
            {activeTab === "qa" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-slate-900">
                    Questions & Answers
                  </h2>
                  <button className="rounded-lg bg-brand-50 px-4 py-2 text-xs font-medium text-brand-700 hover:bg-brand-100 transition-colors">
                    Ask a Question
                  </button>
                </div>

                <div className="space-y-4">
                  {sampleQA.map((qa) => (
                    <div
                      key={qa.id}
                      className="rounded-xl bg-white border border-slate-200 p-5 space-y-4"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-medium text-brand-600 bg-brand-50 px-2 py-0.5 rounded">
                            Q
                          </span>
                          <span className="text-sm font-medium text-slate-900">
                            {qa.question}
                          </span>
                        </div>
                        <span className="text-xs text-slate-400">
                          Asked by {qa.askedBy} on {qa.date}
                        </span>
                      </div>
                      <div className="pl-6 border-l-2 border-emerald-200">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                            A
                          </span>
                          <span className="text-xs text-slate-400">
                            {qa.answeredBy}
                          </span>
                        </div>
                        <p className="text-sm text-slate-600">{qa.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-xl border border-slate-200 bg-white p-6 shadow-sm space-y-6">
              {/* Price */}
              <div className="text-center">
                <div className="text-4xl font-bold text-slate-900">
                  ${prompt.price.toFixed(2)}
                </div>
                <p className="text-sm text-slate-500 mt-1">One-time purchase</p>
              </div>

              {/* Buy button */}
              <button className="w-full rounded-xl bg-brand-600 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 hover:bg-brand-700 transition-colors">
                Buy Now
              </button>

              {/* Add to cart */}
              {isInCart ? (
                <Link
                  href="/cart"
                  className="block w-full rounded-xl border border-emerald-200 bg-emerald-50 py-3 text-sm font-semibold text-emerald-700 text-center transition-colors hover:bg-emerald-100"
                >
                  View in Cart
                </Link>
              ) : (
                <button
                  onClick={handleAddToCart}
                  className="w-full rounded-xl border border-slate-200 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  {added ? "Added!" : "Add to Cart"}
                </button>
              )}

              <hr className="border-slate-100" />

              {/* Stats */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Rating</span>
                  <div className="flex items-center gap-1">
                    <svg
                      className="h-4 w-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-medium text-slate-900">
                      {prompt.rating}
                    </span>
                    <span className="text-slate-400">
                      ({prompt.reviews} reviews)
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Platform</span>
                  <span className="font-medium text-slate-900">
                    {prompt.platform}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Seller</span>
                  <span className="font-medium text-brand-600">
                    {prompt.seller}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Category</span>
                  <Link
                    href={`/prompts?category=${prompt.category}`}
                    className="font-medium text-brand-600 hover:text-brand-700"
                  >
                    {prompt.category}
                  </Link>
                </div>
              </div>

              <hr className="border-slate-100" />

              {/* Guarantee */}
              <div className="flex items-start gap-3">
                <svg
                  className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
                <div>
                  <p className="text-sm font-medium text-slate-900">
                    Money-back guarantee
                  </p>
                  <p className="text-xs text-slate-500">
                    Not satisfied? Get a full refund within 7 days.
                  </p>
                </div>
              </div>

              {/* Share */}
              <div className="flex items-start gap-3">
                <svg
                  className="h-5 w-5 text-slate-400 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                  />
                </svg>
                <div>
                  <p className="text-sm font-medium text-slate-900">
                    Share this prompt
                  </p>
                  <div className="flex gap-2 mt-1.5">
                    <button className="rounded-md bg-slate-100 px-2.5 py-1 text-xs text-slate-600 hover:bg-slate-200 transition-colors">
                      Copy Link
                    </button>
                    <button className="rounded-md bg-slate-100 px-2.5 py-1 text-xs text-slate-600 hover:bg-slate-200 transition-colors">
                      Twitter
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related prompts */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Related Prompts
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <PromptCard key={p.id} prompt={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
