import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalCloseButton,
  Text,
  Box,
  Heading,
  HStack,
  Badge,
} from "@chakra-ui/react";
import useGameDetails, { GameDetail } from "../hooks/useDetails";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game | null;
  onClose: () => void;
  detail: GameDetail | null;
}

const GameDetailModal = ({ game, onClose, detail }: Props) => {
  const { detail: details } = useGameDetails(game?.id);

  const year = details?.released ? details?.released.split("-")[0] : "TBA";

  const score = details?.rating ?? 0;

  let color = score > 4 ? "green" : score > 2.5 ? "yellow" : "red";

  return (
    <Modal isOpen={!!game} onClose={onClose} size={"lg"} isCentered>
      <ModalOverlay bg="blackAlpha.700" />
      <ModalContent maxH={"80vh"} borderRadius={15}>
        <Box
          height="300px"
          backgroundImage={`url(${details?.background_image})`}
          backgroundSize="cover"
          backgroundPosition="center"
          position="relative"
        >
          <ModalCloseButton
            color="white"
            borderRadius={"20px"}
            backdropFilter={"blur(8px)"}
            background={"lightgray"}
          />
        </Box>
        <ModalBody overflowY="auto" maxH="300px" pb={6}>
          <Box paddingTop={"15px"}>
            <PlatformIconList
              platforms={game?.parent_platforms.map((p) => p.platform) || []}
            />
          </Box>
          <HStack paddingY={"15px"}>
            <Text>{year}</Text>
            {details?.esrb_rating ? (
              <Badge marginTop={"2px"} marginLeft={"7px"} colorScheme="green">
                {details.esrb_rating.name}
              </Badge>
            ) : (
              <Badge colorScheme="gray">Not Rated</Badge>
            )}
            <Badge marginTop={"2px"} marginLeft={"7px"} colorScheme={color}>
              {details?.rating}
            </Badge>
          </HStack>
          <HStack>
            <Heading fontSize={"xl"}>{game?.name}</Heading>
          </HStack>
          <Text mt={3}>{details?.description_raw}</Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default GameDetailModal;
