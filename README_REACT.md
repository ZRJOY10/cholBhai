# OvoRide - React.js Application

A modern, responsive ride-sharing platform built with React.js and Tailwind CSS.

## 🚀 Features

- **Modern UI/UX**: Clean and intuitive design with smooth animations
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Component-Based Architecture**: Reusable and maintainable React components
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Interactive Elements**: Engaging user interactions and micro-animations
- **Performance Optimized**: Fast loading and smooth user experience

## 🛠️ Tech Stack

- **Frontend**: React.js 18
- **Styling**: Tailwind CSS 3
- **Icons**: Heroicons
- **Build Tool**: Create React App
- **Package Manager**: npm

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/
│   │   ├── Button.js
│   │   ├── Logo.js
│   │   └── LoadingSpinner.js
│   ├── Header.js
│   ├── Hero.js
│   ├── VehicleTypes.js
│   ├── BlogSection.js
│   ├── Newsletter.js
│   ├── Footer.js
│   └── CookieNotice.js
├── hooks/
│   └── useLoading.js
├── utils/
├── App.js
├── index.js
└── index.css
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd ovoride-react
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📋 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🎨 Customization

### Colors

The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Add your custom colors here
  }
}
```

### Components

All components are located in the `src/components/` directory and can be easily customized or extended.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Build Configuration

The project uses Create React App with additional configuration for:

- Tailwind CSS
- PostCSS
- Autoprefixer

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, email support@ovoride.com or create an issue in the repository.
