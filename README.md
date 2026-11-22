# Ishmita Basu — Personal Portfolio Website

A personalized, accessible single-page portfolio with 7 project case studies, a filterable project gallery, expandable work history, a dedicated Uniper BI showcase, dark/light themes, responsive navigation, and contact/CV links.

## 🚀 The simplest way to publish on GitHub Pages (no build step)

1. Open the public GitHub repository `IshmitaBasu/IshmitaBasu.github.io`.
2. **Delete the old React/Vite source files from the repository** (especially the original `index.html`, `package.json`, and `src/` directory) to avoid publishing the wrong site.
3. Upload the **contents** of this folder to the **repository root**. You must see `index.html`, `assets/site.css`, and `assets/site.js` in those exact paths (not inside another `ishmita-portfolio-static` folder).
4. Go to **Settings → Pages → Build and deployment**. Select **Deploy from a branch**, branch **main**, folder **/(root)**. Click **Save**.
5. Once the Pages deployment completes, open **https://ishmitabasu.github.io/**, then force reload (`Ctrl+Shift+R`).

**Why this version is different:** It is plain HTML, CSS and JavaScript: GitHub Pages serves it directly. You do not need npm, Node, Vite, GitHub Actions, or a build process.

If a prior GitHub Actions workflow exists in `.github/workflows/deploy.yml`, remove it if you're switching entirely to the branch deployment above. The uploaded static site has no workflow.

## What to customize

- `index.html`: Hero introduction, Uniper dashboard experience, education, skills, LinkedIn, email, GitHub.
- `assets/site.js`: Project portfolio data, code links, complete case studies, professional timeline.
- `assets/site.css`: Colors, typography, mobile styling, animation.
- `Ishmita_Basu_CV.docx`: Downloadable CV. Replace when updating your resume. **Check the contact details before publishing this public file.**

The retail/energy demo projects have no public repository URLs in the supplied CV, so case-study views contain no invented link. The project descriptions distinguish synthetic data and research validation from deployed production systems.

## Quick local preview

Open `index.html` in Chrome, or for reliable local URL semantics:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`. No build step is needed.
