# PromTrade - AI Prompt Marketplace

Buy, sell, and trade high-quality AI prompts. The premier marketplace for prompt engineers and creators.

## Features

- **Landing Page** - Hero section, category browser, featured prompts, how-it-works, and CTA
- **Browse Prompts** - Search, filter by category, and sort by rating/price/reviews
- **Prompt Detail** - Tabbed view with overview, reviews, and Q&A; add to cart; related prompts
- **Shopping Cart** - Add/remove items, order summary, checkout flow
- **User Dashboard** - Purchased prompts, seller listings, profile settings, payout config
- **Create Listing** - Full prompt creation form with title, description, category, price, tags, and prompt text
- **Sell Prompts** - Information page for sellers with benefits and how-to guide
- **About** - Company mission, values, team, and stats
- **Sign In / Sign Up** - Social login (Google, GitHub) and email/password
- **404 Page** - Custom not-found page
- **Loading States** - Skeleton loading for all pages
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
    page.tsx                # Landing page
    layout.tsx              # Root layout with navbar, footer, cart provider
    loading.tsx             # Global loading state
    not-found.tsx           # Custom 404 page
    globals.css             # Global styles and Tailwind imports
    about/page.tsx          # About page
    cart/page.tsx            # Shopping cart
    create/page.tsx          # Create prompt listing
    dashboard/page.tsx       # User dashboard
    prompts/
      page.tsx              # Browse prompts with search and filters
      loading.tsx           # Skeleton loading for prompts
      [id]/page.tsx         # Prompt detail with reviews and Q&A tabs
    sell/page.tsx            # Sell prompts info page
    signin/page.tsx          # Sign in / sign up page
  components/
    Navbar.tsx              # Navigation bar with cart badge
    Footer.tsx              # Footer
    PromptCard.tsx          # Prompt card component
  context/
    CartContext.tsx          # Shopping cart state management
  data/
    prompts.ts              # Sample prompt data and types
```

## License

MIT
