// conditional statement 
// 1 input and mutiple output -- conditional statement


// numT > 0 &&  numT <= 5 ====> 5 % discount
// numT > 5  && numT <=10 ====> 10 % discount
// numT > 10 =================> 20 % discount

let numT = 4                      // 5 % discount

if(numT > 0 && numT <= 5){
    console.log('5 % discount')
}
if(numT > 5 && numT <= 10){
    console.log('10 % discount')
}
if(numT > 10){
    console.log('10 % discount')
}


// if(condition){

// }
// else {

// }

// if(numT > 0 && numT <= 5){
//     console.log('5 % discount')
// }
// else if(numT > 5 && numT <= 10){
//     console.log('10 % discount')
// }
// else if(numT > 10){
//     console.log('20 % discount')
// }



// program 2 

let marks  = 66

if(marks > 90){
    console.log('Grade A')
}
else if(marks > 75){
    console.log('Grade B')
}
else if(marks > 65){
    console.log('Grade C')
}
else if(marks > 60){
    console.log('Grade D')

}

// Ternary operator

let a = 10 
let b = 5

// if(a > b){
//     console.log('A is greater')
// }
// else {
//     console.log('B is greater')
// }

// Tenary operator
//a > b ?console.log('A is greater'):console.log('B is greater')

// let age = 18
// let q3 = age >=18 ? "can drive":"cannot drive"
// console.log(q3)

// Truthy or Falsy value

// Falsy => 0 , null , undefined , NaN , false , 7 != 7 , ''
// Truthy => 'a' , "chinmay010" , -22 , 44 , true , 7 == 7, ' ',[],{}

if({}){
    console.log("hello")
}
else {
    console.log('bye')
}

