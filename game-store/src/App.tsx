import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/navBar";
import GameGrid from "./components/GameGrid";
import GeneresList from "./components/GeneresList";

function App() {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`, // for mobile device ecah row has one col
          lg: `"nav nav" "aside main"`, // for large device
        }}
      >
        <GridItem area={"nav"}>
          <NavBar></NavBar>
        </GridItem>
        <Show above="lg">
          {" "}
          <GridItem area={"aside"}>
            <GeneresList></GeneresList>
          </GridItem>
        </Show>

        <GridItem area={"main"} padding="10px">
          <GameGrid></GameGrid>
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
