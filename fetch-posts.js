import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WP_API = 'https://koalapickleball.com/wp-json/wp/v2';

async function fetchAllPosts() {
  let page = 1;
  let allPosts = [];
  
  console.log('Fetching posts from WordPress...');
  
  while (page <= 84) { // 836 posts / 10 per page = 84 pages
    try {
      const response = await fetch(`${WP_API}/posts?per_page=10&page=${page}&_embed`);
      if (!response.ok) {
        console.log(`Page ${page} failed: ${response.status}`);
        break;
      }
      
      const posts = await response.json();
      if (posts.length === 0) break;
      
      allPosts = allPosts.concat(posts);
      console.log(`Page ${page}: ${posts.length} posts (Total: ${allPosts.length})`);
      
      page++;
    } catch (error) {
      console.error(`Error on page ${page}:`, error.message);
      break;
    }
  }
  
  return allPosts;
}

async function fetchCategories() {
  try {
    const response = await fetch(`${WP_API}/categories?per_page=100`);
    const categories = await response.json();
    console.log(`\nFetched ${categories.length} categories`);
    return categories;
  } catch (error) {
    console.error('Error:', error.message);
    return [];
  }
}

function cleanHtml(str) {
  if (!str) return '';
  return str
    .replace(/<[^>]*>/g, '')
    .replace(/"/g, '\\"')
    .substring(0, 200);
}

async function savePosts(posts, categories) {
  const postsDir = path.join(__dirname, 'src/content/posts');
  fs.mkdirSync(postsDir, { recursive: true });
  
  const catMap = {};
  categories.forEach(cat => {
    catMap[cat.id] = cat.slug;
  });
  
  for (const post of posts) {
    const slug = post.slug;
    const categorySlugs = post.categories?.map(id => catMap[id]).filter(Boolean) || [];
    const featuredImage = post.uagb_featured_image_src?.full?.[0] || '';
    const excerpt = cleanHtml(post.excerpt?.rendered || '');
    const author = post.uagb_author_info?.display_name || 'Billy Walters';
    
    const frontmatter = `---
title: "${post.title.rendered.replace(/"/g, '\\"')}"
date: "${post.date}"
slug: "${slug}"
featured_image: "${featuredImage}"
categories: [${categorySlugs.map(c => `"${c}"`).join(', ')}]
author: "${author}"
excerpt: "${excerpt}..."
---

${post.content.rendered}
`;
    
    fs.writeFileSync(path.join(postsDir, `${slug}.md`), frontmatter);
  }
  
  console.log(`\n✅ Saved ${posts.length} posts`);
}

async function main() {
  const posts = await fetchAllPosts();
  const categories = await fetchCategories();
  await savePosts(posts, categories);
  
  fs.writeFileSync(
    path.join(__dirname, 'src/content/categories.json'),
    JSON.stringify(categories, null, 2)
  );
  
  console.log('\n🎉 Migration complete!');
}

main();
