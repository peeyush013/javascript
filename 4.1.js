class BankDetails{
    constructor(fullName,accountNumber,branchName,balance){
        this.fullName=fullName
        this.accountNumber=accountNumber
        this.branchNamebranchName
        this.balance=balance
        this.transactions=[]
    }
    deposits(amount){
        this.balance=this.balance+amount
        console.log(' paisa aaya hai')
        this.transactions.push(amount)
        return this.balance
    }
    withdrawls(amount){
        if(amount<this.balance){
            this.balance=this.balance-amount
            console.log('paisa cut gya')
            this.transactions.push(-amount)
            return this.balance
        }
        else {
            console.log('itna paisa nahi hai')
            return this.balance
        }
    }
    lastThreeTransactions(){
        console.log('pichle din ka khata')
        return this.transactions.slice(-3)
    }
}

let palak= new BankDetails('palakSharma',2001,'margoa',500)
console.log(palak)


t1=palak.deposits(100)
t2=palak.withdrawls(200)
t3=palak.deposits(200)
t4=palak.deposits(300)
t5=palak.withdrawls(1000)
t6=palak.withdrawls(400)
console.log(t1,t2,t3,t4,t5,t6)

console.log(palak.transactions)


lastDayTransactions=palak.lastThreeTransactions()
console.log(lastDayTransactions)

let totalCreditAmount=palak.transactions.filter(function(el){
    return el>0
}).reduce(function(acc,el){
    return acc+el
})
console.log(totalCreditAmount)



let totalDebitAmount=palak.transactions.filter(function(el){
    return el<0
}).reduce(function(acc,el){
    return acc+el
})
console.log(totalDebitAmount)











