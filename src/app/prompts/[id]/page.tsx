import Link from "next/link";
import { notFound } from "next/navigation";
import { prompts } from "@/data/prompts";
import { PromptCard } from "@/components/PromptCard";

const platformColors: Record<string, string> = {
  ChatGPT: "bg-emerald-100 text-emerald-700",
  Midjourney: "bg-blue-100 text-blue-700",
  "DALL-E": "bg-orange-100 text-orange-700",
  "Stable Diffusion": "bg-purple-100 text-purple-700",
  Claude: "bg-amber-100 text-amber-700",
  "GitHub Copilot": "bg-slate-100 text-slate-700",
};

export function generateStaticParams() {
  return prompts.map((p) => ({ id: p.id }));
}

export default function PromptDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const prompt = prompts.find((p) => p.id === params.id);
  if (!prompt) notFound();

  const related = prompts
    .filter((p) => p.category === prompt.category && p.id !== prompt.id)
    .slice(0, 3);

  const colorClass =
    platformColors[prompt.platform] ?? "bg-gray-100 text-gray-700";

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
          <div className="lg:col-span-2 space-y-8">
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
              <button className="w-full rounded-xl border border-slate-200 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
                Add to Cart
              </button>

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
