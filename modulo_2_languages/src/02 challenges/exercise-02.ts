console.log("************** CHALLENGES - DEEP ACCESS - GET *********************");

const myObj = {
  a: 1,
  b: {
    c: null,
    d: {
      e: 3,
      f: {
        g: 'bingo'
      }
    }
  }
};

const deepGet = (obj, ...props) => {
  if (!props.length) {
    return obj;
  }

  const [prop, ...rest] = props;
  if (obj.hasOwnProperty(prop)) {
    return rest.length === 0 ? obj[prop] : deepGet(obj[prop], ...rest);
  }
  // if (props.length === 0) {
  //   return obj;
  // } else {
  //   const [prop, ...rest] = props;
  //   for (let p in obj) {
  //     if (p === prop) {
  //       return deepGet(obj[p], ...rest);
  //     }
  //   }
  // }

}

console.log(deepGet(myObj, 'x'));
console.log(deepGet(myObj, 'a'));
console.log(deepGet(myObj, 'b'));
console.log(deepGet(myObj, 'b', 'd', 'e'));
console.log(deepGet(myObj, 'b', 'c'));
console.log(deepGet(myObj, 'b', 'd', 'f', 'g'));
console.log(deepGet(myObj));

console.log("************** CHALLENGES - DEEP ACCESS - SET *********************");

const myEmptyObj = {};

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

deepSet(1, myEmptyObj, 'a', 'b')
console.log(JSON.stringify(myEmptyObj));
deepSet(2, myEmptyObj, 'a', 'c')
console.log(JSON.stringify(myEmptyObj));
deepSet(3, myEmptyObj, 'a')
console.log(JSON.stringify(myEmptyObj));
deepSet(4, myEmptyObj)
console.log(JSON.stringify(myEmptyObj));

