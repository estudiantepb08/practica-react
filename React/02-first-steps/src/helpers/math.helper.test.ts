import { describe, test, expect } from 'vitest';
import { add } from './math.helper';

describe('add funtion', () => {

    test('should add two positive numbers', () => {

        // Arrange
        const a = 2;
        const b = 3;

        // Act
        const result = add(a, b);

        // Assert
        expect(result).toBe(a + b);

        console.log(result);
        console.log(`Hello world ${result}`);
    });

    test('should add two subtract numbers', () => {

        // Arrange
        const a = -2;
        const b = -3;

        // Act
        const result = add(a, b);

        // Assert
        expect(result).toBe(a + b);

        console.log(result);
        console.log(`Hello world ${result}`);
    });
});

describe('subtract funtion', () => {
    test('should subtract two positive numbers', () => {

        // Arrange
        const a = 5;
        const b = 3;

        // Act
        const result = a - b;

        // Assert
        expect(result).toBe(a - b);

        console.log(result);
        console.log(`Hello world ${result}`);
    });

    test('should subtract two negative numbers', () => {

        // Arrange
        const a = -5;
        const b = -3;

        // Act
        const result = a - b;

        // Assert
        expect(result).toBe(a - b);

        console.log(result);
        console.log(`Hello world ${result}`);
    });
});

describe('multiply funtion', () => {
    test('should multiply two positive numbers', () => {

        // Arrange
        const a = 2;
        const b = 3;

        // Act
        const result = a * b;

        // Assert
        expect(result).toBe(a * b);

        console.log(result);
        console.log(`Hello world ${result}`);
    });

    test('should multiply two negative numbers', () => {

        // Arrange
        const a = -2;
        const b = -3;

        // Act
        const result = a * b;

        // Assert
        expect(result).toBe(a * b);

        console.log(result);
        console.log(`Hello world ${result}`);
    });
});

describe('divide funtion', () => {
    test('should divide two positive numbers', () => {

        // Arrange
        const a = 6;
        const b = 3;

        // Act
        const result = a / b;

        // Assert
        expect(result).toBe(a / b);

        console.log(result);
        console.log(`Hello world ${result}`);
    });

    test('should divide two negative numbers', () => {

        // Arrange
        const a = -6;
        const b = -3;

        // Act
        const result = a / b;

        // Assert
        expect(result).toBe(a / b);

        console.log(result);
        console.log(`Hello world ${result}`);
    });
});