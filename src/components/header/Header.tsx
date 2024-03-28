import { HStack, Text } from '@chakra-ui/react';
import { ColorSwitch } from './ColorSwitch';

export const Header = () => {
  return (
    <HStack align={'center'} justify={'space-between'}>
      <Text>Header</Text>
      <ColorSwitch />
    </HStack>
  );
};
