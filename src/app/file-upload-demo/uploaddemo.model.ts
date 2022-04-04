export class UploadFileModel{
    id:number
    name:string
    size:number
    type:string

    constructor(id:number, name:string, size:number, type:string){
        this.id = id
        this.name = name
        this.size = size
        this.type = type
    }
}