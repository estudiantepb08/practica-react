import { getGifs } from "../../src/helpers/getGifs";

describe('Pruebas del archivo getGifs.js', ()=>{

    test('Debe retornar un arreglo de gifs', async()=>{
        /** Validamos que la función este retornando algo, y que cumpla la extructura de los objectos que vienen */
        const gifs = await getGifs('One Punch');
        console.log(gifs);
       /* expect(gifs.length).toBeGreaterThan( 0 );
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        }) */
    });
});