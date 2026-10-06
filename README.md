# Pragati Engineers

Static website with a home page only deployment for Vercel.

## Local website

Open `index.html` to view the full local website. The other source pages stay available in this repository.

## Vercel deployment

Import this GitHub repository into Vercel with the framework preset **Other** and the repository root as the Root Directory. The included `vercel.json` configures the build and output directory automatically.

The build publishes only `index.html` and `assets/` from `dist-home/`. Other page URLs display the home page. CSS, JavaScript, images, the slider, and WhatsApp links remain available.

To run the build locally with Node.js installed:

```sh
npm run build
```

Original PNG reference images, scratch files, logs, generated build output, and local environment files are excluded from Git. The website uses the optimized images in `assets/`.
