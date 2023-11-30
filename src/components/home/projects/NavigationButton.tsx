import { Icon, Link, Tooltip, VStack } from "@chakra-ui/react";
import { FaCaretSquareLeft, FaCaretSquareRight } from "react-icons/fa";

interface NavigationProps {
  slug: string;
  name: string;
  direction: "left" | "right";
}

// FIXME: Add the name of the page to navigate to on hover
const NavigationButton = ({ slug, name, direction }: NavigationProps) => {
  return (
    <Link href={slug} key={slug}>
      <VStack justifyContent={"center"} textAlign={"center"}>
        <Icon
          as={direction === "left" ? FaCaretSquareLeft : FaCaretSquareRight}
          boxSize={"40px"}
          color={"gray.500"}
        />
        <Tooltip>{name}</Tooltip>
      </VStack>
    </Link>
  );
};

export default NavigationButton;
