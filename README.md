# Audiophile E-Commerce

A pixel-perfect, fully responsive e-commerce website for premium audio equipment built with Next.js 16, Convex, and TypeScript.

## Features

- 🎨 Pixel-perfect design implementation from Figma
- 📱 Fully responsive (mobile, tablet, desktop)
- 🛒 Shopping cart with local storage persistence
- 💳 Complete checkout flow with form validation
- 📧 Order confirmation emails
- 🗄️ Real-time database with Convex
- ♿ Fully accessible (WCAG compliant)
- ⚡ Server Actions for email sending
- 🎯 TypeScript for type safety

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Database:** Convex
- **Email:** Nodemailer with Gmail
- **Forms:** React Hook Form + Zod
- **State Management:** React Context API
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- A Convex account (free tier available)
- A Gmail account for sending emails

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/BenedictUmeozor/Audiophile
cd audiophile
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
# Convex
CONVEX_DEPLOYMENT=<your-convex-deployment>
NEXT_PUBLIC_CONVEX_URL=<your-convex-url>

# Email
EMAIL_USER=<your-gmail-address>
GOOGLE_APP_PASSWORD=<your-google-app-password>

# App URL (for production)
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**Getting your environment variables:**

- **Convex:**
  1. Sign up at [convex.dev](https://convex.dev)
  2. Run `npx convex dev` in your project
  3. Follow the prompts to create a new project
  4. The CLI will automatically add the variables to `.env.local`

- **Email (Gmail):**
  1. Use your Gmail address for `EMAIL_USER`
  2. Enable 2-factor authentication on your Google account
  3. Generate an App Password: Go to [Google Account settings](https://myaccount.google.com/apppasswords)
  4. Create a new app password for "Mail"
  5. Use the generated password for `GOOGLE_APP_PASSWORD`

4. **Initialize Convex**

```bash
npx convex dev
```

This will:
- Push your schema to Convex
- Generate TypeScript types
- Start the Convex development server

5. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

```
audiophile/
├── app/
│   ├── actions/          # Server actions
│   ├── categories/       # Category pages
│   ├── checkout/         # Checkout flow
│   ├── orders/          # Order details pages
│   └── products/        # Product pages
├── components/
│   ├── icons/           # SVG icon components
│   ├── shared/          # Shared components
│   └── ui/              # UI components
├── constants/           # Static data
├── context/            # React context providers
├── convex/             # Convex backend
│   ├── schema.ts       # Database schema
│   └── orders.ts       # Order mutations/queries
├── lib/                # Utilities
├── public/             # Static assets
└── utils/              # Helper functions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npx convex dev` - Start Convex development server
- `npx convex deploy` - Deploy Convex functions

## Key Features Implementation

### Shopping Cart
- Persistent cart using localStorage
- Add/remove items
- Quantity management
- Real-time total calculation

### Checkout
- Multi-step form with validation
- Payment method selection (e-Money / Cash on Delivery)
- Real-time error feedback
- Accessible form controls

### Order Management
- Orders stored in Convex database
- Order confirmation emails
- Order details page
- Order status tracking

### Accessibility
- ARIA labels and roles
- Keyboard navigation
- Screen reader support
- Focus management
- Error announcements

## Environment Variables Reference

| Variable | Description | Required |
|----------|-------------|----------|
| `CONVEX_DEPLOYMENT` | Convex deployment ID | Yes |
| `NEXT_PUBLIC_CONVEX_URL` | Convex public URL | Yes |
| `EMAIL_USER` | Your Gmail address for sending emails | Yes |
| `GOOGLE_APP_PASSWORD` | Google App Password for Gmail | Yes |
| `NEXT_PUBLIC_APP_URL` | Your app URL (for emails) | Production only |

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Deploy Convex Functions

```bash
npx convex deploy
```

Update your `.env.local` with the production Convex URL.

## 👤 Author

**Benedict Umeozor**  
GitHub: [@BenedictUmeozor](https://github.com/BenedictUmeozor)
