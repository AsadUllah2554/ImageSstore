import React,{useContext} from "react";
import {Link} from 'react-router-dom'
import { CartContext } from "../Context/CartContext";


function Header(){

    const {cartItems} = useContext(CartContext)

    return(
        <header>
        <Link to="/"><h2>Pic Some</h2></Link>
  <div className="Icons">
  <Link to="/cart">
    <i className={cartItems.length ===0? "ri-shopping-cart-line ri-fw ri-2x":"ri-shopping-cart-fill ri-fw ri-2x"}></i>
  </Link>
  <Link to="favorite"><i className="ri-heart-fill favorite"></i></Link>
                       
                
</div>
    
        </header>
    )
}

export default Header;