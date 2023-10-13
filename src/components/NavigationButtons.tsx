import { Center, HStack, Icon, Link, VStack } from "@chakra-ui/react";
import { FaCaretSquareLeft, FaCaretSquareRight } from "react-icons/fa";

interface NavigationProps {
  prevSlug: string;
  prevName: string;
  nextSlug: string;
  nextName: string;
}

const NavigationButtons = ({
  prevName,
  prevSlug,
  nextName,
  nextSlug,
}: NavigationProps) => {
  return (
    <Center>
      <HStack>
        <Link href={prevSlug} key={prevSlug}>
          <Icon as={FaCaretSquareLeft} boxSize={"30px"} color={"black.500"} />
          <Center>{prevName}</Center>
        </Link>
        <Link href={nextSlug} key={nextSlug}>
          <Icon as={FaCaretSquareRight} boxSize={"30px"} color={"black.500"} />
          <Center>{nextName}</Center>
        </Link>
      </HStack>
    </Center>
  );
};

export default NavigationButtons;
