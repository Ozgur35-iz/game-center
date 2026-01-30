import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Link,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { m } from "framer-motion";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre?: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { genres, isLoading } = useGenres();

  if (isLoading) return <Spinner />;
  return (
    <Box>
      <Heading fontSize={"27px"} marginBottom={"5px"}>
        Genres
      </Heading>
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id}>
            <Button
              whiteSpace={"normal"}
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => {
                onSelectGenre(genre);
              }}
              variant={"link"}
              textAlign={"left"}
            >
              <HStack>
                <Image
                  src={getCroppedImageUrl(genre.image_background)}
                  boxSize={"42px"}
                  borderRadius={8}
                  objectFit={"cover"}
                ></Image>
                <Text fontSize={"lg"} paddingLeft={"4px"}>
                  {genre.name}
                </Text>
              </HStack>
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default GenreList;
