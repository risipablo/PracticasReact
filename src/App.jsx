

import Count from "./components/contador/count";
import { Listado } from "./components/lista/listado";
import { List } from "./components/productos/lista";
import ToDo from "./components/todolist/todolist";
import Reloj from "./components/reloj/reloj";




function App(){
  return(
    <>
    <h1> Ejercicios  de practicas JS </h1>
      <Reloj/>      
      <Count/>
      <ToDo/>
      <List/> 
      <Listado/>
    </>
  )
}

export default App;