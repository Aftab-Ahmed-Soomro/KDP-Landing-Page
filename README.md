# KDP Pro Publishers Website

A modern, responsive website for KDP Pro Publishers built with React and Tailwind CSS.

## 🚀 Features

- **Fully Responsive Design** - Works seamlessly across all devices (mobile, tablet, desktop)
- **Component-Based Architecture** - Modular and reusable components
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Accessibility** - WCAG compliant with proper ARIA labels and keyboard navigation
- **Performance Optimized** - Fast loading with optimized images and code splitting

## 📁 Project Structure

```
src/
├── components/
│   ├── common/           # Reusable UI components
│   │   ├── Button.jsx    # Customizable button component
│   │   ├── Container.jsx # Layout container component
│   │   ├── Grid.jsx      # Responsive grid component
│   │   └── Section.jsx   # Section wrapper component
│   ├── Header.jsx        # Navigation header
│   ├── HeroSection.jsx   # Hero banner section
│   ├── AboutSection.jsx  # About company section
│   ├── Banner3.jsx       # Publisher perks section
│   ├── Banner4.jsx       # Services showcase
│   ├── Banner5.jsx       # Portfolio section
│   ├── Banner6.jsx       # Professional assistance
│   ├── Banner7.jsx       # Additional content
│   ├── Banner8.jsx       # Additional content
│   └── Footer.jsx        # Footer with contact info
├── constants/
│   └── index.js          # Centralized data and configuration
├── App.jsx               # Main application component
└── main.jsx             # Application entry point
```

## 🧩 Component Architecture

### Reusable Components

#### Button Component
```jsx
<Button 
  variant="primary" 
  size="md" 
  onClick={handleClick}
>
  Click Me
</Button>
```

**Variants:** `primary`, `secondary`, `outline`, `outlineWhite`, `gray`, `transparent`
**Sizes:** `sm`, `md`, `lg`, `xl`

#### Container Component
```jsx
<Container maxWidth="7xl" padding={true}>
  <YourContent />
</Container>
```

#### Grid Component
```jsx
<Grid cols={3} gap="lg">
  <GridItem />
  <GridItem />
  <GridItem />
</Grid>
```

#### Section Component
```jsx
<Section padding="lg" background="gradient">
  <YourContent />
</Section>
```

### Page Components

#### Header
- Responsive navigation with mobile menu
- Logo and call-to-action buttons
- Dropdown menu support

#### HeroSection
- Hero banner with contact form
- Responsive background image
- Form validation and submission

#### AboutSection
- Company information and services
- Responsive image and content layout
- Call-to-action buttons

## 🎨 Design System

### Color Palette
- **Primary:** `#F3BD07` (Yellow)
- **Secondary:** `#434748` (Dark Gray)
- **Accent:** `#6F5806` (Brown)
- **Dark:** `#2a2d2e` (Very Dark Gray)
- **Light:** `#e6b006` (Light Yellow)

### Typography
- **Headings:** Responsive font sizes (2xl → 3xl → 4xl → 5xl)
- **Body:** Responsive text (sm → base → lg → xl)
- **Buttons:** Consistent sizing across variants

### Spacing
- **Mobile:** `p-4`, `gap-3`, `mt-4`
- **Tablet:** `md:p-8`, `md:gap-4`, `md:mt-6`
- **Desktop:** `lg:p-12`, `lg:gap-8`, `lg:mt-10`

## 📱 Responsive Breakpoints

- **Mobile:** `< 768px` - Single column layouts
- **Tablet:** `768px - 1024px` - Two column layouts
- **Desktop:** `1024px+` - Multi-column layouts
- **Large Desktop:** `1280px+` - Maximum content width

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 🔧 Configuration

All configuration data is centralized in `src/constants/index.js`:

- Navigation items
- Footer links
- Contact information
- Company details
- Content for each section
- Color palette
- Button variants

## 📝 Code Quality

- **ESLint** - Code linting and formatting
- **Component Structure** - Consistent file organization
- **Props Validation** - Type checking for component props
- **Accessibility** - ARIA labels and keyboard navigation
- **Performance** - Optimized rendering and lazy loading

## 🎯 Best Practices

1. **Component Reusability** - Use common components for consistency
2. **Responsive Design** - Mobile-first approach with progressive enhancement
3. **Accessibility** - Proper semantic HTML and ARIA labels
4. **Performance** - Optimized images and minimal bundle size
5. **Maintainability** - Clean, documented code structure

## 📄 License

This project is licensed under the MIT License.
