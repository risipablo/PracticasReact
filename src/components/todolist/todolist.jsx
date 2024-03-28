import { useState } from "react";

function ToDo(){

    const [task,setTask] = useState([])
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value)
    }

    function addTask(){
        if(newTask.trim() !== "")
        {
            setTask(task => [...task,newTask]);
            setNewTask("");
        }
    }
    
    function deleteTask(index){
        const eliminar = task.filter((_, i) => i !== index )
        setTask(eliminar)
    }

    function taskUp(index){
        if( index > 0){
            const taskMove = [...task];
            [taskMove[index], taskMove[index - 1 ]] = [taskMove[index - 1], taskMove[index]]
            setTask(taskMove)
        }
    }

    function taskDown(index){
        if (index < task.length - 1){
            const moveTask = [...task];
            [moveTask[index], moveTask[index + 1 ]] = [moveTask[ index + 1], moveTask[index]]
            setTask(moveTask)
        }
    }

    return(
        <div>
            <h2> To do list</h2>
            <div>
                <input 
                type="text" 
                onChange={handleInputChange}
                value={newTask}
                />

                <button onClick={addTask}> Agregar </button>
            </div>

            <div>
                {task.map ((element,index) => 
                <ul key={index}>
                    <span> {element}</span>
                    
                        <button onClick={() => deleteTask(index)}> 🗑️ </button>
                        <button onClick={() => taskUp(index)}> ☝️ </button>
                        <button onClick={() => taskDown(index)}> 👇 </button>
                    
                </ul>
                )}
            </div>

        </div>
    )

}

export default ToDo;











































// import { useState } from "react";


// function Todo(){

//     const [tareas, setTarea] = useState([]);
//     const [nuevatarea, setNuevatarea] = useState("");

//     function handleInputChange(event){
//         setNuevatarea(event.target.value)
//     }

//     function agregarTarea(index){
//         if(nuevatarea.trim() !== "" ){
//             setTarea(tareas => [...tareas,nuevatarea]);
//         setNuevatarea("");
//     }
//     }

//     function eliminarTarea(index){
//         const deleteTask = tareas.filter((element, i) => i !== index)
//         setTarea(deleteTask)
//     }

//     function moverArriba(index){
//         if(index > 0) {
//             const moverTas = [...tareas];
//             [ moverTas[index], moverTas[index - 1]] =  [moverTas[index - 1], moverTas[index] ]
//             setTarea(moverTas)
//         }
//     }

//     function moverAbajo(index){
//         if(index < tareas.length - 1) {
//             const moverTas = [...tareas];
//             [ moverTas[index], moverTas[index + 1]] =  [moverTas[index + 1], moverTas[index] ]
//             setTarea(moverTas)
//         }
//     }


//     return(
//         <div className="todo-container">
//             <h2> To do list </h2>
//             <>
//                 <input type="text"
//                 onChange={handleInputChange}
//                 value={nuevatarea}
//                 />

//                 <button 
//                 className="añadir"
//                     onClick={agregarTarea}>
//                     Añadir
//                 </button>

//                 <ol >
//                     {tareas.map( (tarea, index )=> (
//                         <li key={index}>
//                             <span> {tarea} </span>

//                             <button className="eliminar"
//                                     onClick={() => eliminarTarea(index)}>
//                                 Eliminar
//                             </button>
//                             <button className="mover"
//                                     onClick={() => moverArriba(index)}>
//                                 Arriba
//                             </button>
//                             <button className="eliminar"
//                                     onClick={() => moverAbajo(index)}>
//                                 Abajo
//                             </button>
//                         </li>
//                     ))}
//                 </ol>
//             </>
//         </div>
//     )

// }

// export default Todo;