"use strict";
exports.__esModule = true;
var basics = /** @class */ (function () {
    function basics(x, person) {
        this.num = x;
        this.name = person;
    }
    basics.prototype.display = function (data) {
        //console.log("My name is "+this.name+" , and my ID is"+this.num)//
        console.log(data.names, data.address);
    };
    return basics;
}());
var obj = new basics(12, 'Rohan');
var individual = {
    names: 'Raghav',
    address: 'Delhi'
};
obj.display(individual);
