import React from "react";
import { useState } from "react";

const Element = (props) => {
    const {Tarea}=props
    const [estilo,setEstilo]=useState({})

    const tachado = (val) => {
        if (val == true){
            setEstilo({textDecoration:'line-through'})
        }else{
            setEstilo({})
        }
    }
    
    return (
        <>
            <li>
                <span style={estilo}>{Tarea.valor}</span>
                &nbsp;&nbsp;&nbsp;
                <input type="checkbox" onChange={() => {
                        if(Tarea.completada==true){
                            Tarea.completada = false; 
                        }else{
                            Tarea.completada = true; 
                        }
                        tachado(Tarea.completada);
                    }}></input>&nbsp;&nbsp;&nbsp;
            </li>
        </>
    );
}

export default Element;
