import { HStack, Heading } from '@chakra-ui/react';
import { DogLogo } from '../dogLogo/DogLogo';

export const Header = () => {
  return (
    <HStack justifyContent={'space-between'} padding={'10px'} mx={'auto'}>
      <HStack>
        <DogLogo />
        <Heading>Doggie Database</Heading>
      </HStack>
    </HStack>
  );
};
