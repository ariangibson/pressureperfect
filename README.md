# Pressure Perfect — Modern React Website

A cinematic, modern redesign of [Pressure Perfect](https://www.pressureperfectco.com)'s website built with **React + Vite + Tailwind CSS + TypeScript**.

Professional driveway and sidewalk cleaning in Apex, NC by local students Alex & Mateo.

## Features

- **Cinematic Hero Section** with suburban neighborhood drone video background
- **Scroll-triggered animations** using Intersection Observer API
- **Responsive navigation** with active section tracking
- **Modern glassmorphic design** with teal accent color scheme
- **Live contact form** connected to email for quote requests
- **Google Maps embed** for service area visualization
- **SEO optimized** with geo tags, Open Graph, and Twitter Cards

## Tech Stack

- [React 18](https://react.dev/) + [Vite](https://vitejs.dev/) (SWC) for lightning-fast builds
- [TypeScript](https://www.typescriptlang.org/) for type safety
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Lucide React](https://lucide.dev/) for icons
- [Inter](https://fonts.google.com/specimen/Inter) & [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif) fonts

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173)

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── public/           # Static assets (images, videos, favicon)
│   ├── images/       # Gallery, neighborhood, team photos
│   ├── hero_video.mp4
│   ├── logo.png
│   └── favicon.svg
├── src/
│   ├── components/   # Navbar, Footer
│   ├── sections/     # Hero, Services, Gallery, About, Pricing, Contact
│   ├── hooks/        # Custom React hooks
│   ├── styles/       # Global styles and animations
│   ├── App.tsx       # Main application
│   └── main.tsx      # Entry point
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Environment Variables

No environment variables required. The contact form submits to FormSubmit and sends an email to hello@pressureperfectco.com.

## License

© 2025 Pressure Perfect. All rights reserved.
