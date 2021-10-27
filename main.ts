export{}
let message = 'Hello Typescript';
console.log(message);

let x = 20;
const y = 30;

let sum=x+y;
const title = 'india';

let isBeginner: Boolean = true;
let total: number = 0;
let name: string = 'Vishal';
let sentence: string = `My name is ${name}
I am learning Typescript`;

console.log(sentence); //Variable Declaration

let n: null = null; //subtypes of all other types
let u: undefined = undefined; //subtypes of all other types

let isNew: boolean = null;
let myName: string = undefined;
//Array//

let list1: number[] = [1,2,3,4,5];
let list2: Array<number> = [1,2,3,4,5];
let list3: string[] = ['Mohit', 'Sagar', 'Manju','Sneha', 'Soumya'];

console.log(list1,list3);

let person1: [number, string]= [7,'Ranvijay'];
console.log(person1);

//Enum which used to increment  fo the value it start with 0 unless it get defined
enum Color {Red=65,Green, Blue, Purple};

let c: Color = Color.Purple;
console.log(c);

//function

let randomValue: any = 10;
randomValue = true;
randomValue = 'Vishwas';

let myVariable: unknown = 10;

function hasName (obj: any): obj is { name: string} {
    return !!obj &&
    typeof obj === "object" &&
    "name" in obj
}

if (hasName(myVariable)){
    

console.log(myVariable.name);
}
(myVariable as string).toUpperCase();



