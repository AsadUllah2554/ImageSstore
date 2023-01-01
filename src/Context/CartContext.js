import { useState,createContext,useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = props =>{
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    const [allPhotos,setAllPhotos] = useState([])
    const [cartItems,setCartItems] = useState([])

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])

    function toggleFavorite(id){
     const updatedArr = allPhotos.map(photo=>{
        if(photo.id === id){
           
            return {...photo, isFavorite: !photo.isFavorite}
        }
        return photo
     })
        setAllPhotos(updatedArr)
    }

    function addToCart(img){
        setCartItems(prevItems=> [...cartItems, img])
   
    }

    function removeFromCart(id){
        setCartItems(prevItems=> prevItems.filter(item=> item.id !== id))
    }

    function emptyCart(){
        setCartItems([])
    }
         
    return(
        <CartContext.Provider value={{allPhotos,toggleFavorite,cartItems,addToCart,removeFromCart,emptyCart}}>
            {props.children}
        </CartContext.Provider>
    )
}