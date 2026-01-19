# Chef Client (Next.js)

## Stack
- Next.js 16 (App Router)
- React 19
- NextAuth client
- TailwindCSS + DaisyUI

## Favicon
- Custom knife-and-fork icons at `src/app/favicon.svg`, `src/app/icon.svg`, and `public/favicon.svg`.
- Explicit head links added in `src/app/layout.jsx`.

## Env vars (examples)
- `NEXT_PUBLIC_API_URL` (backend base URL)
- `NEXT_PUBLIC_DEMO_EMAIL`, `NEXT_PUBLIC_DEMO_PASSWORD`
- Auth secrets as required (NextAuth, Firebase, etc.)

## Local dev
```bash
npm install
npm run dev
# app runs at http://localhost:3000
```

## Build & run
```bash
npm run build
npm start
```

## Vercel deploy
- Project root: `chef-client`
- Build command: `npm run build`
- Output: `.next`
- Set env vars above in Vercel.
