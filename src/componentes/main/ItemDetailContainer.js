import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import { collection, getDoc,doc } from "firebase/firestore";
import { database } from "../../servicios/Firebaseinit";


const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  const { id } = useParams();

  const [Carga, setLoading] = useState(true);

  useEffect(() => {
    const contenidoProductos = collection (database, 'productos barile')
    const reference = doc(contenidoProductos, id);
     
     getDoc(reference) 
     .then ((res) =>{
        setItem({
          id:res.id,
          ...res.data(),
        });
        setLoading(false)
     })

     .catch((error)=>{
        console.log(error)
     });
     
     return () => setLoading(true);

  }, [id]);

  if (Carga) {
    return (
        <div className="spinner">
            <Spinner animation="border" role="status"></Spinner>
        </div>
    );
}

  return (
    <main>
      <div className='item-list-container'>
        <ItemDetail item={item} />
      </div>
    </main>
  );
};

export default ItemDetailContainer;

