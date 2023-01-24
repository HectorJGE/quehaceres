import React, { useState } from "react";

const FormList = (props) => {
    const [elemento,setElemento] = useState(
        {
            valor:"",
            completada:"False"
        });

    const pasarElemento = (e) => {
        e.preventDefault()
        props.onNewElemento(elemento);
    }

    return (
        <>
            <form onSubmit={pasarElemento}>
                <input type="text" onChange={(e)=>{setElemento({...elemento,valor:e.target.value})}}></input>
                <input type="submit" value="Add"></input>
            </form>
        </>
    );
}

export default FormList;
