const student = {
  name : "Sarbeswar",
  age : 20,
  eng : 88,
  math : 78,
  phy : 95,
  getAvg(){
    let avg = (this.eng+this.math+this.phy)/3;
    return avg;
  }
}
console.log(student.getAvg());