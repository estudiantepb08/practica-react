import React from 'react';
import { useState } from 'react';

export const CounterApp = ({value})=>{
    /**
     * Creamos nuestro primer hook que es el estado el hook renderiza o dibuja el nuevo estado del componente
     * utiliza los argumentos el valor que va a dibujar y donde lo voy a setear con set()
     * siempre deben ser una constante
     * const [counter, setCounter] = useState(0);
     */
    const [counter, setCounter] = useState(value);

    const handleApp = () =>{setCounter(counter + 1)};
    const handleSubtract = () =>{setCounter(counter - 1)};
    const handleReset = () =>{setCounter(value)};
    /*
    se puede enviar solo la referencia a la funcion sin enviarle la cordenada completa
    tradicional
    <button onClick={(event) => handleApp(event)}> + 1</button>
    solo referencia en la funcion se pasan los argumentos de la misma forma
    <button onClick={handleApp}> + 1</button>
    */
   /**
    * Para realizar las pruebas unitarias necesitamos installar en VITE la libreria de JEST
    * Y en el package.json agregar la propiedad "test":"jest" "test": "jest --watchAll"
    * para ejecutar las pruebas es con el comando yarn test o npm run test 
    * otra manera de identificar un elemento HTML es con aria-label
    */

    return(
        <>
        <h1>Evento clic</h1>
        <h2>{ counter }</h2>
        <button onClick={ handleApp }> + 1</button>
        <button onClick={ handleSubtract }> - 1</button>
        <button aria-label='btn-reset' onClick={ handleReset }> Reset</button>
        </>
    );
}
