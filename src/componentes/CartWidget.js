
import {BsCartFill} from "react-icons/bs";
import { Link } from "react-router-dom";




function CartWidget(){
    
    return(
        <div>
            <Link to="/Cart" className="changuito"><BsCartFill /></Link>

            
        </div>
    )
}

export default CartWidget;