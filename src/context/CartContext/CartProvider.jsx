import { useState } from "react"
import { CartContext } from "./cartContext"

export const CartProvider = ({children}) => {
    const [cart,setCart] = useState([]);

    const existe = (id) => {
        const existeProd = cart.some(p => p.id === id);

        return existeProd;
    };

    const agregarProducto = (producto) => {
        if(existe(producto.id)) {
            alert("El producto ya fue agregado al carrito");
            return;
        }

        setCart([...cart,producto]);
        alert("Producto agregado");
    };

    const vaciarCarrito = () => {
        return setCart([]);
    };
    
    const getTotalProductos = () => {
        if(cart.length) {
            return cart.length;
        }
    };

    const valores = {
        cart,agregarProducto,vaciarCarrito,getTotalProductos
    };

    return <CartContext.Provider value={valores}>{children}</CartContext.Provider>;
}