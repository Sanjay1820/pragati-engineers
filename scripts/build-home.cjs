const fs = require('node:fs');
const path = require('node:path');

const projectRoot = path.resolve(__dirname, '..');
const outputDirectory = path.join(projectRoot, 'dist-home');

fs.mkdirSync(outputDirectory, { recursive: true });
fs.copyFileSync(path.join(projectRoot, 'index.html'), path.join(outputDirectory, 'index.html'));
fs.cpSync(path.join(projectRoot, 'assets'), path.join(outputDirectory, 'assets'), { recursive: true });

const publishedPages = fs.readdirSync(outputDirectory).filter(file => file.endsWith('.html'));
if (publishedPages.length !== 1 || publishedPages[0] !== 'index.html') {
  throw new Error('The deployment directory must contain only the home page.');
}

console.log('Home page build complete: dist-home/index.html and assets only.');
