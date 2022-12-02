import styled from "styled-components"
import cards from "./cardList"
import React from "react"

export default function Cards(){
    return(
        <Card/>
    )
}

function Card(props){
    const {answer,question} = props
    const [virada,setVirada] = React.useState(false)
    const [start,setStart] = React.useState(false)
    const [resposta,setResposta] = React.useState("")

    function virarCarta(){
        setVirada(true)
    }
    function startQuestion(){
        setStart(true)
    }

    function naoLembrou(){
        setResposta("naoLembrou")
        setStart(false)
    }
    function quaseLembrou(){
        setResposta("quaseLembrou")
        setStart(false)
    }
    function lembrou(){
        setResposta("lembrou")
        setStart(false)
    }
   

    return(
        <>
        <StartCard start={start} resposta ={resposta} virada={virada}>
            <p>Pergunta 1</p>
            <img src="assets/playButton.svg" onClick={startQuestion}/>
        </StartCard>
        <CardQuestion start={start} virada={virada}>
        <Answer>
            <p>JSX é uma sintaxe para escrever HTML dentro do JS</p>
            <Buts>
                <But onClick={naoLembrou} color="#FF3030">Não lembrei</But>
                <But onClick={quaseLembrou} color="#FF922E">Quase não lembrei</But>
                <But onClick={lembrou} color="#2FBE34">Zap</But>
            </Buts>
        </Answer>
        <Question clicada={virada}>
            <p>O que é JSX?</p>
            <img 
            src="assets/rotate.svg"
            onClick={virarCarta}/>
        </Question>
        </CardQuestion>
        </>
    )
}

const StartCard = styled.div`
    width: 300px;
    height: 65px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    display: ${props => props.start ? "none" : "flex" };
    justify-content: space-between;
    align-items: center;
    p{
        font-family: 'Recursive', sans-serif;
        font-weight: 700;
        margin: 0px 10px;
        color: ${props => props.resposta == "naoLembrou" && " #FF3030"};
        color: ${props => props.resposta == "quaseLembrou" && "#FF922E"};
        color: ${props => props.resposta == "Lembrou" && "#2FBE34"};
        text-decoration-line: ${props => props.resposta != "" && "line-through"};
        
    }
    img{
        margin: 0px 15px;
    }
`


const CardQuestion = styled.div`
    display: ${props => props.start ? "flex" : "none" };
    justify-content: center;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    transition: all .5s linear;
    transform: ${props => props.virada && "rotateY(180deg)"};
`


const Question = styled.div`
    width: 300px;
    height: 131px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border-radius:5px;
    position: absolute;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    
    p{
        font-family: 'Recursive', sans-serif;
        font-weight: 400;
        font-size: 18px;
        margin: 18px 15px;
        
    }
    img{
        align-self: flex-end;
        margin: 6px 15px;
        width: 20px;
    }
`

const Answer = styled.div`
    width: 300px;
    height: 131px;
    background-color: white;
    border-radius:5px;
    display: flex;
    flex-direction: column;
    transform: rotateY(180deg);
    position: absolute;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    p{
        font-family: 'Recursive', sans-serif;
        font-weight: 400;
        font-size: 18px;
        margin: 18px 15px;
        
    }
    img{
        align-self: flex-end;
        margin: 6px 15px;
        width: 20px;
    }
`

const Buts = styled.div`
    display: flex;
    align-self: center;
`

const But = styled.button`
    width: 85px;
    height: 37px;
    color: white;
    background-color: ${props => props.color};
    margin: 0px 3.75px;
    border: none;
    border-radius: 5px;
    font-family: 'Recursive', sans-serif;
    
`