import React, { useEffect, useState } from 'react';

export const useFecth = (url) => {
    
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
        error: null,
    });

// se actuliza cuando se vuelve a llamar la url
   /* setState({
        ...state,
        isLoading: true,
    });
*/
     
    const getFetch = async()=>{        
        
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
        }

    useEffect(()=>{
        getFetch();
    },[url]);

  return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,        
  };
}
