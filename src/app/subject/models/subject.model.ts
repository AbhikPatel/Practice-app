export class UserModel{

    fname:string
    age:number
    phone:number
    gender:string

    constructor(age:number, phone:number,fname:string = 'jigar', gender:string = 'male'){
        this.fname = fname
        this.age = age
        this.phone = phone
        this.gender = gender
    }
}