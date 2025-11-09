# 🚀 Netlify Deployment Guide - ENIGMA XIII

## ✅ Configuration Files Created

1. **netlify.toml** - Main Netlify configuration
2. **_redirects** - URL routing configuration
3. **public/_redirects** - Backup redirects file

## 🔧 Fix for "Page not found" Error

The error occurs because Netlify needs to know how to handle routes. The configuration files above fix this issue.

## 📋 Deployment Steps

### Method 1: Drag & Drop (Quickest)

1. **Go to [app.netlify.com](https://app.netlify.com)**
   - Login/Sign up

2. **Deploy Manually**
   - Drag and drop your entire `ENIGMA` folder
   - Wait for deployment

3. **Verify**
   - Check if site loads at `your-site.netlify.app`
   - Test all pages

### Method 2: Git Integration (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/enigma-xiii.git
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to Netlify Dashboard
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub
   - Select your repository

3. **Build Settings**
   - **Build command:** (leave empty)
   - **Publish directory:** `.` (root)
   - Click "Deploy site"

4. **Auto-Deploy**
   - Every push to main branch auto-deploys
   - Preview deployments for pull requests

### Method 3: Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login**
   ```bash
   netlify login
   ```

3. **Deploy**
   ```bash
   netlify deploy
   ```

4. **Production Deploy**
   ```bash
   netlify deploy --prod
   ```

## ⚙️ Build Settings

In Netlify Dashboard → Site Settings → Build & Deploy:

- **Build command:** (empty - static site)
- **Publish directory:** `.` (root directory)
- **Base directory:** (empty)

## ✅ Verification Checklist

After deployment:
- [ ] Home page loads at root URL
- [ ] All navigation links work
- [ ] Direct URLs work (e.g., `/about`, `/events`)
- [ ] Images display correctly
- [ ] CSS styles applied
- [ ] JavaScript functions work
- [ ] Videos play correctly

## 🐛 Common Issues & Solutions

### Issue 1: "Page not found" on Root
**Solution:**
- Ensure `netlify.toml` is in root directory
- Check `_redirects` file exists
- Verify `index.html` is in root

### Issue 2: "Page not found" on Sub-pages
**Solution:**
- Check `_redirects` file has all routes
- Verify HTML file names match routes
- Clear Netlify cache and redeploy

### Issue 3: Assets Not Loading
**Solution:**
- Verify `assets/` folder structure
- Check paths use `assets/` not `assests/`
- Ensure files are uploaded correctly

### Issue 4: CSS/JS Not Loading
**Solution:**
- Verify `css/` and `js/` folders exist
- Check paths: `css/filename.css` and `js/filename.js`
- Clear browser cache

### Issue 5: Build Fails
**Solution:**
- Check build settings (should be empty for static site)
- Verify `netlify.toml` syntax is correct
- Check Netlify deployment logs

## 🔄 Redeploy After Fix

If you've added the configuration files:

1. **Via Dashboard:**
   - Go to Deploys tab
   - Click "Trigger deploy" → "Deploy site"

2. **Via Git:**
   ```bash
   git add .
   git commit -m "Add Netlify configuration"
   git push
   ```

3. **Via CLI:**
   ```bash
   netlify deploy --prod
   ```

## 📝 Post-Deployment

1. **Custom Domain** (Optional)
   - Site Settings → Domain management
   - Add your custom domain
   - Update DNS records

2. **Environment Variables** (if needed)
   - Site Settings → Environment variables
   - Add any required variables

3. **Form Handling** (if using forms)
   - Netlify automatically handles forms
   - Check Forms tab in dashboard

## 🎉 Success!

Your website should now be live at:
- `https://your-site-name.netlify.app`

All pages should work correctly with the redirects configuration!

## 📞 Need Help?

If issues persist:
1. Check Netlify deployment logs
2. Verify all configuration files are present
3. Check file paths and structure
4. Review error messages in Netlify dashboard

---

**Last Updated:** November 2025


