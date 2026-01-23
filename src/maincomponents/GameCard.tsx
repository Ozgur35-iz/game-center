import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Center, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={20} overflow={"hidden"}>
      <Image src={game.background_image} height={"233px"} objectFit={"cover"} />
      <CardBody>
        <Heading fontSize={27}>{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
