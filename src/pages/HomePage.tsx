import {
  Box,
  Grid,
  GridItem,
  Show,
  Image,
  Container,
  Center,
  Text,
} from "@chakra-ui/react";
import SocialsIcons from "../components/SocialsIcons";
import jetPlanefield from "../assets/jet-planefield.jpg";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{ base: `"main"` }}
      templateColumns={{
        base: "1fr",
      }}
    >
      <GridItem area="main">
        <Container maxW={"-moz-max-content"} p={0}>
          <Box
            position="relative"
            h={80}
            bgImage={jetPlanefield}
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            left={0}
            right={0}
            // width="100vw"
            maxWidth="100%"
          >
            <Box
              position="absolute"
              top={0}
              left={0}
              w="full"
              h="full"
              bg="white"
              opacity={0.5}
              bgBlendMode="multiply"
            />
            <Center
              position="relative"
              zIndex={1}
              textAlign="center"
              display="flex"
              justifyContent="center"
              minH={80}
              bgColor="green.100"
              opacity={0.5}
            >
              <Text as="b" fontSize="4xl">
                The leading English speaking Jobs
                <br />
                listing in Finland
              </Text>
            </Center>
          </Box>
        </Container>
        <p>Lazy fox jumps</p>
        <SocialsIcons />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
