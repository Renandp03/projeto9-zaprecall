import cards from "./cardList"
import React from "react"
import Card from "./Card"

export default function Cards(props){

    const {contador,setContador} = props

    return(
        cards.map((p)=> <Card contador={contador} setContador={setContador} answer={p.answer} question={p.question} n={cards.indexOf(p)+1} />)
    )
}

