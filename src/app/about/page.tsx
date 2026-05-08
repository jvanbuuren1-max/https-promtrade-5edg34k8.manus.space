import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            About PromTrade
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We are building the world&apos;s largest marketplace for AI prompts,
            connecting prompt engineers with businesses and creators who need
            high-quality AI outputs.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Our Mission
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                AI is transforming how we work, create, and communicate. But
                getting great results from AI models requires skill, practice,
                and expertise in prompt engineering.
              </p>
              <p className="text-slate-600 leading-relaxed">
                PromTrade bridges the gap between prompt engineers and everyone
                else. We make it easy to find, buy, and use expertly crafted
                prompts -- and we help skilled prompt engineers monetize their
                expertise.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Our Values
              </h2>
              <ul className="space-y-4">
                {[
                  {
                    title: "Quality First",
                    desc: "Every prompt is reviewed for quality, accuracy, and usefulness before being listed.",
                  },
                  {
                    title: "Fair Compensation",
                    desc: "Creators earn 80% of every sale. We believe in fair pay for skilled work.",
                  },
                  {
                    title: "Community Driven",
                    desc: "Our marketplace is shaped by feedback from both buyers and sellers.",
                  },
                  {
                    title: "Transparency",
                    desc: "Ratings, reviews, and previews help buyers make informed decisions.",
                  },
                ].map((value) => (
                  <li key={value.title} className="flex items-start gap-3">
                    <svg
                      className="h-5 w-5 text-brand-500 mt-0.5 flex-shrink-0"
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
                    <div>
                      <span className="font-semibold text-slate-900">
                        {value.title}
                      </span>
                      <p className="text-sm text-slate-500">{value.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Meet the Team
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Chen",
                role: "Founder & CEO",
                initials: "AC",
                bio: "Former ML engineer at Google. Passionate about democratizing AI access.",
              },
              {
                name: "Sarah Kim",
                role: "Head of Product",
                initials: "SK",
                bio: "Ex-Stripe product lead. Expert in marketplace dynamics and UX.",
              },
              {
                name: "Marcus Rivera",
                role: "Head of Community",
                initials: "MR",
                bio: "Built and scaled creator communities at Patreon and Gumroad.",
              },
            ].map((person) => (
              <div
                key={person.name}
                className="rounded-xl border border-slate-200 bg-white p-6 text-center"
              >
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center">
                  <span className="text-white text-lg font-bold">
                    {person.initials}
                  </span>
                </div>
                <h3 className="font-semibold text-slate-900">{person.name}</h3>
                <p className="text-sm text-brand-600 mb-2">{person.role}</p>
                <p className="text-xs text-slate-500">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "12,000+", label: "Prompts Listed" },
              { value: "5,000+", label: "Creators" },
              { value: "50,000+", label: "Transactions" },
              { value: "4.7", label: "Avg Rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-slate-900">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-brand-600 to-accent-600">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join the PromTrade community
          </h2>
          <p className="text-brand-100 mb-8">
            Whether you want to find the perfect prompt or earn from your
            prompt engineering skills, PromTrade is the place to be.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/prompts"
              className="rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-brand-700 hover:bg-brand-50 transition-colors"
            >
              Browse Prompts
            </Link>
            <Link
              href="/signin"
              className="rounded-xl border border-white/30 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
