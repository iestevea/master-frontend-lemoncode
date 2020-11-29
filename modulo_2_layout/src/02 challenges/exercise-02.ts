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
    if (rest.length === 0) {
      // console.log(obj[prop]);
      return obj[prop]; // DUDA: porque console.log(obj[prop]) me devuelve bien el resultado, pero el return me devuelve undefined ¿?
    } else {
      deepGet(obj[prop], ...rest);
    }
  }
}

console.log(deepGet(myObj, 'x'));
console.log(deepGet(myObj, 'a'));
console.log(deepGet(myObj, 'b'));
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
    obj[prop] = {...obj[prop]};
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

