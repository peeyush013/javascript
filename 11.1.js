// let , var  const 

//                 let               var                  const
//  scope-         block{}          function()            block{}

//  reassign-      possible         possible              not possible

// redeclaration   not possible     possible              not possible



{
    let a = 1
    console.log(a)  //1
}
// console.log(a)  // error

let b = 2
{
 let b=3
 console.log(b)   //3
}
console.log(b)    //2


let c = 1
{
    console.log(c)  //1
    c = 2
    console.log(c) //2
}
console.log(c) //2



{
    const d = 100
}

// console.log(d)  // error not defined


const e = 10

{
    const e = 12
    console.log(e)  //12
   
}
console.log(e) //10

const f = 120
{
    console.log(f) //120
    // f=100
    // console.log(f) // error
}
console.log(f) // 120




{
    var g = 50

}
console.log(g) // 50 , no effect of blocks only scope is function

var g = 100
console.log(g)   // 100 

g = 150
console.log(g) // 150



var h = 200

function maths (){
    console.log(h) //20
}
maths()


var i = 10
function maths1(){
   var i = 20
    console.log(i)  // 20
}
console.log(i) // 10
maths1()       //20
console.log(i) //10



var j = 10
function maths2(){
    j = 20
    console.log(j)  // 20
}
console.log(j) // 10
maths2()       //20
console.log(j) //20
