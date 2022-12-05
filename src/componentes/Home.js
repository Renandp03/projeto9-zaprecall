import styled from "styled-components"

export default function Home(props){

    const {gameStart,setGameStart} = props

    function iniciarJogo(){
        setGameStart(true)
    }

    return(
        <Screen gameStart={gameStart}>
            <img src="assets/raioGrande.png"/>
            <p>ZapRecall</p>
            <button onClick={iniciarJogo}>Iniciar Recall!</button>
        </Screen>
    )

}

const Screen = styled.div`
    display: ${props => props.gameStart ? "none" : "flex"};
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 150px;
    
    img{
        width: 136px;
        height: 161px;
    }
    p{
        font-family: 'Righteous', cursive;
        font-size: 36px;
        color: white;
        margin: 13px 0px 30px 0px;
    }
    button{
        color: #D70900;
        background-color: white;
        width: 246px;
        height: 54px;
        border: 1px solid #D70900;
        border-radius: 5px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        font-family: 'Recursive', sans-serif;
    }
`