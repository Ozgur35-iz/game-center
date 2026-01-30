import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.searchText || ""}`;

  return (
    <Heading paddingLeft={"35px"} as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
