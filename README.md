# Zapp | solutions - Corporate Website

A modern, professional website for Zapp | solutions, a Dubai-based technology consulting company. Built with React, TypeScript, and Express.js, featuring a sleek design inspired by leading AI companies.

## Features

- 🎨 Modern, responsive design with gradient backgrounds and smooth animations
- 🚀 Built with React 18, TypeScript, and Tailwind CSS
- 📱 Mobile-first responsive design
- 📧 Contact form with validation and email integration
- ⚡ Fast loading with Vite build system
- 🌐 Ready for deployment on Netlify with serverless functions

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Express.js, Serverless Functions (Netlify)
- **Build Tools**: Vite, esbuild
- **Styling**: Tailwind CSS with custom animations
- **Icons**: Lucide React, React Icons

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Visit `http://localhost:5000` to view the website

## Deployment to Netlify

### Prerequisites
- GitHub account
- Netlify account
- Git installed locally

### Step 1: Push to GitHub

1. Initialize Git repository (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Zapp solutions website"
   ```

2. Create a new repository on GitHub named `zapp-solutions-website`

3. Add GitHub remote and push:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/zapp-solutions-website.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy on Netlify

1. Go to [Netlify](https://www.netlify.com/) and sign in
2. Click "New site from Git"
3. Choose "GitHub" and authorize Netlify
4. Select your `zapp-solutions-website` repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist/public`
   - **Functions directory**: `netlify/functions`
6. Click "Deploy site"

### Step 3: Custom Domain (Optional)

1. In your Netlify site dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Enter your domain (e.g., `zappsolutions.com`)
4. Follow DNS configuration instructions

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── lib/           # Utilities and configurations
│   │   └── hooks/         # Custom React hooks
├── server/                 # Express.js backend (for local dev)
├── netlify/               # Netlify deployment configuration
│   └── functions/         # Serverless functions
├── shared/                # Shared types and schemas
├── netlify.toml          # Netlify configuration
└── README.md             # This file
```

## Environment Variables

For production deployment, you may want to add these environment variables in Netlify:

- `NODE_ENV=production`
- Add any API keys or external service credentials as needed

## Contact Form Integration

The contact form currently stores submissions in memory for demo purposes. For production use, consider integrating with:

- Email services (SendGrid, Mailgun)
- CRM systems (HubSpot, Salesforce)
- Database (PostgreSQL, MongoDB)

## Support

For technical support or questions about this website, contact: ceo@zappsolutions.com

## License

© 2024 Zapp | solutions. All rights reserved.