# Fylo Dark Theme Landing Page

## Tech Stack

### Core Technologies
- **HTML5**: Semantic markup structuring the landing page.
- **JavaScript (Vanilla)**: Handles client-side interactivity and form validation.
- **Tailwind CSS v4**: Utility-first CSS framework used for styling components with a strict mobile-first approach.

### Architecture & Design
- **Clean HTML**: Tailwind utility classes and `@apply` directives are utilized to maintain readable component structures.
- **Mobile-First Approach**: Styles are implemented starting from mobile devices and scaling up to desktop displays.

## Features

- **Responsive Layout**: Adjusts seamlessly across a range of device screen sizes (mobile, tablet, desktop).
- **Interactive UI**: Interactive elements include comprehensive hover states and dynamic feedback.
- **Client-Side Validation**: Custom validation logic implemented for email submission forms, preventing empty or invalid inputs.

## Development setup

1. Install project dependencies for Tailwind CSS:
   ```bash
   npm install
   ```
2. Run the Tailwind CLI build process in watch mode:
   ```bash
   npx @tailwindcss/cli -i ./src/input.css -o ./style.css --watch
   ```
3. Serve the local directory (e.g., using Live Server or TestSprite on port 5500) and open `index.html` in your browser.
