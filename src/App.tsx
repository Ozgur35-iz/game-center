import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./maincomponents/NavBar";
import GameGrid from "./maincomponents/GameGrid";
import GenreList from "./maincomponents/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
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
        <GridItem area="nav">
          <NavBar></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">
            <GenreList
              selectedGenre={selectedGenre}
              onSelectGenre={(genre) => setSelectedGenre(genre)}
            ></GenreList>
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
