import { render, screen } from "@testing-library/react";
import { GifGrid } from '../../src/components';
import { useFetchGifs } from "../../src/hooks/useFetchGifs";
//Hacemos un mock del custom hook con jest

jest.mock('../../src/hooks/useFetchGifs');

describe('Prueba del archivo <GifGrid/>',()=>{

    const category = 'One Punch';

    test('Debe mostrar el loading inicialmente', ()=>{

        /** Utilizamos el mock para simular las imagenes, y el necesita la esctrutura del custom hook */
        
        useFetchGifs.mockReturnValue({
            images:[],
            isLoading: true
        });

        render(<GifGrid category={category}></GifGrid>);      
        
        expect(screen.getByText(category));
        expect(screen.getByText( 'Cargando....' ));
        
        screen.debug();
    });

    test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', ()=>{

        const gifs=[
            {
                id:'ABC',
                title: 'Saitama',
                url: 'https://localhost:1200/index'
            },
            {
                id:'123',
                title: 'Goku',
                url: 'https://localhost:1201/index'
            }
        ]
           /** Utilizamos el mock para simular las imagenes, y el necesita la esctrutura del custom hook */
        
           useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        });

        render(<GifGrid category={category}></GifGrid>);
        // Validamos que el array traiga la cantidad de 2 item
        expect(screen.getAllByRole('img').length).toBe(2);
        screen.debug();
    });

});