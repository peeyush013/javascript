class Employee {
    fullName="Satya Nadela"
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

let SatyaNadela = new Employee('SunMicrosystems','ElectricEngineer',2,25)
console.log(SatyaNadela)
SatyaNadela.displayinfo()
console.log('-----------------')


class Manager extends Employee {
    constructor(company,designation,workExperience,age,salary){
        super (company,designation,workExperience,age)
        this.salary=salary
    }
    displayinformation(){
        console.log('hey my name is ',this.fullName)
        console.log('i am promoted to',this.designation)
        console.log('my salary got hiked to',this.salary)
    }
}

let satyaNadela1 = new Manager('Microsoft','EcosystemManger',12,35,'$1million')
console.log(satyaNadela1)
satyaNadela1.displayinformation()
console.log('---------------------')

class Ceo extends Manager{
    constructor(company,designation,workExperience,age,salary,spouse){
        super (company,designation,workExperience,age,salary)
        this.spouse=spouse
    }
    displayfullinformation(){
        console.log('hey my name is',this.fullName)
        console.log('i belong to',this.company)
        console.log('i am the new',this.designation,'of',this.company)
        console.log('my salary hiked to',this.salary)
        console.log('i got married to',this.spouse)
    }
}

let satyaNadela2= new Ceo('Microsoft','CEO',27,50,'$4.5million','wife-Anupma Nadela')
console.log(satyaNadela2)
satyaNadela2.displayfullinformation()