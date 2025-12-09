import { useState,useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getProductos } from "../../services/productos";
import "./ItemListContainer.css";

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([]); 
    const { categoria } = useParams();

    useEffect(()=> {
        getProductos(categoria)
        .then((data) => setProductos(data))
        .catch((err)=> console.log(err));
    }, [categoria]);

    return (
    <section className="main-section">
        <h1 className="h1-titulo">Tienda Maceta</h1>
        <div className="main__container">
            <ItemList productos={productos} />
        </div>
    </section>
    )
}

