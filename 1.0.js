//OOPS

//Create object with class  => templates
//to create object more proper and secure way => oops

//class 10th std => 100

//Object literal
let mayuri = {
    firstName: "Mayuri",
    lastName: "Katwe",
    age: 23,
    rollNumber: 43,
    family:{
        father:"xyz"
    },
    display: function () {
        console.log(this.firstName + this.lastName)
    }
}

let ramesh = {
    firstName: "Ramesh",
    lastName: "Mule",
    age: 50,
    rollNumber: 02,
    display: function () {
        console.log(this.age)
    }
}

// console.log(mayuri.rollNumber) //43
// mayuri.firstName="Vaibhav"
// console.log(mayuri.lastName)

// console.log(ramesh.age) //50

mayuri.display()
ramesh.display()


//class => template
//Encapsulation
//inheritance
//polymophism
//Abstraction

//1. function constructor
//2. Es6 class
//3. Object.create

//1. function constructor

function Person(firstName, lastName, age, rollNumber) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.rollNumber = rollNumber
    this.display = function () {
        console.log(`${this.rollNumber} ${this.age}`)
    }
}
let sanam = new Person("sanam", "puri", 45, 23)
console.log(sanam)

//to add property
// sanam.skill = "singing"
// console.log(sanam)

let ganesh = new Person('ganesh', 'dev', 68, 12)
console.log(ganesh)

let sayali = new Person('sayali', 'raut', 32, 01)
console.log(sayali)

// ganesh.display() 
// sayali.display()
// sanam.display()

//solution
Person.prototype.display = function () {
    console.log(this.firstName + this.lastName)
}
// prototype is the fix property which is present in all the objets created through functions
ganesh.display()
sayali.display()
sanam.display()

console.log(ganesh instanceof Person) //true
console.log(sayali instanceof Person)
console.log(sanam instanceof Person)

console.log(pranali instanceof Person) //false

console.log(ganesh.__proto__ == Person.prototype)
console.log(sayali.__proto__ == Person.prototype)
console.log(sanam.__proto__ == Person.prototype)

