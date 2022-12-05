import React from "react"
import styled from "styled-components"
import cards from "./cardList"

export default function Footer(props){
    
    const {contador,gameStart,icones,tudoCerto,tudoErrado} = props
    

    
    return(
        <Barra icones={icones} gameStart={gameStart} data-test="footer">
            <Yes tudoCerto={tudoCerto}><TitleGameOver><img src="assets/iconeParabens.png"/><p>Parabéns!</p></TitleGameOver>
            <p>Você não esqueceu de nenhum flashcard!</p></Yes>
            <No tudoErrado={tudoErrado}><TitleGameOver><img src="assets/iconePuts.png"/><p>Puts...</p></TitleGameOver>
            <p>Ainda faltam alguns...</p>
            <p>Mas não desanime!</p></No>
            <p>{contador}/{cards.length} concluídos</p>
            <Dados><Icones icones={icones}/></Dados>
            </Barra>
    )
}

const Barra = styled.div`
    width: 100%;
    min-height: 70px;
    display: ${props  => props.gameStart ? "flex" : "none"};
    flex-direction: column;
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
        margin: 10px 0px;
    }
`
function Icones(props){
    return(
        props.icones.map((i)=><img src={i}/>)
    )
}

const Dados = styled.div`
    display: flex;
    img{
        margin: 0px 2.5px;
    }
`

const TitleGameOver = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px;
    img{
        margin-right: 13px;
    }
    p{
        
        font-weight: 700;
        font-size: 18px;
    }
`

const Yes = styled.div`
    display: ${props=> props.tudoCerto ? "" : "none"};
`
const No = styled.div`
    display: ${props=> props.tudoErrado ? "" : "none"};
`