import { Flex, SimpleGrid } from '@chakra-ui/react';
import { CardSkeleton } from './CardSkeleton';

export const DogGrid = () => {
  return (
    <Flex justify={'center'} w={'full'}>
      <SimpleGrid
        w={'80%'}
        justifyContent={'center'}
        columns={{ base: 1, md: 3 }}
        padding={'10px'}
        spacing={10}
        mx={'auto'}
      >
        {Array.from({ length: 12 }).map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};
