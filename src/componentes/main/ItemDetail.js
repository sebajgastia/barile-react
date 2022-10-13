import React from "react";
import { Container } from "react-bootstrap";
import ItemCount from "./ItemCount";






const ItemDetail = ({ item }) =>{
    return(
        <Container>
        <div className="container-detail">
            <img src={item.img} alt="" />
            <h2>{item.title}</h2>
            <p>{item.description} </p>
            <ItemCount stock={item.stock} initial={1}/>
        </div>
        </Container>
    )
};

export default ItemDetail;