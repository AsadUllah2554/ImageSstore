import React,{useContext} from "react"
import Image from "../Components/Image"
import { CartContext } from "../Context/CartContext"
import {getClass} from "./util"

function Photos() {

    const {allPhotos,toggleFavorite,addToCart,removeFromCart} = useContext(CartContext)
    return (
        <main className="photos">
       {
                    allPhotos.map((photo,i)=>{
                      {return(         
                            <Image
                            key={photo.id}
                            id={photo.id}
                            img={photo}
                            className={getClass(i)}
                            handleClick={toggleFavorite}
                            addToCart={addToCart}
                            removeFromCart={removeFromCart}
                           />
                        )
                    }})
    }

        </main>
    )
}

export default Photos