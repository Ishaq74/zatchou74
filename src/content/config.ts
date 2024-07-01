// 1. Importer des propriétés à partir de `astro:content`
import { z, defineCollection, reference } from 'astro:content';

// 2. Définie le `type` et le `schema` pour chaque collection

export const collections = {
services: defineCollection({
  type: 'content',
  schema: ({image}) => z.object({
    title: z.string(),
    description: z.string(),
    tags: z.enum(["Catégorie 1", "Catégorie 2", "Catégorie 3"]),
    image: image().optional(),
    icon: z.string().optional(),
    atoutsservices: z.array(z.object({
      title: z.string(),
      text: z.string(),
      icon: z.string().url().optional(),
    })).optional(),
  }),
}),
posts: defineCollection({
  type: 'content',
  schema: ({image}) => z.object({
    title: z.string(),
    description: z.string(),
    tags: z.enum(["Catégorie 1", "Catégorie 2", "Catégorie 3"]),
    image: image().optional(),
    date: z.date(),
    author: reference("team"),
    relatedPosts: z.array(reference("posts")).optional(),
  }),
}),
team: defineCollection({
    type: "content",
    schema: ({image}) => z.object({
        name: z.string(),
        bio: z.string(),
        email: z.string(),
        image: image(),
        url: z.string(),
    }),
}),

service: defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    tags: z.enum(["Catégorie 1", "Catégorie 2", "Catégorie 3"]),
    image: z.string().optional(),
    serviceType: z.string(),
    provider: z.object({
      type: z.literal('LocalBusiness'),
      name: z.string(),
    }),
    hasOfferCatalog: z.array(z.object({
      type: z.literal('OfferCatalog'),
      name: z.string(),
      itemListElement: z.array(z.object({
        type: z.literal('Offer'),
        itemOffered: z.object({
          type: z.literal('Service'),
          name: z.string(),
        }),
      })),
    })),
    areaServed: z.object({
      type: z.literal('State'),
      name: z.string(),
    }),
    itemservice: z.array(z.object({
      title: z.string(),
      text: z.string(),
      icon: z.string().url().optional(),
    })).optional(),
  }),
}),

commentaires: defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({ 
    nom: z.string(),
    photo: image().optional(),
    ville: z.string().optional(),
    job: z.string().optional(),
    categorie: z.enum(["Catégorie1", "Catégorie2", "Catégorie3"]),
    note: z.number(),
    texte: z.string() })
}),

};
