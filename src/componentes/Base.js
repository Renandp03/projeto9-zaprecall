import React from "react"
import styled from "styled-components"

export default function Base(){
    return(
        <Barra><p>0/8 concluídos</p></Barra>
    )
}

const Barra = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
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