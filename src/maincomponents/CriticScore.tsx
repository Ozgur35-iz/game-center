import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 50 ? "yellow" : "red";

  return (
    <Badge
      colorScheme={color}
      paddingX={"10px"}
      borderRadius={"5px"}
      fontSize={"15px"}
    >
      {score}{" "}
    </Badge>
  );
};

export default CriticScore;
