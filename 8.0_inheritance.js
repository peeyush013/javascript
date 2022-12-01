

// class Student {
//     fullName = "chinmay deshpande"
//     idNo = 123456789

//     displayName(){
//         console.log(this.fullName)
//     }
// }

// class Teacher extends Student {
//     // 2 property 
//     // 1  method
//     salary = 10000

// }

// class Professor extends Teacher {
//     specialization = "english"
// }


// let amol = new Professor()
// // property 
// console.log(amol.specialization)
// console.log(amol.salary)
// console.log(amol.fullName)
// console.log(amol.idNo)

// // method
// amol.displayName()


// let chinmay = new Teacher()
// console.log(chinmay.salary)

// // Inheritance
// console.log(chinmay.fullName)
// console.log(chinmay.idNo)

// //Calling parent's method
// chinmay.displayName()

// let amol = new Student()
// console.log(amol)


// Program 2 (parent has constructor and child has no constructor)

class Student {
    constructor(firstName,lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

class Teacher extends Student {
    salary = 1000
}

let amol2 = new Teacher("amol2","rao2")
console.log(amol2.firstName)
console.log(amol2.lastName)
console.log(amol2.salary)
amol2.displayName()

// let ram = new Student("amol","rao")
// ram.firstName
// ram.lastName
// ram.displayName()

// program3 (parent is having constructor and child also has constructor)

class Student {
    constructor(firstName,lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

class Teacher extends Student {
    constructor(firstName,lastName,salary){
        super(firstName,lastName)
        this.salary = salary
    }

}

let chinmay2 = new Teacher("amolQ","raoQ",10000)