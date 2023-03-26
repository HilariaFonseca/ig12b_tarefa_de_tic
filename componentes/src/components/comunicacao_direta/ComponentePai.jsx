import React from 'react'

import ComponenteFilho from './ComponenteFilho'

function ComponentePai(props){
    return (
        <div className="componente">
            <p className="titulo">Título: {props.titulo}</p>
            <p>Pai</p>
            <ComponenteFilho titulo="Componente Filho" cargo="administrador">
                Hilária Fonseca
            </ComponenteFilho>

            <ComponenteFilho titulo="Componente Filho" cargo="secretária">
                Aida Felicia
            </ComponenteFilho>

            <ComponenteFilho titulo="Componente Filho" cargo="operador">
                Aninha dos Santos
            </ComponenteFilho>
        </div>
    )
}

export default ComponentePai