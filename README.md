# Donut Shop App 🍩

A Next.js application showcasing a donut shop with product listing and details pages.

## Features

- Product listing with category filters
- Product detail pages with quantity selection
- Mobile-first design
- Animated image rotations
- Add to cart functionality with toast notifications

## Technologies Used

- Next.js 13
- TypeScript
- Tailwind CSS
- Redux Toolkit
- React Hot Toast
- Lucide React Icons

## Installation

1. Clone the repository:

```bash
git clone https://github.com/AtulGarg2204/bezt-frontend.git
cd bezt-frontend
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

## Build and Deployment

1. Update `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig;
```

2. Create a production build:

```bash
npm run build
```

3. Deploy:
   - The build will create an `out` directory.
   - Upload this `out` directory to Netlify through drag and drop or manual deploy.

## Project Structure

```
src/
├── app/
│   ├── products/
│   │   ├── [id]/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── ui/
│       ├── CategoryButton.tsx
│       └── ProductCard.tsx
├── store/
│   ├── features/
│   │   └── productSlice.ts
│   └── store.ts
├── types/
│   └── product.ts
└── utils/
    └── productData.ts
```

## Routes

- `/` or `/products` - Product listing page
- `/products/[id]` - Product detail page

## Features Implementation

### Product List Page
- Displays all products in a grid layout.
- Category filtering.
- Clickable product cards.

### Product Detail Page
- Shows detailed product information.
- Quantity adjustment.
- Add to cart functionality.
- Back navigation.
- Rotated product image display.

## Styling

- Dark theme
- Custom colors:
  - Background: `#1F1F1F`
  - Accent: `#F8B602`
  - Text: `#8F8F8F` (gray) / `#FFFFFF` (white)

## Notes

- Mobile-only design (no responsive breakpoints).
- Static data implementation.
- Client-side routing.
- Toast notifications for cart actions.

## Running the App

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.
