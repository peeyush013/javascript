// object literal
// let mobilePhone= {
//     brand:'oneplus',
//     colour:'blue',
//     price:30000,

//     displayname : function (){
//         console.log(this.brand,this.colour)
//     }
// }

// console.log(mobilePhone)
// mobilePhone.displayname()

// function cunstructor

// function Mobile (model,colour,price){
//     this.model=model
//     this.colour=colour
//     this.price=price
//     // this.displayName= function(){
//     //     console.log(model,colour)
//     // }

// }

// let oneplus= new Mobile ('nord','blue',30000)
// // console.log(oneplus)
// // oneplus.displayName()

// Mobile.prototype.displayName=function(){
//     console.log(this.model,this.colour)
// }
// console.log(oneplus)
// oneplus.displayName()



// console.log(Mobile.prototype===oneplus.__proto__)


// class Mobile  {
//     model='oneplusNord'
//     price='100000'

// }
// let samsung = new Mobile()
// console.log(samsung.model)

// e6class

// class Mobile{
//     constructor(brandName,modelName,colour,price){
//         this.brandName=brandName
//         this.modelName=modelName
//         this.colour=colour
//         this.price=price
//     }
//     displayName=function(){
//         console.log(this.brandName,this.modelName)
//     }

// }
// let mobile1 = new Mobile('oneplus','nord','blue',30000)
// console.log(mobile1)


class BankDetails {
    constructor (firstName,lastName,accountNumber,branchName,balance){
        this.firstName=firstName
        this.lastName=lastName
        this.accountNumber=accountNumber
        this.branchName=branchName
        this.balance=balance
        this.transactions=[]
    }
    deposits (amount){
    this.balance=this.balance+amount
    console.log('amount is credited to your account')
    this.transactions.push(amount)
    return this.balance
    }
    withdrawls(amount){
        if(amount<this.balance){
            this.balance=this.balance-amount
            console.log('amount is debited from your account')
            this.transactions.push(-amount)
            return this.balance

        }
        else{console.log('insufficient balance')
    return this.balance}
    }
    lastFourTransactions(){
        console.log('here is your last day transactions')
        return this.transactions.slice(-4)
    }

}

let chandaniVerma=new BankDetails('chandani','verma',10001,'karolBagh',10000)
console.log(chandaniVerma)


t1=chandaniVerma.deposits(500)
t2=chandaniVerma.withdrawls(300)
t3=chandaniVerma.deposits(100)
t4=chandaniVerma.withdrawls(100000)
t5=chandaniVerma.deposits(1000)
t6=chandaniVerma.deposits(300)
t7=chandaniVerma.withdrawls(800)

console.log(t1,t2,t3,t4,t5,t6,t7)
console.log(chandaniVerma.transactions)

let lastDayTransactions=chandaniVerma.lastFourTransactions()
console.log(lastDayTransactions)


let totalCreditAmount=chandaniVerma.transactions.filter(function(el){
    return el>0
}).reduce(function(acc,el){
    return acc+el
})
console.log(totalCreditAmount)



let TotalDebitAmount=chandaniVerma.transactions.filter(function(el){
    return el<0
}) . reduce (function(acc,el){
    return acc+el
})
console.log(TotalDebitAmount)










































































