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
//Find firstName lastName of student whoes city is nashik
// for(let i=0;i<students.length;i++ ){
//     if(students[i].city == 'Nashik'){
//         console.log(students[i].firstName)
//     }
    
//  }
 //
//  students.forEach(function(el){
//     if(el.city == 'Nashik'){
//         console.log(el.firstName,el.lastName)   
//     }
  
//  })


//Program5
//Add salesforce into each skill
students.forEach(function(el){
console.log(el.skills.push('salesforce'))
})
// console.log(students)

//Program 6
//Mayuri :4
//--
//Malati:3
// students.forEach(function(el){
//     console.log(el.firstName + ':' + el.skills.length)
// })

//Program 7
//firstName city = Nashik , Skill=sql

// students.forEach(function(el){
//     if(el.city == 'Nashik' && el.skills.includes('sql')){
//         console.log(el.firstName)
//     }
// })

//Program 8
//firstName: skill => name "i" => ends

// students.forEach(function(el){
//     if(el.firstName.endsWith('i')){
//         console.log(el.firstName + ':'+el.skills)
//     }

// })
 
// //Program 9
// //language => hindi
// students.forEach(function(el){
//     el.language = 'hindi'
    
// })
// console.log(students)

//Program 10
//Marks<50 => 10 add  => marks>50 => true => marks sum

// students.forEach(function(el){
//     if(el.marks <50)
//     el.marks = el.marks + 10
// })

// y = students.filter(function(el){
//     return el.marks>50
// })

// z = y.reduce(function(acc,el){
//     return acc + el.marks
// },0)
// console.log(z)






