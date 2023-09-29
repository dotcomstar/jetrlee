import { Grid, GridItem } from "@chakra-ui/react";
import SocialsIcons from "../components/SocialsIcons";
import HeaderOverlay from "../components/HeaderOverlay";

const HomePage = () => {
  return (
    <Grid>
      <GridItem>
        <HeaderOverlay />
        <SocialsIcons />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
