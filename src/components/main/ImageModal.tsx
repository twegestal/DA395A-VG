import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
} from '@chakra-ui/react';

interface Props {
  breed: string;
  images: string[];
  isOpen: boolean;
  onClose: () => void;
}

export const ImageModal = ({ breed, images, isOpen, onClose }: Props) => {
  return (
    <Modal size={'xl'} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Images of {breed}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <SimpleGrid columns={2} spacing={5} justifyContent={'center'}>
            {images.map((image, index) => (
              <Image key={index} src={image} boxSize={'200px'} objectFit={'cover'} />
            ))}
          </SimpleGrid>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
