const classInfo = {
  aman : {
    name : "Aman",
    age : 21,
    marks : {
      Phy : 92,
      Chem : 77,
      Eng : 84
    },
    city : "Kolkata"
  },
  shradha : {
    name : "Shradha",
    age : 20,
    marks : {
      Phy : 82,
      Chem : 89,
      Eng : 64
    },
    city : "Bhubaneswar"
  },
  sarbeswar : {
    name : "Sarbeswar",
    age : 20,
    marks : {
      Phy : 97,
      Chem : 43,
      Eng : 89
    },
    city : "Bhubaneswar"
  }
};
console.log(classInfo);

console.log(classInfo.aman);
console.log(classInfo.shradha);
console.log(classInfo.sarbeswar);

console.log(classInfo.aman.name);
console.log(classInfo.shradha.name);
console.log(classInfo.sarbeswar.name);

console.log(typeof classInfo);