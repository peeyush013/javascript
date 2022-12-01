// class Student {
//     firsName='rohit'
//     lastName='sharma'
//     section='b'
//     marks=280

// }

// let pritam= new Student()
// console.log(pritam)

// let prince = new Student()
// console.log(prince)

// prince.firsName='prince'
// prince.lastName='pal'
// prince.section='a'
// prince['marks']=300

// console.log(prince)

// class Student1 {
//     constructor (firstName,lastName,section,marks){
//         this.firstName=firstName
//         this.lastName=lastName
//         this.section=section
//         this.marks=marks
//     }
// }

// // let radhika = new Student1('radhika','singh','c',190)
// // console.log(radhika)


// let passedStudents = [
//     new Student1('samay','raina','a',150),
//     new Student1('akash','gupta','b',180),
//     new Student1('zakir','khan','c',200)
// ]

// // console.log(passedStudents)


// passedStudents.forEach(function(el){
//     // console.log(el)
//     for (let keys in el){
//         console.log(keys,el[keys])
//     }
// })



class StudentA {
    setfirstName(firstName){
        this.firstName = firstName
    }
    setlastName(lastName){
        this.lastName=lastName
    }
    setsection(section){
        this.section=section
    }
    setmarks(marks){
        this.marks=marks
    }
    getfirstName(){
        console.log(this.firstName)
    }
    getlastName(){
        console.log(this.lastName)
    }
    getsection(){
        console.log(this.section)
    }
    getmarks(){
        console.log(this.marks)
    }
}


let manav = new StudentA() 
console.log(manav)  // will give blank obj.


let aahan= new StudentA('aahan','seth','a',200)
console.log(aahan)   // still give blank obj 


let aashima = new StudentA()
aashima.setfirstName ('aashima')
aashima.setlastName('sharma')
aashima.setsection('a')
aashima.setmarks(400)

console.log(aashima)

aashima.getfirstName()
aashima.getlastName()
aashima.getsection()
aashima.getmarks()



class Employee {
    //setting properties
    setfirstName(firstName){
        this.firstName=firstName
    }
    setlastName(lastName){
        this.lastName=lastName
    }
    setcompany(company){
        this.company=company
    }
    setdesignation(designation){
        this.designation=designation
    }
    // getting properties
    getfirstName(){
        console.log('my maiden name is',this.firstName)
    }
    getlastName(){
        console.log('my sir name is',this.lastName)
    }
    getcompany(){
        console.log('i belong to',this.company)
    }
    getdesignation(){
        console.log("i am the",this.designation ,'of',this.company)
    }
}

let sundarPichai = new Employee ()
console.log(sundarPichai)  // blank object , no values passed

let satyaNadela = new Employee('satya','nadela','microsoft','ceo')
console.log(satyaNadela)  // still blank oject because we didn't pass values in set functions


let arvindKrishna = new Employee()
arvindKrishna.setfirstName('arvind')
arvindKrishna.setlastName('krishna')
arvindKrishna.setcompany('ibm')
arvindKrishna.setdesignation('ceo')
console.log(arvindKrishna)


console.log(arvindKrishna.firstName)
arvindKrishna.getfirstName()
arvindKrishna.getlastName()
arvindKrishna.getcompany()
arvindKrishna.getdesignation()


















