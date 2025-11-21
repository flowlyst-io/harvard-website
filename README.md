# Harvard Public Schools Landing Page

A modern, responsive one-page website for Harvard Public Schools built with Next.js and Tailwind CSS.

## Features

- **One-page design** with smooth scrolling navigation
- **Mobile-first** responsive layout
- **11 key sections**: Hero, Quick Links, Academics, News, Events, Highlights, Superintendent Message, Schools Directory, Contact, and Footer
- **No backend required** - fully static site ready for Vercel deployment
- **Accessible** design following WCAG guidelines
- **Modern UI** with clean, professional styling

## Quick Start

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm start
```

## Deployment to Vercel

This project is configured for easy deployment to Vercel:

1. Push to GitHub
2. Import project in Vercel
3. Deploy (no configuration needed)

The site will be automatically optimized and deployed as a static export.

## Project Structure

```
harvard-website/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles with Tailwind
├── public/              # Static assets
├── tailwind.config.ts   # Tailwind configuration
├── next.config.ts       # Next.js configuration (static export)
└── package.json
```

## Technology Stack

- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first styling
- **Static Export** - No server required

## Sections Overview

1. **Header** - Sticky navigation with logo and quick links
2. **Hero** - Welcome message with CTAs
3. **Quick Links** - 6 icon-based shortcuts to key resources
4. **Teaching & Learning** - Academic program highlights
5. **Latest News** - Recent announcements and updates
6. **Upcoming Events** - Calendar preview
7. **District Highlights** - DEI commitment showcase
8. **Superintendent Message** - Personal welcome
9. **Our Schools** - Directory of 3 schools with links
10. **Contact** - Office information and map placeholder
11. **Footer** - Policies, links, and social media

## Customization

To customize content, edit `/app/page.tsx`. All content is in a single file for easy management.

To modify colors, update `/tailwind.config.ts`:
- `primary` - Navy blue (main brand color)
- `accent` - Orange/gold (call-to-action color)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Harvard Public Schools. All Rights Reserved.
