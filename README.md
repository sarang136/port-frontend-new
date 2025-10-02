# Portfolio Website

A modern, responsive portfolio website built with Next.js 14, Tailwind CSS, and App Router.

## Features

- 🚀 **Next.js 14** with App Router
- 🎨 **Tailwind CSS** for styling
- 📱 **Fully Responsive** design
- 🌙 **Dark Mode** support
- ⚡ **Fast Performance** with optimized images and code
- 📧 **Contact Form** with form validation
- 🎯 **SEO Optimized**
- 🎨 **Modern UI/UX** with smooth animations

## Sections

- **Hero** - Introduction with animated typing effect
- **About** - Personal information and skills overview
- **Skills** - Technical skills with progress bars
- **Projects** - Featured and other projects showcase
- **Contact** - Contact form and social links

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### Personal Information

Update the following files with your personal information:

1. **Hero Section** (`app/components/Hero.js`):
   - Change the name from "John Doe" to your name
   - Update the typing animation texts
   - Replace the profile image placeholder

2. **About Section** (`app/components/About.js`):
   - Update the about text
   - Modify the statistics (projects completed, years of experience)

3. **Skills Section** (`app/components/Skills.js`):
   - Update the skills and their proficiency levels
   - Add or remove skill categories

4. **Projects Section** (`app/components/Projects.js`):
   - Replace the example projects with your actual projects
   - Update project descriptions, technologies, and links
   - Add your project images

5. **Contact Section** (`app/components/Contact.js`):
   - Update contact information (email, phone, location)
   - Add your social media links
   - Configure the contact form (currently simulated)

### Styling

The website uses Tailwind CSS for styling. You can customize:

- **Colors**: Update the color scheme in `tailwind.config.js`
- **Fonts**: Change fonts in `app/globals.css` and `tailwind.config.js`
- **Layout**: Modify component layouts in individual component files

### Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

## Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   ├── Contact.js
│   │   └── Navigation.js
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── public/
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **React 18** - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS post-processor
- **ESLint** - Code linting

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## Support

If you have any questions or need help with customization, please open an issue or contact me directly.
