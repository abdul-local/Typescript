"use strict";
var Asus = /** @class */ (function () {
    function Asus() {
        this.name = 'ASUS ROG';
        this.ligthKyboard = true;
    }
    Asus.prototype.on = function () {
        console.log('leptop dalam keadaan on');
    };
    Asus.prototype.off = function () {
        console.log('leptop dalam keaddan off');
    };
    return Asus;
}());
var MSI = /** @class */ (function () {
    function MSI() {
        this.name = 'MSI GAMING';
        this.redKeyboard = true;
    }
    MSI.prototype.on = function () {
        console.log('leptop dalam keadaan on');
    };
    MSI.prototype.off = function () {
        console.log('leptop dalam keaddan off');
    };
    return MSI;
}());
var newMsi = new MSI();
console.log(newMsi);
console.log(newMsi.on());
console.log(newMsi.off());
var newAsus = new Asus();
console.log(newAsus);
console.log(newAsus.on());
console.log(newAsus.off());
