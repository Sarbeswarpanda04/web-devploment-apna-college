function concateAllString(arr){
  let result = "";
  for(let i=0 ; i<arr.length ; i++){
    result = result + arr[i] + " ";
  }
  return result;
}

let str = ["hi", "hello", "bye", "good bye"];

console.log(concateAllString(str));