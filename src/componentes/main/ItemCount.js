import React, {useState} from "react";
import './ItemCount.css'


const ItemCount = ( props ) => {
    const [count, setCount] = useState(props.initial);

    const sumar = () => {
        count < props.stock && setCount(count + 1);
    };

    const restar = () => {
      count > props.initial &&  setCount(count - 1);
    };

    return (
        <div className="container-count">
            <div className="count-btn">
                <button onClick={restar}>-</button>
                <p>{count}</p>
                <button onClick={sumar}>+</button>
            </div>
            <button onClick={() => props.check(count)}
            className="add-btn">Agregar al carro</button>
        </div>
    );
};

export default ItemCount;