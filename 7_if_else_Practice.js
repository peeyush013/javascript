// conditional statement 
// 1 input and mutiple output -- conditional statement


// height > 5 &&  height <= 5.5 ====> 55kg
//height > 5.5  && numT <=6 ====> 70kg
// height > 6 =================> 80kg

let height = 6.1                    // 75kg 80kg

if(height > 0 && height <= 5){
    console.log('55kg')
}
if(height > 5.5 && height <= 6.5){
    console.log('75kg')
}
if(height > 6){
    console.log('80kg')
}


// if(condition){

// }
// else {

// }

let weight= 73                              // 5.5 feet

if(weight > 60 && weight <= 70){
    console.log('5feet')
}
else if(weight > 65 && weight <= 75){
    console.log('5.5feet')
}
else if(weight > 70){
    console.log('6feet')
}



// program 2 

let marks  = 100                      // grade a grade b grade c

if(marks > 90){
    console.log('Grade A')
}
if(marks > 75){
    console.log('Grade B')
}
if(marks > 65){
    console.log('Grade C')
}

let marks1 = 100                    // Grade A

if(marks1 > 90){
    console.log('Grade A')
}
else if(marks1 > 75){
    console.log('Grade B')
}
else if(marks1 > 65){
    console.log('Grade C')
}

// Ternary operator

let a = 10 
let b = 5

if(a > b){
    console.log('A is greater')
}
else {
    console.log('B is greater')
}

// Tenary operator
a > b ? console.log('A is greater') : console.log('B is greater')

let age = 18
let q3 = age >=18 ? "can drive":"cannot drive"
console.log(q3)

// Truthy or Falsy value

// Falsy => 0 , null , undefined , NaN , false , 7 != 7 , ''
// Truthy => 'a' , "chinmay010" , -22 , 44 , true , 7 == 7, ' ',[],{}

if({}){
    console.log("hello")
}
else {
    console.log('bye')
}

if (false) {
    console.log('Falsly')
}
else {
    console.log('Truthy')
}


