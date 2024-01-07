import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

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
          <GridItem area={"aside"}>Aside</GridItem>
        </Show>

        <GridItem area={"main"}>Main</GridItem>
      </Grid>
    </div>
  );
}

export default App;
