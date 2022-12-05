import Title from "./componentes/Title";
import { GlobalStyle } from "./componentes/GlobalStyle";
import Cards from "./componentes/Cards";
import Footer from "./componentes/Footer";
import React from "react";
import Home from "./componentes/Home";

function App() {

  const [gameStart,setGameStart] = React.useState(false)
  const [contador,setContador] = React.useState(0)


  return(
    <>
      <GlobalStyle/>
      <Home gameStart={gameStart} setGameStart={setGameStart}/>
      <Title gameStart={gameStart}/>
      <Cards gameStart={gameStart} contador={contador} setContador={setContador}/>
      <Footer gameStart={gameStart} contador={contador}/>
    </>
  )
}


export default App;


