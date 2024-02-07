import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategories } from "../../src/components";

describe('Prueba del documento', ()=>{

    const inputValue = 'Saitama';
    const mockOnNewCategories = jest.fn(); // Simulamos la funcion con mock para validar que sea llamada

    test('debe de cambiar el valor de la caja de texto', ()=>{
        /* Simular evento de digitacion en el input text
        esto se logra con evento onChange del input
        donde extraemos el evento, target es decir la etiqueta
        y tomamos el valor del input.
        */
       //Aqui le colocamos un funcion simulada ()=>{}
        render(<AddCategories onNewCategories = {mockOnNewCategories}></AddCategories>);
        // Aqui obtenemos input del HTML
        const input = screen.getByRole('textbox');
        // Aqui generamos el evento de llenado del campo
        fireEvent.input(input, {target:{value: inputValue}});
        // Validamos que el valor del input sea el esperado
        expect(input.value).toBe(inputValue);
        screen.debug();
    });

    test('Debe de llamar onNewCategory si el input tiene un valor', ()=>{
        
        //TODO:??
        render(<AddCategories onNewCategories={(mockOnNewCategories)}></AddCategories>);
        const input = screen.getByRole('textbox');
        //Hay que definirle un arial-label en el formulario para que testin library pueda reconocerlo
        const form = screen.getByRole('form');
        // llenamos el campo input
        fireEvent.input(input, {target:{value: inputValue}});
        // enviar el evento del formulario
        fireEvent.submit(form);
        // evaluamos si el input esta vacio
        expect(input.value).toBe('');
        expect(mockOnNewCategories).toHaveBeenCalled(); // evaluamos que la funcion halla sido llamada
        expect(mockOnNewCategories).toHaveBeenCalledTimes(1); // evaluamos que se llame una vez
        expect(mockOnNewCategories).toHaveBeenCalledWith(inputValue);
        screen.debug();
    });

    test('No debe llamar el onNewCategory si el input esta vacio', ()=>{
        /**
         * Evaluamos si los input estan vacio que no se allan llamado
         */
        const onNewCategories = jest.fn(); 

        render(<AddCategories onNewCategories={onNewCategories}></AddCategories>);
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        expect(onNewCategories).toHaveBeenCalledTimes(0);
        expect(onNewCategories).not.toHaveBeenCalled();

    });
});