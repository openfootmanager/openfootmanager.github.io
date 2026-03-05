import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://openfootmanager.com';
const DIST_DIR = path.join(__dirname, 'dist');
const SITEMAP_PATH = path.join(DIST_DIR, 'sitemap-index.xml');

// Find all HTML files in dist/
function findHtmlFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            findHtmlFiles(filePath, fileList);
        } else if (file.endsWith('.html') && !file.includes('404')) {
            fileList.push(filePath);
        }
    }

    return fileList;
}

function generateSitemap() {
    console.log('Generating sitemap...');

    if (!fs.existsSync(DIST_DIR)) {
        console.error('dist directory not found. Run this after build.');
        process.exit(1);
    }

    const htmlFiles = findHtmlFiles(DIST_DIR);

    const urls = htmlFiles.map(filePath => {
        // Convert absolute path to relative URL path
        let relPath = filePath.replace(DIST_DIR, '').replace(/\\/g, '/');

        // Remove index.html
        if (relPath.endsWith('/index.html')) {
            relPath = relPath.slice(0, -10);
        } else if (relPath.endsWith('.html')) {
            relPath = relPath.slice(0, -5);
        }

        // Ensure trailing slash isn't there unless it's the root
        if (relPath.length > 1 && relPath.endsWith('/')) {
            relPath = relPath.slice(0, -1);
        }

        const url = `${SITE_URL}${relPath}`;
        const date = new Date().toISOString();

        return `  <url>
    <loc>${url}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${relPath === '' || relPath === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
    });

    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

    fs.writeFileSync(SITEMAP_PATH, sitemapContent);
    console.log(`Sitemap generated with ${urls.length} URLs at ${SITEMAP_PATH}`);
}

generateSitemap();
