//base types
let str:string = 'Hello Typescript'
let num: number | string = 42;
let isActive:boolean = false;
let strArray: string[] = ['H', 'e', 'l'];
let numArray: Array<number> = [1, 1, 2, 3]

//work with functions
function logInfo(name: string, age: number): void {
    console.log(`Info: ${name}, ${age}`);
}
logInfo("TRR", 25);

function calc(a:number, b:number) {
    return a + b;
}

console.log(calc(2, 5)); 

//work with classes
class Server {
    static VERSION = '1.0.3';
    private status: string ='working';

    constructor(public name:string, protected ip: number) { 
    }

    public turnOn(){
        this.status = 'working';
    }

    protected turmOff() {
        this.status = 'offline';
    }

    public getStatus(): string {
        return this.status;
    }
}

const server: Server = new Server('AWS', 1234);