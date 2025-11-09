# 🚀 ENIGMA XIII - Deployment Guide

## 📁 Project Structure

```
ENIGMA/
├── index.html              # Home page
├── about.html              # About page
├── events.html             # Events listing page
├── event-detail.html       # Individual event detail page
├── gallery.html            # Gallery page
├── sponsors.html           # Sponsors page
├── registration.html       # Registration page
├── README.md              # Project documentation
├── DEPLOYMENT.md          # This file
├── .gitignore             # Git ignore rules
│
├── css/                   # Stylesheets
│   ├── global.css     # Global styles & CSS variables
│   ├── header.css       # Header styles
│   ├── footer.css       # Footer styles
│   ├── home.css         # Home page styles
│   ├── about.css        # About page styles
│   ├── events.css       # Events page styles
│   ├── event-detail.css # Event detail page styles
│   ├── gallery.css      # Gallery page styles
│   ├── registration.css # Registration page styles
│   └── animations.css   # Animation styles
│
├── js/                    # JavaScript files
│   ├── header.js         # Header functionality
│   ├── animations.js     # Animation effects
│   ├── main.js           # Main functionality (cursor, video)
│   ├── events.js         # Events page functionality
│   ├── event-detail.js   # Event detail page functionality
│   └── gallery.js        # Gallery page functionality
│
└── assets/                # Static assets
    ├── logo/             # Logo files
    ├── video/            # Video files
    ├── sponseer/         # Sponsor logos
    └── enigma xii/       # Gallery images & videos
```

## ✅ Pre-Deployment Checklist

### 1. File Organization
- [x] All CSS files moved to `css/` folder
- [x] All JS files moved to `js/` folder
- [x] All assets moved to `assets/` folder
- [x] All HTML files updated with correct paths
- [x] Unused files removed

### 2. Path Verification
- [x] All CSS links use `css/` prefix
- [x] All JS scripts use `js/` prefix
- [x] All asset paths use `assets/` prefix
- [x] No broken links or missing files

### 3. Code Quality
- [x] No console errors
- [x] All images have alt attributes
- [x] All links have proper href attributes
- [x] Favicon properly configured

## 🌐 Deployment Options

### Option 1: GitHub Pages (Recommended for Free Hosting)

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - ENIGMA XIII website"
   git branch -M main
   git remote add origin https://github.com/yourusername/enigma-xiii.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Select `main` branch
   - Select `/ (root)` folder
   - Click Save

3. **Access Your Site**
   - Your site will be available at: `https://yourusername.github.io/enigma-xiii/`

### Option 2: Netlify

1. **Drag & Drop Deployment**
   - Go to [netlify.com](https://www.netlify.com)
   - Drag and drop your project folder
   - Site will be live instantly

2. **Git-based Deployment**
   - Connect your GitHub repository
   - Netlify will auto-deploy on every push

### Option 3: Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

### Option 4: Traditional Web Hosting (cPanel, FTP)

1. **Upload Files**
   - Upload all files maintaining the folder structure
   - Ensure `index.html` is in the root directory

2. **Verify Paths**
   - All paths are relative, so they should work on any server
   - Test all pages after upload

## 🔧 Configuration

### Base URL Configuration
If deploying to a subdirectory, update base paths in HTML files:
```html
<base href="/your-subdirectory/">
```

### Custom Domain Setup
1. Point your domain to hosting provider
2. Update DNS records as per provider instructions
3. Configure SSL certificate (usually automatic)

## 📝 Post-Deployment

### Testing Checklist
- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Videos play correctly
- [ ] Navigation works on all pages
- [ ] Forms submit correctly
- [ ] Mobile responsiveness verified
- [ ] Cross-browser compatibility tested
- [ ] Performance optimized

### Performance Optimization
- [ ] Images compressed (use tools like TinyPNG)
- [ ] Videos optimized for web
- [ ] CSS/JS minified (optional)
- [ ] Enable GZIP compression on server

## 🐛 Troubleshooting

### Common Issues

1. **404 Errors on Pages**
   - Check file paths are correct
   - Verify case sensitivity (Linux servers are case-sensitive)
   - Ensure all files are uploaded

2. **Images Not Loading**
   - Verify `assets/` folder structure
   - Check image file names match exactly
   - Ensure file extensions are correct

3. **CSS/JS Not Loading**
   - Verify `css/` and `js/` folders exist
   - Check file paths in HTML
   - Clear browser cache

4. **Video Not Playing**
   - Check video file format (MP4 recommended)
   - Verify video file size (consider compression)
   - Test video in different browsers

## 📞 Support

For issues or questions:
- Check README.md for project details
- Review code comments in files
- Contact development team

## 🎉 Success!

Your ENIGMA XIII website is now deployment-ready!

---

**Last Updated:** November 2025
**Version:** 1.0.0


