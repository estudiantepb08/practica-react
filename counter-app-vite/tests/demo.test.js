/*
Para la realizacion de pruebas se utiliza la palbra reservada test
se define el nombre de la prueba y una funcion
las pruebas tienen tres partes
1. inicializacion
2. estimulo
3. observar el comportamiento esperado
en Jest, para validar si son iguales las variable o argumentos se utiliza expect
expect(variable 1).toBe(variable 2);
las pruebas se pueden agrupas por componenestes con la funcion describe()
las pruebas se puede ejecutar individual por archivo que quiero probar "Se oprime la tecla W luego p, escribimos el nombre del archivo".
para arrancar las pruebas es con npm run test
*/

describe('Ejemplo Pruebas en <DemoComponent/>', () =>{
    
    test('Esta prueba no debe de fallar', ()=>{
    
        //1. inicializacion
        const message1 = 'Hola Mundo';
        
        //2. estimulo
        const message2 = message1.trim();
    
        //3.Observar el comportamiento esperado
        expect(message1).toBe(message2);
        
        /*
        if(1 === 0){
            throw new Error('No se puede dividir entre 0');
        }
        */
    });
});
