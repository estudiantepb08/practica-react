import { getUser, getUserActive } from "../../src/pruebas/05-funciones";

/*
cuando se comparan objecto se debe utilizar la funcion toStrictEqual, o toEqual
*/

describe('Pruebas en 05-funciones', () =>{

    test('getUser debe retornar un objeto', ()=>{
        
        const testUser ={
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
        expect(user).toStrictEqual(testUser);

    });

    test('getUserActivo debe retornar un objecto', ()=>{
        
        const name = 'Alex';

        const user = {
            uid: 'ABC567',
            username: name
        };

        const userActive = getUserActive(name);

        expect(user).toEqual(userActive);

    });

});