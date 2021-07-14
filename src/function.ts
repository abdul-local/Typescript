
// function
function getname(): string {

    return 'abdul'
    
}

console.log(getname());


function sayHelo(): void {
    console.log('say hello bro');
    
}
sayHelo();

function age():number {
    return 21;
    
}

console.log(age());

function kali(a:number,b:number): number {
    return a*b;
    
}


let hasil=kali(2,2);
console.log(hasil)

// // function as type

type Tambah=(val1:number,val2:number)=>number;

const Add: Tambah=(val1:number,val2:number): number=>{
    return val1+val2;
}

let hasiljumlah=Add(2,2);
console.log('hasil jumlah: ',hasiljumlah);