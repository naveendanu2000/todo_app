This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

## Deploy to GitHub Pages

This repository includes a GitHub Actions workflow `.github/workflows/deploy-gh-pages.yml` that builds the app and uses `next export` to produce a static `out/` directory which is deployed to GitHub Pages.

Quick deploy steps:

1. Push your changes to the `master` branch (the workflow triggers on `master`).
2. Optionally set a repository secret `BASE_PATH` to override the automatic base path.
3. Check the Actions tab to monitor the build and Pages settings for the published URL.

Notes:
- By default the workflow will set `BASE_PATH` automatically to `/<repo-name>` for *project pages* (e.g. `username.github.io/repo`) and to empty for *user/organization pages* (e.g. `username.github.io`). For this repository (`naveendanu2000/todo_app`) the workflow explicitly uses `BASE_PATH=/todo_app` so it deploys correctly under `https://naveendanu2000.github.io/todo_app/`. You can override this behavior by adding a repository secret named `BASE_PATH` with your desired value (e.g. `/repo-name` or `repo-name`).
- Because GitHub Pages serves static files, Next.js server features (API routes, getServerSideProps, etc.) are not supported; only static exportable pages will be deployed.
- If you use a custom domain or special routing, adjust `BASE_PATH` and `next.config.mjs` accordingly.
