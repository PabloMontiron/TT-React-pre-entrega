import { useState,useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([]); 

    useEffect(()=> {
        fetch("/data/productos.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error("Error al cargar productos");
            }
            return res.json();
        })
        .then((data) => {
            setProductos(data); 
        })
        .catch((err)=> {console.log(err)});
    }, []);

    return <section className="main-section">
        <h1 className="h1-titulo">Tienda Maceta</h1>
        <div className="main__container">
            <ItemList productos={productos} />
        </div>
    </section>
}

