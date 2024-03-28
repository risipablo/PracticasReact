import { useState } from "react"



export const User = () => {

    const personal = [ 
        {id:1 , nombre: "John", edad:"22", habilidades:"JS,C,C++, Python, PHP"},
        {id:2 , nombre: "Steve", edad:"35", habilidades:"JS,Next JS,C++, Python, React Native"},
        {id:3 , nombre: "Carmen", edad:"26", habilidades:"Css,C#,JS,Ruby,Swift"},
        {id:4 , nombre: "Luke", edad:"42", habilidades:"JS,Node JS,C++, C#, React JS, Next JS,"} 
        ]

        const itemlist = personal.map((persona) => 
                        <ul key={persona.id}>
                            <p>Nombre: {persona.nombre}</p>
                            <p>Edad: {persona.edad}</p>
                            <p> Habilidades: 
                                {persona.habilidades.split(",").map((habilidad,index)=>(
                                    <ul key={index}>
                                        {habilidad}
                                    </ul>
                                ))}
                            </p>
                        </ul>
        )

        const [filtrar,setFiltrar] = useState();

    return (
        <>
            <div className="meses">
            <p className="btnmeses">JS</p>
            <p className="btnmeses">C</p>
            <p className="btnmeses">C++</p>
            <p className="btnmeses">Python</p>
            <p className="btnmeses">PHP</p>
            <p className="btnmeses">Next JS</p>
            <p className="btnmeses">React Native</p>
            <p className="btnmeses">Ruby</p>
            <p className="btnmeses">Swift</p>
            <p className="btnmeses">Node JS</p>
            <p className="btnmeses"> React JS</p>
            <p className="btnmeses">Angular JS</p>
            </div>
        {itemlist}
        </>
    )
}

