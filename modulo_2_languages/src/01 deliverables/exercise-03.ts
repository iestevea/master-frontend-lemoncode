console.log("************** DELIVERABLE 03 - CLONE - MERGE *********************");

const clone = <O>(source: O): O => ({ ...source });
const merge = <O1, O2>(source: O1, target: O2): O1 & O2 => ({ ...target, ...source });

interface IPerson {
  name: string;
  surname: string;
  age: number;
  country: string;
  married: boolean;
}

const a: Partial<IPerson> = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b: Partial<IPerson> = { name: "Luisa", age: 31, married: true };

console.log("clone", clone<Partial<IPerson>>(a));
console.log("merge", merge<Partial<IPerson>, Partial<IPerson>>(a, b));
