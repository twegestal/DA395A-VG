import { z } from 'zod';

const baseSchema = z.object({
  status: z.literal('success'),
});

export const breedSchema = baseSchema.extend({
  message: z.record(z.array(z.string())),
});

export const imageSchema = baseSchema.extend({
  message: z.array(z.string().url()),
});
