//Storing values of array into multiple variables

let names = ["Akash", "Luish", "Soumya", "Sarbeswar"];
let [winner, runnerup, ...others] = names;

console.log(winner);
console.log(runnerup);
console.log(...others);
console.log(others);
console.log(names);