// loop in html basic

let LotteryNumber = Math.ceil(Math.random() * 10)
console.log(LotteryNumber)


let ChoosenNumber = prompt('Please choose any number from 1-10')

if (ChoosenNumber = LotteryNumber) {
    console.log('Congrates!!! You Won')
}
else {
    console.log('Better Luck Next Time')
}
