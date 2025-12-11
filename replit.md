# Pentalks

## Overview

Pentalks is a React-based frontend application focused on delivering a visually rich, animated user experience. The project emphasizes smooth scrolling, 3D graphics, and sophisticated animations using modern web technologies. It is designed as a creative collective website with two sub-brands: Mukham (Architectural Studio) and Ver (Podcast Network).

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

- **December 2024**: Added dedicated Mukham and Ver pages with full content
- **December 2024**: Enhanced Home page with Process, Testimonials, Client Logos, and CTA sections
- **December 2024**: Expanded About page with team profiles, values, and company timeline
- **December 2024**: Updated navigation to include Mukham and Ver links with mobile menu support

## System Architecture

### Frontend Architecture

**Framework & Build Tool**
- React 19 with Vite 7 for fast development and optimized builds
- JSX syntax (not TypeScript) for component development
- ES modules throughout the codebase

**Styling Approach**
- Tailwind CSS 4 integrated via Vite plugin for utility-first styling
- Custom CSS animations defined in `src/index.css` for specialized effects
- Custom fonts: Inter (body text) and Syne (headings)
- Brand colors: #C47A3D (copper/accent), #FAF7F2 (cream/background), #0a0a0a (dark)
- Class merging utilities using `clsx` and `tailwind-merge` for conditional styling

**Animation & Motion**
- GSAP (GreenSock Animation Platform) with React integration for complex animations
- Framer Motion for declarative React animations
- Lenis smooth scrolling for enhanced scroll experiences
- Custom keyframe animations for floating and glowing effects

**3D Graphics**
- Three.js as the 3D rendering engine
- React Three Fiber for declarative Three.js in React
- React Three Drei for useful Three.js helpers and abstractions

**Routing**
- React Router DOM v7 with HashRouter for client-side navigation
- Routes: /, /about, /companies, /mukham, /ver

**UI Components**
- Radix UI primitives (Slot component) for accessible, unstyled components
- Class Variance Authority (CVA) for component variant management
- Lucide React and React Icons for iconography

### Project Structure

```
src/
├── main.jsx                    # Application entry point
├── index.css                   # Global styles, fonts, and animations
├── App.jsx                     # Main app with routing
├── components/
│   ├── pages/
│   │   ├── Home.jsx            # Home page
│   │   ├── AboutPage.jsx       # About page with team & timeline
│   │   ├── CompaniesPage.jsx   # Companies directory
│   │   ├── MukhamPage.jsx      # Mukham architectural studio page
│   │   └── VerPage.jsx         # Ver podcast network page
│   ├── ui/
│   │   ├── Experience.jsx      # 3D canvas experience
│   │   ├── Particles.jsx       # Particle effects
│   │   └── Turtle.jsx          # 3D turtle model
│   ├── Hero.jsx                # Hero section
│   ├── Navbar.jsx              # Navigation with mobile menu
│   ├── Footer.jsx              # Site footer
│   ├── WhatIsPentalks.jsx      # Services overview
│   ├── BrandHlghlights.jsx     # Mukham & Ver showcase cards
│   ├── Philiosophy.jsx         # Philosophy quote section
│   ├── ProcessSection.jsx      # How we work section
│   ├── Testimonials.jsx        # Client testimonials
│   ├── ClientLogos.jsx         # Trusted brands section
│   ├── CTASection.jsx          # Call to action section
│   ├── SectionHeader.jsx       # Reusable section header
│   ├── cursor.jsx              # Custom cursor
│   ├── SmoothScrollManager.jsx # Lenis smooth scroll
│   └── ScrollToTop.jsx         # Scroll to top utility
lib/
└── utils/utils.ts              # Shared utility functions (cn helper)
public/
├── logogreen.png               # Main logo
└── mukhamcover.png             # Mukham cover image
```

### Design Decisions

**Custom Cursor**: The default cursor is hidden (`cursor: none`) to allow for a custom cursor implementation, common in creative/portfolio sites.

**Development Server**: Configured to run on port 5000 with host binding to `0.0.0.0` for external access, suitable for Replit's environment.

**No TypeScript**: The project uses JavaScript with JSX despite having type definition packages installed, keeping the setup simpler.

## External Dependencies

### Animation Libraries
- **GSAP**: Industry-standard animation library for high-performance animations
- **Framer Motion**: React-first animation library for UI transitions
- **Lenis**: Smooth scroll library for buttery scrolling effects

### 3D Rendering
- **Three.js**: Core 3D graphics library
- **@react-three/fiber**: React renderer for Three.js
- **@react-three/drei**: Helper components for common Three.js patterns

### UI Framework
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **Lucide React / React Icons**: Icon libraries

### Development Tools
- **ESLint**: Code linting with React-specific plugins
- **Vite**: Build tool and development server

### No Backend/Database
This is a frontend-only application with no backend services, APIs, or database integrations currently configured.
