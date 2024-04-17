import { ZodError } from 'zod';
import { breedSchema, imageSchema, randomImageSchema } from '../validators/dogSchemas';
import { useApi } from './useApi';
import { BreedResponse, ImageResponse, RandomImageResponse } from '../types/dogTypes';

/**
 * This hook encapsulates API calls related to dog breeds and images using custom validators.
 * It utilizes Zod for runtime validation of API responses to match expected schemas for breeds, images, and random images.
 */

export const useDogs = () => {
  const breedListApi = useApi('getBreeds');
  const imagesByBreedApi = useApi('getImagesByBreed');
  const randomImageByBreed = useApi('getRandomImageByBreed');

  const getBreedList = async (): Promise<BreedResponse | undefined> => {
    try {
      const response = await breedListApi();
      const parsedResponse = breedSchema.parse(response);
      return parsedResponse;
    } catch (error) {
      printError(error);
    }
  };

  const getImagesByBreed = async (breed: string): Promise<ImageResponse | undefined> => {
    try {
      const response = await imagesByBreedApi(breed);
      const parsedResponse = imageSchema.parse(response);
      return parsedResponse;
    } catch (error) {
      printError(error);
    }
  };

  const getRandomImage = async (breed: string): Promise<RandomImageResponse | undefined> => {
    try {
      const response = await randomImageByBreed(breed);
      const parsedResponse = randomImageSchema.parse(response);
      return parsedResponse;
    } catch (error) {
      printError(error);
    }
  };

  const printError = (error: unknown) => {
    if (error instanceof ZodError) {
      console.error('Validation error: ', error);
    } else {
      console.error('Error fetching breed list: ', error);
    }
  };
  return { getBreedList, getImagesByBreed, getRandomImage };
};
