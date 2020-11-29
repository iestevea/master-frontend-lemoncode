console.log("************** CHALLENGES - FLATTEN ARRAYS *********************");

// DUDA: tipado arrays anidados ?¿
// type ArrFunct = <A>(arr: Array<A>) => A[];
// type ReducerFunc = <A>(acc: A[], item: A) => A[];

const sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9, [10]]]]]];

const deepFlat = (arr) => {
  return arr.reduce((acc, item) => {
    acc = Array.isArray(item) ? [...acc, deepFlat(item)] : [...acc, item];
    return acc.flat();
  }, []);
}

console.log(deepFlat(sample));