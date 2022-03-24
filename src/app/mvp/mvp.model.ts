export class mvpModel{
    id:number
    fname:string
    age:number
    phone:number
    gender:string

    constructor(id:number,fname:string, age:number, phone:number, gender:string){
        this.id = id
        this.fname = fname
        this.age = age
        this.phone = phone
        this.gender = gender
    }
}