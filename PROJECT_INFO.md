# InitFlow Landing Page

A modern, visually appealing landing page for InitFlow - an AI-powered app builder.

## 🎨 Design

### Color Palette (Tech Innovation Theme)
- **Primary**: Deep Purple/Indigo (`#6366F1`, `#4F46E5`)
- **Secondary**: Cyan/Teal (`#06B6D4`)
- **Accent**: Electric Blue (`#3B82F6`)
- **Neutral**: Dark Slate (`#0F172A`), White (`#FFFFFF`)
- **Gradients**: Purple to Cyan for hero sections and CTAs

### Tech Stack
- **Framework**: Next.js 15.5.5 with App Router
- **React**: 19.1.0
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (body) & Space Grotesk (headings)

## 📦 Components

### Navbar
- Fixed navigation with backdrop blur
- Responsive mobile menu
- Download CTA button
- Smooth scroll links

### Hero Section
- Animated gradient backgrounds
- Platform badges (Windows, Linux, macOS)
- Dual CTAs (Download + Watch Demo)
- Scroll indicator
- Framer Motion animations

### Features Section
- 6 feature cards with icons
- Hover animations and effects
- Gradient accents
- Staggered entrance animations

### How It Works
- 3-step process visualization
- Numbered step indicators
- Icon-based representation
- CTA button

### Download Section
- Platform-specific download cards
- Windows, macOS, Linux support
- File size and version info
- Hover effects and animations

### Footer
- Brand information
- Navigation links
- Social media icons
- Copyright and legal links

## 🚀 Running the Project

```bash
# Development
npm run dev

# Build
npm run build

# Production
npm start

# Lint
npm run lint
```

Visit http://localhost:3000 to view the landing page.

## ✨ Features

- **Fully Responsive**: Works on all devices
- **Dark Mode Support**: Automatic theme switching
- **Smooth Animations**: Framer Motion powered
- **Modern Design**: Glassmorphism and gradients
- **Performance Optimized**: Next.js 15 with Turbopack
- **SEO Ready**: Proper metadata and structure

## 🎯 Platform Support

The landing page highlights that InitFlow is available for:
- Windows 10/11
- macOS 11+
- Linux (Ubuntu 20.04+)

## 📝 Customization

To customize colors, edit `/app/globals.css`:
- Update CSS variables in `:root`
- Modify gradient classes
- Adjust theme colors

To modify content:
- Edit component files in `/components`
- Update metadata in `/app/layout.js`
- Customize sections in `/app/page.js`
