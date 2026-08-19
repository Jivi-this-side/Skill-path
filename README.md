# Skillpath

A modern, responsive course discovery frontend built with React and TypeScript.

Skillpath is designed around a simple idea:

> Learn less theory. Build more things.

The application fetches course information from a backend API, detects the user's region to display localized pricing, and provides search and sorting functionality through a clean, responsive interface.

---

## ✨ Features

- 🎓 Dynamic course listing
- 🌍 Automatic country detection
- 💰 Localized INR / USD pricing
- 🔎 Course search
- ↕️ Sort courses by price
- 💀 Loading skeletons
- ⚠️ API error and retry states
- 📱 Fully responsive design
- 🖥️ Full-width / full-screen layout
- 🎨 Modern dark UI
- 🌈 Gradient visual elements
- ✨ Animated course cards
- ♿ Reduced-motion support
- 📌 Sticky navigation
- 📖 About section
- 📱 Mobile-friendly controls

---

## 🛠️ Tech Stack

- React
- TypeScript
- Vite
- CSS
- Fetch API
- REST API

---

## 📁 Project Structure

```text
src/
├── api/
│   └── courses.ts
│
├── components/
│   ├── BrandLogo.tsx
│   ├── CourseCard.tsx
│   ├── SkeletonCard.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   └── Footer.tsx
│
├── utils/
│   └── formatters.ts
│
├── App.css
└── App.tsx
