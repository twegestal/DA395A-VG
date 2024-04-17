import { Button, Card, CardBody, CardFooter, Divider, Heading, Image } from '@chakra-ui/react';

interface Props {
  breed: string;
  image: string;
  onClick: () => void;
}

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
