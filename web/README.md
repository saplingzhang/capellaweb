# Capella Residence Website

A luxury real estate portal website for a single residential development, designed for European and American clients.

## 🏢 Project Overview

Capella Residence is a modern, responsive website showcasing a luxury residential development. The site features:

- **Multi-page navigation**: Home, About Us, Floor Plans, Pricing, Contact
- **Responsive design**: Optimized for both desktop and mobile devices
- **Interactive features**: Contact forms, price calculator, image galleries
- **Professional presentation**: Clean design suitable for international clients

## 📁 Project Structure

```
web/
├── index.html          # Homepage - Main landing page
├── about.html          # About Us - Company information
├── units.html          # Floor Plans - Unit layouts and specifications
├── pricing.html        # Pricing - Costs and payment plans
├── contact.html        # Contact - Contact form and information
├── css/
│   └── style.css       # Main stylesheet with responsive design
├── js/
│   ├── navigation.js   # Reusable navigation component
│   └── main.js         # Common functionality and interactions
└── images/
    └── README.md       # Image requirements and specifications
```

## 🚀 Getting Started

### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional for development)

### Running the Website

#### Option 1: Direct File Opening
1. Navigate to the `web` directory
2. Double-click `index.html` to open in your browser

#### Option 2: Local Web Server (Recommended)
```bash
# Using Python
cd web
python -m http.server 8080

# Using Node.js
cd web
npx http-server . -p 8080

# Using PHP
cd web
php -S localhost:8080
```

Then open http://localhost:8080 in your browser.

## 🎨 Features

### Navigation Component
- **Reusable menu**: Implemented in `js/navigation.js`
- **Mobile responsive**: Hamburger menu for small screens
- **Active page highlighting**: Automatic current page detection

### Responsive Design
- **Mobile-first approach**: Optimized for all screen sizes
- **Flexible grid system**: CSS Grid and Flexbox layouts
- **Touch-friendly**: Large buttons and easy navigation on mobile

### Interactive Elements
- **Contact forms**: Validation and user feedback
- **Price calculator**: Dynamic cost estimation
- **Image modals**: Click to enlarge floor plans
- **Smooth animations**: CSS animations and transitions

### Content Sections

#### Homepage (`index.html`)
- Hero section with call-to-action
- Featured floor plans
- Premium amenities showcase
- Quick statistics

#### About Us (`about.html`)
- Company story and mission
- Leadership team profiles
- Core values and achievements
- Sustainability commitment

#### Floor Plans (`units.html`)
- Detailed unit specifications
- Interactive floor plan images
- Feature comparisons
- Pricing integration

#### Pricing (`pricing.html`)
- Comprehensive pricing tables
- Floor and view premiums
- Payment plan options
- Interactive cost calculator

#### Contact (`contact.html`)
- Contact form with validation
- Sales team information
- Location and directions
- FAQ section

## 🛠️ Customization

### Adding Images
1. Add your images to the `images/` directory
2. Update the `src` attributes in HTML files
3. Follow the naming conventions in `images/README.md`

### Modifying Content
- **Text content**: Edit directly in HTML files
- **Styling**: Modify `css/style.css`
- **Functionality**: Update `js/main.js`

### Color Scheme
The website uses a professional color palette:
- **Primary**: #1e3c72 (Deep Blue)
- **Secondary**: #2a5298 (Medium Blue)
- **Accent**: #ffd700 (Gold)
- **Text**: #333333 (Dark Gray)

### Typography
- **Font Family**: Arial, Helvetica, sans-serif
- **Responsive sizing**: Scales with screen size
- **Professional hierarchy**: Clear heading structure

## 📱 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Technical Details

### Dependencies
- **Font Awesome 6.0.0**: Icons and symbols
- **No JavaScript frameworks**: Pure vanilla JavaScript
- **CSS Grid & Flexbox**: Modern layout techniques

### Performance Optimizations
- **Lazy loading**: Images load when needed
- **Optimized animations**: CSS transitions and transforms
- **Compressed assets**: Minified where possible
- **Semantic HTML**: SEO and accessibility friendly

### SEO Features
- **Meta descriptions**: Each page has unique descriptions
- **Semantic markup**: Proper HTML5 structure
- **Alt text**: All images have descriptive alt attributes
- **Mobile-friendly**: Google mobile-first indexing ready

## 🌐 Deployment

### Static Hosting
This website can be deployed to any static hosting service:

- **GitHub Pages**: Free hosting for static sites
- **Netlify**: Easy deployment with form handling
- **Vercel**: Fast deployment with preview URLs
- **AWS S3**: Scalable cloud hosting
- **Traditional web hosting**: Any provider supporting static files

### Domain Setup
1. Purchase a domain name
2. Configure DNS settings
3. Upload files to hosting provider
4. Test all functionality

## 📞 Support

For questions or modifications, please refer to:
- Contact form functionality in `js/main.js`
- Navigation component in `js/navigation.js`
- Responsive styles in `css/style.css`

## 🎯 Future Enhancements

Potential improvements for future versions:
- **Content Management System**: Easy content updates
- **Multi-language support**: Additional language options
- **Virtual tours**: 3D property walkthroughs
- **Integration APIs**: CRM and lead management
- **Advanced analytics**: Visitor tracking and insights

---

**Built with ❤️ for luxury real estate marketing**