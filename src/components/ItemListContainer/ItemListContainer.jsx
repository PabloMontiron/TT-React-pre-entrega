import { useState,useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([]); 
    const { categoria } = useParams();

    useEffect(()=> {
        fetch("/data/productos.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error("Error al cargar productos");
            }
            return res.json();
        })
        .then((data) => { // data es un array con todos los productos que vienen del JSON
            if (categoria) {
                setProductos(data.filter(p => p.categoria === categoria));
            } else {
                setProductos(data); 
            }
        })
        .catch((err)=> {console.log(err)});
    }, [categoria]);

    return <section className="main-section">
        <h1 className="h1-titulo">Tienda Maceta</h1>
        <div className="main__container">
            <ItemList productos={productos} />
        </div>
    </section>
}

