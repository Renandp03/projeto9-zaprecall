import cards from "./cardList"
import React from "react"
import Card from "./Card"
import styled from "styled-components"

export default function Cards(props){

    const {contador,setContador,icones,setIcones,gameStart,setTudoCerto,setTudoErrado,tudoCerto,tudoErrado} = props

    return(
        cards.map((p)=> <Card
        setTudoCerto={setTudoCerto}
        setTudoErrado={setTudoErrado}
         icones={icones}
         setIcones={setIcones} 
         gameStart={gameStart} 
         contador={contador} 
         setContador={setContador} 
         answer={p.answer} 
         question={p.question} 
         n={cards.indexOf(p)+1} />)
    )
}

