// let num1=10
// let num2=20
// console.log(num1+num2) //30
// console.log(typeof (num1+num2)) //number


// let fn="mayuri"
// let ln="katwe"
// let skill="javascript"
// console.log(fn+ln) //mayurikatwe
// console.log(fn+ln+skill) //mayurikatwejavacsript
// console.log(typeof(fn+ln+skill))//string


// let firstName="Vedant"
// console.log(firstName) //Vendant
// let lastName="Kulkarni"
// console.log(lastName) //Kulkarni
// // My firstname is Vedant and My lastname is Kulkarni
// console.log('My firstname is'+ firstName + "and My lastname is" + lastName) 
// //My firstname isVedantand My lastname isKulkarni

// console.log('My firstname is '+ firstName + " and My lastname is " + lastName) 
// //My firstname is Vedant and My lastname is Kulkarni

// //*String interpolation*
// //let firstname="mayuri", 'mayuri',`mayuri`

// console.log(`My firstname is ${firstName} and my lastname is ${lastName}`)
// //My firstname is Vedant and my lastname is Kulkarni


// let skill="javascript"
// let person="mayuri"

// //I like javascript and mayuri teach us javascript
// console.log("I like "+ skill+" and "+person+" teach us "+skill)//2 con 5 min

// //I likejavascriptandmayuriteach usjavascript
// //I like javascript and mayuri teach us javascript  //space maintain

// //String interpolation //ES6 feature
// let str=`I like ${skill} and ${person} teach us ${skill}`
// console.log(str)
//I like javascript and mayuri teach us javascript


//String + string =>String
//String + Number => String
//Number +String => String
//Number +Number => Number

// let a=10
// let b="apple"
// let c=30
// let d="mango"

// console.log(b+d) //applemango
// console.log(typeof(b+d)) //string

// console.log(b+a) //apple10
// console.log(typeof(b+a))//string

// console.log(a+d) //10mango
// console.log(typeof(a+d))//string

// console.log(a+c) //40
// console.log(typeof(a+c)) //number

let a=10
let b="apple"
let c=30
let d="mango"

// console.log(a+c+d) //40mango
//number +number => number+string => string
console.log(b+a+c) //apple40   , apple1030 ,
//apple10+30 =>apple1030
console.log(c+d+a) //30mango10 =>string
