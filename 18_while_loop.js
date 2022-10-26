// while loop

// initialization
// while(condition){
//     // statement

//     // increment
// }

let i1 = 0

while (i1 < 5) {
    console.log("hello")                     // hello hello hello hello hello
    // increment/ decrement -
    i1++  // 1 //2 // 3 // 4
}

let i2 = 1
while (i2 <= 5) {
    console.log(i2)                   // 1 2 3 4 5
    i2++
}

let i3 = 2
while (i3 <= 20) {
    console.log(i3)                     // 2 4 6 8--20
    i3 = i3 + 2
}

let i4 = 10
while (i4 >= 1) {
    console.log(i4)                       // 10 9 8 --1
    i4--
}

let i5 = 1
while (i5 <= 5) {
    if (i5 == 3) {
        break
    }
    console.log(i5) // 1 // 2
    i5++ // 2 //3
}


let i6 = 1
while (i6 <= 5) {
    console.log(i6)            // 1 2 3
    if (i6 == 3) {
        break
    }
    i6++
}

let i7 = 1
while (i7 <= 10) {
    if (i7 == 2) {
        break
    }
    console.log(i7)     // 1
    i7++
}

let i8= 1
while(i8<=10){
    i8++
    if(i8==4){
        continue
    
    }
    console.log(i8)
    i8++
}