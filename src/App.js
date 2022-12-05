import Title from "./componentes/Title";
import { GlobalStyle } from "./componentes/GlobalStyle";
import Cards from "./componentes/Cards";
import Footer from "./componentes/Footer";
import React from "react";

function App() {

  const [contador,setContador] = React.useState(0)


  return(
    <>
    <GlobalStyle/>
      <Title/>
      <Cards contador={contador} setContador={setContador}/>
      <Footer contador={contador}/>
    </>
  )
}


export default App;


