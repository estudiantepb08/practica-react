import { useState } from "react";

export const useForm = (inicialForm = {})=>{

    const [formState, setFormState] = useState(inicialForm);   

    const inputOnchange = ({target}) => {
        console.log(target.value);
        const {name, value} = target
        setFormState({
            ...formState,
            [ name ]: value //se coloca entre llaves [ name ] el nombre del target porque en javascript se llaman propiedades computadas 
        });
    };

    const onResetForm = ()=>{
        setFormState({
            ...inicialForm
        });
    };

    return{
        formState,
        inputOnchange,
        onResetForm
    };
}