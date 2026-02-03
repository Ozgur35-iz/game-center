import "./App.css";
import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./maincomponents/NavBar";
import GameGrid from "./maincomponents/GameGrid";
import GenreList from "./maincomponents/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./maincomponents/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./maincomponents/SortSelector";
import GameHeading from "./maincomponents/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText?: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <>
      <Grid
        templateAreas={{
          base: ` "nav" "main" `,
          lg: ` "nav nav" "aside main" `,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem
          area="nav"
          position="sticky"
          top="0"
          zIndex="sticky"
          bg="gray.900"
        >
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          ></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem
            area="aside"
            position="fixed"
            h="calc(100vh - 85px)"
            overflowY="auto"
            top="85px"
            sx={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            ></GenreList>
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameHeading gameQuery={gameQuery}></GameHeading>
          <HStack>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            ></PlatformSelector>
            <SortSelector
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
              sortOrder={gameQuery.sortOrder}
            ></SortSelector>
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
