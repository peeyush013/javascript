class Bank {
    constructor(bal, accountNumber, city, branchName) {
        this.bal = bal
        this.accountNumber = accountNumber
        this.city = city
        this.branchName = branchName
        this.transaction = []
    }
    deposit(amount) {
        this.bal = this.bal + amount
        console.log('Deposit succesful')
        this.transaction.push(amount)
        return this.bal
    }

    withDrawl(amount) {
        if (amount < this.bal) {
            console.log("WithDrawl Sucessful")
            this.bal = this.bal - amount
            this.transaction.push(-amount)
            return this.bal
        }
        else {
            console.log('Insufficient Balance')
            return this.bal
        }
    }

    lastFiveTrans() {
        return this.transaction.slice(-5)
    }

}

let mayuri = new Bank(1000, 2222, "Nashik", "Sinnar")
console.log(mayuri)
let d1 = mayuri.deposit(100)
let w1 = mayuri.withDrawl(400)
let w2 = mayuri.withDrawl(1000)
let d2 = mayuri.deposit(400)
let w3 = mayuri.withDrawl(500)
let d3 = mayuri.deposit(10)
let w4 = mayuri.withDrawl(30)
console.log(d1,w1,w2,d2,w3,d3,w4)

console.log(mayuri.transaction)

// let fiveTrans = mayuri.lastFiveTrans()
// console.log(fiveTrans) //array

// [ 100, -400, 400, -500, 10, -30 ]
// let totalD = mayuri.transaction.filter(function (el) {
//     return el > 0
// })
// console.log(totalD)
// let totalDepositeAmount = totalD.reduce((acc, el) => {
//     return acc + el
// })
// console.log(totalDepositeAmount)

//OR
let TotalDAmount = mayuri.transaction.filter((el) => {
    return el > 0
}).reduce((acc, el) => {
    return acc + el
})
console.log(TotalDAmount)

//===================================================

let totalW = mayuri.transaction.filter((el) => {
    return el < 0
})
console.log(totalW)

let TotalWAmount = totalW.reduce((acc, el) => {
    return acc + el
})
console.log(Math.abs(TotalWAmount))