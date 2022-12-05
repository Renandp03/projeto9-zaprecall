import Title from "./componentes/Title";
import { GlobalStyle } from "./componentes/GlobalStyle";
import Cards from "./componentes/Cards";
import Footer from "./componentes/Footer";
import React from "react";
import Home from "./componentes/Home";

function App() {

  const [gameStart,setGameStart] = React.useState(false)
  const [contador,setContador] = React.useState(0)
  const [icones,setIcones] = React.useState([])
  const [tudoCerto,setTudoCerto] = React.useState(false)
  const [tudoErrado,setTudoErrado] = React.useState(false)

  return(
    <>
      <GlobalStyle/>


      <Home 
      gameStart={gameStart}
      setGameStart={setGameStart}/>


      <Title 
      gameStart={gameStart}/>


      <Cards
       gameStart={gameStart}
       contador={contador} 
       setContador={setContador} 
       icones={icones} 
       setIcones={setIcones}
       tudoCerto={tudoCerto}
       tudoErrado={tudoErrado}
       setTudoCerto={setTudoCerto}
       setTudoErrado={setTudoErrado}/>
      

      <Footer 
      gameStart={gameStart} 
      contador={contador} 
      icones={icones}
      tudoCerto={tudoCerto}
      tudoErrado={tudoErrado}/>
    </>
  )
}


export default App;


