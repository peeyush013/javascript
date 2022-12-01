class BankStatements{
    constructor (fullName,accountNumber,branchName,balance){
        this.fullName=fullName
        this.accountNumber=accountNumber
        this.branchName=branchName
        this.balance=balance
        this.transactions=[]
    }
    entries(amount){
        if(amount>0){
            this.balance=this.balance+amount
            console.log('amount is credited')
            this.transactions.push(amount)
            return this.balance
        }
        else{
            if((amount+this.balance) >0 ){
            this.balance=this.balance+amount
            console.log('amount is debited')
            this.transactions.push(amount)
            return this.balance}
            else{console.log('insufficient balance')}
        }

    }
    
}


let tanya = new BankStatements ('tanyaPal',0004,'prabhatRoad',100)
console.log(tanya)

t1=tanya.entries(10)
t2=tanya.entries(20)
t3=tanya.entries(-10)
t4=tanya.entries(-10)
t5=tanya.entries(50)
t6=tanya.entries(-30)
t7=tanya.entries(-900)


console.log(t1,t2,t3,t4,t5,t6,t7)
console.log(tanya.transactions)





