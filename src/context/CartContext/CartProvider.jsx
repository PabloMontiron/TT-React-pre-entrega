import { useState } from "react"
import { CartContext } from "./CartContext/";


export const CartProvider = ({children}) => {
    const [cart,setCart] = useState([]);

    const existe = (id) => {
        const existeProd = cart.some(p => p.id === id);

        return existeProd;
    };

    const agregarProducto = (producto) => {
        // con .map cuido la inmutabilidad del array para el estado del carrito
        if (existe(producto)) {

            const actualizarCarrito = cart.map(p => {
                if (p.id === producto.id) {
                    // cuido mutacion a nivel de objeto - sumo cant + cant act
                    // sacar console luego. no se inicializa cantidad en 0 0 cant act al ppio--!!
                    console.log({...p, cantidad: p.cantidad + producto.cantidad});

                    return {...p, cantidad: p.cantidad + producto.cantidad};

                } else {
                    return p;
                }
            });
            setCart(actualizarCarrito);
            alert(`${producto.nombre} Actualizado. Cantidad: ${producto.cantidad}`);
        } else {
            setCart([...cart,producto]);
            alert(`${producto.nombre} Agregado. Cantidad: ${producto.cantidad}`);
        }
    };

    const vaciarCarrito = () => {
        return setCart([]);
    };

    // eliminar producto con filter -> este crea un nuevo array filtrando a partir de una condicion. si cumple filtra y queda como elemento del nuevo array.
    
    // -- Agregar un buscarProducto así filtra por ID y muestra el nombre al eliminar un prod + su ID
    const eliminarProducto = (id) => {
        const filtrado = cart.filter(p => p.id !== id);
        setCart(filtrado);
        // ... provisorio
        alert(`Se elimino el producto con id ${id}`);
    };
    
    const getTotalProductos = () => {
        // reduce -> tomar como parametro una var acumuladora, otra iteradora, que a su vez es una arrow function que suma acum + p.cantidad (actual). empieza desde 0.
        const totalProd = cart.reduce((acum,p) => acum + p.cantidad, 0);

        return totalProd; 
    };

    const getTotalPago = () => {
        const totalAPagar = cart.reduce((acumTotal,p) => acumTotal + (p.precio * p.cantidad),0);

        return totalAPagar;
    };

    const finalizarCompra = () => {
        const ok = confirm("¿Finalizar comprar?"); // retorna booleano

        if(ok) {
            alert("Compra finalizada");
            vaciarCarrito();
        }
    };

    const valores = {
        cart,
        agregarProducto,
        vaciarCarrito,
        getTotalProductos,
        getTotalPago,
        eliminarProducto,
        finalizarCompra,
    };
    
    return (<CartContext.Provider value={valores}>{children}</CartContext.Provider>);
}