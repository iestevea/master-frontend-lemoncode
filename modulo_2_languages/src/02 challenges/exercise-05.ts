console.log("************** CHALLENGES - MEMOIZATION *********************");

const expensiveFunction = () => {
  console.log("Una unica llamada");
  return 3.1415;
}

// const memoize = (fn) => {
// -- FIRST IMPLEMENTATION
// let cache;
// return () => {
//   if (!cache) {
//     cache = fn();
//   }
//   return cache;
// }
// -- SECOND IMPLEMENTATION
// let cache;
// return () => cache || (cache = fn(), cache);
// -- THIRD IMPLEMENTATION
// return () => fn.cache || (fn.cache = fn(), fn.cache);
// };

const memoize = (fn) => () => fn.cache || (fn.cache = fn(), fn.cache)


const memoized = memoize(expensiveFunction);

console.log(memoized());
console.log(memoized());
console.log(memoized());

let count = 0;

const repeatText = (repetitions: number, text: string): string =>
  (count++, `${text} `.repeat(repetitions).trim())


const deepSet = (value, obj, ...props) => {
  if (!props.length) {
    return obj;
  }

  const [prop, ...rest] = props;
  if (rest.length === 0) {
    obj[prop] = value;
  } else {
    obj[prop] = { ...obj[prop] };
    deepSet(value, obj[prop], ...rest);
  }
}

export const deepGet = (obj, ...props) => {
  if (!props.length) {
    return obj;
  }

  const [prop, ...rest] = props;
  if (obj.hasOwnProperty(prop)) {
    return rest.length === 0 ? obj[prop] : deepGet(obj[prop], ...rest);
  }

}

const memoizeWithArgs = (fn) => {
  let cache = {};
  return (...args) => deepGet(cache, ...args) || (deepSet(fn(...args), cache, ...args), deepGet(cache, ...args))
};

const memoizedGreet = memoizeWithArgs(repeatText);

console.log(memoizedGreet(1, "pam"));   // pam
console.log(memoizedGreet(3, "chun"));  // chun chun chun
console.log(memoizedGreet(1, "pam"));   // pam
console.log(memoizedGreet(3, "chun"));  // chun chun chun
console.log(count);                     // 2


