# 🌟 Portfolio Website - Prabhat Kumar

A modern, responsive portfolio website showcasing full-stack development skills, built with Next.js 15, TypeScript, and Tailwind CSS. Features a clean design with interactive animations and a professional contact form.

[![Next.js](https://img.shields.io/badge/Next.js-15.1.0-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 🚀 Live Demo

🔗 **[Visit Live Portfolio](https://prabhat-kumar-portfolio.vercel.app)**

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [API Routes](#api-routes)
- [Components Overview](#components-overview)
- [Customization](#customization)
- [Performance](#performance)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## ✨ Features

### 🎨 **Modern Design**

- Responsive design that works on all devices
- Dark/Light theme with smooth animations
- Interactive hover effects and micro-animations
- AOS (Animate On Scroll) library integration
- Parallax tilt effects for enhanced user experience

### 🏗️ **Professional Sections**

- **Hero Section**: Eye-catching introduction with animated elements
- **About Me**: Detailed information with skills breakdown and statistics
- **Services**: Comprehensive list of offered development services
- **Skills**: Visual representation of technical expertise
- **Projects**: Showcase of completed projects with live links
- **Contact**: Functional contact form with email integration

### 📱 **Responsive & Accessible**

- Mobile-first design approach
- Cross-browser compatibility
- SEO optimized with proper meta tags
- Progressive Web App (PWA) ready
- Accessibility standards compliant

### 🔧 **Developer Experience**

- TypeScript for type safety
- ESLint for code quality
- Component-based architecture
- Reusable UI components
- Clean and maintainable code structure

## 🛠️ Tech Stack

### **Frontend**

- **Framework**: Next.js 15.1.0 (React 19)
- **Language**: TypeScript 5.0
- **Styling**: Tailwind CSS 3.4.1
- **Icons**: React Icons 5.4.0
- **Animations**: AOS 3.0.0-beta.6, React Parallax Tilt
- **Notifications**: Sonner 1.7.1

### **Backend**

- **API Routes**: Next.js API Routes
- **Email Service**: Nodemailer 6.9.16
- **Runtime**: Node.js

### **Development Tools**

- **Linting**: ESLint 9 with Next.js config
- **Type Checking**: TypeScript
- **Package Manager**: npm
- **Version Control**: Git

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** (v8.0.0 or higher)
- **Git**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Prabhat2912/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   # Create .env.local file in the root directory
   # Add your email configuration
   SMTP_HOST=your_smtp_host
   SMTP_PORT=your_smtp_port
   SMTP_USER=your_email@gmail.com
   SMTP_PASS=your_app_password
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
# Build the application
npm run build

# Start the production server
npm start
```

## 📁 Project Structure

```
portfolio/
├── app/                      # Next.js 13+ App Router
│   ├── api/
│   │   └── contact/
│   │       └── route.ts      # Contact form API endpoint
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout component
│   └── page.tsx              # Home page
├── components/               # Reusable React components
│   ├── Helper/
│   │   ├── ScrollToTop.tsx   # Scroll to top functionality
│   │   └── SectionHeading.tsx # Section title component
│   └── Home/                 # Main page components
│       ├── About/            # About section components
│       ├── Contact/          # Contact section components
│       ├── Footer/           # Footer component
│       ├── Hero/             # Hero section
│       ├── Navbar/           # Navigation components
│       ├── Project/          # Projects showcase
│       ├── Services/         # Services section
│       └── Skills/           # Skills section
├── constants/                # Application constants
├── Data/                     # Static data and content
│   └── data.ts               # Portfolio data and content
├── public/                   # Static assets
│   ├── icons/                # PWA icons
│   ├── images/               # Images and graphics
│   └── screenshots/          # Project screenshots
├── types/                    # TypeScript type definitions
│   └── types.ts              # Custom type definitions
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## 🔌 API Routes

### Contact Form Endpoint

- **Endpoint**: `POST /api/contact`
- **Purpose**: Handles contact form submissions
- **Features**:
  - Email validation
  - Spam protection
  - Email notification to site owner
  - Error handling and success responses

## 🧩 Components Overview

### **Navigation Components**

- `ResponsiveNav.tsx`: Main navigation wrapper
- `Nav.tsx`: Desktop navigation
- `MobileNav.tsx`: Mobile navigation drawer

### **Content Sections**

- `Hero.tsx`: Landing section with introduction
- `About.tsx`: Personal information and skills
- `Services.tsx`: Professional services offered
- `Skills.tsx`: Technical skills showcase
- `Project.tsx`: Portfolio projects gallery
- `Contact.tsx`: Contact form and information

### **Helper Components**

- `SectionHeading.tsx`: Consistent section titles
- `ScrollToTop.tsx`: Smooth scroll to top functionality

## 🎨 Customization

### **Updating Content**

Edit the data in `Data/data.ts` to customize:

- Personal information
- Skills and services
- Project portfolio
- Contact information

### **Styling**

- Modify `tailwind.config.ts` for design system changes
- Update component styles using Tailwind CSS classes
- Customize animations in individual components

### **Adding New Sections**

1. Create component in appropriate folder under `components/`
2. Add data structure to `types/types.ts`
3. Include component in main page (`app/page.tsx`)
4. Update navigation if needed

## ⚡ Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting with Next.js
- **SEO**: Optimized meta tags and structured data

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Prabhat Kumar** - Full Stack Developer

- 📧 **Email**: [pk993105@gmail.com](mailto:pk993105@gmail.com)
- 💼 **LinkedIn**: [linkedin.com/in/real-prabhat](https://www.linkedin.com/in/real-prabhat/)
- 🔗 **Portfolio**: [prabhat-kumar-portfolio.vercel.app](https://prabhat-kumar-portfolio.vercel.app)
- 🌐 **Links**: [linktr.ee/real_prabhat](https://linktr.ee/real_prabhat)

---

⭐ **If you found this project helpful, please give it a star!** ⭐
