import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export function getSortedPostsData() {
  let allPostsData = [];
  
    const fileNames = fs.readdirSync(postsDirectory);

    allPostsData = fileNames.map((fileName) => {
      const fullPath = path.join(postsDirectory, fileName);

      const fileContents = fs.readFileSync(fullPath, 'utf8');

      const matterResult = matter(fileContents);

      return {
        id: fileName.replace(/\.md$/, ''),
        ...matterResult.data,
      };
    });
  
  return allPostsData.sort((a, b) => (new Date(b.date) - new Date(a.date))); 

}
