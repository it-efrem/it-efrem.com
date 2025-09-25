[![Deploy](https://github.com/it-efrem/it-efrem.com/actions/workflows/deploy.yml/badge.svg?branch=master)](https://github.com/it-efrem/it-efrem.com/actions/workflows/deploy.yml)
### Eugene Efremov personal website
##### JavaScript Full-Stack Senior Developer
[it-efrem.com](https://it-efrem.com/)

## Overview
- Personal site and interactive CV for Eugene Efremov (`it-efrem`)
- Built with Next.js and static export for fast deployments
- Sections include skills, highlighted projects, open-source work, and contact links

## Tech Stack
- Next.js 12 with React 17 and TypeScript configuration
- Styled Components for scoped styling
- Static assets stored in `public/`

## Project Structure

```
src/
  components/   Reusable UI blocks: profile, skills, projects, etc.
  pages/        Next.js page entries (`index`, `_app`, `_document`)
  styles/       Global resets and design tokens
public/         Favicons, fonts, and manifest metadata
```

## Getting Started
1. Install dependencies: `npm install`
2. Run the development server: `npm run dev`
3. Open `http://localhost:3000` to view the site

## Production Build
- Generate the static bundle: `npm run build`
- Preview production server: `npm run start`

## Linting
- Run static analysis: `npm run lint`
- Auto-fix supported issues: `npm run lint-fix`

## Deployment Notes
- `npm run build` exports static assets suitable for static hosting or CDN deployment
- GitHub Actions workflow (`deploy.yml`) handles automated deployments from `master`
