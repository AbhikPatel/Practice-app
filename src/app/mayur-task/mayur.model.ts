export class JsModel{
    id:number
    department:string
    employee:Employee[]

    constructor(id:number, department:string, employee:Employee[]){
        this.id = id
        this.department = department
        this.employee = employee
    }
}

export class Employee{
    id:number
    name:string
    gender:string
    age:number
    hobbies:Hobbies[]

    constructor(id:number, name:string, gender:string, age:number, hobbies:Hobbies[]){
        this.id = id
        this.name = name
        this.gender = gender
        this.age = age
        this.hobbies = hobbies
    }
}

export class Hobbies{
    id:number
    hobby:string

    constructor(id:number, hobby:string){
        this.id = id
        this.hobby = hobby
    }
}