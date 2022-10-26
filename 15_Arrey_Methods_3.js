//for loop

// problem 1 

let marks = [3, 7, 9]
//+2 [5,9,11]
let arr = []
for (let i = 0; i < marks.length; i++) {
    //console.log(i)
    //console.log(marks[i])
    let val = marks[i] + 2
    arr.push(val)
}
console.log(arr) //[ 5, 9, 11 ]

//12. map() => perform operation with each element,index and arrey 
//return =>new array 


let numbers = [11,22,33,44]
//   output- [13,24,35,46]

// numbers.map(function(el,index,arr){
//     console.log(el,index,arr)
// })
let q15 = numbers.map(function(el,index,arr){
    return el + 2
})
console.log(q15)                              // [13,24,35,46]

let tables  = [1,2,3,4,5,6,7,8,9,10] 
// [2,4,6,8,10,12,14,16,18,20]
let q16 = tables.map(function(el,index,arr){
    //console.log(el,index,arr)
    return el * 2
})
console.log(q16)                        // [2,4,6,8,10,12,14,16,18,20]

// problem 2

let names = ["mayuri", "jaya", "sathish", "shravani", "samu", "sham"]
// 4 char=>  ["jaya","samu","sham"]
let len4 = []
for (let i = 0; i < names.length; i++) {
    //console.log(names[i])
    if (names[i].length == 4) {
        len4.push(names[i])
    }
}

console.log(len4)                      //[ 'jaya', 'samu', 'sham' ]

//  filter()
// action - perform action with each element and filter out the result
// return - new filterd arrey
let names1 = ["mayuri", "jaya", "sathish", "shravani", "samu", "sham"]
let s1=names1.filter(function(el,index,arr){
    return el.length==4
})
console.log(s1) //[ 'jaya', 'samu', 'sham' ]

let marks1=[23,11,9,55,77,45,34]
let result = marks1.filter(function (el, index, arr) {
    return el>20
})
console.log(result) //[ 23, 55, 77, 45, 34 ]

//=================================================================


//problem 3
let num1 = [4, 8, 10]
let sum = 0  //4 //12  //22
for (let i = 0; i < num1.length; i++) {
    sum = sum + num1[i]  //0+4 = 4   ,  4+8  =12  , 12+10 = 22
}
console.log(sum)//22

//   reduce()
// action - perform action with each element , index or arrey
// return - number

let sum1=num1.reduce(function (acc, el, index, arr) {
    return acc + el
},0)                        // default value of acc is 0
console.log(sum1) // 22
