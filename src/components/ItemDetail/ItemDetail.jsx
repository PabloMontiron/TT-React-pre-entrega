import { Item } from "../Item/Item";
import { useCartContext } from "../../context/cartContext/useCartContext";

export const ItemDetail = ({detalle}) => {
    const { agregarProducto } = useCartContext();

    return (
    <Item {...detalle}>
        <button onClick={() => {
            agregarProducto(detalle);
        }}>Agregar al carrito</button>
    </Item>
    );
}