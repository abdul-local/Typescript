

class User1 {
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

class Admin1 extends User1 {

    

    constructor(public phone:string,name:string,age:number){

        super(name,age);
        
        this.phone=phone;
      
    }
    getRole():{read:boolean; write:boolean}{

        return {
            read:true,
            write:true
        }

    }


 

}

let newAdmin1 = new Admin1('089189w9','abdul',20);

console.log(newAdmin1);
console.log(newAdmin1.getRole());

// oke sudah aman