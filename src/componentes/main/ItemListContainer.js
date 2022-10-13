import React, { useEffect, useState } from "react";
import ItemList from "./ItemList"; 
import { productos } from "../mock/productos";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    const traerProductos = () => {
      return new Promise((res, rej) => {
        const prodFiltrados = productos.filter(
          (prod) => prod.category === categoryName
        );
        const prod = categoryName ? prodFiltrados : productos;
        setTimeout(() => {
          res(prod); 
        }, 300);
      });
    };
    traerProductos()
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryName]);

  return (
    <div className='container-fluid'>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;