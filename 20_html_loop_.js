console.log(Math.floor(5.5)) //5
console.log(Math.floor(14.1)) //14
console.log(Math.floor(-19.2)) //-20

console.log(Math.ceil(7.9)) //8
console.log(Math.ceil(-67.90)) //-67

console.log(Math.round(3.5))//4
console.log(Math.round(3.2)) //3

console.log(Math.random()) //0.0-0.99

console.log(Math.random()*5) //
// 0.0-0.99*5 => 0.0-4.99

// 1-5
console.log(Math.floor(Math.random()*5)) //0-4

console.log(Math.floor(Math.random()*5)+1) //1-5

// Guess Number => user one change
let randomNumber1 = Math.floor(Math.random() * 5) + 1
console.log(randomNumber1)

let userInput = prompt('Enter any number between 1-5')
console.log(userInput)

if(userInput==randomNumber1){
    console.log('Guess is Correct!!!')
}
else{
    console.log('Guess is Incorrect....')
}

// userInput=> prompt() => window() browser=> html

///////////////////////////////////////////////////////////////////////
// 3 chance => duration=> forloop(without break)

let randomNumber2 = Math.floor(Math.random() * 5) + 1
console.log(randomNumber2)

for (let i = 0; i < 3; i++) {
    let userInput = prompt('Enter any number between 1-5')
    if (userInput == randomNumber2) {
        console.log('Guess is correct')
    }
    else {
        console.log('Guess is Incorrect')
    }
}

// =================================================
// 3 chnace with break

let randomNumber = Math.floor(Math.random() * 5) + 1
console.log(randomNumber)

for (let i = 0; i < 3; i++) {
    let userInput = prompt('Enter any number between 1-5')
    if (userInput == randomNumber) {
        console.log('Guess is correct')
        break
    }
    else {
        console.log('Guess is Incorrect')
    }
}

// =================================================================

// infinite chance  => dident know duration=>  while loop

let randomNumber3 = Math.floor(Math.random() * 5) + 1
console.log(randomNumber3) //5
let userInput1  //3
//console.log(userInput)
// userInput = 4
// console.log(userInput) //4
while (userInput != randomNumber3) { //3!=5   4!=5 5!=5
    userInput = prompt('enter any number between 1-5')  //3 //4  //5
    if (userInput == randomNumber) {  //3==5  4==5  5==5
        console.log('Guess is correct!!!')
    }
    else {
        console.log('Guess is incorrect')
    }

}


let RandomNumber = Math.floor(Math.random()*9) +1 
console.log(RandomNumber)

let UserInput =  prompt('enter any number between 0-10 ')

if(UserInput==RandomNumber){
    console.log('guess is correct')
}
else{
    console.log('guess is incorrect')
}


