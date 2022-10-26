
//1. toUppercase()
//2. toLowerCase()
//3. indexOf()//index,return type number
//4. includes() //boolean
//5. trim()
//6. trimStart()
//7. trimEnd()
//8. startsWith()
//9. endsWith()
//10. replace()
//11. replaceAll()


let fruit='apple'
// a    p   p   l   e
// 0    1   2   3   4
console.log(fruit.length)//5

//Replace=> 

//syntax=> replace('subString','newsubString')//first occarance of given substring get change

// let a1=fruit.replace('p','o')
// console.log(a1) //aople

//replaceAll => all occarance
let a12=fruit.replaceAll('p','s')
console.log(a12) //assle

//12. Slice()
//action => extract string 
//return => new string

let firstName="Mayuri"
// M    a   y   u   r   i
// 0    1   2    3  4   5
//slice(startposition,endposition) //1. enposition not include(i.e. it take previous index) 2. enposition optional

let a1=firstName.slice(2,5) //yur
console.log(a1)

let m1=firstName.slice(0,4) //Mayu
console.log(m1)

let s1=firstName.slice(0) //
console.log(s1)

let p1=firstName.slice(2)
console.log(p1)//yuri

                         
//-6   -5   -4  -3  -2  -1 //negetive index
// M    a   y   u   r   i
// 0    1   2    3  4   5 //positive index

//left right
// let a11=firstName.slice(-4,-1)//yur
// console.log(a11)

// let s12=firstName.slice(-1,-6)//blank output
// console.log(s12)


// let s11=firstName.slice(-2,-5) 
// console.log(s11) //balnk string

let s98=firstName.slice(4,0)
console.log(s98)

let a0=firstName.slice(-4) //yuri
console.log(a0)


///String
// let city="Nashik"
//slice => extract the part of string
//string return

// N a s h i k
// 0 1 2 3 4 5

//left =>right

//slice(startposition,endposition) //1. endposition not includes 2. endposition option

//ouput => ashi

// let a=city.slice(1,4)
// console.log(a) //ash

// let b=city.slice(1,5)
// console.log(b) //ashi

// let c=city.slice(2)
// console.log(c) //shik

//-6 -5 -4 -3 -2 -1
// N  a  s  h  i  k
// 0  1  2  3  4  5       //positive index

// let d=city.slice(4,1)
// console.log(d)//blank output

// let e=city.slice(-4)
// console.log(e) //shik

// let d1=city.slice(-5,-1)//ashi
// console.log(d1)

// let f1=city.slice(-1,-6)
// console.log(f1) //blank output

// let y1=city.slice(2,-1) //shi
// console.log(y1)


let firstName1="Mayuri"
//charAt() => charAt(index)
//action => gives the char of given index
//return => string

let x1=firstName1.charAt(4)
console.log(x1) //r
console.log(typeof x1)

let b1=firstName.charAt()  //by defalt it consider zero index
console.log(b1)

//charCodeAt()
//action => give the char of given index
//return => return Ascii value

let fruit4= 'Apple'
let z1=fruit4.charCodeAt(3)
console.log(z1) //i equivalent ascii value

let a=fruit4.charCodeAt(0)
console.log(a)

// let lastName='Katwe'
// lastName.toUpperCase().toLowerCase().indexOf('t').slice() //error

//KATWE
//katwe
//2 //number
