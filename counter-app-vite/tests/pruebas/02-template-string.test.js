import { getSaludo } from "../../src/pruebas/02-template-string";


describe('Pruebas en 02-temple-string', () =>{
    
    test('getSaludo debe retornar Hola Alex', () =>{
        
        const name = 'Alex';
        const message = getSaludo(name);
        expect(message).toBe(`Hola ${name}`);
    });
});