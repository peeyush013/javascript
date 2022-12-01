class CellPhone {
    brand = 'iphone'
    ram = '12gb'
}

let mobile = new CellPhone()
console.log(mobile)

//1. setting value outside class

mobile.brand = 'oneplus'
mobile['ram']='8gb'
console.log(mobile)

//2  
class Mobile {
    constructor(modelName,colour){
        this.modelName=modelName
        this.colour=colour
    }
}
let realme = new Mobile('realmeNarzo','black')
console.log(realme)














