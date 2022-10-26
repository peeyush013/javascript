// let and const
let x = 10
console.log(x)
x = 100
console.log(x)

const u = 80
console.log(u)
//u = 900

// Arthmetic operator
// + , - , * , / , %

let a = 10
let b = 5

console.log(a+b) // 15
console.log(a-b) // 5
console.log(a*b) // 50
console.log(a/b) // 2
console.log(a%b) //0

let s = 20
let t = 5

console.log(s+t)
console.log(s-t)
console.log(s*t)
console.log(s/t)
console.log(s%t)

//10 pair ------> 50 lines
// function ---->

function Calculator(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
}
Calculator(6,3)
Calculator(12,4)
// Functions 
// program1 
// function without parameter and without return 
function add(){
    console.log(9+9)
}
add()
add()
add()
add()

// program 2
// function with parameter and without return type
function addB(x,y){
    console.log(x+y) 
}
addB(12,6)
addB(12,5)
addB(13,9)

//function with parameter and with return  type
// 100 given   --- 100 - 50 // 100 + 50 //100 * 0.10 
// 100 show

// program3
function addC(x,y){
    return x + y
}
let q1 = addC(12,4)
console.log(q1)
console.log(q1 + q1)
console.log(q1 - q1)
console.log(q1 * 0.10)
console.log(q1 - 5)

// -------- type----------------------------------------->

//Type (property and method) ---------> object (property and method)
// Type --- vehicle --- Audi


// Human -- Type --- amol
// property ---- height , weight , color, type 
// method   ---- talk(), walk()

// Vehicle - type -- Audi 
// property --- color , model, type , regNo 
// method - start() , stop()

// Bank account - ICIC account 
// propery - accNo , accHolder , IFSC code , type
// method - withdrawl() ,deposit()

let x1 = 10 // Number ----->  12,-34,23.6 ,0
console.log(typeof x1)

let x2 = true    // Boolean -- true or false
console.log(typeof x2)

let x3 = "chinmay"  // collection character "chin1" , "chinmay@123","123"
console.log(typeof x3)
