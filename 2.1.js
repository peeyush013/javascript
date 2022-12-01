// let rahul = {
//     firstname:"rahul",
//     lastname:"yadav",
//     age:26,
//     rollnumber:10,
//     display:function(){
//         console.log(this.firstname,this.lastname)
//     }
// }

// let radha ={
//     firstname:"radha",
//     lastname:"yadav",
//     age:26,
//     rollnumber:11,
//     display:function(){
//         console.log(this.firstname,this.lastname)
//     }
// }
// console.log(rahul)
// console.log(radha)
// rahul.display()
// radha.display()

function Student(firstname,lastname,age,rollnumber){
    this.firstname=firstname
    this.lastname=lastname
    this.age=age
    this.rollnumber=rollnumber
    // this.display=function(){
    //     console.log(firstname,lastname)
    // }
}

let dholu = new Student("dholu","kumar",19,20)
// console.log(dholu)

let bholu = new Student('bholu','kumar',20,21)
// console.log(bholu)

// console.log(dholu instanceof Student) 
// console.log(bholu instanceof Student) 

// dholu.display()
// bholu.display()

Student.prototype.display= function(){
    console.log(this.firstname,this.lastname)
}

console.log(dholu) 
console.log(bholu) 
dholu.display()
bholu.display()


//parent.prototype == Object.__proto__

console.log(Student.prototype===dholu.__proto__)
Student.prototype.city="delhi"

console.log(dholu)
console.log(dholu.city) 
console.log(dholu.hasOwnProperty('age'))
console.log(dholu.hasOwnProperty('city'))

let diseases = ['tb','cancer','covid','dangue']  // hard 

let exercise= new Array(4)
console.log(exercise)

exercise[0]='yoga'
exercise[1]='cycling'
exercise[2]='running'
exercise[3]='callisthenics'
console.log(exercise)

console.log(exercise instanceof Array) //true
console.log(diseases instanceof Array) //true

if (Array.prototype==exercise.__proto__){
    console.log('haan')
}
else {
    console.log('naah')
}

Array.prototype.dholu=function(){
    console.log('do exercise be halthy')
}

diseases.dholu()
exercise.dholu()




















