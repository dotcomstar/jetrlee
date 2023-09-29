import { Grid, GridItem } from "@chakra-ui/react";
import SocialsIcons from "../components/SocialsIcons";
import HeaderOverlay from "../components/HeaderOverlay";
import CloudText from "../components/CloudText";

const HomePage = () => {
  return (
    <Grid>
      <GridItem>
        <CloudText />
        <HeaderOverlay />
        <SocialsIcons />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
