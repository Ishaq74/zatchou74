import { getCollection } from 'astro:content';

// Supposons que vos tags soient définis comme suit
type TagType = 'Catégorie 1' | 'Catégorie 2' | 'Catégorie 3';

export async function getUniqueTags() {
  const posts = await getCollection('posts');
  const tagsSet = new Set<TagType>();

  posts.forEach(post => {
    const tag = post.data.tags as TagType;
    if (tag) {
      tagsSet.add(tag);
    }
  });

  return Array.from(tagsSet);
}
