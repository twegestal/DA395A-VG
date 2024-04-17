import { SimpleGrid } from '@chakra-ui/react';
import { CardSkeleton } from './cards/CardSkeleton';
import { useEffect, useState } from 'react';
import { useDogs } from '../../hooks/useDogs';
import { BreedCard } from './cards/BreedCard';
import { initialDogs } from '../../models/initialDogs';

export const DogGrid = () => {
  const { getBreedList, getRandomImage } = useDogs();
  const [breeds, setBreeds] = useState<Record<string, string>>({});

  const fetchDogs = async () => {
    const response = await getBreedList();
    if (response) {
      const breedList = Object.keys(response.message);
      const breedImageMap: Record<string, string> = {};

      for (const breed of breedList) {
        if (initialDogs[breed]) {
          breedImageMap[breed] = initialDogs[breed];
        } else {
          const imageResponse = await getRandomImage(breed);
          if (imageResponse && imageResponse.message) {
            breedImageMap[breed] = imageResponse.message;
          }
        }
      }
      setBreeds(breedImageMap);
    }
  };

  useEffect(() => {
    if (Object.keys(breeds).length === 0) {
      fetchDogs();
    }
  });

  const handleBreedClick = (breed: string) => {
    console.log('fetching more images of', breed);
  };

  return (
    <>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        padding={'10px'}
        spacing={10}
        justifyContent={'center'}
        mx={'auto'}
        borderRadius={'10px'}
      >
        {Object.keys(breeds).length > 0
          ? Object.entries(breeds).map(([breed, imageUrl], index) => (
              <BreedCard
                breed={breed}
                image={imageUrl}
                key={index}
                onClick={() => handleBreedClick(breed)}
              />
            ))
          : Array.from({ length: 12 }).map((_, index) => <CardSkeleton key={index} />)}
      </SimpleGrid>
    </>
  );
};
