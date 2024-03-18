import { useEffect, useState } from "react";

export const Messages = ()=>{

    const [coords, setCoords]= useState({x:0, y:0});

    useEffect(()=>{
        const onMouseMove = ({x, y})=>{
            setCoords({x, y});             
        }
        window.addEventListener('mousemove',onMouseMove);
        return()=>{
            window.removeEventListener('mousemove',onMouseMove); //limpia el efecto
        };
    },[]);

    console.log(coords);
    
    return(<>
    <h3>Mesages</h3>
    { JSON.stringify(coords) }
    </>);
}