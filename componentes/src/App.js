import React from "react"
import './App.css'


import ComponenteUm from "./components/ComponenteUm"
import ComponenteDois from "./components/ComponenteDois"
import ComponenteTres from "./components/ComponenteTres"
import ComponenteQuatro from "./components/ComponenteQuatro"
import ComponenteSeis from "./components/ComponenteSeis"
import ComponenteSete from "./components/ComponenteSete"
import ComponenteOito from "./components/ComponenteOito"
import ComponenteNove from "./components/ComponenteNove"
import ComponenteDez from "./components/ComponenteDez"

import ComponentePai from "./components/comunicacao_direta/ComponentePai"
import ComponenteMae from "./components/comunicacao_indireta/ComponenteMae"

import ComponenteA from "./components/comunicacao_indireta_2/ComponenteA"

import ComponenteAvoA from "./components/comunicacao_direta_2/ComponenteAvoA"

function App(){
    return (
        <>
            <ComponenteAvoA />

            <ComponenteA titulo="Comunicação Indireta v2"></ComponenteA>

            <ComponenteMae titulo="Comunicação Indireta"></ComponenteMae>

            <ComponentePai titulo="Comunicação Direta"></ComponentePai>

            <ComponenteDez titulo="Componente Dez" corTexto="red"/>

            <ComponenteNove titulo="Componente nove" valor="Aida"/>

            <ComponenteOito titulo="Componente oito" valor="Joaquim"/>

            <ComponenteSete titulo="Componente sete" valor={1} />

            <ComponenteSeis titulo="Componente seis" />
            
            <ComponenteQuatro titulo="Componente quatro" />

            <ComponenteTres titulo="Componente três" subtitulo="Texto do componente três" />
            
            <ComponenteDois />
            
            <ComponenteUm />
        </>
    )
}

export default App