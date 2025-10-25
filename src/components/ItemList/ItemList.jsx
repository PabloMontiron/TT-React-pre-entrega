import { Link } from "react-router-dom";
import { Item } from "../Item/Item";

export const ItemList = ({productos}) => {

    return (<>
        {productos.length ? (
            productos.map((producto) => (
                <Link to={`/detalle/${producto.id}`} key={producto.id}>
                    <Item {...producto} />
                </Link>))
        ) : (
            <p>Error al cargar los productos</p>
        )}
    </>);
}