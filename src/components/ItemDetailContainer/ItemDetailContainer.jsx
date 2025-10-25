import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
    const [detalle,setDetalle] = useState({});
    const {id} = useParams();

    useEffect(() => {
        fetch("/data/productos.json")
        .then((res) => {
            if(!res.ok) {
                throw new Error("No se encontro el producto");
            }

            return res.json();
        })
        .then((data) => {
            const prodEncontrado = data.find(p => p.id === id);

            if(prodEncontrado) {
                setDetalle(prodEncontrado);
            } else {
                throw new Error("Error al cargar el producto");
            }
        })
        .catch((err) => {console.log(err)});
    }, [id]);

    return (
    <section>
        {Object.keys(detalle).length ? (
            <ItemDetail detalle={detalle} />
        ) : (
            <p>Cargando...</p>
        )};

    </section>
    );
}