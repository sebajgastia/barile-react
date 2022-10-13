import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { productos } from "../mock/productos";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  const { Number } = useParams();

  useEffect(() => {
    const traerProducto = () => {
      return new Promise((res, rej) => {
        const producto = productos.find((prod) => prod.Number === Number);

        setTimeout(() => {
          res(producto);
        }, 300);
      });
    };
    traerProducto()
      .then((res) => {
        setItem(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [Number]);

  console.log(item);

  return (
    <main>
      <div className='item-list-container'>
        <ItemDetail item={item} />
      </div>
    </main>
  );
};

export default ItemDetailContainer;