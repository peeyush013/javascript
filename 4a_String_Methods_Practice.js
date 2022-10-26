// 5  trim

let country = ' INDIA '
let mycountry = country.trim() // return string after removing space from start and end
console.log(mycountry)  // 'INDIA'
console.log(country.length)     // 7
console.log(mycountry.length)   // 5

// 6 trimStart

let country1=' INDIA '
let mycountry1=country1.trimStart()  // return string after removing space from start
console.log(mycountry1)
console.log(country1.length)    // 7
console.log(mycountry1.length)  // 6

// 7 startsWith()

let cricketer = ' sachin'
let check = cricketer.startsWith('s')    // return boolean
console.log(check)                       // false

// 8 endsWith()

let cricketer1 = "sachin1"
let check1 = cricketer1.endsWith('1')
console.log(check1)                       // true


// 9 replace()

let person1 = 'sonu'
let person2 = person1.replace('s','m')  // replaced given character
console.log(person2)                    // monu

let person3 = person2.replace('m','n')
console.log(person3)                   // nonu

let person4 = person3.replace('nonu','ajay')
console.log(person4)                   //   ajay

let person5 = person4.replace('a','vi')  // only replaces the first element comes if more than 1 same elements
console.log(person5)                     //   vijay


// 9 replaceAll

let person6 = 'antara'
let person7 = person6.replaceAll('a','A') // replace all the similar elements of string
console.log(person7)                      // AntArA









