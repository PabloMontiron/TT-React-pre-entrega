import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext/useCartContext";
import "./nav.css"

export const Nav = () => {

    const {getTotalProductos} = useCartContext();

    return <nav className="nav">
        <ul className="nav__ul">
            <li>
                <Link to={"/"} >Inicio</Link>
            </li>
            <li>
                <Link to={"/categoria/minimalista"}>Minimalista</Link>
            </li>
            <li>
                <Link to={"/categoria/rustica"}>Rustica</Link>
            </li>
            <li>
                <Link to={"/carrito"} >Carrito</Link>
                {getTotalProductos() > 0 && (<span>{getTotalProductos()}</span>)}
            </li>
        </ul>        
    </nav>

}