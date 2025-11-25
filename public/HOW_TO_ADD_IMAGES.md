# 📸 How to Add Images to Your Portfolio

## Quick Guide

Simply add your images to this `public` folder with these names:

### Required Images:

1. **profile.jpg** - Your profile photo
   - Recommended size: 400x400px (square)
   - Should be a professional headshot
   - Format: JPG, PNG, or WebP

2. **project1.jpg** - SaaS Subscription Platform screenshot
   - Recommended size: 1200x800px (16:9 ratio)
   - Show the main dashboard or key feature

3. **project2.jpg** - Realtime Collaboration Board screenshot
   - Recommended size: 1200x800px (16:9 ratio)
   - Capture the board in action with multiple users

4. **project3.jpg** - E-Commerce Microservices diagram
   - Recommended size: 1200x800px (16:9 ratio)
   - Architecture diagram or system overview

## After Adding Images

Once you've added your images, update `app/page.js`:

### For Profile Picture (around line 28):
Uncomment these lines:
```jsx
<Image src="/profile.jpg" alt="Andrew Yang" fill className="object-cover" />
```

And comment out or remove the placeholder div:
```jsx
<div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-4xl font-bold">
  AY
</div>
```

### For Project Images (in the Project component around line 190):
Uncomment this line:
```jsx
<Image src={image} alt={title} fill className="object-cover" />
```

And comment out or remove the placeholder div with the emoji.

## Image Optimization Tips

- Use WebP format for smaller file sizes
- Compress images before uploading (use tinypng.com or squoosh.app)
- Keep file sizes under 500KB for fast loading
- Use descriptive alt text for accessibility

## Free Image Resources

If you need placeholder images:
- **Unsplash** (unsplash.com) - Free high-quality photos
- **Pexels** (pexels.com) - Free stock photos
- **UI Mockups** (mockuphone.com) - Device mockups
- **Screenshots** - Take screenshots of your actual projects!

## Example Code After Adding Images

```jsx
// Hero section with real profile image
<div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-blue-500 ring-offset-4 shadow-2xl">
  <Image 
    src="/profile.jpg" 
    alt="Andrew Yang" 
    fill 
    className="object-cover" 
  />
</div>

// Project with real screenshot
<div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
  <Image 
    src={image} 
    alt={title} 
    fill 
    className="object-cover" 
  />
</div>
```

That's it! Your portfolio will automatically use the images once they're in place. 🎉

