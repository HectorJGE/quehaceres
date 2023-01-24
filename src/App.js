import './App.css';
import List from './components/List';
import FormList from './components/FormList';
import { useState } from 'react';

function App() {
  const [Lista,setLista] = useState([])

  const newElemento = (element) => {
    const aux=[...Lista]
    aux.push(element)
    setLista(aux)
  }

  return (
    <>
      <FormList onNewElemento={newElemento}/>
      <List lista={Lista} setLista={setLista}/>
    </>
  );
}

export default App;
