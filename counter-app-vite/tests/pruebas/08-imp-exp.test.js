import { getHeroeById, getHeroeByOwner } from "../../src/pruebas/08-imp-exp";

describe('Prueba del documento <08-imp-exp/>', ()=>{

    test('Prueba getHeroeById debe de retornar un heroe por ID', () =>{

        const idOwner = 1;
        const heroe = getHeroeById(idOwner);
        console.log(heroe);
        expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' });


    });

    test('Prueba getHeroeById debe de retornar undefined si no exite ID', () =>{

        const idOwner = 20;
        const heroe = getHeroeById(idOwner);
        console.log(heroe);
        expect(heroe).toBeFalsy(); //toBeFalsy() evaluacion booleana


    });

    test('Prueba getHeroeByOwner debe de retornar un propietario DC', () =>{

        const owner = 'DC';
        const owners = getHeroeByOwner(owner);
        const tamano = 3;
        expect(owners).toEqual([{id: 1, name: 'Batman', owner: 'DC'}, {id: 3, name: 'Superman', owner: 'DC'}, {id: 4, name: 'Flash', owner: 'DC'}]);
        expect(tamano).toBe(owners.length);
        console.log(owners);
    });

    test('Prueba getHeroeByOwner debe de retornar un propietario Marvel', () =>{
        const owner = 'Marvel';
        const owners = getHeroeByOwner(owner);
        const tamano = 2;
        expect(owners).toEqual([{
            id: 2,
            name: 'Spiderman',
            owner: 'Marvel'
        },
        {
            id: 5,
            name: 'Wolverine',
            owner: 'Marvel'
        }]);
        expect(tamano).toBe(owners.length);
        console.log(owners);
    });
});