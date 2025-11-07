import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext/useCartContext";
import './Nav.css';

{/*
    --No olvidar importar componente Nav.
    --Ver txt

    <header>
        <Link to="/"> LOGO </Link>
        <Nav /> -- componente Nav
    </header> */}

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
                {getTotalProductos() > 0 && (<span className="span-contador">{getTotalProductos()}</span>)}
            </li>
        </ul>        
    </nav>

}