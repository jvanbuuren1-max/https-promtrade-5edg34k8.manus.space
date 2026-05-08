import Link from "next/link";
import type { Prompt } from "@/data/prompts";

const platformColors: Record<string, string> = {
  ChatGPT: "bg-emerald-100 text-emerald-700",
  Midjourney: "bg-blue-100 text-blue-700",
  "DALL-E": "bg-orange-100 text-orange-700",
  "Stable Diffusion": "bg-purple-100 text-purple-700",
  Claude: "bg-amber-100 text-amber-700",
  "GitHub Copilot": "bg-slate-100 text-slate-700",
};

export function PromptCard({ prompt }: { prompt: Prompt }) {
  const colorClass = platformColors[prompt.platform] ?? "bg-gray-100 text-gray-700";

  return (
    <Link
      href={`/prompts/${prompt.id}`}
      className="group block rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-brand-300 transition-all"
    >
      {/* Platform badge */}
      <div className="flex items-center justify-between mb-3">
        <span
          className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${colorClass}`}
        >
          {prompt.platform}
        </span>
        {prompt.featured && (
          <span className="inline-block rounded-full bg-yellow-100 text-yellow-700 px-2.5 py-0.5 text-xs font-medium">
            Featured
          </span>
        )}
      </div>

      {/* Title & description */}
      <h3 className="text-base font-semibold text-slate-900 group-hover:text-brand-600 transition-colors mb-2">
        {prompt.title}
      </h3>
      <p className="text-sm text-slate-500 line-clamp-2 mb-4">
        {prompt.description}
      </p>

      {/* Preview */}
      <div className="rounded-lg bg-slate-50 p-3 mb-4">
        <p className="text-xs text-slate-400 font-mono line-clamp-2">
          {prompt.preview}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {prompt.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-slate-100 px-2 py-0.5 text-xs text-slate-500"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer: rating, seller, price */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-100">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <svg
              className="h-4 w-4 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-xs font-medium text-slate-600">
              {prompt.rating}
            </span>
            <span className="text-xs text-slate-400">
              ({prompt.reviews})
            </span>
          </div>
          <span className="text-xs text-slate-400">by {prompt.seller}</span>
        </div>
        <span className="text-lg font-bold text-brand-600">
          ${prompt.price.toFixed(2)}
        </span>
      </div>
    </Link>
  );
}
