import { Item } from "../Item/Item";
import { useCartContext } from "../../context/CartContext/useCartContext";
import { Contador } from "../Contador/Contador";

export const ItemDetail = ({detalle}) => {
    const { agregarProducto } = useCartContext();

    const manejadorAgregar = (cantidad) => {
        agregarProducto({...detalle,cantidad});
    }

    return (
    <Item {...detalle}>
        <Contador textoBtn={"Agregar al carrito"} onConfirm={manejadorAgregar}></Contador>
        {/*} (<button onClick={() => {agregarProducto(detalle);}}>Agregar al carrito</button> */}
    </Item>
    );
}