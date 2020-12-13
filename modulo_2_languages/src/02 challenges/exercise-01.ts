console.log("************** CHALLENGES - FLATTEN ARRAYS *********************");

type MultiArray<A> = Array<A | MultiArray<A>>;

type ArrFunct = <A>(arr: MultiArray<A>) => A[];
// type ReducerFunc = <A>(acc: A[], item: A) => A[];

const sample: MultiArray<number> = [1, [2, 3], [[4], [5, 6, [7, 8, [9, [10]]]]]];

const deepFlat: ArrFunct = (arr:MultiArray<any>) => {
  return arr.reduce((acc, item) => {
    acc = Array.isArray(item) ? [...acc, deepFlat(item)] : [...acc, item];
    return acc.flat();
  }, []);
}

const deepFlat2: ArrFunct = (arr:MultiArray<any>) => {
  return arr.map((item) => Array.isArray(item) ? deepFlat(item) : item).flat();
}

console.log(deepFlat(sample));