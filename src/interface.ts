
interface Leptop {
    name:string;
    on():void;
    off():void;

}

class Asus implements Leptop {
    name:string='ASUS ROG';
    ligthKyboard:boolean=true;

    constructor(){
        
    }


    on():void{
        console.log('leptop dalam keadaan on');
    }
    off():void{

        console.log('leptop dalam keaddan off');


    }

   
}
class MSI implements Leptop {
    name:string='MSI GAMING';
    redKeyboard:boolean=true;

    constructor(){

    }

    on():void{
        console.log('leptop dalam keadaan on');
    }
    off():void{

        console.log('leptop dalam keaddan off');

    }


}
let newMsi= new MSI();
console.log(newMsi);
console.log(newMsi.on());
console.log(newMsi.off());

let newAsus= new Asus();
console.log(newAsus);
console.log(newAsus.on());
console.log(newAsus.off());