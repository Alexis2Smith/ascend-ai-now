# Ascend AI NOW — Website and Assessments

**Executive thought leadership landing page for Ascend AI NOW**  
*By Dr. Alexis S. Smith, Doctorate in Digital Stewardship, AI Ethics and Governance | www.AscendAINOW.com*

---

## About This Site

This is the Ascend AI NOW public site and assessment project, serving K–12 education, higher education, nonprofit, and other mission-driven organization leaders.

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
├── index.html                 # Public site, international engagements, research/editorial
├── assessment.html            # Free AI readiness assessment
├── roi-calculator.html        # Free AI ROI calculator
├── k12assessment/index.html   # K-12 assessment and generated reports
├── impact/index.html          # Youth, Workforce & Global Impact
├── framework/index.html       # Five-stage interactive framework
├── research/index.html        # Research & Insights
├── assets/                    # Brand assets, shared navigation styles and behavior
├── index_old.html             # Older page containing the supplied embedded logo source
├── netlify.toml               # Netlify deployment configuration
└── README.md                  # Project notes and implementation plan
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
8. Deploy a draft preview and verify it before requesting production approval

### Option B — Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --alias impact-framework-preview
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

Primary site content lives in `index.html`. The cinematic homepage uses the official logo artwork in `assets/branding/ascend-ai-now-logo-official.png`.

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

## Modernization Plan

### Completed

- Added the founder-supplied multicolor A, orbit, ASCEND wordmark, and AI NOW artwork as `assets/ascend-ai-now-logo.png`. The source was recovered from the older page's embedded logo; the derivative keeps the original 1024-by-1024 canvas and artwork, masks only the bottom website URL, and retains the source's light-gray background.
- The cinematic homepage uses the separate horizontal transparent logo artwork at `assets/branding/ascend-ai-now-logo-official.png`; preserve the supplied artwork without recreation or retouching.
- Integrated the official transparent logo into the cinematic homepage hero and navigation, and applied it to the footer, newsletter, and Research & Insights entry, plus the standalone and K-12 assessment navigation/footer. K-12 assessment reports continue using the header logo.
- Replaced unsupported executive metric claims with source-backed founder credentials and five-stage framework proof points; refined homepage messaging around executive AI governance, accountability, and human-centered implementation.
- Added the SkillBanc NOVARA Nigeria project and October 3, 2026 Demo Day appearance. Outcomes are attributed to the project's October 2026 presentation and are not described as independently verified or solely owned by Ascend AI NOW.
- Added the October 2026 AI Power Gap Intel editorial, “Acknowledged Does Not Equal Controlled,” with deployment-control questions and an explicit caveat about illustrative graphics.
- Added `/impact/`, `/framework/`, and `/research/` static directory routes, linked from the homepage and each other. The Framework page presents all five approved original graphics without cropping or redesign and has keyboard-operable tabs. Its Scale stage includes five interactive measurement domains, an illustrative executive dashboard, and a Measure AI Impact consultation link.
- Added shared responsive navigation and cinematic interior-page styling across the homepage, Framework, Services, Assessments, Academy, Research, and Impact destinations. The shared menu supports keyboard dismissal and focus restoration, while motion respects reduced-motion preferences.
- Added a responsive Academic Foundation feature on Impact, guided by the supplied academic design references and clearly separated from independent Academy instruction and college programs.
- Added interactive industry exploration and native service-detail disclosures without removing the existing service descriptions. Assessment and calculator forms, scoring, and result behavior remain intact.
- Added the DAFITC Education Day description, global AI education, E-Rate advocacy context, and collaboration calls to action. Attendance is labeled an estimate; the FCC letter is not described as filed; college instruction and the independent Skool Academy are distinguished.
- Left assessment logic, forms, Stripe links, email links, and PDF/report generation behavior unchanged. No production deployment was performed.

### Required Follow-up Assets and Scope

- The October 2026 NOVARA Demo Day presentation and approved event/project images or partner marks.
- The DAFITC AI Governance panel presentation and Education Day source information.
- Carolina Christian College syllabus and MA 326 teaching presentations.
- The CoSN E-Rate FCC filing carousel and founder's FCC comment letter. The page does not claim filing without confirmation.
- The Howard University business optimization interview presentation. It must remain identified as a prototype, not a completed client engagement.
- The original AI Power Gap Intel graphics and supporting citations/source notes. Do not use illustrative graphics as evidence of incident details.
- Certifier.io configuration or approved certificate links, if they are expected on the Academy section. No Certifier.io integration is present in this repository.
- Confirmation of approved public wording and image permissions for partner/project materials before adding those assets.

The executive dashboard values are fictional demonstration data, not client results, benchmarks, forecasts, or promised outcomes.

The source-material scan found only the embedded logo and published founder portrait. Confidential, proprietary, private, and application-related materials must not be published without founder approval.

Production deployment requires separate approval.

---

© 2026 Ascend AI NOW · Dr. Alexis S. Smith · All rights reserved.
