import React from "react"

import ComponenteFilhoA from "./ComponenteFilhoA"

export default (props) => {
    return (
        <div>
            <p>Pai</p>
            <ComponenteFilhoA {...props}/>
        </div>
    )
}