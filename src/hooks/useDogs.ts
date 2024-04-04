import { useApi } from './useApi';

export const useDogs = () => {
  const breedListApi = useApi('getBreeds');
  const imagesByBreedApi = useApi('getImagesByBreed');

  const getBreedList = async () => {
    try {
      const response = await breedListApi();
      console.log(response);
    } catch (error) {
      console.error('Error fetching breed list: ', error);
    }
  };

  const getImagesByBreed = async (breed: string) => {
    try {
      const response = await imagesByBreedApi(breed);
      console.log(response);
    } catch (error) {
      console.error('Error fetchig images by breed: ', error);
    }
  };
  return { getBreedList, getImagesByBreed };
};
