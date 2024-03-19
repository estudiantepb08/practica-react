import React, { useRef } from 'react';

export const FocusScreen = () => {
// selecciona el elemento del dom como un focus es un hook useRef()
    const inputRef = useRef();

    const onClick = ()=>{
        console.log(inputRef);
    }

  return (<>
  <h1>FocusScreen</h1>
  <hr/>
  <input 
  ref={ inputRef }
  type='text'
  placeholder='Ingrese su nombre'
  className='form-control'/>
  <button onClick={onClick} className='btn btn-primary mt-2'> Set focus</button>
  
  </>)
}