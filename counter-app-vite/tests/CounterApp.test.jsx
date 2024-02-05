import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas del componente <CounterApp/>', () =>{

    const valor = 2;

    test('Pruebas debe hacer match con el snapshot', ()=>{
        const {container} = render(<CounterApp value={valor}/>);
        expect(container).toMatchSnapshot();  

    });

    test('Pruebas debe mostrar el valor inicial de 100', ()=>{
        render(<CounterApp value={100}></CounterApp>);
        expect(screen.getByText(100)).toBeTruthy();
        /** Otra opción */
        expect(screen.getByRole('heading',{level:2}).innerHTML).toContain('100');
    });

    test('Prueba debe mostrar el evento clic',() =>{
        render(<CounterApp value={valor}></CounterApp>);
        fireEvent.click(screen.getByText('+ 1'));
        screen.debug(); //me permite ver el estado del DOM
        expect(screen.getByText(3)).toBeTruthy();
    });

    test('Prueba debe mostrar el evento clic -1', ()=>{
        render(<CounterApp value={valor}></CounterApp>);
        fireEvent.click(screen.getByText('- 1'));
        screen.debug();
        expect(screen.getByText(1)).toBeTruthy();
    });

    test('Prueba debe funcionar el boton Reset', ()=>{
        render(<CounterApp value={valor}></CounterApp>);
        fireEvent.click(screen.getByText('+ 1'));
        fireEvent.click(screen.getByText('+ 1'));
        fireEvent.click(screen.getByText('+ 1'));
       // fireEvent.click(screen.getByText('Reset'));
       /** Podemos tomar el boton con el atributo aria-label */
        fireEvent.click(screen.getByRole('button', {name:'btn-reset'}));
        expect(screen.getByText(2)).toBeTruthy();
    });
});