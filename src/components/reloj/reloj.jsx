import { useState,useEffect } from "react"

function Reloj(){

    const [time,setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval (() => {
            setTime(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId);
        }
    }, [])

    function formatoTiempo() {
        let hora = time.getHours();
        const minutos = time.getMinutes();
        const segundos = time.getSeconds()
        const meridiano = hora >= 12 ? "PM" : "AM"

        hora = hora % 24 || 12

        return `${numeroCero(hora)}:${numeroCero(minutos)}:${numeroCero(segundos)} ${meridiano}`
    }

    function numeroCero(numero){
        return ( numero < 12 ? '0' : '') + numero;
    }
    
    return (
        <div>
            <h2>Reloj digital</h2>
            <div>
                <span> {formatoTiempo()} </span>
            </div>
        </div>
    )
}

export default Reloj