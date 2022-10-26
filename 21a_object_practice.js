// //CRUD

let cricketer = {
    name: 'Virat', team: 'India',

    born: 'delhi',
    nickname: 'cheeku',
    batting: 'rightHanded',
    age: 33,
    height: 5.9

}

//1. a. retrive(dot notation, bracket notation)
//dot notation
console.log(cricketer.name)
console.log(cricketer.height)
console.log(cricketer.age)
let city = cricketer.born
console.log(city)

//b. bracket notation
console.log(cricketer['name'])
console.log(cricketer['age'])

//2. Add(create) (dot notation, bracket notation)
cricketer.hundreds = 71
cricketer.iplTeam = 'rcb'
console.log(cricketer)

cricketer['fifties']= 125
cricketer['wife']= 'AnushkaSharma'
console.log(cricketer)

//3. update
cricketer.name ='ViratKohli'
cricketer['height']= 5.8
console.log(cricketer)

//4. delete
delete cricketer.wife
delete cricketer['height']
console.log(cricketer)

// for loop
for(let k in cricketer){
    // console.log(k)
    console.log(cricketer[k])
}

for(k in cricketer){
    console.log(k,cricketer[k])
}

