import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../../context/CartContext";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import swal from 'sweetalert';




const ItemDetail = ({ item }) =>{

const [unidades, setUnidades] = useState(0);

const {agregarAlChango} = useContext(CartContext)

const check = (num) =>{
    setUnidades (num)
    agregarAlChango (item, num)
    swal(`Agregaste!! ${item.title} al carrito! `);
};

    return(
        <Container>
        <div className="contenedor">
            <img src={item.img} alt="" width={400} height={300}/>
           
           <div>
            <h2>{item.title}</h2>
            <p>{item.description} </p>  
           
            {
            unidades=== 0 ?<ItemCount check={check} stock={item.stock} initial={1} />
            : <Link to={"/Cart"}><Button variant="success">Ir a tu carro</Button></Link>
         }

            </div>
       </div>
       </Container>
        
  

    );
};

export default ItemDetail;