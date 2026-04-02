# Portfolio Finals Website

A responsive, multi-page personal portfolio built with HTML, CSS, and vanilla JavaScript.

## Pages

- Home page
- About page
- Projects page
- Contact page

## Features

- Responsive design (mobile, tablet, desktop)
- Shared global style system plus page-specific styles
- Intro overlay animation
- Theme toggle (dark/light)
- Mobile navigation menu
- Reusable UI classes for cards, labels, subtitles, and buttons

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
│  └─ styles/
│     ├─ project-style.css
│     ├─ project-1.css
│     ├─ project-2.css
│     ├─ project-3.css
│     ├─ project-4.css
│     └─ project-5.css
├─ assets/
│  ├─ fonts/
│  └─ images/
└─ styles/
   ├─ fonts.css
   ├─ styles-mobile.css
   ├─ styles-tablet.css
   └─ styles-desktop.css
```

## Getting Started

1. Clone or download this repository.
2. Open the project folder in VS Code.
3. Run with Live Server (recommended), or open `index.html` directly in a browser.

## Styling Overview

- `styles/fonts.css` contains font imports and theme variables.
- `styles/styles-mobile.css` contains base and mobile-first styles.
- `styles/styles-tablet.css` and `styles/styles-desktop.css` contain responsive overrides.
- Page-specific tweaks are in:
  - `about/about-style.css`
  - `contact/contact-styles.css`
  - `projects/styles/project-style.css`

## Notes

- All pages use `main.js` for shared UI behavior.

## License

This project is for educational and personal use.
