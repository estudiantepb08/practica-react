import React, { useEffect, useState } from 'react';

export const useFecth = (url) => {
    
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
        error: null,
    });

    const localCache ={};

// se actuliza cuando se vuelve a llamar la url
const setLoadingState = () => {
    setState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null,
    });
}; 

    const getFetch = async() => {      
        
        if(localCache[url]){
            console.log('Usando cache');
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: null
            });
            return;
        };
        
        setLoadingState();

        const resp = await fetch(url);

        // sleep dormir la peticion por un segundo 1/2
        await new Promise(resolve => setTimeout(resolve, 1500));

        if(!resp.ok){
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: resp.status,
                    message: resp.statusText,
                }
            });
            return;
        };
        const data = await resp.json();
        console.log({data});
        setState({
            data,
            isLoading: false,
            hasError: false,
            error: null,
        });

        // Manejo del cache
        localCache[url] = data;
        };

    useEffect(()=>{
        getFetch();
    },[url]);

  return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,        
  };
}
