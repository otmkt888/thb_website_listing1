import { defineCollection, z } from 'astro:content';

const reviews = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    seoTitle: z.string(),
    metaDescription: z.string(),
    focusKeyword: z.string(),
    overallRating: z.number().min(0).max(5),
    bonusDescription: z.string(),
    minDeposit: z.string(),
    paymentMethods: z.array(z.string()),
    gameCount: z.string(),
    supportLanguages: z.array(z.string()),
    affiliateLinkId: z.string(),
    homepageOrder: z.number().int(),
    showOnHomepage: z.boolean(),
    badgeText: z.string().optional(),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    seoTitle: z.string(),
    metaDescription: z.string(),
    focusKeyword: z.string(),
  }),
});

export const collections = { reviews, pages };
