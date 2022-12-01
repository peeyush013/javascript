// object literal

// let viratkohli = {
//     firstname: 'virat',
//     lastname: 'kohli',
//     country: 'india',
//     age: 34
// }

// let rohitsharma = {
//     firstname: 'rohit',
//     lastname: 'sharma',
//     country: 'india',
//     age: 35
// }

// console.log(viratkohli.firstname)
// console.log(viratkohli.lastname)
// console.log(viratkohli.age)
// console.log(viratkohli.country)

// console.log(rohitsharma.firstname)
// console.log(rohitsharma.lastname)
// console.log(rohitsharma.age)
// console.log(rohitsharma.country)

// console.log(viratkohli)
// console.log(rohitsharma)

// function constructor
function Person(firstname,lastname,age,country){
    this.firstname=firstname
    this.lastname=lastname 
    this.age=age
    this.country=country
 }
 
 let shikhardhawan = new Person("shikhar","dhawan",36,"india")
 let hardikpandya = new Person("hardik","pandya",29,"india")
 
 console.log(shikhardhawan)
 console.log(hardikpandya)
 
 console.log(shikhardhawan instanceof Person)
 console.log(hardikpandya instanceof Person)
 
 console.log(Person)
 console.log(Person.firstname==hardikpandya.firstname)
 
 // Every object will have _proto_ == Parent.prototype
 console.log(Person.prototype==hardikpandya.proto)
 console.log(Person._prototype_==hardikpandya.proto)
 
 Person.prototype.displayName = function(){
     console.log(this.firstname , this.lastname)
 }
 shikhardhawan.displayName()
 hardikpandya.displayName()
 console.log(hardikpandya)
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 