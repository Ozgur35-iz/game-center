import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Text,
  Box,
  Heading,
  HStack,
  Badge,
  AspectRatio,
} from "@chakra-ui/react";
import useGameDetails, { GameDetail } from "../hooks/useDetails";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game | null;
  onClose: () => void;
  detail: GameDetail | null;
}

const GameDetailModal = ({ game, onClose }: Props) => {
  const { detail: details } = useGameDetails(game?.id);

  const year = details?.released ? details?.released.split("-")[0] : "TBA";
  const score = details?.rating ?? 0;
  const color = score > 4 ? "green" : score > 2.5 ? "yellow" : "red";

  return (
    <Modal isOpen={!!game} onClose={onClose} isCentered>
      <ModalOverlay bg="blackAlpha.700" />

      <ModalContent
        w="100%"
        maxW={{ base: "95%", md: "700px", lg: "500px" }}
        maxH="90vh"
        borderRadius="15px"
        overflow="hidden"
      >
        <AspectRatio ratio={16 / 9}>
          <Box
            bgImage={`url(${getCroppedImageUrl(details?.background_image)})`}
            bgSize="cover"
            bgPosition="center"
            position="relative"
          >
            <ModalCloseButton
              color="white"
              borderRadius="full"
              backdropFilter="blur(8px)"
              bg="blackAlpha.500"
            />
          </Box>
        </AspectRatio>

        <ModalBody overflowY="auto" p={6}>
          <PlatformIconList
            platforms={game?.parent_platforms.map((p) => p.platform) || []}
          />

          <HStack py={4}>
            <Text>{year}</Text>

            <Badge colorScheme="green">
              {details?.esrb_rating?.name ?? "Not Rated"}
            </Badge>

            <Badge colorScheme={color}>{details?.rating}</Badge>
          </HStack>

          <Heading fontSize="xl">{game?.name}</Heading>
          <Text mt={3}>{details?.description_raw}</Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default GameDetailModal;
