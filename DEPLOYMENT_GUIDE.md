# Deployment Guide: Zapp | solutions Website

This guide will walk you through deploying your Zapp | solutions website to Netlify using GitHub.

## Prerequisites

✅ **What you need:**
- GitHub account ([sign up here](https://github.com/join))
- Netlify account ([sign up here](https://www.netlify.com/))
- Git installed on your computer ([download here](https://git-scm.com/))

## Step 1: Create GitHub Repository

1. **Go to GitHub** and click the "+" icon in the top right corner
2. **Select "New repository"**
3. **Repository details:**
   - Repository name: `zapp-solutions-website`
   - Description: `Professional corporate website for Zapp | solutions`
   - Make it **Public** (required for free Netlify deployment)
   - Don't initialize with README (we already have one)
4. **Click "Create repository"**

## Step 2: Upload Your Code to GitHub

### Option A: Using Command Line (Recommended)

1. **Open terminal/command prompt** in your project folder
2. **Run these commands one by one:**

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Zapp solutions corporate website"

# Add GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/zapp-solutions-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Option B: Using GitHub Web Interface

1. **Download your project** as a ZIP file from Replit
2. **Extract the ZIP file**
3. **Go to your GitHub repository**
4. **Click "uploading an existing file"**
5. **Drag and drop all project files** (except .replit and .upm folders)
6. **Commit the files**

## Step 3: Deploy to Netlify

1. **Go to [Netlify](https://www.netlify.com/)** and sign in
2. **Click "New site from Git"**
3. **Choose "GitHub"** and authorize Netlify to access your repositories
4. **Select your `zapp-solutions-website` repository**
5. **Configure build settings:**
   - **Branch to deploy**: `main`
   - **Build command**: `node build-netlify.js`
   - **Publish directory**: `dist/public`
   - **Functions directory**: `netlify/functions`
6. **Click "Deploy site"**

## Step 4: Wait for Deployment

- Initial deployment takes **2-5 minutes**
- Netlify will show build progress
- Once complete, you'll get a live URL like: `https://amazing-name-123456.netlify.app`

## Step 5: Customize Your Domain (Optional)

### Free Netlify Subdomain
1. **Go to Site settings > Domain management**
2. **Click "Options" next to your domain**
3. **Select "Edit site name"**
4. **Enter**: `zapp-solutions` (if available)
5. **Your site will be**: `https://zapp-solutions.netlify.app`

### Custom Domain (zappsolutions.com)
1. **Purchase domain** from registrar (GoDaddy, Namecheap, etc.)
2. **In Netlify**: Site settings > Domain management
3. **Click "Add custom domain"**
4. **Enter your domain**: `zappsolutions.com`
5. **Follow DNS configuration instructions**

## Step 6: Test Your Live Website

1. **Visit your live URL**
2. **Test the contact form** - submissions will be processed by serverless functions
3. **Check mobile responsiveness**
4. **Verify all sections load properly**

## Automatic Updates

Once deployed, any changes you push to GitHub will automatically update your live website:

```bash
# Make changes to your code
# Then commit and push:
git add .
git commit -m "Update website content"
git push origin main
```

## Environment Variables (If Needed Later)

If you integrate email services or databases:

1. **In Netlify**: Site settings > Environment variables
2. **Add variables** like:
   - `SENDGRID_API_KEY` for email
   - `DATABASE_URL` for database
   - `CONTACT_EMAIL` for form notifications

## Troubleshooting

### Build Fails
- Check build logs in Netlify dashboard
- Ensure all dependencies are in `package.json`
- Verify build command is `npm run build`

### Contact Form Not Working
- Check Functions tab in Netlify dashboard
- Verify functions are deploying correctly
- Test API endpoints: `https://yoursite.netlify.app/.netlify/functions/contact`

### Site Not Loading
- Check publish directory is `dist/public`
- Verify build completed successfully
- Check for any error messages in deploy logs

## Support

If you need help with deployment:
- **Netlify Docs**: [docs.netlify.com](https://docs.netlify.com)
- **GitHub Docs**: [docs.github.com](https://docs.github.com)
- **Contact**: ceo@zappsolutions.com

---

**Your website will be live at**: `https://your-site-name.netlify.app`

🎉 **Congratulations! Your Zapp | solutions website is now live on the internet!**