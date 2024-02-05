import { getHeroeByIdAsync } from "../../src/pruebas/09-promesas";

describe('Prueba del documento <09-promesas/>', ()=>{
    /**
     * La palabra done informa a Jest que ya termina la ejecucion de la promesa
     */

    test('Prueba getHeroeByIdAsync retorna heroe por ID', (done) =>{

        const id = 1;
        getHeroeByIdAsync(id).then(
            hero =>{
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
             done();
            });
    });

    test('Prueba getHeroeByIdAsync retorna error por ID', (done) =>{

        const id = 100;
        getHeroeByIdAsync(id).catch(
            error =>{
                console.log(error);
                expect(error).toEqual(`No se pudo encontrar el héroe: ${id}`);
             done();
            });
    });
});