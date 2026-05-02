import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: "page",
      source: "blog/**/*.md",
      schema: z.object({
        tags: z.array(z.string()).optional(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        image: z.string().optional(),
        draft: z.boolean().default(false),
      }),
    }),
    projects: defineCollection({
      type: "data",
      source: "projects.yaml",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        projects: z.array(
          z.object({
            title: z.string(),
            description: z.string(),
            links: z.array(
              z.object({
                label: z.string(),
                icon: z.string(),
                url: z.string().url(),
              }),
            ),
            image: z.string().optional(),
            tags: z.array(z.string()).optional(),
          }),
        ),
      }),
    }),
    about: defineCollection({
      type: "page",
      source: "about.md",
      schema: z.object({
        avatar: z.string().optional(),
        name: z.string(),
        links: z.array(
          z.object({
            label: z.string(),
            icon: z.string(),
            url: z.string().url(),
          }),
        ),
      }),
    }),
    home: defineCollection({
      type: "data",
      source: "home.yaml",
      schema: z.object({
        seo: z.object({
          title: z.string(),
          description: z.string(),
        }),
        hero: z.object({
          title: z.string(),
          description: z.string(),
          image: z.string().optional(),
        }),
        about: z.object({
          title: z.string(),
          description: z.string(),
        }),
        experience: z.object({
          title: z.string(),
          items: z.array(
            z.object({
              name: z.string(),
              position: z.string(),
              startDate: z.coerce.date(),
              endDate: z.coerce.date().optional(),
              description: z.string(),
            }),
          ),
        }),
      }),
    }),
  },
});
