
// program 1
// class Person {
//     firstName = "chinmay"
//     lastName = "deshpande"
//     age =33
//     rollNo = 44

// }

// let amol = new Person()
// amol.firstName = "amol"
// amol.lastName = "rao"
// amol.age = 45
// amol.rollNo = 77
// console.log(amol)

// let chinmay = new Person()
// console.log(chinmay)

// program 2
// updating the object properties at object creation only

// class Person {
//     constructor(firstName,lastName,age,rollNo){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age 
//         this.rollNo = rollNo
//     }
// }
// let poorva = new Person("poorva" ,"vyas","29","34")
// let chinmay = new Person("chinmay" ,"deshpande","23","34")
// console.log(poorva)
// console.log(chinmay)

// program 3


// class Person {
//     constructor(firstName,lastName,age,rollNo){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age 
//         this.rollNo = rollNo
//         this.display = function(){
//             console.log(this.firstName + this.lastName)
//         }
//     }
// }
// let poorva = new Person("poorva" ,"vyas","29","34")
// let chinmay = new Person("chinmay" ,"deshpande","23","34")
// console.log(poorva)
// console.log(chinmay)
// // method gets attached to every object


// program 4

class Person {
    constructor(firstName,lastName,age,rollNo){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age 
        this.rollNo = rollNo   
    }
    display(){
        console.log(this.firstName + this.lastName)
    }
}
let poorva = new Person("poorva" ,"vyas","29","34")
let chinmay = new Person("chinmay" ,"deshpande","23","34")
console.log(poorva)
console.log(chinmay)

poorva.display()
chinmay.display()


// Object.create

// Object literal 
// function constructor
// es6 class 
// object.create()


// Program2
//let a = {}

// let abhisha = Object.create(a) // __proto__
// console.log(abhisha)
// abhisha.firstName = "abhisha"
// abhisha.lastName = "burande"
// abhisha.age = 34
// abhisha.roll = "67"
// console.log(abhisha)

let a = {
    init:function(firstName,lastName,age,roll){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.rollNo =roll
    },
    display:function(){
        console.log(this.firstName + this.lastName)
    },
    language:'hindi'

}

let abhisha = Object.create(a) // .__proto__
console.log(abhisha)
abhisha.init('a','c',4,4)
console.log(abhisha)
console.log(abhisha.language)





