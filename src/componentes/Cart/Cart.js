import  { useContext } from "react";
import { CartContext } from "../../context/CartContext"
import Button from 'react-bootstrap/Button';
import { BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";



const Chango = () =>{
    
   const {cart, VaciarChango, RemoverProducto, Preciototal} = useContext (CartContext)
    
    if(cart.length === 0){
        return(
            <h2 className="carro-vacio">Nada por aqui, comienza a comprar!<Link to="/productos"><Button variant="success">ir a productos</Button></Link></h2>
           
        )
        
    }
      

    return(
        <div>
            {cart.map ((prod) => (
            <div className="card-adjust" key={prod.id}>
                <img src={prod.img} alt="" width={400} height={180} />
                <div className="card-adjust2">
                    <h2>{prod.description}</h2>
                    <h2>{prod.title}</h2>
                    <h2>$ {prod.price} .</h2>
                    <h2>Cant: {prod.cant} .</h2>
                    <h2>Monto: ${prod.price * prod.cant} .</h2>
        </div>

               <BsFillTrashFill className="tacho" onClick={()=>RemoverProducto (prod.id)}/>
            </div>   
            ) ) }
            
            <h2>TOTAL: {Preciototal()} </h2>

              <Button onClick={VaciarChango} variant="danger" >Vaciar carro</Button>{' '}  <Link to={"/Productos"}><Button variant="info" >Volver a productos</Button></Link>
              <Link to={"/checkout"}><Button variant="warning">Pasar a finalizar compra</Button></Link>           
        </div>
    )
}

export default Chango