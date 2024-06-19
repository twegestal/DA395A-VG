import { HStack, Text, Link, IconButton } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  return (
    <HStack align={'center'} justify={'center'} spacing={4} p={4} bgColor={'gray.100'}>
      <Text>Lots of Doggies!</Text>
      <Link href='/about' color={'teal.500'}>
        About Us
      </Link>
      <Link href='/contact' color={'teal.500'}>
        Contact
      </Link>
      <HStack spacing={2}>
        <IconButton
          as={Link}
          href='https://facebook.com'
          aria-label='Facebook'
          icon={<FaFacebook />}
          colorScheme='facebook'
          variant='outline'
        />
        <IconButton
          as={Link}
          href='https://twitter.com'
          aria-label='Twitter'
          icon={<FaTwitter />}
          colorScheme='twitter'
          variant='outline'
        />
        <IconButton
          as={Link}
          href='https://instagram.com'
          aria-label='Instagram'
          icon={<FaInstagram />}
          colorScheme='pink'
          variant='outline'
        />
      </HStack>
    </HStack>
  );
};
