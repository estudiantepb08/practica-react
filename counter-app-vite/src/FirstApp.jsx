import React from 'react';

const newMessages = 'ALEX'; 
/*
esta constantes deben inr fuera de la funcion para que no se ha renderizado
No he permitodo los objetos json, solo es permitido serializandolo con la clase JSON.stringify
*/

const getResultado = (a,b) =>{
    return a + b;
};

export const FirstApp = () =>{
    return (
        <>
    <h2>First App</h2>
    <p>hola: { newMessages }</p>
    <p>Valor Numero: {getResultado(2,8)}</p>
    </>
    );
};