# Portfolio Website

This is a portfolio website built with Next.js and Tailwind CSS. It showcases your skills, projects, and achievements in an elegant and responsive design.

## Installation

1. Clone the repository: `git clone https://github.com/judygab/nextjs-portfolio.git`
2. Navigate to the project directory: `cd portfolio-website`
3. Install the dependencies: `npm install`

## Usage

1. Start the development server: `npm run dev`
2. Open your browser and visit `http://localhost:3000` to view the website.

## Dependencies

The following dependencies are required for this project:

- Next.js: A React framework for server-side rendering and static site generation.
- Tailwind CSS: A highly customizable CSS framework.
- React: A JavaScript library for building user interfaces.
- React Icons: A collection of popular icons for React projects.
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
- Resend: Resend is the email API for developers.

## Email Integration with Resend

This project uses Resend for handling email functionality in the contact form.

### Setting up Resend

1. Create a free account at [Resend](https://resend.com) if you don't have one.
2. Generate an API key from your Resend dashboard.
3. Create a `.env.local` file in the root directory with the following variables:
   ```
   RESEND_API_KEY=your_resend_api_key_here
   FROM_EMAIL=your_verified_email_address@example.com
   ```
4. Verify your sender email in the Resend dashboard.
5. Restart the development server for the changes to take effect.
6. Add the env variables to your deployment provider eg: Vercel

# Author

Built with 💜 by [Ahmed Tokyo](https://ahmedtokyo.com)
