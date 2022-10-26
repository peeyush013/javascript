//Javascript =>Object
//Property
//Method

//Person  =>Object
//Property => color, name,weight,height
//Method =>talk(), walk(),eat()

//Car
//Property => color, model,weight, registrationNumber
//Method =>Start(), stop(), drive()

//Student =>object
//Property=> std, rollNumber,Marks,name,result
//Method => read(), write(),learn()

//Method =>
         //action 
        //return

//Gym()
//action =>exercise
//return =>musceles

//Javascript =>Object
//1. String =>Object
//Property
//Method

// let firstName="ShreeRam"
// let firstName1='Ram'
// let lastName=`Dev`

//String =>Method
//String =>collection of char
// let aa='a'
// console.log(typeof aa)

// let lastName='katwe'
// console.log(typeof lastName)

//String  =>string store the value with the help of index

//M  a  y  u  r  i
//0  1  2  3  4  5

// let student='ShreeRam'
//S    h   r   e   e   R   a   m
//0    1   2   3   4   5   6    7
// console.log(student[0])
// console.log(student[6])
// console.log(student[3])
// console.log(student[4])

//Methods
//1. toUpperCase()
//action => convert all char of string into uppercase
//return => string

///let student='ShreeRam'
// let aa=student.toUpperCase()
// console.log(aa) //SHREERAM
// console.log(typeof aa) //string

//2. toLowerCase()
//action => convert all char o string into small case
//return =>string
// let bb=student.toLowerCase()
// console.log(bb)
// console.log(typeof bb)

//3. indexOf()
//action => give the index of given char 
//return = number , if given char is not present -1

// let student='ShreeRam'
// //S    h   r   e   e   R   a   m
// //0    1   2   3   4   5   6    7
// // let cc=student.indexOf('h')
// // console.log(cc)
// // console.log(typeof cc)

// // let dd=student.indexOf('z')
// // console.log(dd) //-1

// let ff=student.indexOf('e')
// console.log(ff)

//4. includes()
//action => check whether the given cha or substring present in string or not 
//return  => if present true, otherwise false(boolean)
// let student='ShreeRam'
// let ee=student.includes('s')
// console.log(ee) //false

// let ss=student.includes('a')
// console.log(ss)
// console.log(typeof ss)

// let a1=student.includes('Ram')
// console.log(a1)

// let a2=student.includes('SRam')
// console.log(a2)

//toUpperCase(), toLowerCase(),indexOf(),includes()

//Property =>length
let student='ShreeRam'
let len=student.length
console.log(len)//8

let firstName='Kaveri'
//length count => start 1
//index count => start 0
console.log(firstName.length)

