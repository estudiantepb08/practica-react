import React from 'react';

import { useState } from "react";
import { AddCategories, GifGrid } from './components';

export const GifExpertApp = ()=>{

    const [categories, setCategories] = useState(['One Punch','Saludo']); 
    /** El valor inicial que pase en el useState lo obtengo con el segundo argumento es decir
     * categories seria mi getCategories, y setCategories me recibe el valor
     */

    const onAddCategory = (newCategories)=>{
        /**Validamos que la categoria no este repetidad en el arreglo */
        if(categories.includes(newCategories)) return;
        //categories.push('Que tal');
        setCategories([newCategories, ...categories]); // hacer copia de categoria y agregar el nuevo valor 'Forma express'
        //setCategories(cat => [...cat, 'valorant']); // con callback
//<button onClick={onAddCategory}>Agregar</button>
    };

    return(<>
    {/** Titulo */}
    <h1>GitExpertApp</h1>
    {/** Input */}
    <AddCategories onNewCategories={onAddCategory}></AddCategories>
    {/** Listado de Gif */}
    
    <ol>{
       /* Primera forma de poder listar la lista de categorias
        categories.map(category =>{
            return<li key={category}>{category}</li>
        })
        */
       /** Segunda forma de listar o recorrer la lista desestructurando con un componente */

       categories.map(category =>(
        <GifGrid key={category} category={category}></GifGrid> //Componente GifGrid categori para desacoplar el codigo
       ))
        }
        
        {/*<li>123</li>
        <li>XYZ</li>*/}
    </ol>
    {/** Gif Item */}
    </>);
}