# Zapp | solutions - Corporate Website

## Overview

This is a modern, professional corporate website for "Zapp | solutions", a Dubai-based technology consulting company. The application features a sleek business website with contact form system, built using React frontend with Express.js backend for local development and Netlify serverless functions for production deployment. Design inspired by leading AI companies like beam.ai and morningside.ai.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and production builds
- **UI Components**: Comprehensive set of Radix UI primitives with custom styling

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **API Design**: RESTful endpoints for contact form submissions
- **Error Handling**: Centralized error handling with proper HTTP status codes
- **Middleware**: Express middleware for JSON parsing, CORS, and request logging

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless)
- **Schema Management**: Drizzle migrations for database schema versioning
- **Validation**: Zod schemas for runtime type validation

## Key Components

### Business Website Features
- **Hero Section**: Professional landing area with call-to-action buttons
- **Services Section**: Showcases 6 core service offerings (AI & Automation, Custom Development, Business Intelligence, Cloud Solutions, Digital Transformation, Support Services)
- **About Section**: Company information with trust indicators
- **Contact Form**: Full-featured contact form with validation and submission handling
- **Navigation**: Responsive navigation with smooth scrolling
- **Footer**: Professional footer with social media links and company information

### Technical Components
- **Contact Storage**: In-memory storage implementation with interface for easy database integration
- **Form Validation**: Client and server-side validation using Zod schemas
- **Responsive Design**: Mobile-first responsive design using Tailwind CSS
- **Toast Notifications**: User feedback system for form submissions
- **Error Boundaries**: Proper error handling and user feedback

## Data Flow

### Contact Form Submission
1. User fills out contact form with required fields (firstName, lastName, email, message) and optional fields (company, service)
2. Client-side validation using Zod schemas
3. Form data submitted to `/api/contact` endpoint via POST request
4. Server validates data using shared Zod schema
5. Contact information stored in memory storage (ready for database integration)
6. Success/error response returned to client
7. Toast notification displayed to user

### Data Models
- **Contact**: Core entity with id, firstName, lastName, email, company, service, message, createdAt
- **Shared Schema**: Common type definitions between client and server using Zod

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database driver for Neon
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Comprehensive UI component primitives
- **tailwindcss**: Utility-first CSS framework
- **wouter**: Lightweight client-side routing
- **zod**: Runtime type validation

### Development Tools
- **vite**: Fast build tool and development server
- **typescript**: Static type checking
- **esbuild**: Fast JavaScript bundler for production
- **tsx**: TypeScript execution for development

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds the React application to `dist/public`
- **Backend Development**: Express server for local development
- **Backend Production**: Netlify serverless functions handle API requests
- **Static Assets**: Served directly from Netlify CDN

### Environment Configuration
- **Development**: Uses tsx for hot reloading and Vite dev server on port 5000
- **Production**: Static site deployment on Netlify with serverless functions
- **API Endpoints**: Converted to Netlify functions (`/.netlify/functions/`)

### Deployment Commands
- `npm run dev`: Start development server with hot reloading
- `npm run build`: Build frontend for production (Vite only)
- `npm run build:server`: Build both frontend and backend for local production
- `npm run start`: Start local production server

### Netlify Configuration
- **Build Command**: `npm run build`
- **Publish Directory**: `dist/public`
- **Functions Directory**: `netlify/functions`
- **Redirects**: API routes redirect to serverless functions, SPA fallback to index.html

### Hosting Considerations
- Primary deployment target: Netlify with GitHub integration
- Contact form submissions handled by serverless functions
- No database required for basic functionality (uses in-memory storage)
- Easy integration with external services (email, CRM) through environment variables

### Recent Changes (2024-01-23)
- Added Netlify deployment configuration (`netlify.toml`)
- Created serverless functions for contact form (`/netlify/functions/contact.ts`)
- Updated build process for static site deployment
- Added comprehensive deployment documentation in README.md