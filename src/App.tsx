import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./maincomponents/NavBar";
import GameGrid from "./maincomponents/GameGrid";
import GenreList from "./maincomponents/GenreList";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: ` "nav" "main" `,
          lg: ` "nav nav" "aside main" `,
        }}
      >
        <GridItem area="nav">
          <NavBar></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">
            <GenreList></GenreList>
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
