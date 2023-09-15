import { Grid, GridItem } from "@chakra-ui/react";
import SocialsIcons from "../components/SocialsIcons";
import HeaderOverlay from "../components/HeaderOverlay";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{ base: `"main"` }}
      templateColumns={{
        base: "1fr",
      }}
    >
      <GridItem area="main">
        <HeaderOverlay />
        <SocialsIcons />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
