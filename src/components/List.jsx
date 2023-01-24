import React from "react";
import Element from "./Element";
const List = ({lista,setLista}) => {

    const removeElement = (nombre) => {
        const tareaEliminada = lista.filter(
            (elemento) => {
                return elemento.valor != nombre })
        return setLista(tareaEliminada)
    }

    return (
        <ul>
            {lista.map((tarea,index) => {
                return  <div key={index} >
                            <Element Tarea={tarea}/>
                            <input type="submit" value="Delete" onClick={() => removeElement(tarea.valor)}></input>
                        </div>
            })}
        </ul>
    );
}

export default List;
