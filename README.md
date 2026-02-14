# William Mau - Personal Website

Modern, professional website serving as both a job-application resume site and consulting marketing site. Built with Astro, TypeScript, and Tailwind CSS. Deployed on GitHub Pages.

## 🚀 Features

- **Modern Tech Stack**: Astro + TypeScript + Tailwind CSS
- **Dark Mode**: Automatic theme detection with manual toggle
- **Responsive Design**: Mobile-first, works beautifully on all devices
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, JSON-LD structured data, sitemap
- **Accessible**: Semantic HTML, ARIA labels, keyboard navigation, focus states
- **Performance**: Lighthouse-optimized, minimal JavaScript, optimized images
- **GitHub Pages Ready**: Automated deployment via GitHub Actions

## 📁 Project Structure

```
website-willmau/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   ├── resume.pdf              # Downloadable PDF resume
│   ├── william-mau-headshot.jpg # Professional headshot
│   ├── robots.txt              # SEO robots file
│   └── favicon.svg             # Site favicon
├── src/
│   ├── components/
│   │   ├── Header.astro        # Main navigation header
│   │   ├── Footer.astro        # Site footer with links
│   │   ├── Hero.astro          # Hero section component
│   │   ├── Button.astro        # Reusable button component
│   │   ├── Card.astro          # Card component
│   │   ├── Badge.astro         # Badge/tag component
│   │   └── Section.astro       # Section wrapper component
│   ├── layouts/
│   │   └── BaseLayout.astro    # Base HTML layout with SEO
│   └── pages/
│       ├── index.astro         # Home page
│       ├── resume.astro        # Resume page
│       ├── consulting.astro    # Consulting services
│       ├── revops.astro        # Salesforce & RevOps page
│       ├── work.astro          # Portfolio & case studies
│       ├── about.astro         # About page
│       ├── contact.astro       # Contact form (mailto)
│       └── notes.astro         # Blog/notes (optional)
├── astro.config.mjs            # Astro configuration
├── tailwind.config.mjs         # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies
└── README.md                   # This file
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- Git installed
- GitHub account

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/williammau/williammau.github.io.git
   cd williammau.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

### Build for Production

```bash
npm run build
```

The built site will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🚢 Deployment to GitHub Pages

### One-Time Setup

1. **Create GitHub repository**
   - Repository name must be: `williammau.github.io` (replace with your GitHub username)
   - Make it public

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: "GitHub Actions"

3. **Update site URL** (if needed)
   - Edit `astro.config.mjs`
   - Update `site` to your actual URL (e.g., `https://williammau.github.io`)

### Deploy

Push to the `main` branch, and GitHub Actions will automatically build and deploy:

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

The site will be live at `https://williammau.github.io` within a few minutes.

## 🔧 Customization

### Update Personal Information

1. **Resume PDF**: Replace `public/resume.pdf` with your latest resume
2. **Headshot**: Replace `public/william-mau-headshot.jpg` with your professional photo
3. **OG Image**: Create `public/og-image.png` (1200x630px) for social media sharing
4. **Contact Info**: Update email, phone, LinkedIn URLs throughout the site

### Update GitHub Link

Update the GitHub URL in:
- `src/components/Footer.astro` - line with GitHub link
- `src/layouts/BaseLayout.astro` - JSON-LD structured data

### Update Site URL

If deploying to a different domain:
1. Edit `astro.config.mjs` - update `site` value
2. Edit `public/robots.txt` - update sitemap URL
3. Edit `src/layouts/BaseLayout.astro` - update JSON-LD URLs

### Styling

All styling is in Tailwind CSS. To customize:
- **Colors**: Edit `tailwind.config.mjs` - update `accent` color values
- **Fonts**: Edit `tailwind.config.mjs` - update `fontFamily` values
- **Components**: Edit individual `.astro` files

### Content

- **Home page**: `src/pages/index.astro`
- **Resume**: `src/pages/resume.astro`
- **Consulting**: `src/pages/consulting.astro`
- **RevOps**: `src/pages/revops.astro`
- **Work/Case Studies**: `src/pages/work.astro`
- **About**: `src/pages/about.astro`
- **Contact**: `src/pages/contact.astro`
- **Notes**: `src/pages/notes.astro`

## 📝 Adding Blog Posts

The Notes page (`src/pages/notes.astro`) includes two placeholder posts. To add real blog posts:

1. Create a content collection in `src/content/` (optional)
2. Or add individual `.md` files with frontmatter
3. Or link to external blog posts

For now, the posts are placeholders in the main `notes.astro` file.

## 🔍 SEO Features

- ✅ Meta titles and descriptions
- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter Card tags
- ✅ JSON-LD structured data (Person schema)
- ✅ Canonical URLs
- ✅ Sitemap (auto-generated by Astro)
- ✅ robots.txt
- ✅ Semantic HTML
- ✅ Fast page load (Lighthouse optimized)

## ♿ Accessibility Features

- ✅ Semantic HTML elements
- ✅ ARIA labels where needed
- ✅ Keyboard navigation support
- ✅ Focus states on interactive elements
- ✅ Sufficient color contrast (WCAG AA)
- ✅ Responsive text sizing
- ✅ Alt text on images

## 🎨 Dark Mode

Dark mode is automatically detected based on system preferences and can be manually toggled via the sun/moon icon in the header. The preference is saved in localStorage.

## 📧 Contact Form

The contact form uses a static approach:
- Form validation on client-side
- Opens user's email client via `mailto:` with pre-filled subject and body
- Includes a "Copy Email" button as fallback
- No backend or paid form service required

## 🧰 Tech Stack

- **Framework**: [Astro 5.x](https://astro.build/)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.x
- **Typography**: @tailwindcss/typography plugin
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📦 Dependencies

```json
{
  "dependencies": {
    "@astrojs/check": "^0.9.4",
    "@astrojs/sitemap": "^3.2.1",
    "@astrojs/tailwind": "^5.1.2",
    "astro": "^5.0.5",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.7.2"
  },
  "devDependencies": {
    "@tailwindcss/typography": "^0.5.15"
  }
}
```

## 🐛 Troubleshooting

### Build fails on GitHub Actions

- Check that `package.json` and `package-lock.json` are committed
- Verify Node version in `.github/workflows/deploy.yml` matches your local version
- Check build logs in GitHub Actions tab

### Dark mode not working

- Clear browser cache and localStorage
- Ensure JavaScript is enabled
- Check browser console for errors

### Images not loading

- Verify images are in `public/` directory
- Check file names match exactly (case-sensitive)
- Clear browser cache

### Contact form not working

- Ensure user has email client configured
- Test the "Copy Email" button as fallback
- Verify email address is correct in `contact.astro`

## 📄 License

This project is open source and available for personal use. Feel free to fork and customize for your own personal website.

## 🤝 Contributing

This is a personal website, but if you find bugs or have suggestions, feel free to open an issue.

## 📧 Contact

- **Email**: William.Mau@gmail.com
- **LinkedIn**: [linkedin.com/in/will-mau](https://www.linkedin.com/in/will-mau/)
- **Phone**: 518-930-8185

---

**Built with** ❤️ **using Astro, TypeScript, and Tailwind CSS**
