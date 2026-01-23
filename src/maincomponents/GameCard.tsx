import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Center, Heading, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={20} overflow={"hidden"} height={"300px"}>
      <Image src={game.background_image} height={"233px"} objectFit={"cover"} />
      <CardBody>
        <Heading fontSize={20} textAlign={"center"}>
          {game.name}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
