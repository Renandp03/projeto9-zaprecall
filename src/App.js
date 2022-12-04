import Title from "./componentes/Title";
import styled from "styled-components"
import { GlobalStyle } from "./componentes/GlobalStyle";
import Cards from "./componentes/Cards";
import Base from "./componentes/Base";

function App() {
  return(
    <>
    <GlobalStyle/>
      <Title/>
      <Cards/>
      <Base/>
    </>
  )
}


export default App;


