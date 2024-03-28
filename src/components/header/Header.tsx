import { HStack } from '@chakra-ui/react';
import { ColorSwitch } from './ColorSwitch';
import { DogLogo } from '../dogLogo/DogLogo';

export const Header = () => {
  return (
    <HStack justifyContent={'space-between'} pl={'2%'} pr={'2%'} align={'center'} height={'100%'}>
      <DogLogo />
      <HStack>
        <ColorSwitch />
      </HStack>
    </HStack>
  );
};
