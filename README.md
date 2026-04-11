# TuulApp Landing Page

Welcome to the **TuulApp Landing Page** repository! This project is a modern, high-performance web application built to showcase the features, testimonials, and value proposition of TuulApp. 

This application uses a premium card-based layout, seamless infinite marquee animations, and a cohesive design language designed for a professional, high-end brand experience.

## ✨ Features

- **Modern Tech Stack:** React 18, Vite, and TypeScript for robust and fast development.
- **Premium UI/UX:** Stunning visual polish leveraging Tailwind CSS, and Radix UI (shadcn/ui) for accessible, customizable components.
- **Dynamic Animations:** High-speed infinite marquee animations and smooth transitions.
- **Responsive Layout:** Fully optimized presentation across all viewport sizes, from mobile to ultra-wide desktop monitors.
- **Backend Integrations:** Pre-configured with Supabase and React Query for scalable, real-time data management.
- **Testing Capabilities:** Test suite ready with Vitest and E2E coverage capabilities with Playwright.

## 🛠️ Technology Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | React 18 + Vite |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS + `tailwindcss-animate` |
| **UI Components** | shadcn/ui (Radix UI primitives) |
| **Icons** | Lucide React |
| **Data Fetching** | React Query (`@tanstack/react-query`) |
| **Database & Auth** | Supabase (`@supabase/supabase-js`) |
| **Carousels** | Embla Carousel React |
| **Testing** | Vitest, Playwright |
| **Package Manager** | npm |

## 📁 Project Structure

```text
 tuulapp/
 ├── public/                    # Static assets
 ├── src/
 │   ├── assets/                # Images, SVGs, and global assets
 │   ├── components/            # Reusable React components (shadcn/ui + custom sections)
 │   │   ├── BonosSection.tsx   # Bonuses and extra perks
 │   │   ├── CountersSection.tsx# Data/statistics counters
 │   │   ├── DemoModal.tsx      # Modal for booking/viewing demo
 │   │   ├── FaqSection.tsx     # Frequently asked questions
 │   │   ├── FeaturesSection.tsx# Main platform features
 │   │   ├── HeroSection.tsx    # Primary hero splash area
 │   │   ├── LogosSection.tsx   # Trusted by / partners marquee
 │   │   ├── OptionsSection.tsx # Pricing or subscription options
 │   │   ├── PitzonSection.tsx  # Pitzon integration details
 │   │   ├── StepsSection.tsx   # How-it-works workflow
 │   │   ├── TestimonialsSection.tsx # Social proof with responsive layout
 │   │   └── Footer.tsx         # Page footer
 │   ├── hooks/                 # Custom React hooks
 │   ├── integrations/          # External service setups (e.g., Supabase)
 │   ├── lib/                   # Utility functions (e.g., Tailwind merge utility)
 │   ├── pages/                 # Route components (Index, NotFound)
 │   ├── test/                  # Test setups
 │   ├── App.tsx                # Main app setup and router wrapper
 │   ├── index.css              # Global Tailwind imports and base styles
 │   └── main.tsx               # Application entry point
 ├── supabase/                  # Supabase configurations and edge functions
 ├── package.json               # Dependencies and core project scripts
 ├── tailwind.config.ts         # Tailwind CSS configuration
 └── vite.config.ts             # Vite bundler configuration
```

## 🚀 Getting Started

Follow these steps to set up the project on your local machine.

### Prerequisites

- **Node.js:** Installed via `nvm` (version 20+ recommended).
- **npm:** This project uses `npm` as its package manager. It is included with Node.js.

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd tuulapp
```

### 2. Install dependencies

Install the project dependencies using npm:

```bash
npm install
```

### 3. Environment Variables

Check if there are required bindings in the `.env` configuration file in the root directory and ensure they are populated for local development. Likely required keys:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Run the Development Server

Start the local development server using Vite:

```bash
npm run dev
```

The application will be available at `http://localhost:8080` (or another port if 8080 is occupied, you can check your terminal).

## 📜 Available Scripts

- `npm run dev`: Starts the development server using Vite.
- `npm run build`: Builds the application for production, generating static files in the `dist/` directory.
- `npm run build:dev`: Builds the app in development mode for debugging.
- `npm run lint`: Runs ESLint to check for code quality and style issues.
- `npm run preview`: Serves the production build (`dist/`) locally to preview how it behaves before deployment.
- `npm run test`: Runs the Vitest test suite.
- `npm run test:watch`: Runs Vitest with live reload for Test-Driven Development (TDD).

## 🎨 Design System & Customization

The project uses a unified design system orchestrated by Tailwind CSS (`tailwind.config.ts`) and global CSS variables defined in `src/index.css`. 

- **Color Palette & Typography:** Modifications to primary colors, fonts, radius, and gradients should be done inside the `tailwind.config.ts` and `index.css` files. 
- **Components:** shadcn/ui components map to your exact design language. Customize their behaviors or looks to maintain strict consistency with the "TuulApp" high-end branding theme.

## ✅ Quality Assurance

- **Playwright** is configured for end-to-end (E2E) testing. Run tests against your UI flows using `npx playwright test`.
- **Vitest** covers unit testing and logic tests efficiently.

## 🤝 Next Steps & Contribution

When extending the landing page, remember to:
1. Re-use existing UI definitions from Radix and Tailwind.
2. Follow the established component structure (e.g., adding a new Section inside `src/pages/Index.tsx` via a dedicated component file in `src/components`).
3. Keep gradients and animations seamless. Evaluate `tailwindcss-animate` utility classes for unified standard micro-interactions to deliver a polished experience.
