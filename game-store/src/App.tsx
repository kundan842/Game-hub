import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/navBar";
import GameGrid from "./components/GameGrid";
import GeneresList from "./components/GeneresList";
import { useState } from "react";
import { Generes } from "./hooks/useGeneres";
import PlateformSelector from "./components/PlateformSelector";
import { Plateform } from "./hooks/useGameS";

function App() {
  const [selectdGenere, setSelecetdGenere] = useState<Generes | null>(null);
  const [selctedPlateform, setSelectedplateform] = useState<Plateform | null>(
    null
  );
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`, // for mobile device ecah row has one col
          lg: `"nav nav" "aside main"`, // for large device
        }}
        templateColumns={{
          // smaller or base device will have 1 column so will take entire space
          // largedevices will have 2 column , 1st column will take 200 px like side bar and 2nd column like main content will take entrire remoaning space
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <NavBar></NavBar>
        </GridItem>
        <Show above="lg">
          {" "}
          <GridItem area={"aside"} paddingX={5}>
            <GeneresList
              selectedGenere={selectdGenere}
              onSelectGenere={(genere: Generes) => {
                setSelecetdGenere(genere);
                console.log("selected genre", genere);
              }}
            ></GeneresList>
          </GridItem>
        </Show>

        <GridItem area={"main"} padding="20px">
          <PlateformSelector
            selectedPalteform={selctedPlateform}
            onSelectPlateform={(plateform: Plateform) =>
              setSelectedplateform(plateform)
            }
          />
          <GameGrid
            selectedPlateform={selctedPlateform}
            selecteddGenere={selectdGenere}
          ></GameGrid>
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
