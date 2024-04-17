import { Button, Card, CardBody, CardFooter, Divider, Heading, Image } from '@chakra-ui/react';

interface Props {
  breed: string;
  image: string;
  onClick: () => void;
}

/**
 * This component represents a single breed card in the UI.
 * It displays an image and the name of a dog breed.
 * The card includes a button that, when clicked, triggers an action to fetch and display more images of the specified breed.
 */

export const BreedCard = ({ breed, image, onClick }: Props) => {
  return (
    <Card width={'300px'} borderRadius={10} overflow={'hidden'}>
      <CardBody>
        <Image src={image} height={'200px'} />
        <Heading size={'md'}>{breed}</Heading>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button variant={'outline'} onClick={onClick}>
          More {breed} images
        </Button>
      </CardFooter>
    </Card>
  );
};
