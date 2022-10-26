

// For Loop with limited chances and with break 

let otp = Math.ceil(Math.random() * 10000) + 99      // 3-4 digits 
console.log(otp)

for (let i=0; i<=2;i++){
    let otpConfirmation = prompt('Please confirm the one time password ')

    if(otpConfirmation=otp){
        console.log('Paymnet Sucessful')
        break
    }
    else{
        console.log('Sorry ! Your card is blocked , contact customer care for more information')
    }

}
