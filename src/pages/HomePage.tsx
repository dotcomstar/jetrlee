import { Grid, GridItem, Show } from "@chakra-ui/react";
import SocialsIcons from "../components/SocialsIcons";

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
        <SocialsIcons />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
