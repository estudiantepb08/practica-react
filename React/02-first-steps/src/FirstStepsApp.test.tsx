import { describe, test, expect, vi, afterAll } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FirstStepsApp } from './FirstStepsApp';

const mockItemCounter = vi.fn((props: unknown) => {
    return (<div data-testid="ItemCounter" />);
});

vi.mock('./shopping-cart/ItemCounter', () => ({
    ItemCounter: (props: unknown) => mockItemCounter(props),
}));

/* Otra forma de hacer el mock
vi.mock('./shopping-cart/ItemCounter', () => {
    return {
        ItemCounter: (props: unknown) => <div data-testid="ItemCounter" name={props.name} quantity={props.quantity} />//Mocked ItemCounter</div>
    };
});
*/

describe('FirstStepsApp', () => {

    /** Limpia todos los mock que se ha ejecutado en las pruebas */
    afterAll(() => {
        vi.clearAllMocks();
    });

    test('should match snapshot', () => {
        const container = render(<FirstStepsApp />);
        expect(container).toMatchSnapshot();

    });

    test('should render the correct number of ItemCounter Components', () => {
        render(<FirstStepsApp />);
        const itemCounter = screen.getAllByTestId('ItemCounter');
        console.log(itemCounter.length);
        expect(itemCounter.length).toBe(3);
        screen.debug();
    });

    test('should render ItemCounter with the correct props', () => {
        render(<FirstStepsApp />);
        expect(mockItemCounter).toHaveBeenCalledTimes(9);
        expect(mockItemCounter).toHaveBeenCalledWith({ name: 'Nintendo Switch 2', quantity: 1 });
        expect(mockItemCounter).toHaveBeenCalledWith({ name: 'Pro Controller', quantity: 2 });
        expect(mockItemCounter).toHaveBeenCalledWith({ name: 'Super Smash', quantity: 3 });
    });
});