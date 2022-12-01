class Employee {
    fullName="satyaNadela"
    constructor (company,designation,workExperience,age){
        this.company=company
        this.designation=designation
        this.workExperience=workExperience
        this.age=age
    }
    
    displayinfo(){
        console.log('my name is',this.fullName,'i belong to',this.company)
    }
}

let SatyaNadela = new Employee('sunMicrosystems','electricEngineer',2,25)
console.log(SatyaNadela)
SatyaNadela.displayinfo()
console.log('-----------------')


class Manager extends Employee {
    setsalary(salary){
        this.salary=salary
    }
    displayinformation(){
        console.log('hey my name is ',this.fullName)
        console.log('i am promoted to',this.designation)
        console.log('my salary got hiked to',this.salary)
    }
}

let satyaNadela1 = new Manager('microsoft','ecosystemManger',12,35)
satyaNadela1.setsalary('$1million')
console.log(satyaNadela1)
satyaNadela1.displayinformation()
console.log('---------------------')

class Ceo extends Manager{
    setspouse(spouse){
        this.spouse=spouse
    }
    displayfullinformation(){
        console.log('hey my name is',this.fullName)
        console.log('i belong to',this.company)
        console.log('i am promoted to',this.designation)
        console.log('my salary hiked to',this.salary)
        console.log('i got married to',this.spouse)
    }
}

let satyaNadela2= new Ceo('microsoft','ceo',27,50)
satyaNadela2.setsalary('$4.5million')
satyaNadela2.setspouse('wife-anupmaNadela')
console.log(satyaNadela2)
satyaNadela2.displayfullinformation()