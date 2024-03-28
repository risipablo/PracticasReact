// import { useState } from "react";

import { useState } from "react";

function Buscador({productos}){

    const [buscar, SetBuscar] = useState('');

    const buscarChange = (event) => {
        SetBuscar(event.target.value)
    }

    const palabrasClave = buscar.trim().toLowerCase().split(/\s+/);
    const filtarproductos = productos.filter(producto => {
        return palabrasClave.every(palabra => 
            producto.nombre.toLowerCase().includes(palabra) ||
            producto.tipo.toLowerCase().includes(palabra) ||
            producto.calorias.toLowerCase().includes(palabra) ||
            producto.precio.toString().toLowerCase().includes(palabra)
        );
    });
    
 

    return(
        <>
            <input
                type="text"
                placeholder= "¿ Que estas buscando ?"
                value={buscar}
                onChange={buscarChange}
            />

            <div className="products-container">
                {filtarproductos.map(fruta => (
                    <ul key={fruta.id} className="product-item">
                            <li>{fruta.nombre}</li>
                                <li>
                                    <span>Precio: {fruta.precio}</span>
                                    <span>Calorías: {fruta.calorias}</span>
                                </li>
                    </ul>
                ))}
            </div>
        </>
    )

}

export default Buscador;




















