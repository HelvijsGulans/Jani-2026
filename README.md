# Jāņi 2026

A responsive React website for a Latvian Midsummer celebration.

This project is a modernized version of a personal event website I originally built in 2024. I revisited it in 2026 to improve the React structure, responsive layout, styling, localization, and user interactions.

**Live demo:** https://jani-2026.vercel.app/

## Features

- Responsive desktop and mobile layout
- English and Latvian language switching
- Selected language persisted with `localStorage`
- Sticky responsive navigation with a mobile hamburger menu
- Interactive FAQ accordion
- RSVP form with validation
- RSVP data persisted locally between page refreshes
- Smooth section navigation
- Responsive image-based hero section

## Tech Stack

- React
- JavaScript
- HTML
- CSS
- Vite
- Vercel

## Running Locally

Clone the repository:

```bash
git clone https://github.com/HelvijsGulans/Jani-2026.git
cd Jani-2026
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Background

The original version of this site was created in 2024 as a personal event invitation.

In 2026, I rebuilt and modernized it with a focus on cleaner React component structure, responsive CSS, reusable translated content, state management, and a better experience across desktop and mobile devices.

The visual direction intentionally keeps the nature-inspired character of the original project while replacing its fixed layouts and breakpoint-specific positioning with a more flexible responsive design.

## Notes

The RSVP form is a frontend demonstration and stores submitted data in the user's browser using `localStorage`. It does not send data to a backend or external service.