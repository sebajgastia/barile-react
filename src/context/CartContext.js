import { createContext, useState } from "react";


export const CartContext = createContext();

const Provider = ({children}) => {
    const [cart, setCart] = useState([])

    const agregarAlChango = (item, cant) =>{
    
    const product = { ...item, cant}

        if(Changuito (product.id)){

            CalcularCantidad(product);
        
        } else {
            setCart([...cart, product]);
        }
       
    };


    const CalcularCantidad = (productoEnCarro) => {
        const CompraFinal= cart.map ((todosLosProductos)=>{
            if(todosLosProductos.id === productoEnCarro){
                const Sumafinal ={
                    ...todosLosProductos,
                    cant: todosLosProductos + productoEnCarro
                }
                return Sumafinal;

            } else{
                return todosLosProductos;
            }
        })
        setCart(CompraFinal);
    }
   
   
    const CantidadProductos = () =>{
        let count = 0
        const CantCarrito = [...cart]
        CantCarrito.forEach((prod) =>{
            count = count + prod.cant
        })
        return count

    }
    
    const Preciototal = () =>{
        return cart.reduce((prev, act) => prev + act.cant * act.price, "$");
    };

    
    const Changuito = (id) => cart.some((prod) => prod.id === id)
    
    const VaciarChango = () => setCart([]);
    
    const RemoverProducto =(id) => setCart(cart.filter(prod=> prod.id !==id));

    return(
        <CartContext.Provider value={{cart, agregarAlChango, VaciarChango, RemoverProducto, CantidadProductos,Preciototal}}>{children}
        </CartContext.Provider> 
    );
};

export default Provider;