// loop in html with given chances of for loop in html

// only two given chances



let LotteryNumber = Math.ceil(Math.random() * 10) 
console.log(LotteryNumber)


for (let i=0;i<2;i++){
    let ChoosenNumber = prompt('Please choose any number from 1-10')
    if(ChoosenNumber==LotteryNumber){
        console.log('Congrates!!! You Won')
    }
    else{
        console.log('Better Luck Next Time')
    }
}


