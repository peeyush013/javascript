// let solarSystem = {
//     fullName :'theSolarSystem',
//     star:'sun',
//     planets:8,
//     biggestPlanet:'jupiter',
//     smallestPlanet:'mercury',

//     displayName: function (){
//         console.log(fullName)
//     }
// }

// console.log(solarSystem)
// solarSystem.displayName()   // error  // should use this.solarsystem

// let solarSystem1 = {
//     fullName :'theSolarSystem',
//     star:'sun',
//     planets:8,
//     biggestPlanet:'jupiter',
//     smallestPlanet:'mercury',

//     displayName: function (){
//         console.log(this.fullName)
//     }
// }

// console.log(solarSystem1)
// solarSystem1.displayName()

// lexical scope

function Maths1 (){
    let x=1
    let y=2
    console.log(y-x)  //1

    function Maths2(){
        let p=5
        let q=10
        console.log(q-x-y)   //7
        // console.log(p-m)  // m is not accesible as parent cant acces childs variable but child can

        function Maths3(){
            let m =50
            let n= 30
            console.log(m+p+x) //56
        }
        Maths3()
    }
    Maths2()
}
Maths1()






let a= 100   // global variable
let b= 200   // global variable // can be accessible for all functions either parebt or child

function Calculation1 (){
    let i=2
    let j=3
    
    console.log(b-a-i-j)   //95

    function Calculation2(){
        let k=10
        let l= 20

        console.log(a+i+k)  //112

        function Calculation3(){
            console.log(a-i-l)    //78
        }
        Calculation3()
    }
    Calculation2()
}
Calculation1()      


// closure


function karanHeight(){
    let jan2020 = 5.6
    let jan2022 = 5.9

    console.log(jan2020,jan2022)
    return (jan2022-jan2020)
    console.log(jan2022)     // will not perform any action after return
}

let heightGain=karanHeight()
console.log(heightGain)



function karanWeight(){
    let jan = 95
    let feb = 80
    
    console.log(jan,feb)  //95 80
    return function(){
        console.log(jan-feb)    //15
    }

}

let weightLoss=karanWeight()
console.log(weightLoss)  // will provide function , we have to call

weightLoss()     































