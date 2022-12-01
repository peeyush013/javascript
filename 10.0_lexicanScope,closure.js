//Lexical scope and closure

// let human = {
//     firstName: "Mayuri",
//     lastName: "Katwe",
//     age: 23,
//     display: function () {
//         console.log(firstName)
//     }
// }
// human.display() //error

// let human = {
//     firstName: "Mayuri",
//     lastName: "Katwe",
//     age: 23,
//     display: function () {
//         console.log(this.firstName)
//     }
// }
// human.display()  //Mayuri

//========================================

//lexical scope
//function inside function , parent function variable are accessible in child function

// function add() {
//     let a = 20
//     let b = 30
//     console.log(a + b)

//     function add1() {
//         let c = 50
//         let d = 100
//         console.log(c + d) //150
//         console.log(a + b + c + d) //200

//         function add2() {
//             let e = 300
//             let f = 500
//             console.log(e + f + a + b + c + d) //all parent varible are accessible
//         }
//         add2()
//     }
//     add1()
// }
// add()

//==========================================
// function add() {
//     let a = 20
//     let b = 30
//     console.log(a + b)
//     console.log(c+d) //not accessible

//     function add1() {
//         let c = 50
//         let d = 100
//         console.log(c + d) 
//         console.log(a + b + c + d)

//         function add2() {
//             let e = 300
//             let f = 500
//             console.log(e + f + a + b + c + d) 
//         }
//         add2()
//     }
//     add1()
// }
// add()

//=========================================================

// let e = 10 //global access
// let f = 20
// function init() {
//     let a = 5
//     let b = 2
//     console.log(a + b) //7
//     console.log(e + f) //30


//     function init1() {
//         let e=900
//         let f=300
//         let p = 200
//         let q = 300
//         console.log(a + b + p + q)
//         console.log(a + b + e + f)

//         function init2() {
//             let e = 1000
//             let f = 500
//             console.log(e + f) //1500
//         }
//         init2()
//     }
//     init1()
// }
// init()

//=============================================================

//closure

// function add1() {
//     let a = 8
//     let b = 10
//     console.log('hello')
//     return a + b
//     console.log(a+b)

// }
// let a = add1()
// console.log(a) //18


function addD(){
    let a = 100
    let b = 50
    console.log(a+b)    //150

    return function(){
        console.log(a-b)   // 50
    }

}

let q2 = addD()   
console.log(q2)  // will return function
q2()