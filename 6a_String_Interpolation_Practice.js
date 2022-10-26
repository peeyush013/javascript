// string interpolation

let a = 'peeyush'
let b = 'sharma'
let c = 'anuj'
let d = 'sharma'
let e = '10'
let f = '0.5'    // sring
let g = 1
let h = -1

// number + number = number 
// number + string = string
// string + number = string 
// string + string = string

console.log(a+b)                 // peeyushsharma
console.log(a+f)                 // peeyush0.5
console.log(e+c)                 // 10anuj
console.log(e+f)                 //100.5 
console.log(g+h)                 // 0


// output = my name is peeyush
console.log('my name is' +a)  // no space
console.log('my name is '+a)  // used space

// output = i am peeyush sharma and he is anuj sharma
console.log('i am '+ a + b + ' and he is '+ c + d)   // i am peeyushsharma and he is anujsharma

// we need to use string interpolation to remove the problem of space
// `${}`

// output = i am peeyush sharma and he is anuj sharma

console.log(`i am ${a} ${b} and he is ${c} ${d}`)






