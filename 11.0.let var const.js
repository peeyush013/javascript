// let , var  const 

//                 let               var                  const
//  scope-         block{}          function()            block{}

//  reassign-      possible         possible              not possible

// redeclaration   not possible     possible              not possible

//let var const => keywards

// let x = 10
// console.log(x) //10

// x = 100
// console.log(x) //100

// const y = 200
// console.log(y) //200

//Scope
//let and const block scope

//Program 1
//{} => block

// {
//     let z = 20
//     console.log(z) //20
// }
// console.log(z) //error

//Program 2
// let y = 200 //global
// {
//     let y = 500
//     console.log(y) //500
// }
// console.log(y)//200

//Progarm 3
// let x = 900  //200
// {
//     console.log(x) // 900
//     x = 200
//     console.log(x) //200
// }
// console.log(x)//200


//Program 4
// {
//     const x1 = 300
// }
// console.log(x1) //error

//Progarm 5
// const p1 = 100
// {
//     const p1 = 400
//     console.log(p1) //400
// }
// console.log(p1) //100

//Program 6
// const k = 600
// {
//     console.log(k) // 600
//     k = 999 //update
//    console.log(k) //error
// }
// console.log(k)  //600

//Program 7
// {
//     var a = 222
// }
// console.log(a) //222

//let and const having block scope
//Var dont have block scope
//var having function scope

//Program 8
// var num = 100  //globally
// function add() {
//     var num = 200 //new memory
//     console.log(num)//200
// }

// console.log(num) //100
// add()
// console.log(num)//100

//program 9
// function init() {
//     var t1 = 999
//     console.log(t1) //999
// }
// init()
// console.log(t1) //error


//let => reassign possible
// let a1 = 200 //300
// a1 = 300  //update
// console.log(a1)  //300

// console.log(a1) //300

//const => reassign is not possoble
// const y1=888
// console.log(y1) //888
// y1=444 //update
// console.log(y1) //error

//var => reassign is possible
// var w1=30
// console.log(w1) //30
// w1=678
// console.log(w1) //678


//let => redeclaration is not possible
// let a=20
// let a=30
// console.log(a)

//const => redeclaration is not possible
// const y2=100
// const y2=700
// console.log(y2)

//var =>redeclaration is possible
// var m1=100
// var m1=900
// console.log(m1) //900


