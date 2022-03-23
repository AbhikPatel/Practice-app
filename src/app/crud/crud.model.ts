export class CrudModel{
    fname:string
    age:number
    phone:number
    gender:string

    constructor(fname:string, age:number, phone:number, gender:string){
        this.fname = fname
        this.age = age
        this.phone = phone
        this.gender = gender
    }
}