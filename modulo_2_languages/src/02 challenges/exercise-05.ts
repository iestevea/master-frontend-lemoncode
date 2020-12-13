console.log("************** CHALLENGES - MEMOIZATION *********************");

const expensiveFunction = () => {
  console.log("Una unica llamada");
  return 3.1415;
}

const memoize = (fn) => {
  let cache = {};
  return () => {
    if (!cache[0]) {
      cache[0] = fn();
    }
    return cache[0];
  }
};

const memoized = memoize(expensiveFunction);

console.log(memoized());
console.log(memoized());
console.log(memoized());

let count = 0;

const repeatText = (repetitions: number, text: string): string =>
  (count++, `${text} `.repeat(repetitions).trim())

const memoizeWithArgs = (fn) => {
  let cache = {};
  return (a, b) => {
    cache[a] = cache[a] || {};
    if (Object.values(cache[a]).length > 0) {
      if (!cache[a][b]) {
        cache[a][b] = fn(a, b);
      }
      return cache[a][b];
    } else {
      cache[a][b] = fn(a, b);
      return cache[a][b];
    }
  }
};

const memoizedGreet = memoizeWithArgs(repeatText);

console.log(memoizedGreet(1, "pam"));   // pam
console.log(memoizedGreet(3, "chun"));  // chun chun chun
console.log(memoizedGreet(1, "pam"));   // pam
console.log(memoizedGreet(3, "chun"));  // chun chun chun
console.log(count);                     // 2


