export interface Prompt {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  platform: string;
  rating: number;
  reviews: number;
  seller: string;
  tags: string[];
  featured: boolean;
  preview: string;
}

export const categories = [
  { slug: "chatgpt", name: "ChatGPT", count: 234, icon: "💬" },
  { slug: "midjourney", name: "Midjourney", count: 189, icon: "🎨" },
  { slug: "dalle", name: "DALL-E", count: 156, icon: "🖼️" },
  { slug: "stable-diffusion", name: "Stable Diffusion", count: 128, icon: "🌀" },
  { slug: "claude", name: "Claude", count: 97, icon: "🤖" },
  { slug: "copilot", name: "GitHub Copilot", count: 72, icon: "👨‍💻" },
];

export const prompts: Prompt[] = [
  {
    id: "1",
    title: "Ultimate Blog Post Generator",
    description:
      "Generate SEO-optimized, engaging blog posts on any topic. Includes headline variations, meta descriptions, and structured outlines that rank on Google.",
    price: 4.99,
    category: "chatgpt",
    platform: "ChatGPT",
    rating: 4.9,
    reviews: 342,
    seller: "PromptMaster",
    tags: ["SEO", "blogging", "content"],
    featured: true,
    preview:
      "Act as an expert SEO content writer. I will provide a topic and target keyword. Generate a comprehensive blog post with: 1) Five headline options...",
  },
  {
    id: "2",
    title: "Photorealistic Portrait Studio",
    description:
      "Create stunning photorealistic portraits with perfect lighting, composition, and detail. Works for headshots, editorial, and artistic portraits.",
    price: 6.99,
    category: "midjourney",
    platform: "Midjourney",
    rating: 4.8,
    reviews: 218,
    seller: "ArtificialVisions",
    tags: ["portrait", "photorealistic", "photography"],
    featured: true,
    preview:
      "Professional headshot portrait of [subject], studio lighting, shallow depth of field, 85mm lens, f/1.8...",
  },
  {
    id: "3",
    title: "SaaS Landing Page Copy Bundle",
    description:
      "Complete landing page copy for SaaS products including hero sections, feature descriptions, testimonials, CTAs, and FAQ sections.",
    price: 9.99,
    category: "chatgpt",
    platform: "ChatGPT",
    rating: 4.7,
    reviews: 156,
    seller: "CopyGenius",
    tags: ["SaaS", "landing page", "copywriting"],
    featured: true,
    preview:
      "You are a world-class SaaS copywriter. I need complete landing page copy for a product called [name] that...",
  },
  {
    id: "4",
    title: "Fantasy World Builder",
    description:
      "Generate breathtaking fantasy landscapes, castles, and mythical environments. Perfect for game concept art and book covers.",
    price: 5.49,
    category: "midjourney",
    platform: "Midjourney",
    rating: 4.9,
    reviews: 289,
    seller: "DreamScapes",
    tags: ["fantasy", "landscape", "concept art"],
    featured: false,
    preview:
      "Epic fantasy landscape, ancient elven city built into crystalline cliffs, bioluminescent flora, twin moons...",
  },
  {
    id: "5",
    title: "Code Review Assistant",
    description:
      "Thorough code review prompts that catch bugs, security issues, performance problems, and suggest improvements with explanations.",
    price: 3.99,
    category: "chatgpt",
    platform: "ChatGPT",
    rating: 4.6,
    reviews: 98,
    seller: "DevPrompts",
    tags: ["code review", "development", "security"],
    featured: false,
    preview:
      "Act as a senior software engineer performing a thorough code review. Analyze the following code for...",
  },
  {
    id: "6",
    title: "Product Photography Generator",
    description:
      "Create professional product photography with perfect lighting and backgrounds. Great for e-commerce and marketing materials.",
    price: 7.49,
    category: "dalle",
    platform: "DALL-E",
    rating: 4.5,
    reviews: 134,
    seller: "PixelPerfect",
    tags: ["product", "e-commerce", "photography"],
    featured: false,
    preview:
      "Professional product photograph of [item] on a clean white background, soft studio lighting, slight shadow...",
  },
  {
    id: "7",
    title: "Anime Character Designer",
    description:
      "Design unique anime and manga characters with detailed descriptions for consistent generation across multiple images.",
    price: 4.49,
    category: "stable-diffusion",
    platform: "Stable Diffusion",
    rating: 4.8,
    reviews: 201,
    seller: "OtakuPrompts",
    tags: ["anime", "character design", "manga"],
    featured: true,
    preview:
      "Anime character design, [description], cel shading, vibrant colors, detailed eyes, dynamic pose...",
  },
  {
    id: "8",
    title: "Business Email Templates",
    description:
      "Professional email templates for every business scenario: sales outreach, follow-ups, negotiations, apologies, and announcements.",
    price: 2.99,
    category: "claude",
    platform: "Claude",
    rating: 4.7,
    reviews: 87,
    seller: "BizComms",
    tags: ["email", "business", "communication"],
    featured: false,
    preview:
      "You are an expert business communication specialist. Generate a professional email for the following scenario...",
  },
  {
    id: "9",
    title: "React Component Generator",
    description:
      "Generate production-ready React components with TypeScript, proper prop types, accessibility, and test files included.",
    price: 5.99,
    category: "copilot",
    platform: "GitHub Copilot",
    rating: 4.6,
    reviews: 64,
    seller: "ReactPro",
    tags: ["React", "TypeScript", "components"],
    featured: false,
    preview:
      "Generate a fully typed React component for [description]. Include: TypeScript interfaces, proper ARIA attributes...",
  },
  {
    id: "10",
    title: "Cinematic Scene Creator",
    description:
      "Create movie-quality cinematic scenes with dramatic lighting, composition, and atmosphere. Perfect for storyboards and concept art.",
    price: 8.99,
    category: "midjourney",
    platform: "Midjourney",
    rating: 4.9,
    reviews: 176,
    seller: "CinematicAI",
    tags: ["cinematic", "film", "dramatic"],
    featured: true,
    preview:
      "Cinematic wide shot, [scene description], volumetric lighting, anamorphic lens flare, 35mm film grain...",
  },
  {
    id: "11",
    title: "Data Analysis Wizard",
    description:
      "Transform raw data into insights with prompts for analysis, visualization suggestions, and executive summary generation.",
    price: 6.49,
    category: "chatgpt",
    platform: "ChatGPT",
    rating: 4.5,
    reviews: 92,
    seller: "DataWhisperer",
    tags: ["data analysis", "visualization", "insights"],
    featured: false,
    preview:
      "Act as a senior data analyst. I will provide you with a dataset. Perform comprehensive analysis including...",
  },
  {
    id: "12",
    title: "Logo Design Collection",
    description:
      "Generate professional logo concepts in various styles: minimalist, vintage, geometric, mascot, and lettermark designs.",
    price: 5.99,
    category: "dalle",
    platform: "DALL-E",
    rating: 4.4,
    reviews: 145,
    seller: "BrandCraft",
    tags: ["logo", "branding", "design"],
    featured: false,
    preview:
      "Minimalist logo design for [brand name], [industry], clean lines, flat design, professional color palette...",
  },
];
