# Harshaprada Adiga – Portfolio

A professional portfolio built with **React.js + Vite + CSS Modules** (no extra UI libraries needed).

## Project Structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles/
    │   └── global.css
    └── components/
        ├── Navbar.jsx / Navbar.module.css
        ├── Hero.jsx / Hero.module.css
        ├── About.jsx / About.module.css
        ├── Skills.jsx / Skills.module.css
        ├── Experience.jsx / Experience.module.css
        ├── Projects.jsx / Projects.module.css
        ├── Contact.jsx / Contact.module.css
        └── Footer.jsx / Footer.module.css
```

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production
```bash
npm run build
```

### 4. Preview production build
```bash
npm run preview
```

## Customization

- **Profile photo**: Replace the `HA` avatar in `Hero.jsx` with an `<img>` tag
- **GitHub & Live links**: Update `href` values in `Projects.jsx`
- **GitHub username**: Update in `Contact.jsx` contactInfo array
- **LinkedIn URL**: Already set — update if needed in `Contact.jsx`

## Deploying for Free

### Netlify (easiest)
1. Run `npm run build`
2. Drag the `dist/` folder to [netlify.com/drop](https://netlify.com/drop)

### Vercel
```bash
npm install -g vercel
vercel
```

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Run: `npm run build && npm run deploy`

## Tech Stack
- React 18
- Vite 5
- CSS Modules
- Google Fonts (Syne + DM Sans)
- No external UI libraries
