import React, { useState } from 'react'

export default function App(){

    // const [player, setPlayer] = useState({
    //     name: "Joao",
    //     score: 0
    // })

    const [playerName, setPlayerName] = useState("Joao")

    const [playerScore, setPlayerScore] = useState(0)

    function alterar(){
        setPlayerScore(playerScore + 1)
    }

    return (
        <>
            <h1>React Hooks - useState</h1>
            <hr />
            <h3>Nome: {playerName}</h3>
            <h3>Pontos: {playerScore}</h3>
            <button onClick={alterar}>Alterar a pontuação</button>
        </>
    )
}