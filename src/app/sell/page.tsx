import Link from "next/link";

export default function SellPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-600 to-accent-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Sell Your Prompts
          </h1>
          <p className="text-brand-100 text-lg max-w-2xl mx-auto mb-8">
            Turn your prompt engineering skills into income. Join thousands of
            creators earning money on PromTrade.
          </p>
          <Link
            href="/signin"
            className="inline-block rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-brand-700 shadow-lg hover:bg-brand-50 transition-colors"
          >
            Start Selling Today
          </Link>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Why Sell on PromTrade?
            </h2>
            <p className="text-slate-600">
              Everything you need to monetize your prompt engineering expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "💰",
                title: "Earn Passive Income",
                desc: "Set your own prices and earn every time someone purchases your prompt. Top sellers earn $1,000+ per month.",
              },
              {
                icon: "🌍",
                title: "Global Reach",
                desc: "Access a worldwide marketplace of AI enthusiasts, businesses, and developers looking for quality prompts.",
              },
              {
                icon: "📊",
                title: "Analytics Dashboard",
                desc: "Track your sales, views, and earnings with detailed analytics. Understand what your audience wants.",
              },
              {
                icon: "🛡️",
                title: "Prompt Protection",
                desc: "Your prompts are protected from unauthorized sharing. Buyers get access, not the ability to redistribute.",
              },
              {
                icon: "⚡",
                title: "Easy Listing",
                desc: "List your prompt in minutes. Add a title, description, preview, and price. We handle the rest.",
              },
              {
                icon: "🤝",
                title: "Community Support",
                desc: "Join a community of prompt engineers. Share tips, get feedback, and grow together.",
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-xl border border-slate-200 bg-white p-6"
              >
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to sell */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              How to Start Selling
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Create Account", desc: "Sign up for free and set up your seller profile." },
              { step: "2", title: "Craft Your Prompt", desc: "Write and test your prompt until it produces great results." },
              { step: "3", title: "List It", desc: "Add details, a preview snippet, tags, and set your price." },
              { step: "4", title: "Get Paid", desc: "Earn money every time someone purchases your prompt." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-brand-700 text-lg font-bold">
                  {item.step}
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Ready to start earning?
          </h2>
          <p className="text-slate-600 mb-8">
            Create your seller account today and join the growing community of
            prompt engineers.
          </p>
          <Link
            href="/signin"
            className="inline-block rounded-xl bg-brand-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 hover:bg-brand-700 transition-colors"
          >
            Create Seller Account
          </Link>
        </div>
      </section>
    </div>
  );
}
