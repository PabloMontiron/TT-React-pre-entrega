import { useState } from "react"
import { ProductFromUI } from "../ProductFormUI/ProductFormUI";
import { validateProducts } from "../../../utils/validateProducts";
import { uploadToImgbb } from "../../../services/uploadImage";
import { CrearProducto } from "../../../services/productos";

export const ProductFormContainer = () => {
    const [error, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState(null);
    const [producto, setProducto] = useState({
        nombre: "",
        precio: "",
        categoria: "",
        descripcion: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({...producto, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setLoading(true);

        const errores = validateProducts(producto,file);

        if (Object.keys(errores).length > 0) {
            setLoading(false);
            setErrors(errores);
            return;
        }

        try {
            const imgUrl = await uploadToImgbb(file);
            const datosProducto = {
            ...producto, 
            precio: Number(producto.precio), 
            imgUrl,
            }
        
            await CrearProducto(datosProducto);
            alert("Producto creado");

            setProducto({nombre: "", precio: "", categoria: "", descripcion: ""});
            setFile(null);

        } catch {
            setErrors({general: error.message });
        } finally {
            setLoading(false);
        }
    }

    return <ProductFromUI producto={producto} 
                          errors={error} 
                          loading={loading} 
                          onChange={handleChange} 
                          onFileChange={setFile}
                          onSubmit={handleSubmit} 
            />
        
}



