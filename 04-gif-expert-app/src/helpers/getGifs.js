/**
* Nunca se deben colocar funciones para renderizar dentro de un funcional component
*/

export const getGifs = async(category) =>{
   const url = `https://api.giphy.com/v1/gifs/search?api_key=kaJ1JwD4CuQgYun7YpTQpTr5p1qs1sQn&q=${category}&limit=20`;
   const resp = await fetch(url);
   const {data} = await resp.json();
   /**
    * Desestructurar la data para extraer las imagenes y retornamos un objecto
    */
   const gifs = data.map(img =>({
       id: img.id,
       title: img.title,
       url: img.images.downsized_medium.url
}));
  // console.log(gifs);
   return gifs;
};