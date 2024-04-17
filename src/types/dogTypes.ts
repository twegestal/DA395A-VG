import { z } from 'zod';
import { breedSchema, imageSchema, randomImageSchema } from '../validators/dogSchemas';

export type BreedResponse = z.infer<typeof breedSchema>;
export type ImageResponse = z.infer<typeof imageSchema>;
export type RandomImageResponse = z.infer<typeof randomImageSchema>;
