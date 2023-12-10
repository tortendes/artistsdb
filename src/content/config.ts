// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';
// 2. Define your collection(s)
const lyricCollection = defineCollection({ 
    type: 'content',
    schema: z.object({
        songTitle: z.string(),
        artist: z.object({
            name: z.string(),
            link: z.string(),
            imageURL: z.string().url()
        }),
        album: z.object({
            name: z.string(),
            imageURL: z.string().url()
        }),
        listen: z.object({
            spotify: z.string().url(),
            ytMusic: z.string().url()
        }),
        releaseDate: z.string().datetime(),
        length: z.string()
    })
 });
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'lyrics': lyricCollection,
};