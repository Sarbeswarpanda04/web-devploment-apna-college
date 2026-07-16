let fruit = [["Apple", "Banana",], ["Mango", "Orange"]];

for(let i=0 ; i<fruit.length ; i++){
  console.log(`List#${i}`)
  for(let j=0 ; j<fruit[i].length ; j++){
    console.log(j,fruit[i][j])
  }
}
