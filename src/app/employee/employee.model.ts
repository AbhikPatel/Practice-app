export class EmployeeModel{
    id:number
    fname:string
    age:number
    phone:number
    gender:string

    constructor(fname:string, age:number, phone:number, gender:string, id:number){
        this.fname = fname
        this.age = age
        this.phone = phone
        this.gender = gender
        this.id = id
    }
}