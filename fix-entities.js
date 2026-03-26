import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read and fix categories.json
const categoriesPath = path.join(__dirname, 'src/content/categories.json');
let content = fs.readFileSync(categoriesPath, 'utf8');

// Decode HTML entities
content = content.replace(/&amp;/g, '&');
content = content.replace(/&lt;/g, '<');
content = content.replace(/&gt;/g, '>');
content = content.replace(/&quot;/g, '"');
content = content.replace(/&#039;/g, "'");
content = content.replace(/&nbsp;/g, ' ');

fs.writeFileSync(categoriesPath, content);
console.log('✅ Fixed HTML entities in categories.json');

// Also fix all markdown files
const postsDir = path.join(__dirname, 'src/content/posts');
const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));

for (const file of files) {
  const filePath = path.join(postsDir, file);
  let mdContent = fs.readFileSync(filePath, 'utf8');
  
  // Fix common issues
  mdContent = mdContent.replace(/&amp;/g, '&');
  
  fs.writeFileSync(filePath, mdContent);
}

console.log(`✅ Fixed ${files.length} markdown files`);
