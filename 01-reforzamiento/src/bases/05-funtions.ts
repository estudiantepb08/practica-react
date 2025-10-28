function greet(name: string): string {
    return `Hello, ${name}!`;
}

const greet2 = (name: string): string => `Hello, ${name}!`;

const message = greet('World');
console.log(message);

const message2 = greet2('World');
console.log(message2);

function getUser(id: number): { id: number; name: string } {
    return { id, name: `User${id}` };
}

const user = getUser(1);
console.log(user);

const add = (a: number, b: number): number => a + b;

const sum = add(5, 3);
console.log('Sum:', sum);

function multiply(a: number, b: number = 1): number {
    return a * b;
}

console.log('Multiply with default:', multiply(5));
console.log('Multiply with both args:', multiply(5, 2));

function logMessage(message: string, ...optionalParams: any[]): void {
    console.log(message, ...optionalParams);
}

const myNumber: number[] = [1, 2, 3, 4, 5];
logMessage('Logging numbers:', ...myNumber);

myNumber.forEach(function(value){
    console.log(value);
});

myNumber.forEach(value => console.log(value));
myNumber.forEach(console.log); // This works because console.log matches the expected signature Por reference es igual que el de arriba