//Este componente va a manejar las categorias
/** Para desplegar la aplicación en produccion hay un paquete de node.js que se llama http-server
 * los archivos que se colocan para produccion son: 'asset index.html'
 * se compila el proyecto con el comando 'npm build'
 * para levantar el proyecto de forma local compilado es de la siguiente manera:
 * 1. Nos paramos en la carpeta dist de compilacion 
 * 2. Dentro de la carpeta ejecutamos el comando 'http-server -o'
 */

import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GitGrid = ({category})=>{  

    /* Custom Hook personalizado lo estamos inicializando con categori*/

    const {images, isLoading} = useFetchGifs(category);  

    return(<>
    
    <h3>{category}</h3>
    {/**Este es un if o and en JavaScript no usar operador ternario se carga cuando las imagenes no han sido resultas por la promesa con http: */
        isLoading && (<h2>Cargando....</h2>)
    }
    <div className="card-grid">{
    /* En este ejemplo estamos utilizando la desestructuracion del objeto de retorno images 
        images.map(({id, title}) =>(
            <li key={id}>{title}</li>
        ))
        */
       /** Otra forma de hacerlo mas optimizado 
        * una tecnica de esparcir las propiedades es con obtener el objeto completo y con el express podemos desestructurar todas sus propiedades
        * ejemplo: {...image} el componente GifItem puede utilizar las propiedades
       */

       images.map((image)=>(
        <GifItem key={image.id} { ...image }></GifItem>
       ))
        }        
    </div>
    </>);
}