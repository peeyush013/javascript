
//ES6 class

// class Student {
//     firstName = "Jaya"
//     lastName = "Parekh"
//     rollNumber = 23
//     skill = ["java", "python"]
// }
// let sanjana = new Student()
// console.log(sanjana)

// let sunil = new Student()
// console.log(sunil)

// //Update
// sunil['firstName'] = "Sunil"
// sunil['lastName'] = "raut"
// sunil['rollNumber'] = 40
// sunil['skill'] = ['selenium', 'cypress']
// console.log(sunil)

// //===========================================

// class Student1 {
//     constructor(firstName, lastName, rollNo, skills) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.rollNo = rollNo
//         this.skills = skills
//     }
// }

// let mayuri = new Student1("Mayuri", "Katwe", 34, ["js", "py"])
// console.log(mayuri)

// let persons = [
//     new Student1("ram", "rao", 34, ['javascript', 'SQL']),
//     new Student1("Akhil", "dev", 56, ['django', 'react']),
//     new Student1('rashami', 'sing', 45, "cypress"),
//     new Student1("vaibhav", "kumar", 19, ["jmeter", "C++"])
// ]

// console.log(persons)

// // [
// //     {},
// //     {},
// //     {}
// // ]

// console.log(persons[0])
// for (let i = 0; i < persons.length; i++) {
//     console.log(persons[i])
// }

// persons.forEach(function (el) {
//     //console.log(el) //object
//     for (let key in el) {
//         console.log(key, el[key])
//     }
// })

//================================
// let mayurik = {
//     firstname: "mayuri",
//     lastName: "katwe"
// }
// console.log(mayurik.firstname) //value


// for(let a in mayurik){
//     console.log(a) //keys
// }
// for(let a1 in mayurik){
//     console.log(mayurik[a1]) //value
// }
// for(let a2 in mayurik){
//     console.log(a2,mayurik[a2])
// }

//=============================================

class Student2 {
    setFirstName(FN) {
        this.firstName = FN
    }
    setLastName(LN) {
        this.lastName = LN
    }
    setRollNo(RN) {
        this.rollNo = RN
    }
    setSkills(SK) {
        this.skills = SK
    }
    getFirstName() {
        console.log(this.firstName)
    }
    getLastName() {
        console.log(this.lastName)
    }
    getRollNo() {
        console.log(this.rollNo)
    }
    getSkills() {
        console.log(this.skills)
    }
}

let krishna = new Student2()
console.log(krishna)

krishna.setFirstName('krishna')
krishna.setLastName('pawar')
krishna.setRollNo(23)
krishna.setSkills('java')
console.log(krishna)

krishna.getFirstName()
krishna.getLastName()
krishna.getRollNo()
krishna.getSkills()
