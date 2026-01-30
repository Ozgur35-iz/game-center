import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.searchText || "Games"}`;

  return (
    <Heading height={"90px"} paddingLeft={"35px"} as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
