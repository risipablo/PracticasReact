import { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import "./count.css"


function Count(){

    const[contador,setContador] = useState(0);

    const sumarN = () => {
        setContador(contador => contador + 1)
    }

    const restarN = () => {
        setContador (contador => contador - 1)
    }

    const multiplicarN = () => {
        setContador (contador => contador * 2)
    }

    
    const dividirN = () => {
        setContador (contador => contador / 2)
    }

    const limpiarN = () =>{
        setContador (0)
    }

    const redondearMayor = () => {
        setContador(Math.ceil(contador))
    }

    const redondearMenor = () => {
        setContador(Math.floor(contador))
    }

    const [color,setColor] = useState("");
    
    useEffect(() => {

    },[contador,color])
    
    function cambiarColor(){
        setColor(color => color ? "" : "red")
    }


    return(
        <>
            <h2>Contador de números</h2>
            <div className="contador-container">
            <p onClick={cambiarColor} style={{ color: color }}>
                Contador : {contador}
            </p>
                <div className="button-group">
                    <Button className="suma" onClick={sumarN}>+</Button>
                    <Button onClick={restarN}>-</Button>
                    <Button onClick={multiplicarN}>*</Button>
                    <Button onClick={dividirN}>/</Button>
                    <Button onClick={limpiarN}>Limpiar</Button>
                    <Button onClick={redondearMayor}>Redondear para Arriba</Button>
                    <Button onClick={redondearMenor}>Redondear para Abajo</Button>
                </div>
            </div>
        </>
    )
}
export default Count;








































