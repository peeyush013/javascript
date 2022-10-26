let info = ["chinmay","deshpande",12,44]

// retrive
console.log(info[0])


let info2 = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:12,
    rollNo:44
}

// retrive  (dot notation and brack notation)
// objectName.propertyName
// objectName['propertyName']

console.log(info2.firstName) // dot notation
console.log(info2['firstName']) // bracket notation

// add (dot notation and brack notation)
info2.lang = "Marathi"
info2['city'] = "sangamner"

// update (dot notation and brack notation)
info2.city = "pune"
info2['lang'] = "Hindi"
console.log(info2)
// delete(dot notation and brack notation)

delete info2.city
delete info2['lang']
console.log(info2)

// ----------- for loop ----------------------
let vehicle = {
    color:"red",
    type:"sedane",
    //color:"blue"
}
console.log(vehicle)

// loop
//              0         1       2     3
let names = ["chinmay","poorva","ram","sham"]
for(let i = 0 ; i < names.length ; i++){
    //console.log(i)
    console.log(names[i])
}
// does not store the value by index
let animal = {
    nameM:"tiger",
    color:"red",
    legs:2
}
for(let key in animal){
    //console.log(key)
    console.log(key ,animal[key])
}
// -------------------------------------------------


let info3  = {
    firstName:"chinmay",
    lastName:"deshpande",
    skills:["python","java","c","cpp"]
}
console.log(info3.skills)
info3.skills.push("javascript")
console.log(info3)

info3.parent = {
    father:"shirish",
    mother:"deshpande"
}
console.log(info3)


let car = {
    color:"green",
    type:"sedane"
}

let j = []

for(let key in car){
    //j.push(key)
    j.push(car[key])
}
console.log(j)