# LUMIÈRE — Women's Fashion E-Commerce Website

A modern, fully responsive women's fashion e-commerce website built with pure **HTML5**, **CSS3**, and **Vanilla JavaScript** — no frameworks, no dependencies.

[![Live Demo](https://img.shields.io/badge/🌐%20Live%20Demo-lumi--re--women--s--fashion.vercel.app-c9a96e?style=for-the-badge)](https://lumi-re-women-s-fashion.vercel.app/)

---

## 🌐 Live Demo

🔗 **[https://lumi-re-women-s-fashion.vercel.app/](https://lumi-re-women-s-fashion.vercel.app/)**

---

## ✨ Features

### 🎨 Design
- Elegant typography pairing — **Cormorant Garamond** (display) + **Jost** (body)
- Warm gold (`#c9a96e`) accent system with consistent CSS variables
- Fully responsive — Desktop → Tablet → Mobile
- Premium visual hierarchy with balanced whitespace

### 🖼️ Hero Section
- Auto-playing **3-slide image carousel** with smooth fade transitions
- Slide-in text animations (staggered: eyebrow → title → subtitle → CTA)
- Animated pulsing discount badge
- Previous / Next controls + dot navigation

### 🛍️ Product Showcase
- **6 product cards** with category filter (All / Dresses / Tops / Skirts)
- Hover: image zoom + action buttons slide up (Wishlist, Quick View, Add to Cart)
- Wishlist toggle — heart fill/unfill with color change
- Add to Cart → button feedback + bottom-right **toast notification**

### 💸 Sale Banners
- Asymmetric 3-column grid (tall + split cards)
- Dark gradient overlay with hover intensify effect

### ⏱️ Live Countdown Timer
- Real-time countdown to sale deadline
- Days / Hours / Mins / Secs — updates every second

### 💬 Testimonials Slider
- Auto-rotating carousel (5s interval)
- Manual prev/next + dot navigation
- Fade-in animation on slide change

### 📬 Contact Form
- Client-side validation
- Animated send button with success state
- Success message on submission

### 🗺️ Navigation
- Fixed navbar with **glassmorphism scroll effect**
- Active section highlighting as you scroll
- Mobile **hamburger menu** with slide-in drawer
- Smooth scroll to sections with offset

### 🎞️ Scroll Animations
- `IntersectionObserver`-based scroll reveal
- Staggered reveal for sibling elements
- Fade-up on enter viewport

---

## 📁 Project Structure

```
lumiere/
├── index.html      # Main HTML — semantic structure
├── style.css       # All styles — CSS variables, responsive, animations
└── script.js       # All interactivity — vanilla JS only
```

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Semantic markup (`<header>`, `<section>`, `<main>`, `<footer>`) |
| CSS3 | Variables, Grid, Flexbox, Animations, Media Queries |
| Vanilla JavaScript | DOM, IntersectionObserver, setInterval, event listeners |
| Google Fonts | Cormorant Garamond + Jost |
| Font Awesome 6 | Icons (CDN) |
| Unsplash | High-quality stock images (CDN) |

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/noorjafri43-sys/LUMI-RE-Women-s-Fashion.git

# Navigate into the project
cd LUMI-RE-Women-s-Fashion

# Open in browser (no server needed)
open index.html
# or just double-click index.html
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| `> 1024px` | Full 3-column product grid, side-by-side deal section |
| `768px – 1024px` | 2-column products, stacked footer |
| `< 768px` | Hamburger nav, single/2-col products, stacked deal card |
| `< 480px` | Single column, stacked hero CTAs |

---

## 🎨 Color System

```css
--accent:       #c9a96e   /* Warm Gold — primary brand */
--accent-dark:  #a8843f   /* Hover state */
--rose:         #d4778a   /* Sale badges, wishlist */
--black:        #0a0a0a
--dark:         #1a1a1a
--light:        #f8f6f3   /* Section backgrounds */
```

---

## 📦 Sections

1. **Navbar** — Fixed, scroll-aware, mobile hamburger
2. **Hero** — 3-slide carousel with animated content
3. **Sale Banners** — Asymmetric grid with 4 offer cards
4. **Featured Products** — Filterable 3×2 product grid
5. **Promo Banner** — Full-width parallax CTA
6. **Summer Sale** — Product spotlight + live countdown
7. **Testimonials** — Auto-rotating review carousel
8. **Contact** — Form with validation + success feedback
9. **Footer** — Links, newsletter signup, social icons

---

## 👨‍💻 Author

**Noor Abbas**
Full Stack & WordPress Developer | Hyderabad, Pakistan

[![Portfolio](https://img.shields.io/badge/Portfolio-noor--abbas--portfolio.vercel.app-gold?style=flat-square)](https://noor-abbas-portfolio.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-noor--jaffri--webdev-blue?style=flat-square&logo=linkedin)](https://linkedin.com/in/noor-jaffri-webdev)
[![GitHub](https://img.shields.io/badge/GitHub-noorjafri43--sys-black?style=flat-square&logo=github)](https://github.com/noorjafri43-sys)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> ⭐ If you found this useful, consider giving it a star on GitHub!
