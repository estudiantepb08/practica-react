import { retornaArreglo } from "../../src/pruebas/07-deses-arr";

describe('Prueba del archvio 07-deses-arr', () =>{
    
    test('retornarArreglo debe retornar un numero', ()=>{
        
        //evaluamos los tipos de datos que tiene el arreglo

       const [letters, numbers] = retornaArreglo(); 
       expect(letters).toBe('ABC');
       expect(numbers).toBe(123);

       /**
        * otra forma de validar los tipos de datos        *
        */
       expect(typeof letters).toBe('string');
       expect(typeof numbers).toBe('number');
       expect(letters).toEqual(expect.any(String));

    });
});