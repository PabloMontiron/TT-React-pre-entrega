import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { getProductosById } from "../../services/productos";

export const ItemDetailContainer = () => {
    const [detalle,setDetalle] = useState({});
    const {id} = useParams();

    useEffect(() => {
       getProductosById(id)
        .then((data) => setDetalle(data))
        .catch((err) => console.log(err));
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