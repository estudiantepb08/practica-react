import React, { useEffect, useState } from 'react';
import { Messages } from './Messages';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'stider@gmail.com'
    });

    const { username, email } = formState;

    const inputOnchange = ({target}) => {
        console.log(target.value);
        const {name, value} = target
        setFormState({
            ...formState,
            [ name ]: value //se coloca entre llaves [ name ] el nombre del target porque en javascript se llaman propiedades computadas 
        });
    };

    useEffect(()=>{
        console.log('useEffect called');
    },[]);

    useEffect(()=>{
        console.log('useEffect FormState');
    },[formState]);

    useEffect(()=>{
        console.log('useEffect Email');
    },[email]);

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <input
                type='text'
                className='fron-control'
                placeholder='Username'
                name='username'
                value={username}
                onChange={inputOnchange} />

            <input
                type='email'
                className='fron-control mt-2'
                placeholder='Email'
                name='email'
                value={email}
                onChange={inputOnchange} />
                
                {//esto es un if
                    (username ==='strider2') && <Messages/>
                }
        </>)
}
