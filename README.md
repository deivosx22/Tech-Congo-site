# Congo Tech E-commerce Website

Congo Tech is a modern, responsive e-commerce website built with Next.js and Tailwind CSS. It offers a seamless shopping experience for tech products, with features like product browsing, cart management, and multi-language support.

## Features

- Responsive design that works on desktop and mobile devices
- Product catalog with sorting and filtering capabilities
- Shopping cart functionality
- User-friendly product search with debounce
- Pagination for efficient product browsing
- Internationalization (i18n) support for English and French
- Custom notification system for user feedback
- SEO-friendly with proper meta tags
- Accessibility improvements with ARIA labels
- Performance optimizations including memoization and lazy loading

## Tech Stack

- Next.js
- React
- Tailwind CSS
- Context API for state management

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/congo-tech-website.git
   cd congo-tech-website
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `/src/pages`: Next.js pages
- `/src/components`: React components
- `/src/context`: React context for state management
- `/src/styles`: Global styles and Tailwind CSS configuration
- `/src/translations`: Language files for i18n
- `/public`: Static assets

## Deployment

This project can be deployed using Firebase Hosting. For detailed instructions on setting up Firebase and deploying the website, please refer to the [FIREBASE_SETUP.md](./FIREBASE_SETUP.md) file.

## User Guide

A comprehensive user guide is available to help non-technical users understand how to use the Congo Tech website. You can find it in two formats:

1. Markdown: [USER_GUIDE.md](./USER_GUIDE.md)
2. HTML: [user-guide.html](./public/user-guide.html)

To share the project with non-developers or potential customers:

1. Deploy the website using Firebase Hosting (see [FIREBASE_SETUP.md](./FIREBASE_SETUP.md)).
2. Share the deployed website URL with your audience.
3. Provide the link to the user guide (e.g., https://your-firebase-url.web.app/user-guide.html).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
