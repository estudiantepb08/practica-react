import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = 'EOkVlTm41v1dJn3aFYvY4GQyrNGHH6RH';

/** 2) CREAMOS LA SEGUNDA FUNCION QUE EN ESTE CASO ES CREACION DE LA IMAGEN EN EL BODY */

const createImageInsideDOM = (url:string)=>{
    const imgElement = document.createElement('img');
        imgElement.src = url;
        document.body.append(imgElement);    
};

/** 1) PASO CREAMOS LA FUNCION ASYNC PARA INVOCAR LA ULR O EL SERVICIO */

const getRandomGifUrl = async() =>{
    
    const response = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    );
    const { data }: GiphyRandomResponse = await response.json();
    return data.images.original.url;
};

/** PROMESA CON EL TIPADO DE DATOS UTILIZANDO GiphyRandomResponse Y APLICANDO EL CÓDIGO LIMPIO 
 * Y EL PRINCIPIO DE RESPONSABILIDAD ÚNICA (SRP - SINGLE RESPONSABILITY PRINCIPLE)
*/

/** 3) CONSUMIMOS LA FUNCION ASYNC getRandomGifUrl QUE RETORNA UNA PROMESA, EN ESTE CASO ES
 *  UNA VERSION MAS VERBOSA QUE ES PASANDO LOS PARAMETROS DE LAS FUNCIONES ANONIMAS */
getRandomGifUrl()
    .then((imageUrl) => {
        createImageInsideDOM(imageUrl);
    }).catch((error)=>{
        console.error(error);
    });

/* OTRA FORMA DE SIMPLIFICAR EL CÓDIGO*/
getRandomGifUrl()
    .then(createImageInsideDOM)
    .catch((error)=>{
        console.error(error);
    });