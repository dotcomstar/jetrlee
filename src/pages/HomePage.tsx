import { Grid, GridItem } from "@chakra-ui/react";
import HeaderOverlay from "../components/HeaderOverlay";
import ProjectsPage from "../components/ProjectsGrid";

const HomePage = () => {
  return (
    <Grid>
      <GridItem>
        <HeaderOverlay />
      </GridItem>
      <GridItem px={5} pt={5}>
        <ProjectsPage />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
