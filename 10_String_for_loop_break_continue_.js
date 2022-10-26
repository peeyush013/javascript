//1. break statement
//0-5 number

for (let i = 0; i <= 5; i++) { 
    if (i == 3) {
        break;
    }
    console.log(i)  //0  1   2
}


for (let i = 0; i <= 5; i++) { 
    console.log(i) //0  1  2  3
    if (i == 3) {
        break;
    }
}


//continue statement=> to ecape the perticular condition

for (let i = 0; i <= 5; i++) {
    if (i == 3) {
        continue
    }
    console.log(i)  // 0 1 2 4 5 
}

for (let i = 1; i <= 10; i++) { 
    if (i > 5) { 
        continue
    }
    console.log(i) //1  2  3  4  5
}


let student = 'shantanu'
console.log(typeof (student))


for(let i=0;i<=student.length-1 ;i++){
    //console.log(i) //index
    console.log(student[i])
}


for (let j = student.length - 1; j >= 0; j--) {
    console.log(student[j])
}


let marks = [10, 20, 30, 40, 50]
    //        0   1   2   3  4

console.log(marks.length)   // 5

for (let i = 0; i <= marks.length-1 ; i++) {
    //console.log(i)
    if(i==3){
        continue
    }
    console.log(marks[i])        // 10 20 30 50 , 40 misses due to continue at [3]
}

for (let i = marks.length-1; i>=0 ; i--){
    if(i==2){
        continue
    }
    console.log(marks[i])        // 50 40 20 10 , 20 misses
}



