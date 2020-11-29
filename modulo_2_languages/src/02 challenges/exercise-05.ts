console.log("************** CHALLENGES - MEMOIZATION *********************");

const expensiveFunction = () => {
  console.log("Una unica llamada");
  return 3.1415;
}

// DUDA ?¿
const memoize = (fn) => fn;

const memoized = memoize(expensiveFunction);

console.log(memoized());
console.log(memoized());
console.log(memoized());