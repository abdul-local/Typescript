class List <T> {
    private data:T[];
    constructor(...elements:T[]){
        
        this.data=elements;

    }

    addElement(x:T):void{
        this.data.push(x);

    }
    addMultipleElement(...x:T[]):void {
        this.data.push(...x);
    }
    getdata():T[]{
        return this.data;
    }
}

let newList= new List('rodi','dian','malik');
console.log(newList);
newList.addElement('hamzan');
console.log(newList);
console.log('ambil data array:',newList.getdata());


let random = new List<number |string>("abdul",2,"hehe");
console.log('ambil isi datanya: ',random.getdata());