# Glassmorphic UI Kit Preview

Use these steps to view the glassmorphic components locally and share previews.

## Quick view
1. From the repo root, open `index.html` directly in your browser.
2. Toggle the light/dark switch at the top of the page to see both themes.

## Run a local server (recommended)
Serving the page removes any browser restrictions on local files and keeps relative paths intact.

```bash
# from the repo root
python -m http.server 8000
```

Then open http://localhost:8000 in your browser. If you prefer another port, replace `8000` with your choice.

## Sharing a preview
Deploy the static `index.html` and `styles/` folder to any static host (e.g., GitHub Pages, Netlify, Vercel). No build step is required.
