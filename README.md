# Antish Kumar Yadav — Portfolio

A modern, responsive personal portfolio built with **React + Vite** and **Framer Motion**.

---

## 🚀 Quick Start

### Prerequisites
- Node.js **v18+**
- npm or yarn

### Install & Run

```bash
# 1. Navigate into the project
cd portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Folder Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky nav, theme toggle, mobile menu
│   │   ├── Hero.jsx            # Full-viewport hero with animations
│   │   ├── About.jsx           # About me, education, stats
│   │   ├── Skills.jsx          # Skill category cards
│   │   ├── Projects.jsx        # Featured + regular project cards
│   │   ├── Experience.jsx      # Timeline + certifications
│   │   ├── Contact.jsx         # Contact form + social links
│   │   ├── Footer.jsx          # Site footer
│   │   ├── ScrollToTop.jsx     # Floating scroll-to-top button
│   │   └── SectionWrapper.jsx  # Reusable scroll-reveal wrapper
│   ├── hooks/
│   │   ├── useTheme.js         # Dark/light theme with localStorage
│   │   └── useScrollSpy.js     # Active nav link tracking
│   ├── data/
│   │   └── portfolio.js        # ← Edit this to update all content
│   ├── styles/
│   │   └── index.css           # Global styles, CSS variables
│   ├── App.jsx                 # Root component
│   └── main.jsx                # React DOM entry point
├── index.html                  # SEO meta tags, Google Fonts
├── vite.config.js
└── package.json
```

---

## ✏️ Customizing Content

All portfolio content is centralized in **`src/data/portfolio.js`**.

- **Personal info, links** → `personal` object
- **Stats** → `stats` array
- **Education** → `education` array
- **Skills** → `skillCategories` array
- **Projects** → `projects` array (set `featured: true` for the wide card)
- **Experience** → `experience` array
- **Certificates** → `certificates` array

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| React 18 | UI framework |
| Vite 5 | Build tool & dev server |
| Framer Motion | Animations |
| react-intersection-observer | Scroll-triggered reveals |
| CSS Custom Properties | Theming (dark/light) |
| Google Fonts | Syne + DM Sans + JetBrains Mono |

---

## 📦 Build for Production

```bash
npm run build    # Outputs to /dist
npm run preview  # Preview production build locally
```

---

## 🌐 Deployment

### Vercel (recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag & drop the /dist folder to netlify.com
```

### GitHub Pages
```bash
# In vite.config.js, add: base: '/your-repo-name/'
npm run build
# Push /dist contents to gh-pages branch
```

---

## ✨ Features

- ⚡ Lightning-fast Vite dev server & build
- 🌙 Dark / Light mode toggle (persisted in localStorage)
- 📱 Fully responsive — mobile, tablet, desktop
- 🎬 Framer Motion animations (entrance, hover, stagger)
- 🔍 SEO-friendly HTML structure & meta tags
- ♿ Keyboard accessible (Escape closes mobile nav)
- 📌 Sticky navbar with active section highlighting
- 🔝 Scroll-to-top floating button
- 🎨 CSS variable theming — one file to restyle everything

---

## 📄 License

MIT — feel free to use as a template for your own portfolio.
