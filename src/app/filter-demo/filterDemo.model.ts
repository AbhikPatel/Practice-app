export class filterDemoModel{
    id:number
    fname:string
    age:number
    gender:string
    phone:number
    salary:number
    company:string
    city:string

    constructor(id:number, fname:string, age:number, gender:string, phone:number, salary:number, company:string, city:string){
        this.id = id
        this.fname = fname
        this.age = age
        this.gender = gender
        this.phone = phone
        this.salary = salary
        this.company = company
        this.city = city
    }
}