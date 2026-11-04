const fs = require('node:fs');
const path = require('node:path');

const projectRoot = path.resolve(__dirname, '..');
const outputDirectory = path.join(projectRoot, 'dist-home');

fs.mkdirSync(outputDirectory, { recursive: true });

const htmlFiles = fs.readdirSync(projectRoot).filter(file => file.endsWith('.html'));

htmlFiles.forEach(file => {
  fs.copyFileSync(path.join(projectRoot, file), path.join(outputDirectory, file));
});

const assetsSrc = path.join(projectRoot, 'assets');
const assetsDest = path.join(outputDirectory, 'assets');
if (fs.existsSync(assetsSrc)) {
  fs.cpSync(assetsSrc, assetsDest, { recursive: true });
}

const vercelSrc = path.join(projectRoot, 'vercel.json');
if (fs.existsSync(vercelSrc)) {
  fs.copyFileSync(vercelSrc, path.join(outputDirectory, 'vercel.json'));
}

console.log(`Pragati Engineers Full Site Build Complete: Published ${htmlFiles.length} HTML pages and assets to dist-home/`);
