import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { genres, isLoading } = useGenres();

  if (isLoading) return <Spinner />;
  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id}>
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize={"42px"}
              borderRadius={8}
              objectFit={"cover"}
            ></Image>
            <Text fontSize={"lg"}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
