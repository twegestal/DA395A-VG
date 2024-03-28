import { Grid, GridItem } from '@chakra-ui/react';
import { DogGrid } from './components/main/DogGrid';

export const App = () => {
  return (
    <Grid
      templateAreas={`"header"
                  "main"
                  "footer"`}
      gridTemplateRows={'50px 1fr 30px'}
      h='100vh'
      w={'100vw'}
      gap='1'
    >
      <GridItem pl='2' bg='orange.300' area={'header'}>
        Header
      </GridItem>
      <GridItem pl='2' area={'main'}>
        <DogGrid />
      </GridItem>
      <GridItem pl='2' bg='blue.300' area={'footer'}>
        Footer
      </GridItem>
    </Grid>
  );
};
