import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const postsDir = path.join(__dirname, 'src/content/posts');

// Fix escape sequences in all markdown files
const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));

console.log(`Fixing ${files.length} markdown files...`);

let fixedCount = 0;

for (const file of files) {
  const filePath = path.join(postsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix common YAML escape issues
  // Remove problematic escape sequences
  content = content.replace(/\\"/g, '"'); // Fix escaped quotes
  content = content.replace(/\\n/g, ' '); // Replace literal \n with space
  content = content.replace(/\\t/g, ' '); // Replace literal \t with space
  
  // Fix double quotes in frontmatter
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (frontmatterMatch) {
    let frontmatter = frontmatterMatch[1];
    
    // Wrap values with special chars in single quotes instead of double
    frontmatter = frontmatter.replace(/: "([^"]*)"/g, (match, value) => {
      // If value contains special chars, use single quotes
      if (value.includes('"') || value.includes(':') || value.includes('#')) {
        return `: '${value.replace(/'/g, "''")}'`;
      }
      return match;
    });
    
    content = content.replace(frontmatterMatch[1], frontmatter);
  }
  
  fs.writeFileSync(filePath, content);
  fixedCount++;
}

console.log(`✅ Fixed ${fixedCount} files`);
