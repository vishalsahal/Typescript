"use strict";
exports.__esModule = true;
var message = 'Hello Typescript';
console.log(message);
var x = 20;
var y = 30;
var sum = x + y;
var title = 'india';
var isBeginner = true;
var total = 0;
var name = 'Vishal';
var sentence = "My name is " + name + "\nI am learning Typescript";
console.log(sentence); //Variable Declaration
var n = null; //subtypes of all other types
var u = undefined; //subtypes of all other types
var isNew = null;
var myName = undefined;
//Array//
var list1 = [1, 2, 3, 4, 5];
var list2 = [1, 2, 3, 4, 5];
var list3 = ['Mohit', 'Sagar', 'Manju', 'Sneha', 'Soumya'];
console.log(list1, list3);
var person1 = [7, 'Ranvijay'];
console.log(person1);
//Enum which used to increment  fo the value it start with 0 unless it get defined
var Color;
(function (Color) {
    Color[Color["Red"] = 65] = "Red";
    Color[Color["Green"] = 66] = "Green";
    Color[Color["Blue"] = 67] = "Blue";
    Color[Color["Purple"] = 68] = "Purple";
})(Color || (Color = {}));
;
var c = Color.Purple;
console.log(c);
//function
var randomValue = 10;
randomValue = true;
randomValue = 'Vishwas';
var myVariable = 10;
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
myVariable.toUpperCase();
