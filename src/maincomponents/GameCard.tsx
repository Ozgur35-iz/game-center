import { Game } from "../hooks/useGames";
import {
  Card,
  CardBody,
  Center,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import { GameDetail } from "../hooks/useDetails";

interface Props {
  game: Game;
  onSelectGame: (game: Game) => void;
}

const GameCard = ({ game, onSelectGame }: Props) => {
  return (
    <Card
      borderRadius={20}
      overflow={"hidden"}
      boxShadow="0 4px 12px rgba(0, 0, 0, 0.18)"
      cursor={"pointer"}
      onClick={() => {
        onSelectGame(game);
      }}
    >
      <Image
        src={getCroppedImageUrl(game.background_image)}
        height={"233px"}
        objectFit={"cover"}
      />
      <CardBody>
        <Heading fontSize={27}>{game.name}</Heading>
        <HStack
          height={"90px"}
          justifyContent={"space-between"}
          overflow={"visible"}
        >
          <PlatformIconList
            maxIcons={4}
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
