const BASE_URL = "https://691149677686c0e9c20cf09f.mockapi.io/productos";

export const CrearProducto = async (producto) => {

    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(producto),
    });
    
    if (!res.ok) {
        throw new Error("No se pudo crear el producto");
    }

    const resultado = await res.json();
    return resultado;
};

export const getProductos = async (categoria) => {
    let url = BASE_URL;
    if(categoria) {
        url = `${BASE_URL}?categoria=${categoria}`;
    }

    const res = await fetch(url);

    if(!res.ok) {
        throw new Error("Error al listar productos");
    }

    const resultado = await res.json();
    return resultado;
};

export const getProductosById = async (id) => {
    const res = await fetch(`${BASE_URL}/${id}`);
    if (!res.ok) {
        throw new Error("Error al obtener el producto");
    }
    return await res.json();
};

