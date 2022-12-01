class PersonA {
    firstName = "chinmay"
    lastName = "deshpande"
}

let chinmay = new PersonA()
let sarika = new PersonA()
console.log(chinmay)
console.log(sarika)

// setting field values outside the class 
chinmay.firstName = "chinmay S"
chinmay.lastName = "deshpandey"

sarika['firstName'] = "sarika p"
sarika['lastName'] = "pansare p"

console.log(sarika)
console.log(chinmay)

//program2
class PersonB{
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    }
}

let amolA = new PersonB("amol","rao")
let amolB = new PersonB ('amolR', "raoR")
console.log(amolA)
console.log(amolB)

// Program get and set method

class PersonC {

    setFirstName(name){
        this.firstName = name
    }
    setLastName(name){
        this.lastName = name
    }
    getFirstName(){
        return this.firstName
    }
    getLastName(){
        return this.lastName
    }
}


let amol = new PersonC()
console.log(amol)

amol.setFirstName('amol')
amol.setLastName('rao')
console.log(amol)

let e2 = amol.getFirstName()
let e3 = amol.getLastName()
console.log(e2)
console.log(e3)

//#################################
// setting the properties using get and set keyword

class PersonE {
    set sfirstName(name){
        this.firstName = name
    }
    set slastName(name){
        this.lastName = name
    }
    get gfirstName(){
        return this.firstName 
    }
    get glastName(){
        return this.lastName 
    }
}
let poorva = new PersonE()
console.log(poorva)

poorva.sfirstName = "poorva"
poorva.slastName = "vyas"
console.log(poorva)

console.log(poorva.gfirstName)
console.log(poorva.glastName)
