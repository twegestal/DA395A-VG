import { Grid, GridItem } from '@chakra-ui/react';
import { DogGrid } from './components/main/DogGrid';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';

export const App = () => {
  return (
    <Grid
      templateAreas={`"header"
                  "main"
                  "footer"`}
      gridTemplateRows={'50px 1fr 30px'}
      h='100vh'
      w={'98vw'}
      gap='1'
    >
      <GridItem pl='2' area={'header'}>
        <Header />
      </GridItem>
      <GridItem pl='2' area={'main'}>
        <DogGrid />
      </GridItem>
      <GridItem pl='2' area={'footer'}>
        <Footer />
      </GridItem>
    </Grid>
  );
};
