import { useEffect, useState } from "react";
import apiClient from "../servvices/api-client";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGameS";
import GameCard from "./GameCard";
import LoadingSkelaton from "./LoadingSkelatoon";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const skelatons = [1, 2, 3, 4, 5, 6, 7];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        // padding="10px"
      >
        {isLoading &&
          skelatons.map((skelaton) => (
            <GameCardContainer>
              <LoadingSkelaton key={skelaton}></LoadingSkelaton>
            </GameCardContainer>
          ))}{" "}
        {data.map((game) => (
          <GameCardContainer>
            {" "}
            <GameCard key={game.id} game={game}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
