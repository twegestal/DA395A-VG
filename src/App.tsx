import { Flex } from '@chakra-ui/react';
import { DogGrid } from './components/main/DogGrid';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';

export const App = () => {
  return (
    <Flex direction={'column'} minH={'100vh'}>
      <Header />
      <Flex
        flex={'1'}
        direction={'column'}
        p={'4'}
        overflowY={'auto'}
        backgroundColor={'gray.50'}
        borderTop={'1px'}
        borderColor={'gray.300'}
      >
        <DogGrid />
      </Flex>
      <Footer />
    </Flex>
  );
};
