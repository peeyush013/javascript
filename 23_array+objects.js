let students = [{
    firstName: "Mayuri",
    lastName: "Katwe",
    age: 24,
    city: "Nashik",
    skills: ["Javascript", "Cypress", "python"]
}, {
    firstName: "Vaibhav",
    lastName: "Raut",
    age: 30,
    city: "Jalgoan",
    skills: ["SQL", "Selenium", "MangoDB"]
}, {
    firstName: "Sweta",
    lastName: "Kulkarni",
    age: 32,
    city: "Sangamner",
    skills: ["Java", "Cypress", "Manual"]
}, {
    firstName: "Sam",
    lastName: "Jain",
    age: 40,
    city: "Pune",
    skills: ["Java", "python", 'React']
}]

// let student = [{}, {}, {}, {}]
// let num=[12,34,56,78]
// let a={}

//How many element present in student
// console.log(students.length)
// console.log(students[3])

//Change lastname from kulkarni to jadhav
// console.log(students[2].lastName="Jadhav")
// console.log(students[2])

//Progarm 1
//Retrive the fullName of all student
//For loop
// for (let i = 0; i < students.length; i++) {
//     //console.log(i)
//     //console.log(students[i])
//     //console.log(students[i].firstName + students[i].lastName)

//     //OR
//     console.log(`${students[i]['firstName']} ${students[i].lastName}`)
// }

//ForEach()
// students.forEach(function (el) {
//     //console.log(el)
//     console.log(el.firstName, el["lastName"])
// })

//Program 2
//Find the full Name of student whoes age is greter that 25
// students.forEach(function (el) {
//     if (el.age > 25) {
//         console.log(el['firstName'] + " " + el['lastName'])
//     }
// })

//by using filter method
// let above25 = students.filter(function (el) {
//     return el.age > 25
// })
// //console.log(above25) //[{},{},{}]
// above25.forEach(function (el) {
//     console.log(el.firstName + el.lastName)
// })

//Program 3
//find the sum of all student age
let sum = students.reduce(function (acc, el) {
    //console.log(el) //object
    return acc + el.age
}, 0)
console.log(sum)

//Avg => sum/number of element
let AvgOfage = sum / students.length
console.log(AvgOfage)