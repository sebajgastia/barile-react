
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useContext, useState, } from "react";
import { CartContext } from "../../context/CartContext";
import {database} from "../../servicios/Firebaseinit";
import { Spinner } from "react-bootstrap";





const Form = () =>{

    const [name, setName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [text, setText] = useState('');
    
    const [NumeroSeguimiento, setOrderId] = useState('')
    
    const {cart, Preciototal,VaciarChango} = useContext(CartContext)

    const [Carga, setLoading] = useState(false);

    const handleSubmit =  (e) => {
         setLoading(true)
        e.preventDefault()

        const pedido = {
            buyer:{name, lastName, email, telefono, text},
            items: cart,
            total: Preciototal(),
            date: serverTimestamp(),
        };

        const coleccionDePedidos = collection (database, 'pedidos')
        addDoc(coleccionDePedidos,pedido)
        
        .then((res) =>{
            setOrderId(res.id)
            VaciarChango()

        })
           
            
        .catch((error)=>{
            console.log(error)
        });

        return () => setLoading(false);
    };

    const handleChangeName = (e) =>{
        setName(e.target.value);

    };


    const handleChangeLastName = (e) =>{
        setlastName(e.target.value);
    };

    const handleChangeEmail = (e) =>{
        setEmail(e.target.value);
    };

    const handleChangeText = (e) =>{
        setText(e.target.value);
    };

    const handleChangeTelefono = (e) =>{
        setTelefono(e.target.value);
    };



    if(NumeroSeguimiento){
        return(
            <p className="Seguimiento">Gracias por confiar! tu numero de seguimiento es, <h1 className="Seguimiento2">{NumeroSeguimiento}</h1>, no te lo olvides!</p>
        )
    }

    return(
        <div style={{minHeight:"70vh", display:"flex", justifyContent:"center", alignItems:"center"  }}>
            <form onSubmit={handleSubmit}  action="">
                <input type="text" name="nombre" placeholder="Nombre?" onChange={handleChangeName} value={name}required/>
                <input type="text" name="apellido" placeholder="Apellido?" onChange={handleChangeLastName} value={lastName} required/>
                <input type="email"name="email" placeholder="E-mail?" onChange={handleChangeEmail} value={email} required/>
                <input type="telefono"name="phone" placeholder="Telefono??" onChange={handleChangeTelefono} value={telefono} required/>
                <input type="textarea"name="text" placeholder="Ingrese texto con su sabor de helado y/O postre" onChange={handleChangeText} value={text} required/>
                <button> {Carga?  <Spinner className="spinner" animation="border" role="status"></Spinner> : 'Enviar'}</button>
            </form>
        </div>
    );
    
    
};

export default Form;