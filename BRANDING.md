# Mau Consulting Brand Guide

## Brand Identity

**Brand Name:** Mau Consulting
**Tagline:** Your Salesforce, workflows, and website, finally working together.
**Founder:** William Mau
**Position:** Technology consulting partner for small businesses

## Brand Personality

- **Approachable** over corporate. Talk like a trusted advisor, not a sales deck.
- **Competent** over flashy. Show expertise through clarity, not jargon.
- **Warm** over cold. The audience is non-technical business owners who need a partner, not a vendor.
- **Direct** over vague. Say what you do, who it helps, and what it costs.

## Target Audience

- Small business owners and operators (10-200 employees)
- Non-technical or lightly technical decision-makers
- Often female, managing operations, sales, or the full business
- Looking for someone to "just handle it" and train their team
- Frustrated with tools that don't talk to each other
- Based in the U.S., primarily small and mid-market

## Color Palette

### Primary: Navy (Authority + Trust)
Used for headings, brand text, grounding elements, and dark backgrounds.

| Token     | Hex       | Usage                                    |
|-----------|-----------|------------------------------------------|
| navy-50   | #f0f4f8   | Subtle tinted backgrounds                |
| navy-100  | #d9e2ec   | Light borders, dividers                  |
| navy-200  | #bcccdc   | Footer CTA subtitle text                 |
| navy-300  | #9fb3c8   | Secondary text on dark backgrounds       |
| navy-400  | #829ab1   | Service category labels                  |
| navy-500  | #627d98   | Mid-weight text                          |
| navy-600  | #486581   | Body text emphasis                       |
| navy-700  | #334e68   | Strong body text                         |
| navy-800  | #243b53   | Result card labels, proof bar emphasis    |
| navy-900  | #102a43   | Headings, brand text, dark section bg    |
| navy-950  | #0a1f33   | Darkest backgrounds (footer CTA dark)    |

### Accent: Warm Coral (Energy + Warmth)
Used for CTAs, hover states, badges, links, and interactive highlights.

| Token      | Hex       | Usage                                   |
|------------|-----------|------------------------------------------|
| accent-50  | #fef4f2   | Light tinted backgrounds, callout bg     |
| accent-100 | #fde8e3   | Icon containers, active nav bg           |
| accent-200 | #fcd0c8   | Borders on accent elements               |
| accent-300 | #f9b0a3   | Hover borders                            |
| accent-400 | #f48672   | Dark mode accent text, dark mode links   |
| accent-500 | #ec6249   | Bullet dots, checkmarks, badge borders   |
| accent-600 | #d94a33   | Primary buttons, links, CTA text         |
| accent-700 | #b63b28   | Hover state for links and buttons        |
| accent-800 | #97321f   | Dark accents                             |
| accent-900 | #7d2c1c   | Deep accent (rarely used)                |

### Neutral: Stone (Warm Gray)
Used for body text, borders, backgrounds, and secondary UI.

| Token      | Hex       | Usage                                   |
|------------|-----------|------------------------------------------|
| stone-50   | #fafaf9   | Alternating section backgrounds          |
| stone-200  | #e7e5e4   | Card borders, dividers                   |
| stone-300  | #d6d3d1   | Proof bar separators                     |
| stone-400  | #a8a29e   | FAQ chevrons, muted icons                |
| stone-500  | #78716c   | Secondary body text, descriptions        |
| stone-600  | #57534e   | Primary body text                        |
| stone-700  | #44403c   | Strong body text                         |
| stone-800  | #292524   | Card borders (dark mode)                 |

