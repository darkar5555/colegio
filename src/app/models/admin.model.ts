export class Admin{

    constructor(
        public nombre: string,
        public email: string,
        public password: string,
        public role: string,
        public img?: string,
        public _id?: string
    ){}
}