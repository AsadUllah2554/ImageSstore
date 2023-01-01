import React,{useContext} from "react";
import PropTypes from 'prop-types';
import { CartContext } from "../Context/CartContext";
import useHover from "../Hooks/useHover"

function Image(props) {

    const {cartItems} = useContext(CartContext)
    const [hovered,ref] = useHover()

    let heartIcon = hovered && <i className="ri-heart-line favorite"
    onClick={()=>props.handleClick(props.id)}></i> 
    if(hovered){
         heartIcon =  props.img.isFavorite ? <i className="ri-heart-fill favorite"  
         onClick={()=>props.handleClick(props.id)}></i>:
         <i className="ri-heart-line favorite"
    onClick={()=>props.handleClick(props.id)}></i>
    }
    // function heartIcon() {
    // this is same concept to toggle heartIcon
    //     if(img.isFavorite) {
    //         return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
    //     } else if(hovered) {
    //         return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
    //     }
    // }

    function cartIcon(){
        const alreadyInCart = cartItems.some(item=> item.id === props.img.id);
        if(alreadyInCart){
            return <i className="ri-shopping-cart-fill cart" 
             onClick={()=>props.removeFromCart(props.img.id)}></i>
        } else if(hovered){
           return <i className="ri-add-circle-line cart"  
         onClick={()=>props.addToCart(props.img)}></i>
        }
    }
   
    return (
      
        <div className={`${props.className} image-container`}
       ref={ref}>
        
        <img src={props.img.url} className="image-grid" alt="photogallery" />
        {heartIcon}
        {cartIcon()}

        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id:PropTypes.string.isRequired,
        url:PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image
