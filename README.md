# Pressure Perfect - Apex Driveway Cleaning

**Professional pressure washing services by local Apex, NC entrepreneurs Alex & Mateo**

A modern, responsive website built with Astro showcasing driveway and concrete cleaning services for the Apex, North Carolina area.

## 🌟 Features

- **Modern Design**: Clean, professional interface with sophisticated typography and animations
- **Responsive Layout**: Optimized for all devices from mobile to desktop
- **Interactive Navigation**: Active section tracking with smooth scroll and hover effects
- **Contact Form**: Direct integration with webhook for lead capture
- **SEO Optimized**: Comprehensive meta tags and structured data for local search
- **Performance Focused**: Fast loading with optimized images and efficient CSS

## 🏘️ Service Areas

- Apex, NC (Primary)
- Bella Casa
- Abbington 
- Scott's Mill
- Haddon Hall
- Surrounding areas within 5-mile radius

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Typography**: Google Fonts (Inter, Poppins)
- **Form Handling**: Direct webhook integration (n8n)
- **Deployment**: [Vercel](https://vercel.com/) - Static hosting platform

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone [repository-url]
cd pressureperfect

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:4321` to view the site locally.

## 📋 Available Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro ...` | Run Astro CLI commands |

## 🗂️ Project Structure

```
/
├── public/                 # Static assets
│   ├── logo.png           # Company logo
│   ├── hero.png           # Hero background image
│   ├── boys.jpg           # Team photo
│   └── *.jpg              # Gallery and neighborhood images
├── src/
│   ├── layouts/
│   │   └── Layout.astro   # Base HTML layout
│   ├── pages/
│   │   └── index.astro    # Main website page
│   └── styles/
│       └── global.css     # Global styles
├── astro.config.mjs       # Astro configuration
├── tailwind.config.mjs    # Tailwind CSS configuration
└── package.json           # Dependencies and scripts
```

## 🎨 Key Features

### Navigation
- **Smart Active States**: Automatically highlights current section while scrolling
- **Smooth Animations**: Hover effects with animated underlines
- **Mobile Responsive**: Collapsible hamburger menu for smaller screens
- **Modern Icons**: SVG icons for each navigation item

### Sections
1. **Hero**: Eye-catching introduction with customer testimonial
2. **Services**: Three core service offerings with detailed descriptions
3. **Gallery**: Before/after showcase with real project images
4. **About**: Meet the team section highlighting local student entrepreneurs
5. **Pricing**: Transparent project-based pricing structure
6. **Contact**: Multi-channel contact options with working contact form

### Form Integration
- Real-time validation
- Loading states and success feedback
- Direct webhook submission to n8n automation platform
- Thank you page with clear next steps

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Deploy automatically on push to main branch

### Manual Build
```bash
npm run build
# Upload dist/ folder to any static hosting provider
```

## 🔧 Configuration

### Webhook URL
Update the webhook URL in `src/pages/index.astro` if needed:
```javascript
const response = await fetch('https://your-webhook-url.com/endpoint', {
  method: 'POST',
  // ...
});
```

### Contact Information
Update phone numbers, email addresses, and service areas in the main content sections as needed.

## 📱 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## 👥 Team

**Alex & Mateo** - Local Apex high school students providing reliable pressure washing services to their community.

## 📄 License

Private project - All rights reserved.

---

*Built with ❤️ in Apex, NC*