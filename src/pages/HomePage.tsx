import { Grid, GridItem } from "@chakra-ui/react";
import SocialsIcons from "../components/SocialsIcons";
import HeaderOverlay from "../components/HeaderOverlay";
import CloudText from "../components/CloudText";
import CloudText2 from "../components/CloudText2";

const HomePage = () => {
  return (
    <Grid>
      <GridItem>
        <CloudText2 />
        <CloudText />
        <HeaderOverlay />
        <SocialsIcons />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
