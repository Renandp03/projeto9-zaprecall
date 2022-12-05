import styled from "styled-components"

export default function Title(props){

    const {gameStart} = props
    
    return(
        <TitleDiv gameStart={gameStart}>
            <img src="assets/raio.png"  alt="raio"/>
            <h1>ZapRecall</h1>
        </TitleDiv>
        
    )
}

const TitleDiv = styled.div`
    display: ${props  => props.gameStart ? "flex" : "none"};
    width: 100%;
    margin-top: 50px;
    align-items: center ;
    justify-content:center ;
    margin-bottom: 60px;
    h1{
        font-family: 'Righteous', cursive;
        color: white;
        font-size: 36px;
        margin: 0px 30px;
    }
`