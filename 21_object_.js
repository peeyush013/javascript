
let info = ['mayuri', 'katwe', 23, 34]

//Object
//object does not store values with the help of index
//Property

let info1 = {
    //Key:value =>property
    firstName: 'Mayuri',
    lastName: "Katwe",
    age: 24,
    rollNumber: 34
}

//1. retrive(dot notation, bracket notation)
//dot notation
console.log(info1.firstName) //'Mayuri'
console.log(info1.rollNumber) //34

// //bracket notation
 console.log(info1["firstName"]) //Mayuri
console.log(info1['lastName'])//Katwe


//2. Add(create) (dot notation, bracket notation)
// info1.city = "Nashik"
// console.log(info1)

// info1['Language'] = "Marathi"
// console.log(info1)

//3. update
// info1.firstName = 'Vaibhav'
// console.log(info1)

// info1['age'] = 44
// console.log(info1)

// //4. delete
// delete info1.firstName
// console.log(info1)

// delete info1['rollNumber']
// console.log(info1)

//CRUD operation

//==============================================

// let info1 = {
//     //Key:value =>property
//     firstName: 'Mayuri',lastName: "Katwe",
//     age: 24,
//     rollNumber: 34.
  
// }
//info1['firstName']


//to retrive all keys from the object
// for (let key in info1) {
//     console.log(key)
// }

//to retrive values(dot notation not support here)
// for (let key in info1) {
//     console.log(info1[key])
// }

// //key value
// for(let key in info1){
//     console.log(key,info1[key])
// }