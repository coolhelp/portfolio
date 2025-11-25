# 🚀 Deployment Guide - Step by Step

## ✅ Pre-Deployment Checklist

Your portfolio is ready! Here's what's configured:

- ✅ Profile picture added (`profile.jpg`)
- ✅ All project images added (`project1.jpg`, `project2.jpg`, `project3.jpg`)
- ✅ Netlify configuration ready (`netlify.toml`)
- ✅ Build scripts fixed (no more `next export` error)
- ✅ All code tested and working

## 📤 Step 1: Push to GitHub

Open your terminal in the project folder and run:

```bash
# Stage all changes
git add .

# Commit with a message
git commit -m "Portfolio ready for deployment with images"

# Push to GitHub
git push origin main
```

> **Note:** If this is your first commit, you may need to set up the repository first:
> ```bash
> git init
> git add .
> git commit -m "Initial commit - Portfolio ready"
> git branch -M main
> git remote add origin https://github.com/coolhelp/portfolio.git
> git push -u origin main
> ```

## 🌐 Step 2: Deploy to Netlify

### Option A: Deploy via Netlify Website (Recommended)

1. **Go to Netlify:**
   - Visit [app.netlify.com](https://app.netlify.com)
   - Log in with your GitHub account

2. **Add New Site:**
   - Click "Add new site" button
   - Select "Import an existing project"

3. **Connect GitHub:**
   - Choose "Deploy with GitHub"
   - Authorize Netlify to access your repositories
   - Select your `portfolio` repository

4. **Configure Build Settings:**
   - Netlify should auto-detect these settings:
     - **Build command:** `npm run build`
     - **Publish directory:** (leave empty, handled by plugin)
     - **Branch:** `main`
   
   - If not auto-detected, enter them manually

5. **Deploy:**
   - Click "Deploy site"
   - Wait 2-3 minutes for the build to complete
   - 🎉 Your site will be live!

6. **Get Your URL:**
   - Netlify will give you a URL like: `https://random-name-12345.netlify.app`
   - You can customize this in Site Settings

### Option B: Deploy via Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize and deploy
netlify init

# Follow the prompts:
# - Create & configure a new site
# - Choose your team
# - Enter site name (or leave blank for random)
# - Build command: npm run build
# - Directory to deploy: (leave empty)

# Deploy!
netlify deploy --prod
```

## 🎨 Step 3: Customize Your Domain (Optional)

### Custom Subdomain (Free):
1. Go to Site Settings → Domain Management
2. Click "Options" → "Edit site name"
3. Change from `random-name-12345` to `andrewyang-portfolio`
4. Your new URL: `https://andrewyang-portfolio.netlify.app`

### Custom Domain (Optional):
1. Buy a domain (e.g., `andrewyang.dev`)
2. In Netlify: Site Settings → Domain Management
3. Click "Add custom domain"
4. Follow the DNS configuration instructions

## 🔍 Step 4: Verify Deployment

After deployment completes:

1. **Open Your Site:**
   - Click the Netlify URL
   - Wait for it to load

2. **Check Everything:**
   - ✅ Profile picture shows correctly
   - ✅ Name "Andrew Yang" displays fully (including "g")
   - ✅ Animations work smoothly
   - ✅ All 3 project images display
   - ✅ Social links work
   - ✅ Mobile responsive (test on phone)

3. **Test Performance:**
   - Open Chrome DevTools → Lighthouse
   - Run audit for Performance, Accessibility, SEO
   - Should score 90+ on all metrics!

## 🐛 Troubleshooting

### Build Fails on Netlify

**Check the build log for errors:**

- **"Cannot find module 'next'"** → Install dependencies issue
  - Solution: Netlify should auto-install, but check package.json

- **Image optimization error** → Need @netlify/plugin-nextjs
  - Solution: Already configured in netlify.toml ✅

- **"next export" error** → Old issue
  - Solution: Already fixed by removing export scripts ✅

### Site Loads But Images Don't Show

- Check image file names (case-sensitive):
  - `profile.jpg` (not Profile.jpg)
  - `project1.jpg`, `project2.jpg`, `project3.jpg`

- Images must be in `public` folder ✅

### Animations Don't Work

- Clear browser cache (Ctrl + Shift + R or Cmd + Shift + R)
- Check browser console for JavaScript errors

## 📊 Monitor Your Deployment

### Netlify Dashboard Shows:

- ✅ Build status (success/fail)
- 📈 Deploy time (~2-3 minutes)
- 🔗 Live site URL
- 📊 Analytics (visits, page views)
- 🚀 Performance metrics

### Enable Continuous Deployment:

Now whenever you push to GitHub:
1. Netlify automatically detects the push
2. Rebuilds your site
3. Deploys the new version
4. Live in ~2-3 minutes!

## 🎯 Next Steps After Deployment

1. **Share Your Portfolio:**
   - Add URL to your GitHub profile
   - Share on LinkedIn
   - Add to your resume

2. **SEO Optimization:**
   - Submit to Google Search Console
   - Add Google Analytics (optional)
   - Generate sitemap

3. **Keep Updating:**
   - Add new projects
   - Update experience
   - Improve design

## 📧 Your Portfolio URLs

After deployment, you'll have:

- **Netlify URL:** `https://your-site.netlify.app`
- **GitHub Repo:** `https://github.com/coolhelp/portfolio`
- **Custom Domain:** (optional) `https://andrewyang.dev`

---

## 🎉 Ready to Deploy!

Run these commands now:

```bash
git add .
git commit -m "Portfolio ready for deployment"
git push origin main
```

Then visit [app.netlify.com](https://app.netlify.com) and follow Step 2 above!

**Your portfolio will be live in minutes!** 🚀

---

Need help? Check the build logs in Netlify dashboard or reach out at cool.andrew2026@gmail.com

