//loop
//for loop

//1-5
for(let i=1;i<=5;i++){//2 3  4 5 6
    console.log(i) //1 2 3 4 5
}

//5-1
for(let i=5;i>=1;i--){ //4  3 2  1  0
    console.log(i) //5  4  3  2  1
}

let flowers=["lily","jasmin","rose"]
for(let i=0;i<flowers.length;i++){
    console.log(i)
    console.log(flowers[i])
}


//problem1
let birthYear=[1995,1998,1890]
// //2022-1995
//age=[25,45,56]
let age=[] //[27,24,132]
for(let i=0;i<birthYear.length;i++){
    //console.log(i)
    let ag=2022-birthYear[i] //2022-1995 , 2022-1998,2022-1890
    age.push(ag)

}
console.log(age) //[27,24,132]

//problem 2

let numbers = [20, 33, 45, 25, 78, 12, 2, 9]
//number which are greter than 25

// let greter25=[33,45,78]
let greter25 = []
for (let i = 0; i < numbers.length; i++) {
    //console.log(numbers[i])// 20  33 45  25  78  12  2
    if (numbers[i] > 25) { // 20>25  33>25  45>25 25>25  78>25  12>25  2>25  9>25
        greter25.push(numbers[i]) //[33,45,78 ]
    }
}
console.log(greter25)

//problem 3
let marks = [20, 40, 30]
// sum=90
//20+40 = 60
//60+30 =90
let sum = 0 //20  60  90
//console.log(sum) //0 
for (let i = 0; i < marks.length; i++) {
    //console.log(marks[i]) //20 40  30
    sum = sum + marks[i]
    //    20  =  0+ 20
    //     60  = 20+40
    //     90  =  60+30
                  
}
console.log(sum) //90
