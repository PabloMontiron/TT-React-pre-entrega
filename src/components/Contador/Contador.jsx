import { useState } from "react";

export const Contador = ({textoBtn,onConfirm}) => {
    const [contador,setContador] = useState(0);

    const incremento = () => {
        setContador((c) => c + 1);
    };

    const decremento = () => {
        setContador((c) => (c > 0 ? c - 1 : 0));
    };

    const confirm = () => {
        if (contador > 0) {
            onConfirm(contador);
        }
    }

    return <div className="contador-container">
        <div className="contador-container__btns">
            <button className="btns__btn" onClick={decremento} disabled={contador === 0}> - </button>
            <span> {contador} </span>
            <button className="btns__btn" onClick={incremento}> + </button>
        </div>

        <button className="btn" onClick={confirm} disabled={contador === 0}> {textoBtn} </button>
    </div>
}

