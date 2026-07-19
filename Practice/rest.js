//Allow a function to take an indefinite number of arguments and bundle them in an array

function sum(...args) { //arguments
  let result = 0;
  for (let i = 0; i < args.length; i++) {
    result += args[i];
  }
  return result;
}

console.log(sum(1, 2, 3, 4, 5));