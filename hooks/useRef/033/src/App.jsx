import React, {useState, useEffect, useRef} from 'react'
export default function App() {

    const [texto, setTexto] = useState('')
    const inputRef = useRef()
    const input2Ref = useRef()

    function focus1(){
        inputRef.current.focus()
    }

    function alterar_texto_2(){
        input2Ref.current.value = "João Ribeiro"
        input2Ref.current.focus()
    }

    return (
        <>
            <h1>React Hooks - useRef</h1>
            <hr />
            <input ref={inputRef} type="text" value={texto} onChange={evento => { setTexto(evento.target.value)}}/><br />
            <input ref={input2Ref} type="text" />
            <hr />
            <button onClick={focus1}>Focus 1</button>
            <button onClick={alterar_texto_2}>Alterar o texto do input 2</button>
        </>
    )
}