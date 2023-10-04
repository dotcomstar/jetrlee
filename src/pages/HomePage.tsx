import { Grid, GridItem } from "@chakra-ui/react";
import HeaderOverlay from "../components/HeaderOverlay";

const HomePage = () => {
  return (
    <Grid>
      <GridItem>
        <HeaderOverlay />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
