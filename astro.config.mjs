import { defineConfig } from 'astro/config';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';


// https://astro.build/config
export default defineConfig({
    markdown: {
        rehypePlugins: [
            rehypeHeadingIds
        ]
    }
});
