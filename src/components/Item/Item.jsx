import "./Item.css";

export const Item = ({nombre,precio,descripcion,imagenUrl,children}) => {
    return <article className="item">
        <img src={imagenUrl} alt={descripcion} className="item__img"/>
        <h2>{nombre}</h2>
        <p>Precio: $ {precio}</p>
        <p>Descripcion: {descripcion}</p>
        {children}
    </article>
}