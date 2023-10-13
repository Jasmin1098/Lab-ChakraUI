import { ChakraProvider } from '@chakra-ui/react';
import Header from './assets/components/Header';


function App() {
  return (
    <ChakraProvider>
      <Header />
    </ChakraProvider>
  );
}

export default App;
