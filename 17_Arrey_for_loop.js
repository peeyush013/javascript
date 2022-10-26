//for loop
//repetative operation based on condition

//for(initialized;conditioncheck;incremenet/decrmenet){
//  statamenets 
//}

//console.log(1)
//1-10
//1-20
//1-20000

// 1-5(forward)
for (let i = 1; i <= 5; i++) {
    console.log(i)
}

5-1
for (let i = 5; i >= 1; i--) { //4   4<=1  3  2  1 0
    console.log(i) //5 4 3 2 1
}

//3 time welcome
for (let i = 1; i <= 3; i++) {
    console.log('welcome')
}

//break
for(i=1;i<=10;i=i+1){
    if (i==6){
        break
    }
    console.log(i)
}

// continue => perticular condition value skip 
for (let i = 0; i < 5; i++) { //1  2 3  4 5
    if (i == 3) { //0==3  1==3  2==3  3==3  4==3
        continue
    }
    console.log(i)  //0 1 2 4
}


let firstName = 'Mayuri'
for (let j = 0; j < firstName.length; j++) {
    //console.log(j)
    console.log(firstName[j])
}

for (let i = firstName.length - 1; i >= 0; i--) {
    console.log(firstName[i])
}

let numbers = [20, 30, 40, 50, 60, 70, 80]
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i])
}