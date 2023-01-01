import React,{useContext} from "react"
import { CartContext } from "../Context/CartContext"
import useHover from "../Hooks/useHover"

function CartItem(props) {

   
    const [hovered,ref] = useHover()
    const deleteIconClass = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"
    const {removeFromCart} = useContext(CartContext)
    return (
        <div className="cart-item">
        <i className={deleteIconClass}
         onClick={()=>removeFromCart(props.item.id)}
        //  onMouseEnter={() => setHovered(true)}
        //  onMouseLeave={() => setHovered(false)}
        ref={ref}
         ></i>
        <img src={props.item.url} width="130px" alt="product-pictures" />
        <p>$5.99</p>
    </div>
    )
}

export default CartItem