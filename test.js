function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
var john = new Person("John", "Smith");
var jane = new Person("Jane", "Doe");
var emily = new Person("Emily", "Jones");
  
console.table([john, jane, emily], ["firstName"]);