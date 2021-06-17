import React from "react";

const InputPesquisa = (props) => {
    return (
        <input value={props.valorTexto} onChange={e => props.atualizaTexto(e.target.value)}/>
    )
}

export default InputPesquisa;