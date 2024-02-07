import { screen, renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Prueba del archivo <useFetchGifs/>', ()=>{
    
    test('Debe de regresar el estado incial', ()=>{

        /* los hooks no se pueden evaluar de forma aislada tienen que estar dentro de un funcional componen
        para ello utilizamos un paquete de terceros que es el renderHook()
        para la prueba creamos un callback() una funcion
        */
        
        const { result } = renderHook( ()=> useFetchGifs('One Punch'));
        console.log(result);

        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();

    });

    test('Debe de retornar un arreglo de imagenes y isLoading en false', async()=>{

        /* los hooks no se pueden evaluar de forma aislada tienen que estar dentro de un funcional componen
        para ello utilizamos un paquete de terceros que es el renderHook()
        para la prueba creamos un callback() una funcion
        */
       // Vamos a probar el retorno del custom hook
        
        const { result } = renderHook( ()=> useFetchGifs('One Punch'));
        console.log(result);
        
/* es para decirle a la funcion que espere hasta que se carguen la imagenes con el waitFor es de testi library
Tambien se puede colocar un timeout de espera.
*/
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();

        screen.debug();

    });

});