### Dark Mode
- Background: `gray-950` (#030712) for primary, `gray-900` (#111827) for alternating
- Text: `white` for headings, `stone-300`/`stone-400` for body
- Accent stays the same scale but uses 400 weight for readability

## Typography

**Primary Font:** DM Sans (Google Fonts)
- Weights used: 300, 400, 500, 600, 700
- Character: Softer, rounder, more approachable than Inter or system defaults
- Loaded via Google Fonts preconnect for performance

**Usage:**
- **Headings:** Bold (700), navy-900, tight tracking
- **Body text:** Regular (400), stone-600, relaxed leading
- **Labels/badges:** Semibold (600), uppercase, wide tracking, small size
- **CTAs:** Medium (500) or Semibold (600)

**No monospace.** All technical or label text uses `font-semibold tracking-wide` instead of `font-mono`.

## Photography

- **Style:** Black and white (grayscale filter applied via CSS)
- **Subjects:** Collaborative workspaces, consulting scenarios, clean desk setups
- **Treatment:** Tailwind `grayscale` class on all `<img>` elements
- **Headshot:** B&W, rounded corners, shadow
- **Served locally** from `/public/` directory (no external Unsplash URLs in production)

Current assets:
- `/hero-consulting.jpg` - Hero section (two people collaborating)
- `/photo-break-workspace.jpg` - Photo break section (modern workspace)
- `/william-mau-headshot.jpg` - Founder headshot

## UI Patterns

### Buttons
- **Primary:** `bg-accent-600` with coral shadow, shimmer on hover
- **Outline:** `border-2 border-accent-600 text-accent-600`, subtle bg on hover
- **White outline (on dark bg):** `border-2 border-white/30 text-white hover:bg-white/10`

### Cards
- Solid `bg-white` with `border-stone-200`, rounded-2xl
- No glass morphism, no backdrop-blur
- Subtle shadow on hover (`hover:shadow-lg`)
- Gentle lift on hover (`hover:-translate-y-1`)

### Section Labels
- Pattern: `text-sm font-semibold uppercase tracking-wide text-accent-600`
- Placed above section headings as a category indicator

### Section Backgrounds
- Alternating: `bg-white` / `bg-stone-50` in light mode
- Dark mode: `bg-gray-950` / `bg-gray-900`
- Footer CTA: `bg-navy-900` (dark, authoritative close)

### Hover States
- Cards: border shifts to accent-300, subtle shadow, lift
- Links: underline or color shift to accent-600
- Buttons: scale-105, shadow increase

## Voice and Tone

### Do
- Write like you're explaining something to a smart friend
- Use "I" (personal, direct, not corporate "we")
- Be specific about what you do and what it costs
- Use short sentences and plain language
- Lead with the problem, then the solution

### Don't
- Use em dashes. Use commas, periods, or colons instead.
- Use buzzwords (synergy, leverage, disrupt, next-gen)
- Use monospace or code-like styling in marketing copy
- Be vague about pricing or timelines
- Promise transformation without specifics

### Example Copy Patterns
- "I help small businesses get real value out of the tools they already pay for."
- "Clear scope, fixed timeline. No surprises."
- "Every project includes documentation and training."
- "You work directly with me."

## Logo and Favicon

- **Logo:** Custom "M" mark with "Mau Consulting" text
- **Favicon:** `/mau-consulting-favicon-navy-coral-transparent-filled-512.png`
- **Usage:** Header (logo + text on desktop, logo only on mobile)
- **Brand text color:** `text-navy-900` (light mode), `text-white` (dark mode)

## Page Structure

Every service page follows a consistent layout:
1. **Hero** - Warm gradient background, headline, subtitle, two CTAs
2. **Stats** - Three stat cards with animated counters
3. **Services** - Grid of service cards with icons
4. **Every Project Includes** - Three-column feature callout
5. **Pricing** - Three-tier pricing cards
6. **How It Works** - Four-step process with navy badges
7. **FAQ** - Accordion or card-based Q&A
8. **Footer CTA** - Dark navy section with primary CTA + white outline button

## Technical Notes

- **Framework:** Astro (static site generator)
- **Styling:** Tailwind CSS with custom theme in `tailwind.config.mjs`
- **Dark mode:** Class-based (`darkMode: 'class'`), toggle in header
- **Fonts:** Google Fonts via `<link>` preconnect
- **Deployment:** GitHub Pages (static)
- **SEO:** JSON-LD structured data, Open Graph, Twitter cards
