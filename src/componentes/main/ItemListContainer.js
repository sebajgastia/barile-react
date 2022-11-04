import React, { useEffect, useState } from "react";
import ItemList from "./ItemList"; 
import Spinner from 'react-bootstrap/Spinner';
import { collection, getDocs } from "firebase/firestore";
import {database} from "../../servicios/Firebaseinit";


const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const [Carga, setLoading] = useState(true);


  useEffect(() => {
      const contenidoProductos = collection(database, 'productos barile')

      getDocs(contenidoProductos)
      .then((res)=> {
        const products = res.docs.map((prod)=>{
            return{
              id:prod.id,
              ...prod.data(),
            }
            
        })
          setItems(products);
          setLoading(false)
      })

      .catch((error)=>{
        console.log(error);
      });

  
      return () => setLoading(true);

  }, []);


  if (Carga) {
    return (
        <div className="spinner">
            <Spinner animation="border" role="status"></Spinner>
        </div>
    );
}

  return (
    <div className='container-fluid'>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;


