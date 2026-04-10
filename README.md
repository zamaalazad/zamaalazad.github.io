# Mohammad Azad — Portfolio & Blog

A modern, lightweight personal portfolio and blog website. Features a clean design, responsive layout, and scalable architecture prepared for future multi-author expansion.

**Live Site:** [zamaalazad.github.io](https://zamaalazad.github.io)

---

## 📋 Overview

This is a production-ready frontend built with semantic HTML5, Vue.js 3 (via CDN), and Tailwind CSS. The site showcases professional experiences, technical articles, and a curated collection of AI prompts and technology insights.

### Core Content
- **Personal Resume & Experience** — Career history and professional background
- **Blog Articles** — Technology insights, explanations, and tech news
- **AI Prompts Library** — Curated collection of useful AI prompts
- **Author Profile** — Bio and contact information
- **Dynamic Categorization** — Browse content by topic

---

## ✨ Features

- **Responsive Design** — Optimized for desktop, tablet, and mobile devices
- **Dark Mode Support** — Automatic theme detection with manual toggle
- **SEO Optimized** — Semantic HTML, meta tags, and Open Graph support
- **Accessibility First** — WCAG compliance and accessible components
- **Performance Focused** — No build tools required; runs without a bundler
- **Vue.js Components** — Modular, reusable navbar and footer
- **Tailwind Styling** — Utility-first CSS with clean, consistent design

---

## 🛠 Tech Stack

| Component | Technology |
|-----------|-----------|
| **HTML** | Semantic HTML5 |
| **CSS** | Tailwind CSS (via CDN) |
| **JavaScript** | Vue.js 3 (via CDN) |
| **Font** | Inter (system-ui fallback) |
| **Icons** | Inline SVG (no icon library) |
| **Build Tool** | None — zero build complexity |

---

## 📂 Project Structure

```
zamaalazad.github.io/
├── index.html              # Homepage
├── context.md              # Project specifications & design philosophy
├── data.md                 # Content data (articles, categories, authors)
├── README.md               # This file
├── LICENSE                 # Project license
├── person.jpg              # Profile image
│
├── pages/                  # Page templates
│   ├── blog.html           # Blog listing page
│   ├── article.html        # Single article view
│   ├── category.html       # Category page
│   ├── author.html         # Author profile page
│   ├── about.html          # About page
│   └── contact.html        # Contact page
│
├── components/             # Vue.js reusable components
│   ├── navbar.js           # Navigation bar (sticky, mobile-responsive)
│   └── footer.js           # Footer (social links, newsletter, CTA)
│
└── styles/                 # Custom CSS
    └── custom.css          # Tailwind extensions & overrides
```

---

## 🚀 Quick Start

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic knowledge of HTML, CSS, and Vue.js (optional)
- A text editor or IDE (VS Code recommended)

### Usage

1. **Clone the repository**
   ```bash
   git clone https://github.com/zamaalazad/zamaalazad.github.io.git
   cd zamaalazad.github.io
   ```

2. **Open locally**
   - Double-click `index.html` to open in your browser, OR
   - Use a local server for better development experience:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Node.js (with http-server)
     npx http-server
     
     # Live Server VS Code extension (recommended)
     ```

3. **Visit the site**
   - Navigate to `http://localhost:8000` (or the port your server uses)

---

## 📝 Customization

### Update Content
- **Articles & Data:** Edit `data.md` with your content
- **Page Content:** Modify HTML files in the `pages/` directory
- **Navigation Links:** Edit the `links` array in `components/navbar.js`
- **Footer Links:** Modify `socials` and `columns` in `components/footer.js`

### Styling
- **Global Colors:** Modify Tailwind config in `index.html` under `tailwind.config`
- **Custom Styles:** Add custom CSS to `styles/custom.css`
- **Theme Toggle:** Dark mode is controlled via `localStorage.theme`

### Add New Pages
1. Create a new HTML file in the `pages/` directory
2. Include the necessary Vue components and scripts
3. Add navigation link to `components/navbar.js`

---

## 🌐 Deployment

This is a **GitHub Pages** project. To deploy:

1. Push changes to the `main` branch
2. GitHub automatically builds and deploys to `https://zamaalazad.github.io`

No build process required — changes are live immediately!

---

## 📱 Responsive Breakpoints

The site uses Tailwind's default breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

---

## ♿ Accessibility

- Semantic HTML5 markup
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for all images
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance (WCAG AA)
- Screen reader friendly

---

## 🔍 SEO

- Meta tags: title, description, keywords, Open Graph
- Canonical URLs
- Semantic HTML
- Mobile-friendly responsive design
- Fast loading (no heavy dependencies)

---

## 📄 License

This project is licensed under the terms specified in [LICENSE](./LICENSE).

---

## 👤 About the Author

**Mohammad Azad**  
IT Manager & Web Developer

- **Email:** zamaalazad@gmail.com
- **Phone:** +973-32317837
- **Skills:** Laravel, WordPress, Vue.js, Tailwind CSS, IT Management, Web UI/UX

---

## 🤝 Contributing

This is a personal portfolio site. For suggestions or feedback, please open an issue or contact me directly.

---

## 📞 Contact

- **Email:** zamaalazad@gmail.com
- **Website:** [zamaalazad.github.io](https://zamaalazad.github.io)

---

**Last Updated:** April 2026
