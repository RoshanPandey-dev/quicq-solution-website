# Quicq Solution — Project Documentation

---

## 📌 Table of Contents

1. [Project Overview](#1-project-overview)
2. [Business Information](#2-business-information)
3. [Tech Stack & Dependencies](#3-tech-stack--dependencies)
4. [Project Structure](#4-project-structure)
5. [Design System](#5-design-system)
6. [Pages & Components](#6-pages--components)
7. [Routing & Navigation](#7-routing--navigation)
8. [Animations & Transitions](#8-animations--transitions)
9. [Features](#9-features)
10. [Static Assets](#10-static-assets)
11. [Scripts & Commands](#11-scripts--commands)
12. [SEO & Meta Tags](#12-seo--meta-tags)
13. [Responsive Breakpoints](#13-responsive-breakpoints)
14. [Configuration Files](#14-configuration-files)
15. [Deployment Notes](#15-deployment-notes)

---

## 1. Project Overview

| Field         | Details                                                    |
| ------------- | ---------------------------------------------------------- |
| **Name**      | Quicq Solution                                             |
| **Type**      | Single Page Application (SPA) — Company Website            |
| **Industry**  | Local Logistics & Delivery Services                        |
| **Location**  | Mumbai, India                                              |
| **Purpose**   | Showcase truck & carry van delivery services, enable customer contact, and build brand trust |
| **Version**   | 0.0.0 (initial release)                                    |
| **License**   | Private                                                    |

---

## 2. Business Information

### Company Details
- **Company Name:** Quicq Solution
- **Tagline:** Mumbai's Trusted Logistics Partner
- **Founded:** 2021
- **Headquarters:** 305/306, 3rd Floor, Evershine Mall, Chincholi Bunder Road, Malad West, Mumbai – 400064
- **Phone:** +91 88509 35796
- **Email:** info@quicqsolution.com / support@quicqsolution.com
- **Working Hours:** Mon – Sat: 9:00 AM – 7:00 PM, Sun: Closed

### Services Offered
1. **Truck & Van Delivery** — Full truckload (FTL), part-load, and carry van deliveries for parcels, goods, and bulk orders across Mumbai.
2. **Warehousing & Distribution** — Mini warehousing hubs across Mumbai for secure storage, sorting, inventory management, and same-day distribution.
3. **Same-Day Delivery** — Express local deliveries with real-time GPS tracking.
4. **Carry Van Service** — Dedicated carry van pickups for smaller parcel deliveries.

### Key Stats
| Metric             | Value    |
| ------------------ | -------- |
| Fleet Size         | 50+ Trucks & Vans |
| Deliveries Done    | 10,000+  |
| Happy Clients      | 500+     |
| On-Time Rate       | 98%      |
| Years in Mumbai    | 5+       |

### Coverage Area
All Mumbai zones — Colaba, Andheri, Malad, Thane, Navi Mumbai, Bhiwandi, Virar, and beyond.

---

## 3. Tech Stack & Dependencies

### Core Framework
| Technology      | Version   | Purpose                        |
| --------------- | --------- | ------------------------------ |
| React           | ^19.2.0   | UI library                     |
| React DOM       | ^19.2.0   | DOM rendering                  |
| Vite            | ^7.3.1    | Build tool & dev server        |

### Routing
| Package          | Version   | Purpose                        |
| ---------------- | --------- | ------------------------------ |
| react-router-dom | ^7.13.1   | Client-side routing (SPA)      |

### Animation & Scrolling
| Package      | Version  | Purpose                            |
| ------------ | -------- | ---------------------------------- |
| gsap         | ^3.14.2  | Animation engine (GSAP)            |
| @gsap/react  | ^2.1.2   | GSAP React integration             |
| lenis        | ^1.3.18  | Smooth scrolling library           |

### Icons
| Package      | Version   | Purpose                        |
| ------------ | --------- | ------------------------------ |
| lucide-react | ^0.577.0  | Icon library (SVG icons)       |

### Dev Dependencies
| Package                       | Version   | Purpose                  |
| ----------------------------- | --------- | ------------------------ |
| @vitejs/plugin-react          | ^5.1.1    | React plugin for Vite    |
| eslint                        | ^9.39.1   | Code linting             |
| @eslint/js                    | ^9.39.1   | ESLint JS config         |
| eslint-plugin-react-hooks     | ^7.0.1    | React hooks lint rules   |
| eslint-plugin-react-refresh   | ^0.4.24   | React Refresh lint rules |
| globals                       | ^16.5.0   | Global variable defs     |
| @types/react                  | ^19.2.7   | React type definitions   |
| @types/react-dom              | ^19.2.3   | ReactDOM type defs       |

### Fonts (Google Fonts CDN)
- **Outfit** (Headings) — Weights: 300–900
- **Inter** (Body Text) — Weights: 300–900

---

## 4. Project Structure

```
logestic/
└── frontend/
    ├── index.html                          # HTML entry point
    ├── package.json                        # Dependencies & scripts
    ├── vite.config.js                      # Vite configuration
    ├── eslint.config.js                    # ESLint configuration
    ├── README.md                           # Default Vite readme
    │
    ├── public/
    │   └── images/
    │       ├── logo.png                    # Company logo
    │       ├── hero_bg.png                 # Hero & banner background
    │       ├── about_img.png               # About section image
    │       ├── cta_bg.png                  # CTA banner background
    │       ├── blog_thumb.png              # Blog thumbnail
    │       ├── service_logistics.png       # Truck delivery service image
    │       └── service_warehouse.png       # Warehouse service image
    │
    └── src/
        ├── main.jsx                        # React entry point (BrowserRouter)
        ├── App.jsx                         # Root component (routes, layout)
        ├── index.css                       # Global styles & design system
        │
        ├── assets/                         # (Reserved for future assets)
        │
        ├── components/
        │   ├── Navbar.jsx                  # Fixed navigation bar
        │   ├── Navbar.css                  # Navbar styles
        │   ├── Footer.jsx                  # Site footer
        │   ├── Footer.css                  # Footer styles
        │   ├── PageTransition.jsx          # SVG morph page transitions
        │   ├── PageTransition.css          # Transition overlay styles
        │   ├── SmoothScroller.jsx          # Lenis smooth scroll wrapper
        │   ├── WelcomePopup.jsx            # Welcome popup form
        │   └── WelcomePopup.css            # Popup styles
        │
        └── pages/
            ├── Home.jsx                    # Home page (9 sections)
            ├── Home.css                    # Home page styles
            ├── About.jsx                   # About page
            ├── About.css                   # About page styles
            ├── Contact.jsx                 # Contact page
            └── Contact.css                 # Contact page styles
```

---

## 5. Design System

### Color Palette

| Token                  | Hex       | Usage                         |
| ---------------------- | --------- | ----------------------------- |
| `--color-navy-900`     | `#0a1628` | Primary background            |
| `--color-navy-800`     | `#0f1f38` | Secondary background          |
| `--color-navy-700`     | `#152847` | Card backgrounds              |
| `--color-navy-600`     | `#1c3358` | Alternate sections            |
| `--color-navy-500`     | `#243d6a` | Hover states                  |
| `--color-blue-600`     | `#2563eb` | Primary accent (blue)         |
| `--color-blue-500`     | `#3b82f6` | Blue highlights               |
| `--color-blue-400`     | `#60a5fa` | Gradient endpoint             |
| `--color-orange-500`   | `#f97316` | Brand accent (orange)         |
| `--color-orange-400`   | `#fb923c` | Hover orange                  |
| `--color-orange-600`   | `#ea580c` | Active orange                 |
| `--color-green-500`    | `#22c55e` | Success / check icons         |
| `--color-white`        | `#ffffff` | White text                    |
| `--color-gray-100–700` | Various   | Text hierarchy & borders      |

### Typography
| Role     | Font Family | Weights Used   |
| -------- | ----------- | -------------- |
| Headings | Outfit      | 700, 800, 900  |
| Body     | Inter       | 300–700        |

### Spacing & Layout
| Token                | Value       |
| -------------------- | ----------- |
| `--section-padding`  | `100px 0`   |
| `--container-width`  | `1200px`    |
| `--container-padding`| `0 24px`    |

### Border Radius Tokens
| Token          | Value  |
| -------------- | ------ |
| `--radius-sm`  | `8px`  |
| `--radius-md`  | `12px` |
| `--radius-lg`  | `20px` |
| `--radius-xl`  | `30px` |

### Effects
| Token                  | Description                      |
| ---------------------- | -------------------------------- |
| `--glass-bg`           | Semi-transparent navy overlay    |
| `--glass-border`       | Subtle blue border               |
| `--glass-blur`         | 12px backdrop blur               |
| `--shadow-card`        | Card drop shadow                 |
| `--shadow-glow-blue`   | Blue glow effect                 |
| `--shadow-glow-orange` | Orange glow effect               |

### Button Variants
| Class           | Style                                           |
| --------------- | ----------------------------------------------- |
| `.btn-primary`  | Orange gradient, white text, glow shadow         |
| `.btn-secondary`| Transparent, white text, border                  |
| `.btn-blue`     | Blue gradient, white text, glow shadow           |

### Reusable CSS Classes
| Class             | Description                                       |
| ----------------- | ------------------------------------------------- |
| `.container`      | Max-width wrapper with auto margins               |
| `.section`        | Standard vertical padding for page sections       |
| `.section-label`  | Orange uppercase label with left bar              |
| `.section-title`  | Gradient text heading (white → blue)               |
| `.section-subtitle`| Gray description text under titles               |
| `.glass-card`     | Glassmorphism card with blur, border, hover lift   |
| `.animate-fade-up`| Fade-in-up animation                              |
| `.animate-fade-left`| Fade-in-from-left animation                     |
| `.animate-fade-right`| Fade-in-from-right animation                   |
| `.animate-float`  | Continuous floating animation                     |

---

## 6. Pages & Components

### 6.1 App.jsx (Root Layout)
The root application component that wraps everything:
- `<SmoothScroller>` — Lenis smooth scroll context provider
- `<ScrollToTop>` — Scrolls to top on route change (respects hash)
- `<Navbar>` — Fixed top navigation (always visible)
- `<WelcomePopup>` — One-time welcome popup form per session
- `<PageTransition>` — SVG morph transitions between pages
- `<Routes>` — React Router page rendering
- `<Footer>` — Site footer (always visible)

---

### 6.2 Pages

#### Home Page (`/`)
**File:** `src/pages/Home.jsx` & `Home.css`

Contains 9 sub-components rendered in order:

| # | Section          | ID              | Description                                                        |
|---|------------------|-----------------|--------------------------------------------------------------------|
| 1 | **Hero**         | `#hero`         | Full-viewport hero with background image, badge, title, CTA buttons, and 3 feature cards |
| 2 | **AboutPreview** | `#about-preview`| Split layout — image with "5+ Years" badge + company description with highlights |
| 3 | **Services**     | `#services`     | 2 service cards with images, numbers, titles, descriptions         |
| 4 | **Process**      | `#process`      | 4-step "How It Works": Book → Collect → Transit → Delivered        |
| 5 | **Stats**        | `#stats`        | Animated counter stats (10,000+ deliveries, 500+ clients, etc.)    |
| 6 | **CtaBanner**    | `#cta-banner`   | Full-width CTA with background image and "Contact Now" button      |
| 7 | **WhyUs**        | `#why-us`       | 4 benefit cards: Coverage, Security, Same-Day, Pricing             |
| 8 | **Testimonials** | `#testimonials` | Auto-rotating carousel with 4 client reviews and dot pagination    |
| 9 | **Blog**         | `#blog`         | 3 blog post preview cards with thumbnails and dates                |

**Special Features:**
- Stats section uses `IntersectionObserver` for count-up animation (triggers once at 30% visibility)
- Testimonials auto-rotate every 5 seconds with manual dot navigation

---

#### About Page (`/about`)
**File:** `src/pages/About.jsx` & `About.css`

| # | Section       | ID               | Description                                                   |
|---|---------------|------------------|---------------------------------------------------------------|
| 1 | **Banner**    | `#about-banner`  | Page header with background, breadcrumb (Home > About)        |
| 2 | **Story**     | `#about-story`   | Split grid — delivery image with "5+ Years" badge + company story with highlights |
| 3 | **MVV**       | `#about-mission` | 3 cards: Mission, Vision, Values                              |
| 4 | **Stats**     | `#about-stats`   | 4 stats on orange gradient background                         |
| 5 | **Timeline**  | `#about-timeline`| 5 milestones (2021–2025) on alternating left/right timeline   |
| 6 | **CTA**       | `#about-cta`     | "Need Reliable Delivery?" call-to-action                      |

**Highlights List:** GPS-Tracked Fleet, Same-Day Delivery, Dedicated Support Team, All Mumbai Zones Covered

**Timeline Milestones:**
| Year | Event                                                          |
|------|----------------------------------------------------------------|
| 2021 | Founded with 5 carry vans in Malad West                       |
| 2022 | Fleet expanded to 20+ vehicles, added mini trucks              |
| 2023 | Launched real-time GPS tracking & automated dispatch           |
| 2024 | City-wide coverage — Thane, Navi Mumbai, and beyond            |
| 2025 | Crossed 10,000 deliveries with 98% on-time rate               |

---

#### Contact Page (`/contact`)
**File:** `src/pages/Contact.jsx` & `Contact.css`

| # | Section          | ID                    | Description                                             |
|---|------------------|-----------------------|---------------------------------------------------------|
| 1 | **Banner**       | `#contact-banner`     | Page header with breadcrumb (Home > Contact)            |
| 2 | **Info Cards**   | `#contact-info`       | 4 cards: Call, Email, Visit, Working Hours              |
| 3 | **Form + Map**   | `#contact-form-section`| Contact form (5 fields) + Google Maps embed + socials  |

**Contact Form Fields:**
| Field    | Type     | Required | Placeholder              |
|----------|----------|----------|--------------------------|
| Name     | text     | Yes      | John Doe                 |
| Email    | email    | Yes      | john@example.com         |
| Phone    | tel      | No       | +91 98765 43210          |
| Subject  | text     | Yes      | How can we help?         |
| Message  | textarea | Yes      | Tell us about your requirements... |

**Behavior:** On submit, shows a success message for 4 seconds and resets the form.

---

### 6.3 Components

#### Navbar (`components/Navbar.jsx`)
- **Position:** Fixed at top, `z-index: 1000`
- **Layout:** Logo | Desktop Nav Links | Phone + CTA | Mobile Burger
- **Scroll Effect:** Transparent by default → dark glass background after 50px scroll
- **Navigation Items:**

| Label    | Route        | Type            |
|----------|-------------|-----------------|
| Home     | `/`         | React Router Link |
| About    | `/about`    | React Router Link |
| Services | `/#services`| Anchor link (hash) |
| Contact  | `/contact`  | React Router Link |

- **Mobile Menu:** Full-screen overlay with GSAP clip-path animation, staggered link reveals, and burger-to-X icon morphing
- **Active State:** Orange highlight on current page link

#### Footer (`components/Footer.jsx`)
- **Layout:** 4-column grid:
  1. Brand logo, description, social icons (WhatsApp, Facebook, Twitter, LinkedIn, Instagram)
  2. Company links (About, Services, Contact, Careers)
  3. Services links (Truck Delivery, Van Service, Warehousing, Same-Day)
  4. Contact info (Address, Phone, Email)
- **Bottom Bar:** Copyright © 2026 + Scroll-to-top button

#### PageTransition (`components/PageTransition.jsx`)
- **Type:** SVG path morphing transition between routes
- **Flow:**
  1. Intercepts link clicks for cross-page navigation
  2. Animates SVG curve from bottom → covers screen
  3. Shows logo branding during transition (500ms)
  4. Navigates to new route, updates `displayLocation`
  5. Animates SVG curve away revealing new page
- **Hash Support:** Properly parses `/#services` links, scrolls to hash element after transition

#### SmoothScroller (`components/SmoothScroller.jsx`)
- **Library:** Lenis
- **Config:** Duration 1.2s, smooth wheel, touch multiplier 2x
- **Integration:** Connected to GSAP ScrollTrigger
- **Context:** Exposes `LenisContext` for components to start/stop scroll (used by Navbar mobile menu)

#### WelcomePopup (`components/WelcomePopup.jsx`)
- **Trigger:** Appears 800ms after page load (once per browser session via `sessionStorage`)
- **Fields:** Name, Email, Message
- **Close Methods:** X button, Cancel button, Submit, Click outside overlay
- **Styling:** White card on dark backdrop blur overlay, smooth fade+slide animation
- **Z-index:** 10000 (above everything)

---

## 7. Routing & Navigation

### Route Configuration
```
BrowserRouter
└── App
    └── PageTransition
        └── Routes
            ├── /         → <Home />
            ├── /about    → <About />
            └── /contact  → <Contact />
```

### Navigation Flow
| From     | To         | Method                                   |
|----------|-----------|-------------------------------------------|
| Any page | Home      | React Router `<Link to="/">`              |
| Any page | About     | React Router `<Link to="/about">`         |
| Any page | Services  | Anchor `<a href="/#services">` — navigates to `/` and scrolls to `#services` |
| Any page | Contact   | React Router `<Link to="/contact">`       |

### ScrollToTop Behavior
- Automatically scrolls to top on every route change
- Skips scroll-to-top when URL contains a hash (e.g., `/#services`)

---

## 8. Animations & Transitions

### CSS Animations
| Animation       | Duration | Effect                        |
|----------------|----------|-------------------------------|
| `fadeInUp`      | 0.8s     | Slide up + fade in            |
| `fadeInLeft`    | 0.8s     | Slide from left + fade in     |
| `fadeInRight`   | 0.8s     | Slide from right + fade in    |
| `float`         | 3s       | Continuous vertical float     |
| `pulse-glow`    | Infinite | Pulsing orange glow           |
| `countUp`       | —        | Scale + fade for numbers      |
| `slideDown`     | —        | Slide from top + fade in      |

### GSAP Animations
| Component       | Animation                                                |
|----------------|----------------------------------------------------------|
| Navbar Menu     | Clip-path reveal, staggered link items, line scale, burger→X morph |
| Page Transition | SVG path morph (flat→curve→flat), logo fade in/out       |

### Lenis Smooth Scrolling
- Smooth wheel scrolling with custom easing
- Paused when mobile menu is open, resumed on close

---

## 9. Features

### Completed Features
- ✅ Responsive design (5 breakpoints: 1440px, 1024px, 968px, 768px, 480px)
- ✅ Smooth scrolling (Lenis)
- ✅ Page transitions with SVG morph animation (GSAP)
- ✅ Animated stats counter (IntersectionObserver)
- ✅ Auto-rotating testimonial carousel
- ✅ Full-screen mobile navigation with GSAP animations
- ✅ Glassmorphism card design
- ✅ Google Maps embed on Contact page
- ✅ Contact form with validation and success feedback
- ✅ Welcome popup form (session-based, one-time)
- ✅ Scroll-to-top button
- ✅ Hash-based navigation for Services section
- ✅ Custom scrollbar styling
- ✅ SEO meta tags & Open Graph

### Not Yet Implemented
- ❌ Backend API for form submissions (currently client-side only)
- ❌ Blog detail pages (blog cards link to `#`)
- ❌ Gallery page
- ❌ Service dropdown menu
- ❌ Social media links (all point to `#`)
- ❌ Authentication / Admin panel
- ❌ Analytics integration

---

## 10. Static Assets

All images are in `/public/images/`:

| File                    | Used In                    | Description                |
|------------------------|---------------------------|----------------------------|
| `logo.png`             | Navbar, Footer, Favicon, PageTransition | Company logo |
| `hero_bg.png`          | Home Hero, About Banner, Contact Banner | Background image |
| `about_img.png`        | Home AboutPreview, About Story | Delivery team photo   |
| `cta_bg.png`           | Home CtaBanner             | CTA section background     |
| `blog_thumb.png`       | Home Blog                  | Blog card thumbnail        |
| `service_logistics.png`| Home Services, Home Blog   | Truck delivery image       |
| `service_warehouse.png`| Home Services, Home Blog   | Warehouse image            |

---

## 11. Scripts & Commands

| Command           | Description                          |
|-------------------|--------------------------------------|
| `npm run dev`     | Start Vite dev server (hot reload)   |
| `npm run build`   | Production build to `dist/`          |
| `npm run preview` | Preview production build locally     |
| `npm run lint`    | Run ESLint on all files              |

### Running Locally
```bash
cd frontend
npm install
npm run dev
```
Dev server runs on `http://localhost:5173` by default.

---

## 12. SEO & Meta Tags

Configured in `index.html`:

| Tag                     | Value                                                        |
|------------------------|--------------------------------------------------------------|
| `<title>`              | Quicq Solution — Truck & Van Delivery in Mumbai              |
| `meta description`     | Fast, reliable truck and carry van delivery across Mumbai     |
| `og:title`             | Quicq Solution — Truck & Van Delivery in Mumbai              |
| `og:description`       | Same-day delivery, mini warehousing, affordable logistics     |
| `og:type`              | website                                                      |
| Favicon                | `/images/logo.png`                                           |

---

## 13. Responsive Breakpoints

The site adapts across 5 breakpoints:

| Breakpoint | Target Device      | Key Changes                                    |
|------------|--------------------|-------------------------------------------------|
| > 1440px   | Large desktop      | Full layout, all columns visible                |
| ≤ 1440px   | Laptop             | Reduced padding, smaller fonts, tighter grids   |
| ≤ 1024px   | Tablet landscape   | Section padding reduced                         |
| ≤ 968px    | Tablet portrait    | About grid→1 column, mobile navbar visible      |
| ≤ 768px    | Mobile             | Single column, stacked cards, hamburger menu    |
| ≤ 480px    | Small mobile       | Compressed spacing, smaller headings            |

### Navbar Responsive Behavior
- **Desktop (>968px):** Horizontal nav links + phone + CTA button visible
- **Mobile (≤968px):** Hamburger toggle → full-screen overlay menu with GSAP animation

---

## 14. Configuration Files

### vite.config.js
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### eslint.config.js
- Extends: `@eslint/js` recommended, React hooks rules, React Refresh rules
- Target: ES2020, browser globals
- Custom rule: Unused vars ignored if they start with uppercase or underscore

---

## 15. Deployment Notes

### Build Output
- Run `npm run build` → output in `frontend/dist/`
- SPA requires server-side redirect: all routes should serve `index.html`

### Environment Considerations
- No environment variables used currently
- All API keys/secrets: None (no backend connected)
- Google Maps embed uses public embed URL (no API key required)

### Hosting Recommendations
The site is a static SPA and can be deployed on:
- **Vercel** — zero-config React deployment
- **Netlify** — add `_redirects` file: `/* /index.html 200`
- **Azure Static Web Apps** — configure navigation fallback
- **GitHub Pages** — requires hash router or 404.html redirect

### SPA Redirect Rule
For any hosting platform, ensure all paths redirect to `index.html`:
```
/* → /index.html (200)
```

---

## Appendix: Component Dependency Graph

```
main.jsx
└── BrowserRouter
    └── App.jsx
        └── SmoothScroller (Lenis context)
            ├── ScrollToTop
            ├── Navbar
            │   └── SmoothScroller context (useLenis)
            ├── WelcomePopup
            ├── PageTransition (GSAP SVG morph)
            │   └── Routes
            │       ├── Home
            │       │   ├── Hero
            │       │   ├── AboutPreview
            │       │   ├── Services
            │       │   ├── Process
            │       │   ├── Stats (IntersectionObserver)
            │       │   ├── CtaBanner
            │       │   ├── WhyUs
            │       │   ├── Testimonials (auto-rotate)
            │       │   └── Blog
            │       ├── About
            │       └── Contact (form state)
            └── Footer
```

---

*Document generated: March 12, 2026*
*Project: Quicq Solution Frontend v0.0.0*
