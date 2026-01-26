import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card height={"427px"} borderRadius={20} overflow={"hidden"}>
      <Skeleton />
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
