import { SimpleGrid } from '@chakra-ui/react';
import { CardSkeleton } from './CardSkeleton';

export const DogGrid = () => {
  return (
    <SimpleGrid columns={4} padding='10px' spacing={10}>
      {Array.from({ length: 12 }).map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </SimpleGrid>
  );
};
