import { useState } from "react";
import { PropTypes } from "prop-types";

export const AddCategories = ({onNewCategories})=>{

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) =>{
        console.log(target.value); //Obtenemos el valor del campo por el target
        setInputValue(target.value);
    };

    const onSubmit = (event)=>{
        event.preventDefault();//con este metodo le decimos que no haga refresh al hacer enter en la tecla
        console.log(inputValue);
        /**validar el input con los valores vacios */
        if(inputValue.trim().length <= 1) return;
        //setCategories(categories => [inputValue, ...categories]); //obtenemos el valor del input y lo agregamos a la lista
        /**limpiamos el input */
        onNewCategories(inputValue.trim()); //Le asignamos el valor del input a la propiedad del props
        setInputValue(''); //Resetea el
        
    };

    return(
    <form onSubmit={(event) => onSubmit(event)} aria-label="form">
    <input type="text" placeholder="Buscar Gif"
    value={inputValue}
    onChange={onInputChange}/>
    </form>
    );
}

AddCategories.propTypes = {
    onNewCategories: PropTypes.func.isRequired,
}