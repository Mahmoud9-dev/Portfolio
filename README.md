# 🌟 3D Developer Portfolio

A modern, interactive portfolio website showcasing developer skills through immersive 3D experiences. Built with React, Three.js, and TailwindCSS.

## 📋 Table of Contents
1. [✨ Overview](#overview)
2. [🛠️ Tech Stack](#tech-stack)
3. [🎯 Key Features](#key-features)
4. [⚡ Quick Start](#quick-start)
5. [📝 Environment Setup](#environment-setup)
6. [🎨 Project Structure](#project-structure)
7. [🔧 Development](#development)
8. [📱 Deployment](#deployment)
9. [🤝 Contributing](#contributing)

## ✨ Overview

This portfolio website combines modern web technologies with stunning 3D graphics to create an immersive and memorable user experience. It's designed to showcase your projects, skills, and professional journey in a unique and engaging way.

## 🛠️ Tech Stack

- **Frontend Framework:** React.js
- **3D Graphics:** Three.js
- **3D React Helpers:** 
  - React Three Fiber
  - React Three Drei
- **Styling:** TailwindCSS
- **Build Tool:** Vite
- **Contact Form:** EmailJS
- **Animation:** Framer Motion
- **3D Models:** Blender

## 🎯 Key Features

- **Interactive 3D Hero Section**
  - Custom 3D scene with dynamic lighting
  - Mouse-responsive animations
  - Optimized performance

- **Project Showcase**
  - Live 3D project demonstrations
  - Smooth transitions between projects
  - Detailed project information cards

- **Professional Experience Timeline**
  - Animated progression
  - Interactive milestone markers
  - Responsive design

- **Skills & Technologies**
  - 3D-enhanced skill cards
  - Progress indicators
  - Categorized expertise sections

- **Contact Form**
  - Real-time form validation
  - EmailJS integration
  - Success/error notifications

## ⚡ Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/3d-dev-portfolio.git
cd 3d-dev-portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

## 📝 Environment Setup

Create a `.env` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🎨 Project Structure

```
src/
├── components/
│   ├── canvas/      # 3D components
│   ├── layout/      # Layout components
│   └── sections/    # Page sections
├── assets/
│   ├── models/      # 3D models
│   └── textures/    # Textures
├── constants/       # Configuration
├── utils/          # Helper functions
└── pages/          # Route pages
```

## 🔧 Development

- **Running tests**
```bash
npm test
```

- **Building for production**
```bash
npm run build
```

## 📱 Deployment

1. Build your project
```bash
npm run build
```

2. Preview the build locally
```bash
npm run preview
```

3. Deploy to your preferred hosting platform (Vercel, Netlify, etc.)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
