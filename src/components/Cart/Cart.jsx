import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext"
import { Item } from "../Item/Item";

export const Cart = () => {

    const { cart,vaciarCarrito,eliminarProducto,getTotalPago,finalizarCompra } = useCartContext();

    return (
        <section className="CLASE_A_DEFINIR">
            <h2>Carrito</h2>

            {cart.length ? (cart.map(p => <Item key={p.id} {...p}>
                    <span>Cantidad: {p.cantidad}</span>
                    <button onClick={() => eliminarProducto(p.id)}>
                        Eliminar
                    </button>
                </Item>
            )) : (
                <p style={{color: "#fff"}}>El carrito esta vacio</p>
            )};

            {cart.length ? (
            <div className="CONTAINER CLASE_A_DEFINIR">
                <div className="PAGO CLASE_A_DEFINIR">
                    <p>Total a pagar: $ {getTotalPago()}</p>
                </div>
                <button className="BTN CLASE_A_DEFINIR" onClick={finalizarCompra}>
                    finalizar compra
                </button>
                <button className="BTN" onClick={vaciarCarrito}>
                    Vaciar carrito
                </button>
            </div>) : (
                <Link className="BTN" to="/">
                    Volver al inicio
                </Link>
            )}
        </section>
        );
};

