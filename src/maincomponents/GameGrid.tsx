import { Box, Button, Center, SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Game, Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenres";
import { GameQuery } from "../App";
import { useState } from "react";
import useGameDetails from "../hooks/useDetails";
import GameDetailModal from "./GameDetailModal";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    games,
    error,
    isLoading: isGamesLoading,
    setPage,
  } = useGames(gameQuery);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  const { detail, isLoading: isDetailsLoading } = useGameDetails(
    selectedGame?.id,
  );

  return (
    <>
      {error && <Text>Error: {error}</Text>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        paddingX={10}
        paddingTop={10}
        paddingY={7}
      >
        {isGamesLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}

        {games.map((game) => (
          <GameCard key={game.id} game={game} onSelectGame={setSelectedGame} />
        ))}
      </SimpleGrid>

      <Center mb={"22px"}>
        <Button
          justifyContent={"center"}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Load More
        </Button>
      </Center>

      <GameDetailModal
        detail={detail}
        game={selectedGame}
        onClose={() => setSelectedGame(null)}
      />
    </>
  );
};

export default GameGrid;
