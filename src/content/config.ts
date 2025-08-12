import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        summary: z.string(),
        date: z.date(),
        author: z.string(),
        image: z.string(),
        tags: z.array(z.string().optional()),
    })
});

export const collections = { blogs: blogCollection };