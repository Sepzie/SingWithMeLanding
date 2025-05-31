# Vercel Deployment & Domain Setup Checklist

This checklist covers deploying your Next.js landing page to Vercel and connecting your Namecheap domain.

## Pre-Deployment Setup ✅

### 1. Code Preparation
- [ ] **Test build locally**: Run `npm run build` to ensure no build errors
- [ ] **Test production locally**: Run `npm run start` after building
- [ ] **Fix any ESLint errors**: Run `npm run lint` and resolve issues
- [ ] **Optimize images**: Ensure all images in `/public` are optimized for web
- [ ] **Environment variables**: Create `.env.local` for any environment-specific variables
- [ ] **Update metadata**: Check `src/app/layout.tsx` for proper SEO metadata

### 2. Repository Setup
- [ ] **Push to GitHub**: Ensure your latest code is pushed to GitHub
- [ ] **Clean up**: Remove any unnecessary files or comments
- [ ] **Add proper README**: Update README.md with project description
- [ ] **Verify .gitignore**: Ensure `.env.local`, `node_modules`, `.next` are ignored

## Vercel Deployment 🚀

### 3. Create Vercel Account & Connect Repository
- [ ] **Sign up/Login**: Go to [vercel.com](https://vercel.com) and sign up with GitHub
- [ ] **Import project**: Click "New Project" → Import from GitHub
- [ ] **Select repository**: Choose your landing page repository
- [ ] **Configure project**: 
  - Framework Preset: Next.js (should auto-detect)
  - Build Command: `npm run build` (default)
  - Output Directory: `.next` (default)
  - Install Command: `npm install` (default)

### 4. Initial Deployment
- [ ] **Deploy**: Click "Deploy" and wait for initial deployment
- [ ] **Test deployment**: Visit the provided `.vercel.app` URL
- [ ] **Check functionality**: Test all pages, links, and interactions
- [ ] **Verify responsive design**: Test on mobile and desktop

## Custom Domain Setup 🌐

### 5. Vercel Domain Configuration
- [ ] **Go to project settings**: In Vercel dashboard → Project → Settings → Domains
- [ ] **Add domain**: Click "Add Domain" and enter your domain (e.g., `yourdomain.com`)
- [ ] **Add www subdomain**: Also add `www.yourdomain.com`
- [ ] **Note DNS records**: Copy the provided DNS records from Vercel

### 6. Namecheap DNS Configuration
- [ ] **Login to Namecheap**: Go to [namecheap.com](https://namecheap.com) and login
- [ ] **Manage domain**: Go to Domain List → Manage → Advanced DNS
- [ ] **Clear existing records**: Remove default A records and CNAME records
- [ ] **Add Vercel records**: Add the DNS records provided by Vercel:
  - **A Record**: `@` → `76.76.19.19` (Vercel's IP)
  - **CNAME Record**: `www` → `cname.vercel-dns.com`
- [ ] **Save changes**: Apply the DNS configuration

### 7. SSL & Domain Verification
- [ ] **Wait for propagation**: DNS changes can take 24-48 hours (usually faster)
- [ ] **Verify in Vercel**: Check that domains show "Valid Configuration" in Vercel
- [ ] **Test HTTPS**: Ensure `https://yourdomain.com` works
- [ ] **Test www redirect**: Ensure `www.yourdomain.com` redirects properly
- [ ] **Check SSL certificate**: Verify the green lock icon appears

## Production Optimization 🔧

### 8. Performance & SEO
- [ ] **Enable Analytics**: Set up Vercel Analytics in project settings
- [ ] **Configure redirects**: Add any necessary redirects in `next.config.ts`
- [ ] **Set up 404 page**: Create custom 404 page if needed
- [ ] **Optimize Core Web Vitals**: Use Vercel's Speed Insights
- [ ] **Test site speed**: Use Google PageSpeed Insights

### 9. Monitoring & Maintenance
- [ ] **Set up error tracking**: Consider Sentry or similar service
- [ ] **Monitor uptime**: Set up uptime monitoring
- [ ] **Google Search Console**: Add and verify your domain
- [ ] **Google Analytics**: Set up GA4 if needed
- [ ] **Create sitemap**: Generate and submit sitemap.xml

## Additional Vercel Features (Optional) ⚡

### 10. Advanced Configuration
- [ ] **Environment Variables**: Add production environment variables in Vercel
- [ ] **Preview deployments**: Configure preview deployments for branches
- [ ] **Security headers**: Add security headers in `next.config.ts`
- [ ] **Custom 404/500 pages**: Create custom error pages
- [ ] **Favicon**: Ensure favicon.ico is in `/public` directory

## Post-Deployment Testing ✅

### 11. Final Verification
- [ ] **Test all pages**: Navigate through entire site
- [ ] **Test forms**: If you have contact forms, test submission
- [ ] **Test mobile**: Check mobile responsiveness
- [ ] **Test performance**: Run Lighthouse audit
- [ ] **Test SEO**: Check meta tags, og:image, etc.
- [ ] **Cross-browser testing**: Test in Chrome, Firefox, Safari, Edge

## Troubleshooting 🔧

### Common Issues:
- **Domain not working**: Wait longer for DNS propagation, check DNS records
- **Build failures**: Check build logs in Vercel, fix any TypeScript/ESLint errors
- **Images not loading**: Ensure images are in `/public` directory
- **Styles missing**: Check if CSS imports are correct

### Useful Commands:
```bash
# Test build locally
npm run build && npm run start

# Check for errors
npm run lint

# Test production bundle
npm run build
```

## Resources 📚

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Namecheap DNS Setup](https://www.namecheap.com/support/knowledgebase/article.aspx/434/2237/how-do-i-set-up-host-records-for-a-domain/)

---

## Quick Checklist Summary
1. ✅ Test build locally
2. ✅ Push to GitHub
3. ✅ Deploy to Vercel
4. ✅ Add custom domain in Vercel
5. ✅ Configure DNS in Namecheap
6. ✅ Wait for DNS propagation
7. ✅ Test everything works
8. ✅ Set up analytics & monitoring

**Estimated Time**: 2-4 hours (including DNS propagation wait time) 