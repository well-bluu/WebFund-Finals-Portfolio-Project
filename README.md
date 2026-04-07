# Portfolio Finals Website

A responsive, multi-page personal portfolio built with HTML, CSS, and vanilla JavaScript.

## Overview

This project presents a personal portfolio with dedicated pages for introduction, background, projects, and contact details. The layout is designed with responsive breakpoints so the site adapts to mobile, tablet, and desktop screens.

## Pages

- Home: `index.html`
- About: `about/about.html`
- Projects: `projects/projects.html`
- Contact: `contact/contact.html`

## Key Features

- Responsive design across mobile, tablet, and desktop
- Shared global styles plus page-specific styling
- Project showcase with individual work detail pages
- Centralized assets for fonts and images
- Shared JavaScript interactions in `main.js`

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript

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
2. Open the project folder in VS Code.
3. Run with Live Server (recommended), or open `index.html` in a browser.

## Styling Guide

- `styles/fonts.css`: font imports and shared font rules
- `styles/styles-mobile.css`: base and mobile-first styles
- `styles/styles-tablet.css`: tablet breakpoint adjustments
- `styles/styles-desktop.css`: desktop layout overrides
- Page-specific styles:
  - `about/about-style.css`
  - `contact/contact-styles.css`
  - `projects/project-style.css`
  - `projects/project-folders/work-styles.css`

## Customization Tips

- Update personal text content in each page HTML file.
- Add or replace project images in `assets/images/` while keeping folder names organized.
- Keep shared interactions in `main.js` to avoid duplicating scripts across pages.
- Place reusable style rules in `styles/` and keep one-off rules in page-specific CSS files.

## Notes

- This project is intended for educational and personal portfolio use.
- Test the site on multiple browsers and device sizes before final submission.

## License

This project is intended for educational and personal use.
