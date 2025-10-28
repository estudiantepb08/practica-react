import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MyAwesomeApp } from './MyAwesomeApp';

describe('MyAwesomeApp', () => {
    test('should render firsName and lastName', () => {

        const { container } = render(<MyAwesomeApp />);
        screen.debug();
        // console.log(container.innerHTML);
        const h1 = container.querySelector('h1');
        expect(h1?.innerHTML).toBe('Demetrio');
        const h3 = container.querySelector('h3');
        expect(h3?.innerHTML).toContain('Colombia');
    });

    test('should render firstName and lastName with screen', () => {

        render(<MyAwesomeApp />);
        screen.debug();
        const h1 = screen.getByRole('heading', { level: 1 });
        console.log(h1.innerHTML);
    });

    test('should match with snapshot', () => {
        const { container } = render(<MyAwesomeApp />);
        expect(container).toMatchSnapshot()
    });
});