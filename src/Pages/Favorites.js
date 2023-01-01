import React,{useContext} from "react";
import { CartContext } from "../Context/CartContext"
import Image from "../Components/Image"

function Favorites(){
    const {allPhotos} = useContext(CartContext)
    console.log(allPhotos)

    return(
        <>
        <main className="photos">
       {
                    allPhotos.map((photo,i)=>{
                        if(photo.isFavorite){
                      {return(         
                            <Image
                            key={photo.id}
                            id={photo.id}
                            img={photo}
                            // handleClick={toggleFavorite}
                            // addToCart={addToCart}
                            // removeFromCart={removeFromCart}
                           />
                        )
                    }}})
    }

        </main>
        </>
    )


}

export default Favorites