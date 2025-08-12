import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
    schema: z.object({
        test: z.string()
    })
});

export const collections = { projects };