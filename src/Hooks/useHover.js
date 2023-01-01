import { useState,useEffect,useRef } from "react"

function useHover(){
    const [hovered,setHovered] = useState(false)
    const ref = useRef();

    function enter(){
        setHovered(true)
    }
    function leave(){
        setHovered(false)
    }

    useEffect(() => {

        const instace = ref.current
        instace.addEventListener("mouseenter",enter)
        instace.addEventListener("mouseleave",leave)
       return()=>{
        instace.removeEventListener("mouseenter",enter)
        instace.removeEventListener("mouseleave",leave)
       }

    }, [])

    return [hovered, ref]
}

export default useHover