# Portfolio Website

This is a modern, high-performance portfolio website built with React, GSAP, and Lenis for smooth scrolling effects.

## Features

- **Smooth Scrolling**: Powered by Lenis for a premium feel.
- **Scroll Animations**: Element reveal and parallax effects using GSAP ScrollTrigger.
- **Horizontal Scroll**: Showcase your projects in a unique, side-scrolling gallery.
- **Easy Customization**: All content (projects, experience, skills) is managed in a single file (`src/data/content.js`).
- **Responsive Design**: Looks great on desktop and mobile.

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Start Development Server**:
    ```bash
    npm run dev
    ```

3.  **Build for Production**:
    ```bash
    npm run build
    ```

## Customization

To add your own projects, experience, and contact info, simply edit the file:
`src/data/content.js`

No need to touch the complex React components or GSAP logic!

### Replacing Images
You can replace the placeholder image URLs in `src/data/content.js` with your own images. Place your images in the `public/` folder and reference them like `/my-image.jpg`.

## Technologies

- [Vite](https://vitejs.dev/) - Fast build tool
- [React](https://react.dev/) - UI Library
- [GSAP](https://gsap.com/) - Professional Animation Library
- [Lenis](https://lenis.studiofreight.com/) - Smooth Scrolling
