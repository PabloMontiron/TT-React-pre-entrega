
export const validateProducts = (producto, file) => {
    const errors = {};

    if (!producto.nombre.trim()) {
        errors.nombre = "El nombre es obligatorio"; // como va varible errors que es un obj ajeno a producto puede acceder al campo .nombre de producto?
    }

    if (!producto.precio || producto.precio <= 0) {
        errors.precio = "El precio debe ser mayor a cero";
    }

    if (!producto.categoria.trim()) {
        errors.categoria = "Ls categoria es obligatoria";
    }

    if (!file && !producto.file) {
        errors.file = "Se debe seleccionar una imagen";
    }

    return errors;
};