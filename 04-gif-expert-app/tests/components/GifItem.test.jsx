import { render, screen} from '@testing-library/react';
import { GifItem } from '../../src/components';

describe('Prueba del archivo <GifItem/>', ()=>{

    const pTitulo = 'Titulo P';
    const pUrl = 'http://localhost/';

    test('Prueba propiedades requeridas titulo urls', ()=>{       
                
        const { container } = render(<GifItem title={pTitulo} url={pUrl}></GifItem>);
        <GifItem title={pTitulo} />
        expect(container).toMatchSnapshot();      

    });

    test('Debe mostrar la imagen con el URL y el ALT indicado', ()=>{
        render(<GifItem title={ pTitulo } url={ pUrl }></GifItem>);
       // screen.debug();
       // expect(screen.getByRole('img').toBe()); Otra forma es haciendo la desestructuración
       const { src, alt } = screen.getByRole('img');
       expect(alt).toBe(alt);
       expect(src).toBe(pUrl);
    });

    test('Debe mostrar el titulo en el componente', ()=>{
        /** Se valida el texto */
        render(<GifItem title={pTitulo} url={pUrl}></GifItem>);
        expect(screen.getByText(pTitulo)).toBeTruthy();
    });
    
});