# PromTrade - AI Prompt Marketplace

Buy, sell, and trade high-quality AI prompts. The premier marketplace for prompt engineers and creators.

## Features

- **Landing Page** - Modern hero section, category browser, featured prompts, and CTA
- **Prompt Listings** - Browse, search, filter by category, and sort prompts
- **Prompt Detail** - Full prompt preview, pricing, ratings, and related prompts
- **Sell Prompts** - Information page for sellers with benefits and how-to guide
- **Sign In / Sign Up** - Authentication page with social login and email/password
- **Responsive Design** - Fully responsive across mobile, tablet, and desktop

## Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
  app/
    page.tsx              # Landing page
    layout.tsx            # Root layout with navbar and footer
    globals.css           # Global styles and Tailwind imports
    prompts/
      page.tsx            # Prompt listings with search and filters
      [id]/page.tsx       # Individual prompt detail page
    sell/page.tsx          # Sell prompts information page
    signin/page.tsx        # Sign in / sign up page
  components/
    Navbar.tsx            # Navigation bar
    Footer.tsx            # Footer
    PromptCard.tsx        # Prompt card component
  data/
    prompts.ts            # Sample prompt data and types
```

## License

MIT
