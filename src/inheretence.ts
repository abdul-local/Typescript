
class User {
    public name:string;
    public age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;

    }
    getName():void{

        this.name;

    }

    setName(x:string):void{
        this.name=x;


    }

}

class Admin extends User {
    public read:boolean=true;
    public write: boolean=true;
    
    getRole():{read:boolean,write:boolean}{

        return {

            read:this.read,
            write:this.write


        }

    }
    

}

let newAdmin = new Admin('abdul',20);
console.log(newAdmin);