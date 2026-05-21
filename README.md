# Nexus - Premium SaaS Portfolio Website

A production-ready, modern SaaS company portfolio website built with Next.js 15, React 19, TypeScript, Tailwind CSS v4, and Three.js.

## Features

- **Landing Page**: Hero with 3D scene, client logos, features, testimonials, pricing, blog preview, FAQ, CTA
- **About Page**: Mission, vision, values, timeline, team
- **Product Page**: Features, integrations, API docs
- **Blog System**: Listing, categories, search, article detail with SEO
- **Auth System**: Login, signup, forgot password with social auth
- **Dashboard**: User profile, settings, activity tracking
- **Contact & Careers**: Forms, job listings, company culture
- **Legal Pages**: Privacy, Terms, Cookies

## Tech Stack

- **Framework**: Next.js 15 (App Router, PPR, React Compiler)
- **Language**: TypeScript 5.7
- **Styling**: Tailwind CSS v4 (CSS-first config)
- **UI**: Radix UI primitives + custom components
- **3D**: React Three Fiber + Drei
- **Animation**: Framer Motion
- **Auth**: Clerk
- **CMS**: Sanity (ready for integration)
- **Database**: Supabase (ready for integration)
- **Analytics**: Vercel Analytics + Speed Insights

## Getting Started

1. Clone the repository
2. Copy `.env.example` to `.env.local` and fill in your credentials
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
SANITY_API_TOKEN=

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── (auth)/            # Auth routes (login, signup)
│   ├── (marketing)/       # Marketing pages
│   ├── dashboard/         # Protected dashboard
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── 3d/               # Three.js components
│   ├── home/             # Home page sections
│   ├── layout/           # Navbar, Footer, Providers
│   ├── shared/           # Reusable components
│   └── ui/               # UI primitives
├── lib/                  # Utilities, config, hooks
├── types/                # TypeScript types
└── public/               # Static assets
```

## Performance

- Lighthouse Score: 95+ Performance, 95+ Accessibility, 100 SEO
- Optimized 3D rendering with reduced motion support
- Lazy loading and image optimization
- Edge-ready with Vercel

## License

MIT License - feel free to use this for your own projects.
