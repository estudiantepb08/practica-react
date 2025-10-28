import { describe, test, expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { ItemCounter } from './ItemCounter';

describe('ItemCounter', () => {
    test('should  render with default value', () => {

        const name = "Test item";
        const quantity = 1;

        render(<ItemCounter name={name} quantity={quantity} />);

        expect(screen.getByText(name)).toBeDefined();
        expect(screen.getByText(quantity)).toBeDefined();

    });

    test('should increase count when +1 button is pressed', () => {
        render(<ItemCounter name={"Test item"} quantity={1} />);
        const [buttonAdd] = screen.getAllByRole('button');
        console.log(buttonAdd);
        fireEvent.click(buttonAdd);
        expect(screen.getByText('2')).toBeDefined();
    });

    test('should decrease count when -1 button is pressed', () => {
        const quantity = 5;
        render(<ItemCounter name={'Test item'} quantity={quantity} />);
        const [, buttonSubtract] = screen.getAllByRole('button');
        fireEvent.click(buttonSubtract);
        expect(screen.getByText('4')).toBeDefined();
    });

    test('should not decrease count when -1 button is pressed and quantity is 1', () => {
        const quantity = 1;
        render(<ItemCounter name={'Test item'} quantity={quantity} />);
        const [, buttonSubtract] = screen.getAllByRole('button');
        fireEvent.click(buttonSubtract);
        expect(screen.getByText('1')).toBeDefined();
    });

    test('shuld change to red when count is 1', () => {
        const quantity = 1;
        const name = 'When count is 1';
        render(<ItemCounter name={name} quantity={quantity} />);
        const itemText = screen.getByText(name);
        expect(itemText.style.color).toBe('red');
        console.log(itemText.style.color);
    });

    test('shuld change to black when count is greater than 1', () => {
        const quantity = 2;
        const name = 'When count is 1';
        render(<ItemCounter name={name} quantity={quantity} />);
        const itemText = screen.getByText(name);
        expect(itemText.style.color).toBe('black');
        console.log(itemText.style.color);
    });
});