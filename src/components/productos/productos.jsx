
import Buscador from "./buscador"
import "./products.css"

export const Productos = () => {
    
    const productos = [             
        {id:1 , nombre: "Manzana", precio:120, calorias:"200", tipo: "fruta"},
        {id:2 , nombre: "Pera", precio:200, calorias:"80", tipo: "fruta"},
        {id:3 , nombre: "Durazno", precio:180, calorias:"120", tipo: "fruta"},
        {id:4 , nombre: "Banana", precio:300, calorias:"300", tipo: "fruta"},
        {id:5 , nombre: "Zanahoria", precio:50, calorias:"50", tipo: "verdura"},
        {id:6 , nombre: "Lechuga", precio:80, calorias:"20", tipo: "verdura"},
        {id:7 , nombre: "Tomate", precio:100, calorias:"30", tipo: "verdura"},
        {id:8 , nombre: "Frutillas", precio:700, calorias:"300", tipo: "fruta"},
        {id:9 , nombre: "Zapallo", precio:280, calorias:"190", tipo: "verdura"},
        {id:10 , nombre: "Moras", precio:890, calorias:"200", tipo: "fruta"},
        {id:11, nombre: "Palta", precio:900, calorias:"70", tipo: "verdura"},
        {id:12, nombre: "Kiwi", precio:850, calorias:"20", tipo: "fruta"},
        {id:13 , nombre: "Manzana", precio:620, calorias:"800", tipo: "fruta"}
        ]


        return(
            <div  className="products-container">
                <Buscador  productos={productos}/>
            </div>
            
        )
}