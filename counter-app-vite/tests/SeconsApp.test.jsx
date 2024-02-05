import { render, screen } from "@testing-library/react";
import { SeconsApp } from "../src/SeconsApp";
/**
 * se deben de configurar los archivos
 * jest.config.cjs
 * jest.setup.js
 * babel.config.cjs
 * y instalar jsdom
 * el render actualiza el objeto scrint
 * el container, se parece a un nodo de html. crea una carpeta llamada snapshot con el componente que se esta probando
 * en las pruebas se puede utilizar javaScript
 * El snapshots, hace que la prueba se ha rigida, si se modifica los elementos del componente se afecta la prueba
 * porque el toma la primera foto.
 * se pueden utitilizar otras funciones del render para validar los elementos.
 * se puede utilizar constantes cuando hay variables repetidas
 * para no utiliar el container se puede utilizar la importacion del screen
 * import { render, screen } from "@testing-library/react";
 * 
 * npm install --save-dev @testing-library/react
 * npm install --save-dev @testing-library/react
 * npm i jest-environment-jsdom-global
 * npm i whatwg-fetch
 * npm i prop-types
 * https://www.npmjs.com/package/prop-types
 */
describe('Pruebas del componente <SeconsApp/>', ()=>{

const title2 = 'PROP123';

    test('debe mostrar el titulo en h1', () =>{

        const title = 'PROPS123';
        const {container, getByText, getByTestId} = render(<SeconsApp title = {title}/>);
        expect(getByText(title)).toBeTruthy();

        /* con snapshots
        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain(title);
        */
       /** Sin snapshots solo con jest y render el toBe() es estricto debe cumplirse todo
        * el toContainer() es que contenga el elemento
        */
       expect(getByTestId('test-title').innerHTML).toContain(title);


    });

    test('Pruebas SeconsApp debe hacer match con el snapshot', ()=>{

        const subtitle = 12;        
        const {container} = render(<SeconsApp subtitle = {subtitle}/>);
        expect(container).toMatchSnapshot();
        
    });

    /** Otra opcion sin el container es con el screen tambien se puede buscar por getByRole() los elementos */

    test('Debe mostrar un mensaje PROP123', ()=>{
        render(<SeconsApp title= {title2}></SeconsApp>);
        expect(screen.getByText(title2)).toBeTruthy();
    });

});