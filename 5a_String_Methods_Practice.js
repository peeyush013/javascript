// 11. slice()

let myname = 'peeyush sharma'        // includes starting positing to end position-1
let firstname = myname.slice(0,7)    // cut the string using index and give remaing string
console.log(firstname)               // peeyush

let lastname = myname.slice(-6)
console.log(lastname)                // sharma [no need to give end position if we want to slice till end]

// 12. charAt()

let ios = 'iphone'
console.log(ios.charAt(4))     // n 
console.log(ios.charAt(6))     // blank
console.log(ios.charAt())      // i (will conside 0 index if no index given)

// 13. charCodeAt()

let weather = 'winters'
console.log(weather.charCodeAt(5))  // will provide value of r from america code list
console.log(weather.charCodeAt(12)) // NaN , if index not present












