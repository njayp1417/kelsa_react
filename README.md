# Kelsa Events - React Website

A modern React TypeScript website for Kelsa Events, a premier event planning and equipment rental company based in Abuja, Nigeria.

## Features

- **Responsive Design**: Mobile-first approach with elegant desktop layouts
- **Modern React**: Built with React 18 and TypeScript for type safety
- **Routing**: Client-side routing with React Router
- **Professional Styling**: Custom CSS with CSS variables and modern design patterns
- **Event Services**: Comprehensive event planning and rental services showcase
- **Contact Integration**: Direct email and phone contact functionality
- **Social Media**: Integrated social media links

## Pages

1. **Home** - Hero section, services overview, testimonials
2. **Rentals** - Equipment categories, logistics services, rental options
3. **Events** - Event planning services, gallery, process overview
4. **Contact** - Contact form, company information, team details

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   └── FloatingActions.tsx # WhatsApp/Phone buttons
├── pages/              # Page components
│   ├── Home.tsx        # Homepage
│   ├── Rentals.tsx     # Rentals page
│   ├── Events.tsx      # Events page
│   └── Contact.tsx     # Contact page
├── styles/             # CSS styles
│   └── global.css      # Global styles and variables
└── App.tsx             # Main app component with routing
```

## Key Features

### Responsive Design
- Mobile-first CSS with breakpoints at 768px and 480px
- Flexible grid layouts that adapt to screen size
- Touch-friendly interface elements

### Modern Styling
- CSS custom properties for consistent theming
- Smooth animations and transitions
- Professional color scheme matching brand identity

### Contact Integration
- Direct email integration via mailto links
- WhatsApp and phone call buttons
- Contact form with validation

### Performance
- Optimized images with lazy loading
- Efficient CSS with minimal external dependencies
- Fast client-side routing

## Contact Information

**Kelsa Events**
- Address: Shop 2B, BEAUFORT COURT ESTATE, LUGBE, ABUJA
- Phone: +234 913 463 6775 / +234 802 507 1778
- Email: kelsarentalsevent@gmail.com
- Social: Facebook, Instagram, Twitter

## Technologies Used

- React 18
- TypeScript
- React Router DOM
- CSS3 with Custom Properties
- Font Awesome Icons
- Google Fonts (Poppins)

## License

This project is proprietary to Kelsa Events.