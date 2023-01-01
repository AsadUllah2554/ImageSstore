import React,{useContext,useState} from "react"
import CartItem from "../Components/CartItem"
import { CartContext } from "../Context/CartContext"

function Cart() {

    const [btnText,setBtnText] = useState("Place Order")
    const {cartItems,emptyCart} = useContext(CartContext)
    const cartItemElements = cartItems.map(item=>(
       <CartItem key={item.id} item={item}/>
    ))
    const totalCost = cartItems.length * 5.99
    const totalCostDisplay =totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})
    function placeOrder(){
        setBtnText("Ordering...")
        setTimeout(()=>{
            emptyCart()
            setBtnText("Order Placed")
            console.log("Order Placed")
        },"2000")
        
    }
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCostDisplay}</p>
           
           {
             cartItems.length !==0 ?    <div className="order-button">
             <button onClick={placeOrder}>{btnText}</button></div>:<p>You have no items in your cart</p>
           }

        </main>
    ) 
}

export default Cart