# AI Agent App - Design Generation Platform

A modern, responsive web application built with Next.js 15 that provides an AI-powered design generation platform. This application allows users to create beautiful designs through an intuitive prompt builder interface with real-time previews and export capabilities.

🌐 **Live Demo**: [https://ai-agent-app-coral.vercel.app/](https://ai-agent-app-coral.vercel.app/)

<img width="2940" height="1658" alt="image" src="https://github.com/user-attachments/assets/ab3ea33e-2a2c-4a2a-b3a2-bcdbcb4f7957" />


## 🚀 Features

### Core Functionality
- **AI Design Generation**: Create beautiful designs in seconds using AI
- **Interactive Prompt Builder**: Comprehensive UI for building design prompts
- **Real-time Preview**: Live preview of design configurations
- **Export Options**: Export designs to HTML or Figma
- **Responsive Design**: Fully responsive across all device sizes
- **Dark/Light Theme**: Built-in theme switching with system preference detection

### UI Components & Features

#### 🎨 Design Builder Interface
- **Layout Configuration**: Multiple layout types (Grid, Flexbox, Stack, etc.)
- **Style Options**: Various design styles with live previews
- **Color Customization**: Accent, background, and border color selection
- **Typography Controls**: Font family, size, weight, and spacing options
- **Animation Settings**: Multiple animation types with timing controls
- **Theme Selection**: Light, dark, and custom theme options

#### 🧩 Interactive Components
- **Advanced Dropdown Menus**: Multi-level navigation with smooth animations
- **Modal Systems**: Figma export modal, prompt builder modal, and user profile modal
- **Progress Indicators**: Usage tracking with visual progress bars
- **Search Functionality**: Real-time search across design options
- **State Management**: Complex state handling for design configurations

#### 📱 Responsive Layout
- **Mobile-First Design**: Optimized for mobile devices
- **Adaptive Navigation**: Collapsible navigation for smaller screens
- **Flexible Grid System**: Responsive grid layouts
- **Touch-Friendly Interface**: Optimized for touch interactions

## 🛠️ Technology Stack

### Frontend Framework
- **Next.js 15.5.5**: React framework with App Router
- **React 19.1.0**: Latest React with concurrent features
- **TypeScript 5**: Type-safe development

### Styling & UI
- **Tailwind CSS 3.4.18**: Utility-first CSS framework
- **Custom CSS Variables**: Comprehensive design system
- **Lucide React**: Modern icon library
- **Inter Font**: Google Fonts integration

### Development Tools
- **ESLint**: Code linting and formatting
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

## 📁 Project Structure

```
src/
├── app/
│   ├── chat-interaction/     # Interactive design builder page
│   ├── test/                 # Test page for development
│   ├── globals.css           # Global styles and CSS variables
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Home page
├── components/
│   ├── Header.tsx            # Navigation header with user menu
│   ├── Footer.tsx            # Footer with links and social media
│   └── HomePage.tsx          # Main homepage component
└── public/                   # Static assets
```

## 🎯 Key UI Components

### Header Component (`Header.tsx`)
- **Fixed Navigation**: Sticky header with backdrop blur
- **Responsive Menu**: Mobile hamburger menu
- **Theme Toggle**: Light/Dark/System theme switcher
- **User Profile Dropdown**: 
  - User information display
  - Subscription status
  - Usage statistics with progress bars
  - Profile, settings, and logout options
- **Navigation Links**: CREATE, TEMPLATES, COMPONENTS, ASSETS, LEARN, PRICING, CHANGELOG

### Footer Component (`Footer.tsx`)
- **Company Information**: Logo and description
- **Link Sections**: Product, Made by Us, Connect
- **Social Media Links**: Twitter, YouTube, LinkedIn
- **Theme Toggle**: Duplicate theme switcher
- **Copyright Information**

### HomePage Component (`HomePage.tsx`)
- **Hero Section**: Animated title with staggered text reveal
- **Prompt Builder Interface**:
  - Layout Type Selection (Grid, Flexbox, Stack, etc.)
  - Layout Configuration Options
  - Framing Options
  - Style Selection with previews
  - Theme and Color Customization
  - Typography Controls
  - Animation Settings
- **Real-time Preview**: Live preview of selected configurations
- **Export Options**: HTML and Figma export modals
- **Search Functionality**: Filter options by search query

### Chat Interaction Page (`chat-interaction/page.tsx`)
- **Advanced Design Builder**: Extended version of the homepage builder
- **Publishing Modal**: Additional export and publishing options
- **Enhanced State Management**: More complex state handling
- **Animation Controls**: Detailed animation configuration

## 🎨 Design System

### Color Palette
- **Primary Colors**: Blue (#3B82F6) with hover states
- **Neutral Colors**: Comprehensive grayscale from 0-950
- **Semantic Colors**: Success, warning, error states
- **Dark Mode**: Full dark theme support

### Typography
- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 300, 400, 500, 600, 700
- **Responsive Typography**: Fluid text sizing
- **Custom CSS Classes**: Reusable typography utilities

### Spacing & Layout
- **Consistent Spacing**: Tailwind's spacing scale
- **Container System**: Responsive containers with max-widths
- **Grid System**: CSS Grid and Flexbox layouts
- **Component Spacing**: Consistent padding and margins

### Animations & Transitions
- **Smooth Transitions**: 200-300ms duration transitions
- **Hover Effects**: Interactive hover states
- **Loading Animations**: Staggered text reveals
- **Modal Animations**: Slide-in and fade effects
- **Custom Keyframes**: Multiple animation types

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-agent-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Key Features Implemented

### 1. Advanced Prompt Builder
- **Multi-section Interface**: Organized into logical sections
- **Real-time Selection**: Immediate visual feedback
- **Preview System**: Live preview of design configurations
- **Reset Functionality**: Clear all selections
- **Search Integration**: Filter options by search query

### 2. Responsive Design
- **Mobile-First Approach**: Optimized for mobile devices
- **Breakpoint System**: sm, md, lg, xl, 2xl breakpoints
- **Flexible Layouts**: Adaptive component layouts
- **Touch Optimization**: Touch-friendly interface elements

### 3. Theme System
- **Dark/Light Modes**: Complete theme switching
- **System Preference**: Automatic theme detection
- **CSS Variables**: Comprehensive design token system
- **Smooth Transitions**: Theme switching animations

### 4. Interactive Elements
- **Dropdown Menus**: Multi-level navigation
- **Modal Systems**: Overlay modals with backdrop blur
- **Progress Indicators**: Visual progress tracking
- **Hover States**: Rich interactive feedback
- **Loading States**: Smooth loading animations

### 5. Export Functionality
- **HTML Export**: Generate HTML code
- **Figma Integration**: Export to Figma format
- **Publishing Options**: Multiple publishing methods
- **Preview System**: Export preview before generation

## 🔧 Customization

### Adding New Design Options
1. Update the options arrays in `HomePage.tsx`
2. Add corresponding state variables
3. Update the `getButtonStyling` function
4. Add preview logic for new options

### Styling Modifications
1. Modify CSS variables in `globals.css`
2. Update Tailwind configuration in `tailwind.config.ts`
3. Adjust component-specific styles

### Adding New Pages
1. Create new page in `src/app/`
2. Follow Next.js App Router conventions
3. Import and use existing components

## 📱 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile Browsers**: iOS Safari, Chrome Mobile
- **Responsive**: All screen sizes from 320px to 4K

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings (already optimized)
3. Deploy automatically on push

### Other Platforms
- **Netlify**: Compatible with Next.js
- **AWS Amplify**: Full Next.js support
- **Docker**: Containerized deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- **Next.js Team**: For the amazing framework
- **Tailwind CSS**: For the utility-first CSS framework
- **Lucide**: For the beautiful icon set
- **Vercel**: For hosting and deployment platform

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**
