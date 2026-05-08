import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">PT</span>
              </div>
              <span className="text-lg font-bold text-white">
                PromTrade
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              The premier marketplace for AI prompts. Buy, sell, and trade
              prompts crafted by the best prompt engineers.
            </p>
          </div>

          {/* Marketplace */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">
              Marketplace
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/prompts" className="hover:text-white transition-colors">
                  Browse Prompts
                </Link>
              </li>
              <li>
                <Link href="/prompts?category=chatgpt" className="hover:text-white transition-colors">
                  ChatGPT
                </Link>
              </li>
              <li>
                <Link href="/prompts?category=midjourney" className="hover:text-white transition-colors">
                  Midjourney
                </Link>
              </li>
              <li>
                <Link href="/prompts?category=dalle" className="hover:text-white transition-colors">
                  DALL-E
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-800 text-sm text-center">
          &copy; {new Date().getFullYear()} PromTrade. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
