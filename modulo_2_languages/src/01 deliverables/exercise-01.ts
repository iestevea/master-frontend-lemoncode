console.log("************** DELIVERABLE 01 - ARRAY OPERATIONS *********************");

type ArrayToArrayFunct = <A>(arr: A[]) => A[];
type ArrayToItemFunct = <A>(arr: A[]) => A;

const head: ArrayToItemFunct = (arr) => {
  const [first, ...rest] = arr;
  return first;
}

const tail: ArrayToArrayFunct = (arr) => {
  const [first, ...rest] = arr;
  return rest;
}

const init: ArrayToArrayFunct = (arr) => {
  const newArr = [...arr];
  newArr.pop();
  return newArr;
}

const last: ArrayToItemFunct = (arr) => {
  const newArr = [...arr];
  return newArr.pop();
}

const numberArray: number[] = [1, 2, 3, 4];
console.log('head - first element', head<number>(numberArray))
console.log('tail - elements except first', tail<number>(numberArray))
console.log('init - elements except last', init<number>(numberArray))
console.log('last - last element', last<number>(numberArray))
console.log('numberArray - inmutable', numberArray)