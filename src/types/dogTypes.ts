import { z } from 'zod';
import { breedSchema, imageSchema } from '../validators/dogSchemas';

export type BreedResponse = z.infer<typeof breedSchema>;
export type ImageResponse = z.infer<typeof imageSchema>;
