// this will take each game object as props and return car markup

import { Card, CardBody, HStack, Heading, Hide, Image } from "@chakra-ui/react";
import { Game, Plateform } from "../hooks/useGameS";
import PlateFormIconList from "./PlateformsIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../servvices/image-utils";
interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  console.log(game);

  return (
    <Card borderRadius={10} width="300px" overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
      <HStack justifyContent="space-between">
        <PlateFormIconList
          plateforms={game.parent_platforms.map((p) => p.platform)}
        />
        <CriticScore score={game.metacritic} />
      </HStack>
    </Card>
  );
};

export default GameCard;