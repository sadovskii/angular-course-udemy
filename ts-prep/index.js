//base types
var str = 'Hello Typescript';
var num = 42;
var isActive = false;
var strArray = ['H', 'e', 'l'];
var numArray = [1, 1, 2, 3];
//work with functions
function logInfo(name, age) {
    console.log("Info: " + name + ", " + age);
}
logInfo("TRR", 25);
function calc(a, b) {
    return a + b;
}
console.log(calc(2, 5));
//work with classes
var Server = /** @class */ (function () {
    function Server(name, ip) {
        this.name = name;
        this.ip = ip;
        this.status = 'working';
    }
    Server.prototype.turnOn = function () {
        this.status = 'working';
    };
    Server.prototype.turmOff = function () {
        this.status = 'offline';
    };
    Server.prototype.getStatus = function () {
        return this.status;
    };
    Server.VERSION = '1.0.3';
    return Server;
}());
var server = new Server('AWS', 1234);
