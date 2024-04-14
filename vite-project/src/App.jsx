
import './App.css';
import Header from './components/Header';
import { Container, Flex } from '@chakra-ui/react'
import { Content } from './components/Content';


function App() {
  return (
    <>
      <Container maxW="100%" h={"100vh"} bg={"gray.900"}>
        <Container maxW={{ base: '375px', md: '375px' }} bg={'black'} mt={2}>

          <Header />
          <Content />


        </Container>


      </Container>




    </>
  );
}

export default App;
