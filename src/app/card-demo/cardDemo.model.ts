export class cardDemoModel{
    id:number
    department:string
    employees:employees[]

    constructor(id:number, department:string, employees:employees[]){
        this.id = id
        this.department = department
        this.employees = employees
    }
}

export class employees{
    name:string
    age:number
    gender:string
    city:string
    phone:number
    hobbies:hobby[]

    constructor(name:string, age:number, gender:string, city:string, phone:number, hobbies:hobby[]){
        this.name = name
        this.age = age
        this.gender = gender
        this.city = city
        this.phone = phone
        this.hobbies = hobbies
    }
}

export class hobby{
    hobbyname:string

    constructor(hobbyname:string){
        this.hobbyname = hobbyname
    }
}