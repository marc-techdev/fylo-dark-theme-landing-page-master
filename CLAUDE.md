# Project Foundation

## Build Commands

- Run tailwindcss via appropriate npm / npx command if managing CSS manually. The project uses standard web technologies.
- The project is a static site that can be run with any local dev server, such as Live Server or Python's `http.server`.

## Test Suite

- Run `npm test` as the placeholder testing script, but currently there is no testing framework initialized.
- We recommend using TestSprite on port 5500 for tests when needed in the future.

## Architecture Source of Truth

- System design and UI adherence relies on the designs located in the `/design` directory.
- The primary style library in use is Tailwind CSS v4, initialized to use a mobile-first approach.
- Components are structurally documented via HTML semantic conventions directly in `index.html`.
