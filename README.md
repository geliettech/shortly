# Shortly - URL Shortening App 🌐

![Frontend Mentor](https://img.shields.io/badge/Frontend%20Mentor-Challenge-blue) ![React](https://img.shields.io/badge/React-18.2.0-blue) ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.1.16-blueviolet) ![Vite](https://img.shields.io/badge/Vite-4.3.9-brightgreen) ![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue) ![License](https://img.shields.io/badge/License-MIT-green)

A responsive URL shortening landing page built with **React**, **TypeScript**, and **Tailwind CSS**. Users can shorten links, copy them instantly, and persist their shortened URLs across page reloads.

---

## 🎯 Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Live Preview](#live-preview)

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Key Learnings](#key-learnings)
- [Continued Development](#continued-development)
- [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

---

## Overview

### The Challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

---

### Live Preview

[![Shortly Live Demo](https://img.shields.io/badge/View-Live%20Demo-pink?style=for-the-badge&logo=vercel)](https://shortly-pi-coral.vercel.app)
[![GitHub Repo](https://img.shields.io/badge/View-GitHub%20Repo-6e5494?style=for-the-badge&logo=github)](https://github.com/geliettech/shortly)

![Shortly App Demo](https://media.giphy.com/media/your-gif-link-here/giphy.gif)
_Demo showing URL shortening, copy-to-clipboard, and list persistence features._

---

## Features

- Responsive UI built with **Tailwind CSS**
- Dynamic URL shortening with **Axios + external API**
- Copy-to-clipboard functionality via **react-copy-to-clipboard**
- Persistent shortened URLs using **local storage**
- Form validation and error handling

---

## Tech Stack

- **React 18** – For building dynamic UI components
- **TypeScript** – Type-safe JavaScript for reliable code
- **Tailwind CSS 4** – Utility-first styling for responsive design
- **Vite** – Lightning-fast development and build tool
- **Axios** – API calls and HTTP requests
- **react-copy-to-clipboard** – One-click URL copy functionality
- **React Icons** – Lightweight icons for UI

```json
{
  "@tailwindcss/vite": "^4.1.16",
  "@types/react-copy-to-clipboard": "^5.0.7",
  "axios": "^1.13.4",
  "react": "^18.2.0",
  "react-copy-to-clipboard": "^5.1.0",
  "react-dom": "^18.2.0",
  "react-icons": "^5.5.0",
  "tailwindcss": "^4.1.16"
}
```

---

## Key Learnings

- Managing **state** in React for dynamic lists
- Implementing **local storage** for data persistence
- Building **mobile-first responsive layouts**

---

## Continued Development

Future improvements:

- User authentication to save links across devices
- Link analytics (click counts, trends)
- Improved accessibility and keyboard navigation
- Animations for smoother user experience

---

## Useful Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html) – Official React guides and best practices
- [Tailwind CSS Docs](https://tailwindcss.com/docs) – For responsive layouts and utilities
- [Axios Docs](https://axios-http.com/docs/intro) – For API requests and handling responses
- [React Copy to Clipboard](https://github.com/nkbt/react-copy-to-clipboard) – Seamless copy functionality

---

## Author

- **Name:** Uhegbu Ogechi Juliet (OGE)
- **Website:** [https://ogechiuhegbu.vercel.app/](https://ogechiuhegbu.vercel.app/)
- **Frontend Mentor:** [@geliettech](https://www.frontendmentor.io/profile/geliettech)
- **X:** [@geliettech](https://www.x.com/geliettech)

---

## Acknowledgments

- **Frontend Mentor** – For providing the challenge and supporting practical frontend skill development
- **Tailwind CSS Docs & React Docs** – For guidance on responsive design and state management
