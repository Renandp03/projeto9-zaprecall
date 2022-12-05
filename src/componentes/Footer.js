import React from "react"
import styled from "styled-components"
import cards from "./cardList"

export default function Footer(props){
    
    const {contador,gameStart} = props


    
    return(
        <Barra gameStart={gameStart} data-test="footer">
            <p>{contador}/{cards.length} concluídos</p>
            </Barra>
    )
}

const Barra = styled.div`
    width: 100%;
    min-height: 70px;
    display: ${props  => props.gameStart ? "flex" : "none"};
    align-items: center;
    justify-content: center;
    background-color: white;
    position: fixed;
    bottom: 0px;
    right: 0px;
    p{
        font-family: 'Recursive', sans-serif;
        font-size: 18px;
        font-weight: 400;
    }
`