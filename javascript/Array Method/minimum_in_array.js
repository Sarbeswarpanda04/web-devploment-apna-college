let arr = [10, 20, 30, 40, 50];

let minimum = arr.reduce((min, el) => {
  if (min > el) {
    return el;
  } else {
    return min;
  };
});

console.log(minimum);