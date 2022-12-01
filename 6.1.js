class Kid {
    country='kenya'
    constructor (fullName,birthdate,gender){
        this.fullName=fullName
        this.birthdate=birthdate
        this.gender=gender

    }
    displayName(){
        console.log('my name is',this.fullName)
    }

}

class Teen extends Kid{
    setheight(height){
        this.height=height
    }
    setweight(weight){
        this.weight=weight
    }
    
    displayinfo(){
        console.log('my name is',this.fullName)
        console.log('my height is',this.height)
        console.log('my weight is',this.weight)
    }
}

class Adult extends Teen{
    setoccupation(occupation){
        this.occupation=occupation
    }
    info(){
        console.log('my name is',this.fullName)
        console.log('my height is',this.height)
        console.log('my weight is',this.weight)
        console.log('my occupation is',this.occupation)
    }

}

let anku = new Kid('aanku','29feb','m')

let ankush = new Teen('ankush','29feb','m')
ankush.setheight(5.8)
ankush.setweight(60)
console.log(ankush)

let ankushKumar = new Adult('ankushKumar','29feb','m')

console.log(ankushKumar)
ankushKumar.setheight(5.9)
ankushKumar.setweight(70)
ankushKumar.setoccupation('sde')

console.log(ankushKumar.fullName)
console.log(ankushKumar.birthdate)
console.log(ankushKumar.gender)
console.log(ankushKumar.height)
console.log(ankushKumar.weight)
console.log(ankushKumar.country)
ankushKumar.info()



