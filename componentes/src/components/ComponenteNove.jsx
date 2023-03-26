import React from "react";
import CondicaoIf from "./CondicaoIf";

export default function(props) {
    return (
        <div className="componente">
            <p className="titulo">Título: {props.titulo}</p>
            <p>Nome: {props.valor}</p>

            <CondicaoIf condicao={props.valor === "Aida"}>
                <p>Verdadeiro, é o meu nome</p>
            </CondicaoIf>

            <CondicaoIf condicao={props.valor === "Aninha"}>
                <p>É a minha irmã</p>
            </CondicaoIf>

            <CondicaoIf condicao={props.valor !== "Aida" && props.valor !== "Aninha"}>
                <p>Desconheço este nome</p>
            </CondicaoIf>

        </div>
    )
}