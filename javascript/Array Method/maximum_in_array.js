let arr = [10, 20, 30, 40, 50];

let max = arr.reduce( (max, el)=> {
    if(max < el) {
      return el;
    } else {
      return max;
    }
})

console.log(max);