// 1. fuction declaration
// function sub(a,b){
//     return a+b
// }
// let sum=sub(10,20)
// console.log(sum)

// //2. function expression
// let sub1 = function (a, b) {
//     return a + b
// }
// let sum1 = sub(10, 20)
// console.log(sum1)

// //3. arrow function //Es6
// let sub2 = (a, b)=> {
//     return a + b
// }
// let sum2 = sub(10, 20)
// console.log(sum2)

// type
let a = 10
console.log(typeof a) //number

let fruit = 'apple'
console.log(typeof fruit)

let firstName = "Mayuri"
console.log(typeof firstName)

let student = `Rupali`
console.log(typeof student)

let aa = false //boolean  =>true /false
console.log(typeof aa)

let x1 = true
console.log(typeof x1)

// operator 
// arithmatic operator =>+,-,*,/,%

// comparision operator => boolean (true/false)
// < , > , <= ,>=,!=,==,===,!==
console.log(2 > 7) //false
console.log(10 > 5) //true
console.log(100 < 999) //true
console.log(4 == 4) //true
console.log(3 <= 3) //true
console.log(22>=21) //true

console.log(5!='5')


console.log(typeof 10) //number
console.log(typeof '10') //string

console.log(10=='10') //value compare =>true
console.log(22==='22') //value compare and datatype(type) compare =>false

console.log(5!='5') //
console.log(5!='5') //false

console.log(10=='10')//value =>true
console.log(20==='20') //false

console.log(10!='10')//false
console.log(10!=='10')//true

// !== ,=== //strict comparison=>value + type
// != //dynamic comparison =>only value compare

console.log(10==10)//true
console.log(10===10)//true

// logical operator
// OR
// AND
// NOT

// AND => &&(multiplication)
// true true => true
// false true =>false
// true false =>false
// false false =>false

console.log(7 === 7 && 6 !== '6') //true
console.log(7 == '7' && 6 <= 5) //false
console.log(6 > 7 && 6 === '6') //false
console.log(10 != '10' && 10 >= 5) //false

// OR ||
// true true => True
// false true => True
// true false => True
// false false => Flase

console.log(20=='20' || 7!=='7') //true
console.log(6=='6' || 7<=5) // true
console.log(200>100 || 20!=20) //true
console.log('30'!=30 || 60!==60) //false

// Not !
//  it makes boolean value changed 
//  it makes true to false and false to true

console.log(!(4===4))
console.log(!(8!=='8'))


