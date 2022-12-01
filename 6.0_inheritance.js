

//ES6 class
//inheritance

class Student {
    country = "India"
    constructor(fullName, adharNo, birthDate) {
        this.fullName = fullName
        this.adharNo = adharNo
        this.birthDate = birthDate
    }
    display() {
        console.log(`My name is ${this.fullName}`)
    }
}

class Teacher extends Student {
    setSalary(amount) {
        this.salary = amount
    }
    displayNameSalary() {
        console.log(`My name is ${this.fullName}`)
        console.log(`My salary is ${this.salary}`)
    }
}

class Professor extends Teacher {
    setSubject(sub) {
        this.subject = sub
    }
    setfamily(name1) {
        this.wife = name1
    }
    info() {
        console.log(`my name is ${this.fullName}`)
        console.log(`my salary is ${this.salary}`)
        console.log(`my sub is ${this.subject}`)
        console.log(`my wife name is ${this.wife}`)
    }
}



let mayuri = new Student("Mayuri", 1234, "5-2-2002")
console.log(mayuri)

let shamal=new Student("Shamal",2222,"7-2-98")
console.log(shamal)

mayuri.display()
shamal.display()

// ==============================================================
let mayu = new Teacher("Mayu", 333333, "2-2-2004")
mayu.setSalary(2000)
console.log(mayu)
mayu.displayNameSalary()
console.log(mayu.fullName)
console.log(mayu.adharNo)
console.log(mayu.birthDate)
console.log(mayu.salary)
mayu.display()

// =============================================================

let mayuri2 = new Professor("Mayuri2", 8989898989, "4-5-1997")
mayuri2.setSalary(40000)
mayuri2.setSubject("Math")
mayuri2.setfamily('kiran')
console.log(mayuri2)
mayuri2.info()
mayuri2.display()
mayuri2.displayNameSalary()

//Property
console.log(mayuri2.fullName)
console.log(mayuri2.salary)
console.log(mayuri2.subject)
console.log(mayuri2.country)
console.log(mayuri2.wife)
console.log(mayuri2.adharNo)
console.log(mayuri2.birthDate)