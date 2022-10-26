let OnePlusNord = {
    BrandName:'OnePlus',RAM:['6GB','8GB','12GB'] ,ROM:[128 ,256], Android:11.0, FM:'no', fiveG : true , SimSlots: 2 , 
    threeMMjack : false , colour : 'blue', Warranty : {Accessories: '6months' , Phone:'1year' , PhysicalDamage :false }
    
}

// retrive 
console.log(OnePlusNord.RAM[0])                      // 6GB from arrey
console.log(OnePlusNord['ROM'][0])                   // 128GB from arrey
console.log(OnePlusNord.Warranty.PhysicalDamage)    // False frm internal loop
console.log(OnePlusNord['Warranty']['Phone'])       //1Year from internal loop

// add
OnePlusNord.ROM.unshift(64)                    // will add 64 in arrey in strt
OnePlusNord['ROM'].push('1tb')                 // will add 1tb in end of arrey
OnePlusNord['Warranty']['WaterDamage'] = true 
console.log(OnePlusNord)

// update
OnePlusNord.Warranty.WaterDamage = false
OnePlusNord['ROM'][3] = 512

// delete
 OnePlusNord.ROM.shift()            // will remove 64gb from arrey
delete OnePlusNord.Warranty.WaterDamage
console.log(OnePlusNord)


// // retrive

// console.log(OnePlusNord.Android)
// console.log(OnePlusNord['RAM'])

// // add

// OnePlusNord['5g'] = true
// console.log(OnePlusNord)

// // update
// OnePlusNord.threeMMjack = 'no'
// OnePlusNord['FM'] = false
// console.log(OnePlusNord)

// // delete
// delete OnePlusNord['colour']
// console.log(OnePlusNord)

// // for loop
// for (let specifications in OnePlusNord){
//     console.log(specifications,OnePlusNord[specifications])
// }

// 



