# 🚀 Modern Portfolio - Andrew Yang

A stunning, modern portfolio website built with Next.js 14 and Tailwind CSS featuring smooth animations, parallax effects, and beautiful responsive design.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)
![React](https://img.shields.io/badge/React-18-61dafb)

## ✨ Features

- 🎨 **Modern Design** - Gradient backgrounds, glassmorphism effects, and contemporary UI
- 🎭 **Smooth Animations** - Scroll-based animations, hover effects, and parallax scrolling
- 📱 **Fully Responsive** - Perfect on all devices from mobile to desktop
- 🖼️ **Next.js Image Optimization** - Automatic image optimization built-in
- 🎯 **Interactive Elements** - Animated skill cards, project showcases with hover effects
- 🌈 **Animated Gradients** - Beautiful gradient text and overlays
- ⚡ **Performance Optimized** - Fast loading with Next.js App Router
- ♿ **Accessible** - Built with accessibility best practices

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm, yarn, or pnpm

### Installation & Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio!

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Netlify

✅ **Ready to deploy!** This project is pre-configured for Netlify deployment.

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Portfolio ready for deployment"
   git push origin main
   ```

2. **Connect to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Netlify will auto-detect Next.js settings

3. **Deploy:**
   - Click "Deploy site"
   - Netlify will automatically build and deploy your portfolio
   - You'll get a live URL in ~2 minutes!

**Note:** The `netlify.toml` configuration is already set up for you.

### Deploy to Vercel (Alternative)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 🖼️ Adding Images

### Profile Picture

1. Add `profile.jpg` to the `public` folder (400x400px recommended)
2. ✅ Already configured! Your profile picture is displaying.

### Project Screenshots

To add project images:

1. Add these files to the `public` folder:
   - `project1.jpg` (SaaS Subscription Platform)
   - `project2.jpg` (Realtime Collaboration Board)
   - `project3.jpg` (E-Commerce Microservices)
   - Recommended size: 1200x800px (16:9 ratio)

2. In `app/page.js`, find the Project component (around line 249) and uncomment:
   ```jsx
   <Image src={image} alt={title} fill className="object-cover" />
   ```

## 🎨 Customization

### Update Personal Information

Edit `app/page.js`:

**Header Section (lines 26-50):**
- Your name and title
- Tech stack badges
- Social media links

**About Section (lines 65-75):**
- Your bio and experience
- Current availability

**Skills Section (lines 80-105):**
- Add/remove skills
- Update icons (emoji)
- Customize colors

**Projects Section (lines 110-145):**
- Update project titles and descriptions
- Change GitHub repository links
- Modify gradient colors
- Add project images

**Contact Section (lines 150-170):**
- Update email (currently: cool.andrew2026@gmail.com)
- Add social links

### Colors & Styling

**Gradient Colors:**
```jsx
// In app/page.js, change gradient classes:
gradient="from-blue-500 to-cyan-500"  // Customize colors
```

**Global Styles:**
- `app/globals.css` - Custom animations and styles
- `tailwind.config.js` - Tailwind configuration

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css       # Tailwind + custom animations
│   ├── layout.js         # Root layout with SEO
│   └── page.js           # Main portfolio (you are here!)
├── public/
│   ├── profile.jpg       # Your profile picture ✅
│   └── HOW_TO_ADD_IMAGES.md
├── netlify.toml          # Netlify configuration ✅
├── next.config.js        # Next.js configuration
├── package.json          # Dependencies & scripts
├── tailwind.config.js    # Tailwind CSS config
└── README.md            # You are here!
```

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS 3.4
- **Language:** JavaScript (React 18)
- **Animations:** CSS animations + React hooks
- **Deployment:** Netlify / Vercel ready

## 🎨 Design Features

- ✨ Animated gradient text on name
- 🎪 Floating blob animations in header
- 📜 Parallax scrolling effects
- 🎭 Scroll-triggered fade-in animations
- 🎯 Interactive hover states on all elements
- 💎 Glassmorphism effects on cards
- 🌈 Custom gradient scrollbar

## 🐛 Troubleshooting

**Build failing on Netlify?**
- ✅ Fixed! Removed obsolete `next export` command
- The `netlify.toml` is configured correctly

**Images not showing?**
- Make sure images are in the `public` folder
- Check file names match exactly (case-sensitive)
- Uncomment the Image components in code

**Animations not working?**
- Ensure `"use client"` is at top of `app/page.js`
- Clear browser cache
- Check console for errors

## 📝 Recent Fixes

✅ **Fixed Netlify Deployment Error:**
- Removed obsolete `postbuild` and `export` scripts from package.json
- Added `netlify.toml` for proper Next.js configuration
- Ready for deployment!

✅ **Fixed "Yang" Display Issue:**
- Added proper padding to prevent gradient text from cutting off descenders
- Enhanced line-height for better text rendering

✅ **Profile Picture:**
- Successfully integrated your profile photo
- Added hover animation effect

## 📄 License

MIT License - feel free to use this template!

## 🤝 Support

Need help? Feel free to:
- Open an issue on GitHub
- Contact: cool.andrew2026@gmail.com

---

**Built with ❤️ using Next.js and Tailwind CSS**

