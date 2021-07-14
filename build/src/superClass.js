"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User1 = /** @class */ (function () {
    function User1(name, age) {
        this.name = name;
        this.age = age;
    }
    User1.prototype.getName = function () {
        this.name;
    };
    User1.prototype.setName = function (x) {
        this.name = x;
    };
    return User1;
}());
var Admin1 = /** @class */ (function (_super) {
    __extends(Admin1, _super);
    function Admin1(phone, name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.phone = phone;
        _this.phone = phone;
        return _this;
    }
    Admin1.prototype.getRole = function () {
        return {
            read: true,
            write: true
        };
    };
    return Admin1;
}(User1));
var newAdmin1 = new Admin1('089189w9', 'abdul', 20);
console.log(newAdmin1);
console.log(newAdmin1.getRole());
// oke sudah aman
