import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Main from "./Main";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <ChakraProvider>
      <Toaster />
      <Main />
    </ChakraProvider>
  );
}

export default App;
