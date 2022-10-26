// let student=['mayuri','ram','sham','sita']
// console.log(student.length)//4
// console.log(student[3]) //'sita'

// console.log(student[student.length-1]) //'sita'

// console.log(student.length-1) //3(last index)


// // let rollNumber=[20,10,22,44,77,99,101]
// // console.log(rollNumber.length) //7
// // console.log(rollNumber.length-1)//6(last index)
// // console.log(rollNumber[rollNumber.length-1]) //101

// // //5. Includes()
// // //action => check whether ele present in array or not
// // //return => boolean

let city=['nashik','pune','aurangabad','sangamner']
let r1=city.includes('Pune')
console.log(r1)

// // //6. indexOf()
// // //action => return index
// // //return =>number

let s1=city.indexOf('aurangabad')
console.log(s1)

// // //7. flat()
// // //let arr=[] //blank array

let arr=[[2,3,4],[8,9,5],[11,44,55]]
// // console.log(arr[0]) //[2,3,4]

// // //action => convert all element into single array
// // //return =>new array
let a1=arr.flat()
console.log(a1) //[2,  3,  4,  8, 9,5, 11, 44, 55]

// //8. join()
// //action => join element of array with given parameter
// //return => string

let city2 = ['nashik', 'pune', 'aurangabad', 'sangamner']
let result = city2.join('-')
console.log(result)//nashik-pune-aurangabad-sangamner
console.log(typeof result)

let aa = [2, 3, 4, 8, 9, 5, 11, 44, 55]
let y1=aa.join(9999)
console.log(y1) //2&3&4&8&9&5&11&44&55
console.log(typeof y1) //

let arr1=[[2,3,4],[8,9,5],[11,44,55]]
let a12=arr1.join('@')
console.log(a12)//2,3,4@8,9,5@11,44,55

//9. reverse()
//action => reverse the array
//return => new array
let city1 = ['nashik', 'pune', 'aurangabad', 'sangamner']
let result1=city1.reverse()
console.log(result1) //[ 'sangamner', 'aurangabad', 'pune', 'nashik' ]

//10. sort 
// action - arrange elements in alphabatic or numeric order
// return- new arrey

vegetables = ["tomato","potato","brinjal","cabbage"]
let q11 = vegetables.sort()
console.log(q11)                                           // ['brinjal', 'cabbage', 'potato', 'tomato']

11. // concat()
// action - joins the two arrey and made single arrey
// return - new joined arrey

vegetables = ["tomato","potato","brinjal","cabbage"]
vegetable2 = ["carrot","brinjal"]
let q12 = vegetables.concat(vegetable2)
let q13 = vegetable2.concat(vegetables)
console.log(q12)                   // [ 'tomato', 'potato', 'brinjal', 'cabbage', 'carrot', 'brinjal' ]
console.log(q13)                   // [ 'carrot', 'brinjal', 'tomato', 'potato', 'brinjal', 'cabbage' ]








