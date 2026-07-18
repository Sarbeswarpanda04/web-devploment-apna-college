//In JavaScript, arrow functions do not have their own this. Instead, they inherit (lexically bind) this from the surrounding scope.

const person = {
  name: "Sarbeswar",
  greet: function () {
    console.log(this.name);
  },
  getName : () => {
    console.log(this.name);
  },

  getInfo1 : function() {
    setTimeout( ()=>{
      console.log(this.name);  //student
    }, 2000);
  },

  getInfo2 : function() {
    setTimeout( function() {
      console.log(this.name);  //Window
    }, 2000); 
  }
};

// person.greet();
// person.getName();

person.getInfo1();
person.getInfo2();