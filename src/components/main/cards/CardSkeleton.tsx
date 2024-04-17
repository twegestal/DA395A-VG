import { Card, Skeleton, CardBody, SkeletonText } from '@chakra-ui/react';

/**
 * Displays a placeholder card with a skeleton animation to indicate loading states,
 */

export const CardSkeleton = () => {
  return (
    <Card width={'300px'} borderRadius={10} overflow={'hidden'}>
      <Skeleton height={'200px'} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};
