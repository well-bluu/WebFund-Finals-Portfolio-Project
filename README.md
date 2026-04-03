# Portfolio Finals Website

A responsive, multi-page personal portfolio built with HTML, CSS, and vanilla JavaScript.

## Pages

- Home (`index.html`)
- About (`about/about.html`)
- Projects (`projects/projects.html`)
- Contact (`contact/contact.html`)

## Features

- Responsive layouts for mobile, tablet, and desktop
- Shared global styling with page-specific CSS files
- Multi-page project showcase with individual work detail pages
- Reusable assets (fonts and images)
- Shared JavaScript behavior via `main.js`
- Deployed on Netlify <mark>kendall-maputi-portfolio.netlify.app</mark>

## Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)

## Project Structure

```text
portfolio-finals/
├─ index.html
├─ main.js
├─ README.md
├─ about/
│  ├─ about.html
│  └─ about-style.css
├─ contact/
│  ├─ contact.html
│  └─ contact-styles.css
├─ projects/
│  ├─ projects.html
│  ├─ project-style.css
│  └─ project-folders/
│     ├─ work-1.html
│     ├─ work-2.html
│     ├─ work-3.html
│     └─ work-styles.css
├─ assets/
│  ├─ fonts/
│  └─ images/
│     ├─ work-1-image/
│     ├─ work-2-image/
│     └─ work-3-image/
└─ styles/
   ├─ fonts.css
   ├─ styles-mobile.css
   ├─ styles-tablet.css
   └─ styles-desktop.css
```

## Getting Started

1. Clone or download this repository.
2. Open the folder in VS Code.
3. Launch with Live Server (recommended), or open `index.html` directly in your browser.

## Styling Overview

- `styles/fonts.css`: font imports and shared variables
- `styles/styles-mobile.css`: base and mobile-first styling
- `styles/styles-tablet.css`: tablet breakpoints and layout adjustments
- `styles/styles-desktop.css`: desktop overrides
- Page-specific styles:
  - `about/about-style.css`
  - `contact/contact-styles.css`
  - `projects/project-style.css`
  - `projects/project-folders/work-styles.css`

## Notes

- Keep image assets organized by project in `assets/images/work-*/` folders.
- Shared interactive behavior should remain centralized in `main.js`.
- For the best experience on IOS mobile devices, it’s recommended to use Google Chrome instead of Safari.

## License

This project is intended for educational and personal use.
