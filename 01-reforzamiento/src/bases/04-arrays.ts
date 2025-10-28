const myArray: number[] = [1, 2, 3, 4, 5];

console.log('myArray', myArray);
const myArray2 = myArray; // Reference to the same array
myArray2.push(6);

console.log('myArray after push to myArray2', myArray); // myArray is also affected

const myArray3 = [...myArray]; // Create a shallow copy of the array
myArray3.push(7);

console.log('myArray after push to myArray3', myArray); // myArray is not affected
console.log('myArray3', myArray3);

const myArray4 = myArray.map((item) => item * 2); // Create a new array by mapping
console.log('myArray4 (mapped)', myArray4);

const myArray5 = myArray.filter((item) => item % 2 === 0); // Create a new array by filtering
console.log('myArray5 (filtered)', myArray5);

const myArray6 = myArray.reduce((acc, item) => acc + item, 0); // Reduce to a single value
console.log('myArray6 (reduced)', myArray6);

const myArray7 = Array.from({ length: 5 }, (_, index) => index + 1); // Create an array from a length
console.log('myArray7 (from length)', myArray7);

const myArray8 = Array.of(10, 20, 30); // Create an array from individual elements
console.log('myArray8 (of elements)', myArray8);

const myArray9 = new Array(3).fill(0); // Create an array of specific length and fill it
console.log('myArray9 (filled)', myArray9);

const myArray10 = myArray.concat([6, 7, 8]); // Concatenate arrays
console.log('myArray10 (concatenated)', myArray10);

const myArray11 = myArray.slice(1, 4); // Slice a portion of the array
console.log('myArray11 (sliced)', myArray11);

const myArray12 = myArray.sort((a, b) => b - a); // Sort the array in descending order
console.log('myArray12 (sorted)', myArray12);

const myArray13 = myArray.reverse(); // Reverse the array
console.log('myArray13 (reversed)', myArray13);

const myArray14 = myArray.find((item) => item > 3); // Find the first item greater than 3
console.log('myArray14 (found)', myArray14);

const myArray15 = myArray.includes(3); // Check if the array includes the number 3
console.log('myArray15 (includes 3)', myArray15);

const myArray16 = myArray.indexOf(4); // Get the index of the number 4
console.log('myArray16 (index of 4)', myArray16);

const myArray17 = myArray.join('-'); // Join array elements into a string
console.log('myArray17 (joined)', myArray17);

const myArray18 = myArray.flatMap((item) => [item, item * 2]); // Flat map the array
console.log('myArray18 (flat mapped)', myArray18);

const myArray19 = myArray.every((item) => item > 0); // Check if every item is greater than 0
console.log('myArray19 (every > 0)', myArray19);

const myArray20 = myArray.some((item) => item > 4); // Check if some items are greater than 4
console.log('myArray20 (some > 4)', myArray20);

const myArray21 = myArray.forEach((item, index) => {
  console.log(`Item at index ${index}: ${item}`);
}); // Iterate over each item in the array

console.log('myArray21 (forEach result)', myArray21); // forEach returns undefined