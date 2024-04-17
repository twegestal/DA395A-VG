import { ZodError } from 'zod';
import { breedSchema, imageSchema } from '../validators/dogSchemas';
import { useApi } from './useApi';

export const useDogs = () => {
  const breedListApi = useApi('getBreeds');
  const imagesByBreedApi = useApi('getImagesByBreed');

  const getBreedList = async () => {
    try {
      const response = await breedListApi();
      const parsedResponse = breedSchema.parse(response);
      return parsedResponse.message;
    } catch (error) {
      if (error instanceof ZodError) {
        console.error('Validation error: ', error);
      } else {
        console.error('Error fetching breed list: ', error);
      }
    }
  };

  const getImagesByBreed = async (breed: string) => {
    try {
      const response = await imagesByBreedApi(breed);
      const parsedResponse = imageSchema.parse(response);
      return parsedResponse.message;
    } catch (error) {
      if (error instanceof ZodError) {
        console.error('Validation error: ', error);
      } else {
        console.error('Error fetching breed list: ', error);
      }
    }
  };
  return { getBreedList, getImagesByBreed };
};
