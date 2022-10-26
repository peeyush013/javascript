let students = [{
    firstName: "Mayuri",
    lastName: "Katwe",
    age: 24,
    city: "Nashik",
    skills: ["Javascript", "Cypress", "React"],
    marks: 30
}, {
    firstName: "Vaibhav",
    lastName: "Raut",
    age: 30,
    city: "Jalgoan",
    skills: ["SQL", "Selenium", "MangoDB"],
    marks: 80
}, {
    firstName: "Sweta",
    lastName: "Kulkarni",
    age: 32,
    city: "Sangamner",
    skills: ["Java", "Cypress", "Manual", "JS"],
    marks: 45
}, {
    firstName: "Sam",
    lastName: "Jain",
    age: 40,
    city: "Pune",
    skills: ["Java", "python", 'React'],
    marks: 70
}, {
    firstName: "Malti",
    lastName: "sarode",
    age: 12,
    city: "Nashik",
    skills: ["c++", "sql", 'c#', 'Django', "MangoDB", "React"],
    marks: 50
}]

//Program 4
//Find firstName of student whoes city is nashik
// students.forEach(function (el) {
//     if (el.city == "Nashik") {
//         console.log(el.firstName)
//     }
// })

//Program5
//Add salesforce into each skill
// students.forEach(function (element) {
//     //element.skills.push("Salesforce")
//     element.skills.unshift('Salesforce')
// })
// console.log(students)

///====================================
//only Mayuri:10

// let a1 = students.filter(function (el) {
//     return el.firstName == "Mayuri"
// })
// console.log(a1) //[{}]
// a1.forEach(function(el){
//     console.log(el.firstName + ":" +el.skills.length)
// })

//=====================================
//Program 6
//Mayuri :4
//--
//Malati:3
// students.forEach(function (el) {
//     console.log(el.firstName + ":" + el.skills.length)
// })

//=======================================
//Program 7
//firstName city = Nashik , Skill=React
// students.forEach(function (el) {
//     if (el.city == "Nashik" && el.skills.includes('React')) {
//         console.log(el.firstName)
//     }
// })

//OR
// let y11 = students.filter(function (el) {
//     return el.city == "Nashik" && el.skills.includes('React')
// })
// console.log(y11)
// y11.forEach(function (el) {
//     console.log(el.firstName)
// })

//==========================================
//Program 8
//firstName: skill => name "S" => starts
// students.forEach(function (el) {
//     if (el.firstName.startsWith('S')) {
//         console.log(el.firstName + ":" + el.skills.length)
//     }
// })

// let s1 = students.filter(function (el, index, arr) {
//     return el.firstName.startsWith('S')
// })
// console.log(s1)
// s1.forEach(function (el) {
//     console.log(el.firstName + ":" + el.skills.length)
// })

//===========================================================

//Program 9
//Country => india
// students.forEach(function (el) {
//     //el.Country = "India"
//     el['country'] ="India"
// })
// console.log(students)

//=======================================================
//Program 10
//Marks<50 => 10 add  => marks>50 => true => marks sum
//step1
students.forEach(function (el) {
    if (el.marks < 50) {
        el.marks = el.marks + 10
    }
})
console.log(students)

//Step2
let above50 = students.filter(function (el) {
    return el.marks > 50
})
console.log(above50)

//Step3
let sumAll=above50.reduce(function (acc, el) {
    return acc + el.marks
}, 0)
console.log(sumAll)
console.log(sumAll/above50.length)
