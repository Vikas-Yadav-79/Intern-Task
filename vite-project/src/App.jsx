
import './App.css';
import Header from './components/Header';
import { Container } from '@chakra-ui/react'
import { Content } from './components/Content';


function App() {
  return (
    <>
    <Container w={'375px'}   bg={'black'}>

        <Header />
        <Content/>
        
       

    </Container>
      
    </>
  );
}

export default App;
