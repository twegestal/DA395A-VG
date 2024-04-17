import { z } from 'zod';

/**
 * This file defines the Zod schemas used for validating API responses related to dog information within the application.
 */

const baseSchema = z.object({
  status: z.literal('success'),
});

export const breedSchema = baseSchema.extend({
  message: z.record(z.array(z.string())),
});

export const imageSchema = baseSchema.extend({
  message: z.array(z.string().url()),
});

export const randomImageSchema = baseSchema.extend({
  message: z.string().url(),
});
