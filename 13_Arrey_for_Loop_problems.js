

//loop 
//for loop

// for(initialization;conditioncheck;incre/decre){
//     //statemenet
// }

//0-10

// increment /forward
for (let i = 0; i <= 10; i++) {//1 2  3  4  5  6  7  8  9  10  11
    console.log(i) //0  1 2  3  4  5   6  7  8  9  10
}

//decremenet.revrese

for(let i=10;i>=0;i--){
    console.log(i)
}

// let i=0

// 0<=10 =>
// 1<=10 =>T
// 2<=10
// 3<=10 =>t

//problem 1
let birthYear=[1995,1990,2003,1998]
//              0    1    2    3
//value => index 
//current age
//current year-birthyear =age
//output=>age=[27,32,19,24]

// console.log(birthYear[0]) //1995
// console.log(birthYear.length) //4
// console.log(birthYear.length-1) //3
// console.log(birthYear[birthYear.length-1]) //1998
// console.log(birthYear[3]) //1998
let age=[]

for(let i=0;i<birthYear.length;i++){ //1  2  3  4
    //console.log(i)  //0 1 2 3
    //console.log('hello')
    //console.log(birthYear[i])  //1995  1990  2003  1998

    // let ag=2022-birthYear[i] //27  32  19  24
    console.log(2022-birthYear[i])
    age.push(2022-birthYear[i])
}


console.log(age)




