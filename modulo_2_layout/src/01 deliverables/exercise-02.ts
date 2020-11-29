console.log("************** DELIVERABLE 02 - CONCAT *********************");

const concat = <O>(a: O[], b: O[]): O[] => [...a, ...b];
const concatExtra = <O>(arrays: Array<O[]>): O[] => arrays.reduce((acc: O[], arr: O[]) => [...acc, ...arr], []);

const array1: number[] = [1, 2, 3, 4];
const array2: number[] = [5, 6, 7];
const array3: number[] = [8, 9, 10];

console.log('concat two arrays', concat<number>(array1, array2));
console.log('concat n arrays', concatExtra<number>([array1, array2, array3]));