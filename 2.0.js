//object creation by object literal
let ram = {
    firstName: "Ram",
    lastName: "kulkarni",
    age: 23,
    rollnumber: 45,
    display: function () {
        console.log(this.firstName + this.lastName)
    }
}

//Object => property and method

let mayuri = {
    firstName: "mayuri",
    lastName: "Katwe",
    age: 40,
    rollNumber: 56,
    display: function () {
        console.log(this.firstName + this.lastName)
    }
}

// problem: we have to write codes for same properties and methods many time
// solution:oops


// oops can be performed by:
//template
//function constructor
//Es6 class
//object.create

// 1. function constructor (using function expression)

function Person(firstName, lastName, age, rollNumber) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.rollNumber = rollNumber
    this.display = function () {
        console.log(this.firstName + this.lastName)
    }
}

let radhika = new Person("Radhika", 'Guru', 23, 90)
console.log(radhika)

let shantanu = new Person('shantanu', 'sing', 12, 22)
console.log(shantanu)

//  new problem : we saw dispaly function in every new object 

console.log(radhika instanceof Person) //true
console.log(shantanu instanceof Person) //true

// radhika.display()
// shantanu.display()

// we will move display function to the prototype (hidden)

Person.prototype.display = function () {           //updating the value in prototype
    console.log(this.firstName + this.lastName)
}
console.log(radhika)
console.log(shantanu)

radhika.display()
shantanu.display()

//parent.prototype == Object.__proto__

// basically prototype is used to store the fixed property or method which remains same for all other objects formed by this 

console.log(radhika.__proto__ == Person.prototype)
console.log(shantanu.__proto__ == Person.prototype)

Person.prototype.city = "Nashik"
console.log(radhika)
console.log(shantanu)
console.log(radhika.city)
console.log(shantanu.city)

console.log(radhika.hasOwnProperty('city'))
console.log(shantanu.hasOwnProperty('city'))

console.log(radhika.hasOwnProperty('firstName'))
console.log(shantanu.hasOwnProperty('age'))

//==================================================================

let employee = ['mayuri', 'jaya', 'habib', 'zabi']
console.log(employee)
// employee.pop()

let emp = new Array(3)
emp[0] = "Sham"
emp[1] = "ram"
emp[2] = "kumar"
console.log(emp)

console.log(employee instanceof Array) //true
console.log(emp instanceof Array)  // true

console.log(employee.__proto__ == Array.prototype)
console.log(emp.__proto__ == Array.prototype)

Array.prototype.mayuri = function () {  // adding new method to prottype
    console.log("Mayuri")
}
emp.mayuri()
employee.mayuri()

console.log(emp.hasOwnProperty('length'))