// overloading

class Machinary1 {
    totalDepreciation(jan,feb,mar){
        console.log(jan+feb+mar)
    }
    totalDepreciation(jan,feb,mar,apr,may,june){
        console.log(jan+feb+mar+apr+may+june)
    }
    totalDepreciation(jan,feb,mar,apr,may,june,jul,aug,sep){
        console.log(jan+feb+mar+apr+may+june+jul+aug+sep)
    }
    totalDepreciation(jan,feb,mar,apr,may,june,jul,aug,sep,oct,nov,dec){
        console.log(jan+feb+mar+apr+may+june+jul+aug+sep+oct+nov+dec)
    }
}

let depreciation1 = new Machinary1()
depreciation1.totalDepreciation(1000,900,800)   // NaN


// can be acheived by using conditions

// class Machinary2 {
   
//     totalDepreciation(quarter1,quarter2,quarter3,quarter4){
//         if(quarter1!= undefined && quarter2!= undefined && quarter3!=undefined && quarter4!=undefined){
//             console.log(quarter1+quarter2+quarter3+quarter4)
//         }
//         else if(quarter1!= undefined && quarter2!= undefined && quarter3!=undefined){
//             console.log(quarter1+quarter2+quarter3)
//         }
//         else if(quarter1!= undefined && quarter2!= undefined ){
//             console.log(quarter1+quarter2)
//         }
//         else if(quarter1!= undefined  ){
//             console.log(quarter1)
//         }
//     }
// }

// let depreciation2 = new Machinary2 ()
// depreciation2.totalDepreciation(1000,900,800,700)
// depreciation2.totalDepreciation(1000,900,800)
// depreciation2.totalDepreciation(1000,900)
// depreciation2.totalDepreciation(1000)

class Sun{
    type(){
        console.log('i am the only star in the solar system')
    }
    size(){
        console.log('i am the biggest body in solar system ')
    }
}

class Earth extends Sun{
    type(){
        console.log('i am the  only planet having life in solar system')
    }
    size(){
        console.log('i am the fifth biggest planet in solar system')
    }
}

let solarSystem = new Earth()
solarSystem.type()
solarSystem.size()









