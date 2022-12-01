

//inherintance


//polymorphism

//overloading  =>
//same class
//same method name
//different signature

class Calculator {
    addition(x, y) {
        console.log(x + y)
    }
    addition(x, y, z) {
        console.log(x + y + z)
    }
    addition(x, y, z, a) {
        //z = undefined
        //a =undefined
        console.log(x)   //10
        console.log(y)   //20
        console.log(z)  // undefined
        console.log(a)  // undefined
        console.log(x + y + z + a)  // 10+20+undefined+undefined= NaN
    }
}

let sum = new Calculator()
sum.addition(10,20) //30 // will give nan(not a number) value in js and pyhton
// as it will take only values of x and y and takes z and a as undefined
// undefine+number= not a number number or NaN

//=================================================================
// class Calculator {
//     addition(x, y, z, a) {
//         if (x != undefined && y != undefined && z != undefined && a != undefined) {
//             console.log(x + y + z + a)
//         }
//         else if (x != undefined && y != undefined && z != undefined) {
//             console.log(x + y + z)
//         }
//         else if (x != undefined && y != undefined) {
//             console.log(x + y)
//         }
//     }
// }
// let sum=new Calculator()
// sum.addition(10,20)
// sum.addition(10,20,30)
// sum.addition(10,20,30,40)

//=============================================
//overriding

//different class
//same method
//same signature

class WorldBank {
    loan() {
        console.log('I am loan from WorldBank')
    }
    save() {
        console.log('I am saving from worldBank ')
    }
}
class ICICI extends WorldBank {
    loan(){
       console.log('I am loan from icici') 
    }
    save(){
        console.log('I am saving from icici')
    }
}

let icici=new ICICI()
icici.loan()
icici.save()


//sister
//elder => necklese
//yonger =>necklese