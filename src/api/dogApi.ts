import ky from 'ky';
export const dogApi = (apiClient: typeof ky) => ({
  getBreeds: async () => {
    const response = await apiClient.get('breeds/list/all').json();
    return response;
  },

  getImagesByBreed: async (breed: string) => {
    const response = await apiClient.get(`breed/${breed}/images`).json();
    return response;
  },

  getRandomImageByBreed: async (breed: string) => {
    const response = await apiClient.get(`breed/${breed}/images/random`).json();
    return response;
  },
});
