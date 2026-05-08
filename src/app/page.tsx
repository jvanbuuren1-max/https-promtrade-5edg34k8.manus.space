import Link from "next/link";
import { prompts, categories } from "@/data/prompts";
import { PromptCard } from "@/components/PromptCard";

export default function HomePage() {
  const featuredPrompts = prompts.filter((p) => p.featured).slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(12,147,231,0.15),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24 text-center">
          <div className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm text-brand-700 mb-6">
            <span className="mr-2">🚀</span> The #1 AI Prompt Marketplace
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 text-balance">
            Buy, Sell &amp; Trade
            <br />
            <span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">
              AI Prompts
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600 mb-10 text-balance">
            Discover thousands of expert-crafted prompts for ChatGPT,
            Midjourney, DALL-E, and more. Boost your productivity or earn money
            selling your best prompts.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/prompts"
              className="rounded-xl bg-brand-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 hover:bg-brand-700 transition-colors"
            >
              Browse Marketplace
            </Link>
            <Link
              href="/sell"
              className="rounded-xl border border-slate-300 bg-white px-8 py-3.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Start Selling
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div>
              <div className="text-2xl font-bold text-slate-900">12K+</div>
              <div className="text-sm text-slate-500">Prompts</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">5K+</div>
              <div className="text-sm text-slate-500">Creators</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">50K+</div>
              <div className="text-sm text-slate-500">Sales</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Browse by Category
            </h2>
            <p className="text-slate-600">
              Find the perfect prompt for your favorite AI platform
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/prompts?category=${cat.slug}`}
                className="group rounded-xl border border-slate-200 bg-white p-5 text-center hover:border-brand-300 hover:shadow-md transition-all"
              >
                <div className="text-3xl mb-2">{cat.icon}</div>
                <div className="text-sm font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">
                  {cat.name}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  {cat.count} prompts
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured prompts */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                Featured Prompts
              </h2>
              <p className="text-slate-600">
                Hand-picked by our editors for quality and creativity
              </p>
            </div>
            <Link
              href="/prompts"
              className="hidden sm:inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700"
            >
              View all
              <svg
                className="ml-1 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPrompts.map((prompt) => (
              <PromptCard key={prompt.id} prompt={prompt} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              How It Works
            </h2>
            <p className="text-slate-600">
              Get started in three simple steps
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                step: "1",
                title: "Browse & Discover",
                desc: "Explore thousands of prompts across categories. Filter by platform, price, and rating to find exactly what you need.",
              },
              {
                step: "2",
                title: "Purchase & Download",
                desc: "Buy prompts securely and get instant access. Each prompt comes with usage instructions and tips for best results.",
              },
              {
                step: "3",
                title: "Create & Earn",
                desc: "Craft your own prompts and list them on the marketplace. Earn money every time someone purchases your work.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 text-white text-xl font-bold shadow-lg shadow-brand-500/20">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-brand-600 to-accent-600">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to supercharge your AI workflow?
          </h2>
          <p className="text-brand-100 mb-8 text-lg">
            Join thousands of creators and professionals who use PromTrade to
            find and share the best AI prompts.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/prompts"
              className="rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-brand-700 shadow-lg hover:bg-brand-50 transition-colors"
            >
              Explore Prompts
            </Link>
            <Link
              href="/signin"
              className="rounded-xl border border-white/30 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Create Account
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
