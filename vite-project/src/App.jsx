
import './App.css';
import Header from './components/Header';
import { Container,Flex } from '@chakra-ui/react'
import { Content } from './components/Content';


function App() {
  return (
    <>

        <Container w={{ base: '375px', md: '375px' }} bg={'black'}>

          <Header />
          <Content />


        </Container>



    </>
  );
}

export default App;
