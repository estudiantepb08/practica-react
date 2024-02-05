import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';


/** Un Hook es una funcion que retorna algo, se pueden crear hook que retornan elementos html que seria su extencion .jsx
 * o que retorna un valor con JavaScript con la extencion .js
 * se reciben los argumentos que necesita el custom hook para funcionar ejemplo useFetchGifs = (category)
 */
export const useFetchGifs = (category) => {

        /** Se utiliza este estado para matener las imagenes cuando se redibuja el componente
     * se inicializa con un arreglo vacio para no mostrarlo hasta no tener la imagenes
     */
        const [images, setImages]  = useState([]);

        /** Creamos otro estado para cargar el isLoadin esto es solo si necesitamos varios estados para cada evento */

        const [isLoading, setIsLoading] = useState(true);

        /** Esta es la otra forma de poder hacer para hacer la extracion de las funciones dento del useEffect */
     
        const getImages = async() => {
         const newImages = await getGifs(category);
         setImages(newImages);
         setIsLoading(false);
        };
        
     
        /*
        useEffect genera un efecto secundario, cuando se genera un efecto en el componente
        contiene un coolback, y tiene una dependencias donde le digo como quiere que se renderize el componente o genere el efecto
        */
       useEffect(()=>{
         /* esta es una forma de extraer el objeto de la promesa que esta invocando la peticion http 
         le seteamos la imagen que esta retornando a la variable setImages*/
         
       //  getGifs(category).then(newImgaes => setImages(newImgaes)); 
           getImages();
     
         /** return hay una funcion de retorno que es utilizada tambien como cleanout */
       },[]/**Dependencias del hook useEffect [] */);

  return (
    {
        images, /** Cuando una propiedad apunta a una variable con el mismo nombre se puede dejar uno solo ejemplo images:images seria solo images */
        isLoading

    }
  );
}
