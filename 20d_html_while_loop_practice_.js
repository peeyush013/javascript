//infinite chance  => dident know duration=>  while loop

// let randomNumber = Math.floor(Math.random() * 5) + 1
// console.log(randomNumber) //5
// let userInput  //3
// //console.log(userInput)
// // userInput = 4
// // console.log(userInput) //4
// while (userInput != randomNumber) { //3!=5   4!=5 5!=5
//     userInput = prompt('enter any number between 1-5')  //3 //4  //5
//     if (userInput == randomNumber) {  //3==5  4==5  5==5
//         console.log('Guess is correct!!!')
//     }
//     else {
//         console.log('Guess is incorrect')
//     }

// }

// html while loop , infinite chance

let LotteryNumber = Math.ceil(Math.random() * 10)
console.log(LotteryNumber)

let ChoosenNumber

while (ChoosenNumber!=LotteryNumber){
    ChoosenNumber=prompt('Choose any number from 1 to 10')

    if (ChoosenNumber==LotteryNumber){
        console.log('Congrates!!! You Won')
    }
    else{
        console.log('Better Luck Next Time')
    }
}
