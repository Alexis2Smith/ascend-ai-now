# Ascend AI NOW — State of AI 2026

**Executive thought leadership landing page for Ascend AI NOW**  
*By Dr. Alexis S. Smith, DMin (AI Ethics & Governance) | www.AscendAINOW.com*

---

## About This Site

This is the official landing page for *The State of AI in Mission-Driven Organizations (2026)* — an executive intelligence report targeting K–12 education, higher education, and nonprofit technology leaders.

The page covers:
- The Ascend AI 5-Stage Maturity Model
- Sector-specific insights for K–12, Higher Ed, and Nonprofits
- AI Governance Framework (5 pillars)
- Ethical AI non-negotiables
- A 60-Day Implementation Roadmap

---

## Repository Structure

```
ascend-ai-now/
├── index.html       # Main landing page (self-contained, no dependencies)
├── netlify.toml     # Netlify deployment configuration
├── .gitignore       # Git ignore rules
└── README.md        # This file
```

---

## Deployment (Netlify)

This site is configured for zero-build static deployment on Netlify.

### Option A — Connect via Netlify Dashboard (Recommended)
1. Push this repository to GitHub
2. Log in to [netlify.com](https://netlify.com)
3. Click **"Add new site"** → **"Import an existing project"**
4. Select **GitHub** and authorize Netlify
5. Choose this repository
6. Leave build settings blank (no build command needed)
7. Set **Publish directory** to `.` (a single dot)
8. Click **"Deploy site"**

### Option B — Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

### Custom Domain
In Netlify: **Site settings → Domain management → Add custom domain**  
Enter: `www.AscendAINOW.com` or your preferred subdomain (e.g., `report.AscendAINOW.com`)

---

## Local Preview

No build tools required. Simply open in your browser:

```bash
open index.html
# or double-click index.html in your file explorer
```

---

## Updating Content

All content lives in `index.html`. It is fully self-contained — the logo is embedded as base64 so no image files are needed.

To update:
1. Edit `index.html` directly
2. Commit and push to GitHub
3. Netlify will auto-deploy within ~30 seconds

---

## Tech Stack

- Pure HTML5 / CSS3 / Vanilla JavaScript
- Google Fonts (Playfair Display, DM Sans, DM Mono)
- Zero npm dependencies
- Zero build step required

---

© 2026 Ascend AI NOW · Dr. Alexis S. Smith, DMin · All rights reserved.
