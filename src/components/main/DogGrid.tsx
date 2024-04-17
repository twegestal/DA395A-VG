import { SimpleGrid } from '@chakra-ui/react';
import { CardSkeleton } from './CardSkeleton';

export const DogGrid = () => {
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
