export class mentorsModel{
    id:number
    firstname:string
    lastname:string
    age:number
    phone:number
    dob:Date
    department:string
    mail:string
    gender:string

    constructor(id:number, firstname:string, lastname:string, age:number, phone:number, dob:Date, department:string, mail:string, gender:string){
        this.id = id
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
        this.phone = phone
        this.dob = dob
        this.department = department
        this.mail = mail
        this.gender = gender
    }
}