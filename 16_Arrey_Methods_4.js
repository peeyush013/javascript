//forEach()
//action => perform action with each element
//return => ntg

let names = ['mayuri', 'sweta', 'ram', 'sita']
//welcome mayuri
//welcome sweta
//welcome ram

for(let i=0;i<names.length;i++){
    console.log(`Welcome ${names[i]}`)
}

names.forEach(function (el, index, arr) {
    console.log(`Welcome ${el}`)
})

//some()
// action - check with each elemt if present any 
// return - boolean ( true or false )

let array1 = [2, 3, 4, 5, 6, 7, 8, 9]
let b1=array1.some(function(el,index,arr){
    return el>5
})
console.log(b1)                 // true

//every()
// action - check with each elemt if present all
// return - boolean ( true or false )
let c1 = array1.every(function (el, index, arr) {
    return el > 5
})
console.log(c1)                   // false

//find()
// action - perform action with each element till find the first required element
// return - required single element
let marks2 = [11, 22, 20, 55, 66, 77, 88, 99]
let s1=marks2.find(function (el, index, arr) {
    return el > 30
})
console.log(s1)

//findIndex
let s2=marks2.findIndex(function (el, index, arr) {
    return el > 30
})
console.log(s2) //3



let p1=marks2.findIndex((el)=>{
    return el>30
})
console.log(p1)
