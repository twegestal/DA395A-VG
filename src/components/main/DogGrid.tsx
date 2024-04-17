import { SimpleGrid } from '@chakra-ui/react';
import { CardSkeleton } from './cards/CardSkeleton';
import { useEffect } from 'react';
import { useDogs } from '../../hooks/useDogs';

export const DogGrid = () => {
  const { getBreedList, getImagesByBreed } = useDogs();

  const fetchDogs = async () => {
    const dogs = await getBreedList();
    console.log(dogs);
  };

  const fetchImages = async () => {
    const images = await getImagesByBreed('basenji');
    console.log(images);
  };

  useEffect(() => {
    fetchDogs();
    fetchImages();
  });
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
        {Array.from({ length: 12 }).map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </SimpleGrid>
    </>
  );
};
