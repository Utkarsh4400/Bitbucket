# Multi-Theme Switcher Web App

## Overview

This is a modern React TypeScript application that demonstrates a comprehensive multi-theme switcher system. The application showcases three distinct themes (Minimalist, Dark Sidebar, and Vibrant Cards) that fundamentally change the layout structure, typography, and visual presentation of the same content.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter (lightweight React router)
- **State Management**: React Context API for theme management
- **Data Fetching**: TanStack Query (React Query)
- **Build Tool**: Vite with ESBuild
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Storage**: In-memory storage with interface for future database integration
- **Session Management**: Ready for PostgreSQL session store
- **Development**: Hot module replacement with Vite integration

## Key Components

### Theme System
- **ThemeContext**: Centralized theme state management with localStorage persistence
- **Three Theme Variants**:
  - **Minimalist**: Clean grid layout, Inter font, light backgrounds
  - **Dark Sidebar**: Left sidebar navigation, Playfair Display font, dark color scheme
  - **Vibrant**: Card-based layout, Pacifico font, gradient backgrounds
- **Dynamic Layout**: Each theme completely restructures the layout, not just colors

### Component Architecture
- **Layout Component**: Handles theme-specific layout rendering
- **Header Component**: Adaptive navigation with theme selector dropdown
- **Sidebar Component**: Conditional rendering for dark theme only
- **ProductCard Component**: Theme-specific product display variations
- **UI Components**: Complete shadcn/ui component library integration

### Pages Structure
- **Home**: Hero section with product grid/list display
- **About**: Theme philosophy and feature explanations
- **Contact**: Contact form with theme-appropriate styling
- **404**: Error handling page

## Data Flow

1. **Theme Selection**: User selects theme via dropdown in header
2. **Context Update**: ThemeContext updates global theme state
3. **Layout Adaptation**: Layout component renders theme-specific structure
4. **Component Styling**: All components adapt styling based on current theme
5. **Persistence**: Theme choice saved to localStorage for future visits

### External Data Integration
- **Product Data**: Fetches from FakeStore API using TanStack Query
- **Error Handling**: Graceful loading states and error boundaries
- **Caching**: Optimized data fetching with stale-while-revalidate strategy

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, TypeScript
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **UI Components**: Radix UI primitives, Lucide icons
- **Routing**: Wouter for client-side routing
- **Data Fetching**: TanStack Query for server state management
- **Fonts**: Google Fonts (Inter, Playfair Display, Pacifico)

### Development Dependencies
- **Build**: Vite, ESBuild for production builds
- **Database ORM**: Drizzle ORM with PostgreSQL dialect (configured but not actively used)
- **Development Tools**: Replit integration plugins

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: ESBuild bundles Express server to `dist/index.js`
3. **Static Assets**: Frontend assets served by Express in production

### Environment Configuration
- **Development**: Vite dev server with Express API backend
- **Production**: Single Express server serving both API and static files
- **Database**: Configured for PostgreSQL via DATABASE_URL environment variable

### Development vs Production
- **Development**: Hot module replacement, source maps, development banners
- **Production**: Optimized bundles, static file serving, minimal logging

The application demonstrates advanced React patterns including context-based theming, compound components, and responsive design while maintaining clean separation of concerns between theming logic and business logic.