
class Mobil {

    private _name:string;
    static roleName:string ="admin";
    constructor(name:string){
        this._name=name;
    }

    get name():string{
        return this._name;
    }

    set name(x){
        this._name=x
    }
}

let newMobil= new Mobil('avanza');
console.log(newMobil.name);
console.log(Mobil.roleName);





