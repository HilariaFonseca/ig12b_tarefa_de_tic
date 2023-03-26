import React from "react";

export default function(props) {

    function condicao(){
        switch (props.valor) {
            case "Aida":
                return <p>É o meu nome</p>
                break;
            case "Aninha":
                return <p>É o nome da minha irmã</p>
                break;
            default:
                return <p>Não conheco esse nome</p>
                break;
        }
    }

    return(
        <div className="componente">
            <p className="titulo">Título: {props.titulo}</p>
            {condicao()}
        </div>
    )
}