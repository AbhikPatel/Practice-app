export class CustomerData{
    id:number
    fname:string
    age:number
    phone:number
    city:string
    gender:string

    constructor(id:number, fname:string, age:number, phone:number, city:string, gender:string){
        this.id = id
        this.fname = fname
        this.age = age
        this.phone = phone
        this.city = city
        this.gender = gender
    }
}