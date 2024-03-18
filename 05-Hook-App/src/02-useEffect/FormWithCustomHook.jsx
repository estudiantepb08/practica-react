import React, { useEffect, useState } from 'react';
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {

    const {formState, inputOnchange, onResetForm} = useForm({
        username: '',
        email: '',
        password: ''
    });   
    
    const { username, email, password } = formState;

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
            
            <input
                type='password'
                className='fron-control mt-2'
                placeholder='Password'
                name='password'
                value={password}
                onChange={inputOnchange} />
            <button onClick={onResetForm} className='btn btn-primary mt-2'>Clear</button>
                

        </>)
}
