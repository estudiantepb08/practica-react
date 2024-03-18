import React, { useEffect } from 'react';
import { useFecth } from '../hooks/useFecth';
import { useCounter } from '../hooks/useCounter';
import { LoadingMessage } from './LoadingMessage';

export const MultiplesCustomHooks = () => {
//https://www.breakingbadapi.com/api/qoutes/1
 //useFecth('https://datausa.io/api/data?drilldowns=Nation&measures=Population'); 
 const {counter, decrement, increment} = useCounter(1);  
    const {data, isLoading, hasError} = useFecth(`https://pokeapi.co/api/v2/pokemon/${counter}`);

    /*console.log('imprime data: '+ data);
    console.log('imprime load: '+ isLoading);
    console.log('impreme hasErro: '+ hasError);*/

    //<pre>{JSON.stringify(data, null, 2)}</pre>


  return (<>
  <h1>Información de Pokémon</h1>
  <hr/>
  { isLoading && <LoadingMessage></LoadingMessage>}
  <h2>{data?.name}</h2>
  <button onClick={()=> counter > 1 ? decrement(): null } className='btn btn-primary mt-2'>Anterior</button>
  <button onClick={()=>increment()} className='btn btn-primary mt-2'>Siguiente</button>
  </>);
}
