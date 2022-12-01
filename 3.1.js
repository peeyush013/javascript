// function Cars(model,colour,brand){
//     this.model=model
//     this.colour=colour
//     this.brand=brand
//     this.price=function(){
//         console.log(this.model * 50000)
//     }

// }
// audi = new Cars(2022,'black','audi')
// console.log(audi)
// audi.price()

function Car(model, colour, brand) {
    this.model = model
    this.colour = colour
    this.brand = brand
    // this.price=function(){
    //     console.log(this.model * 50000)
    // }

}
bmw = new Car(2022, 'black', 'bmw')
console.log(bmw)
// bmw.price()


console.log(Car.prototype === bmw.__proto__)

Car.prototype.price = function () {
    console.log(this.model * 50000)
}

bmw.price()

let planets = new Array ()
planets[0]='mercury'
planets[1]='mars'
planets[2]='earth'
// console.log(planets)

Array.prototype.venus=function(){
    console.log('i am venus')
}
console.log(planets)
console.log(planets.venus)