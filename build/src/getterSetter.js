"use strict";
var Mobil = /** @class */ (function () {
    function Mobil(name) {
        this._name = name;
    }
    Object.defineProperty(Mobil.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (x) {
            this._name = x;
        },
        enumerable: false,
        configurable: true
    });
    Mobil.roleName = "admin";
    return Mobil;
}());
var newMobil = new Mobil('avanza');
console.log(newMobil.name);
console.log(Mobil.roleName);
