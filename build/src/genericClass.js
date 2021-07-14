"use strict";
var List = /** @class */ (function () {
    function List() {
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        this.data = elements;
    }
    List.prototype.addElement = function (x) {
        this.data.push(x);
    };
    List.prototype.addMultipleElement = function () {
        var _a;
        var x = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            x[_i] = arguments[_i];
        }
        (_a = this.data).push.apply(_a, x);
    };
    List.prototype.getdata = function () {
        return this.data;
    };
    return List;
}());
var newList = new List('rodi', 'dian', 'malik');
console.log(newList);
newList.addElement('hamzan');
console.log(newList);
console.log('ambil data array:', newList.getdata());
var random = new List("abdul", 2, "hehe");
console.log('ambil isi datanya: ', random.getdata());
