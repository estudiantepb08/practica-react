import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = 'EOkVlTm41v1dJn3aFYvY4GQyrNGHH6RH';
const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

/* AQUI SE USA PROMESAS VAMOS HACER DE OTRA FORMA MAS MODERNA
myRequest.then((response)=>{

    response.json().then((data)=>{
        console.log(data);
    })
    console.log(response);
})
.catch((error)=>{
    console.error(error);
})*/

/** PROMESA EN CADENADA */
/* Otra forma de manejar las promesas es con el tipado que esperamos en la respuesta 
myRequest
    .then((response) => response.json())
    .then(( data ) => {
        console.log(data);
        const imageUrl = data.data.images.original.url;
        console.log(imageUrl);
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        document.body.append(imgElement);
    })
    .catch((error)=>{
        console.error(error);
    });

    */

const createImageInsideDOM = (url:string)=>{
    const imgElement = document.createElement('img');
        imgElement.src = url;
        document.body.append(imgElement);    
};

/** PROMESA CON EL TIPADO DE DATOS UTILIZANDO GiphyRandomResponse Y APLICANDO EL CÓDIGO LIMPIO 
 * Y EL PRINCIPIO DE RESPONSABILIDAD ÚNICA (SRP - SINGLE RESPONSABILITY PRINCIPLE)
*/
myRequest
    .then((response) => response.json())
    .then(( {data}: GiphyRandomResponse ) => { // Desestructuramos para obtener solo data
        const imageUrl = data.images.original.url;
        createImageInsideDOM(imageUrl);
    }).catch((error)=>{
        console.error(error);
    });