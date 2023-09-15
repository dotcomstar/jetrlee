import { Box, Grid, GridItem, Show, Image } from "@chakra-ui/react";
import SocialsIcons from "../components/SocialsIcons";
import jetPlanefield from "../assets/jet-planefield.jpg";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{ base: `"main"`, lg: `"aside main"` }}
      templateColumns={{
        base: "1fr",
        lg: "150px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          Aside
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box>
          <Image
            src={jetPlanefield}
            alt="Jet standing in a plane field looking off screen"
          />
        </Box>
        <SocialsIcons />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
