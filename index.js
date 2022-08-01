//declare a variable
let name = 'simba'; //String literal
let age = 23; //Number literal
let isApproved = true; //boolean literal
let firstName = undefined; //variables are set to undefined by default
let selectedColour = null; //used to clear the value of a variable

//Object
let person = {
    name: 'Simba', 
    age: 23
};

//declare a constant
const constvarible = 'The speed of the train in GTA 5'
//Dot notation
person.name = 'Chawanda';
//Bracket notation
person['age'] = 24;
//Bracket notation
let selection = 'name';
person[selection] = 'Mbali';

//arrays
let selectedColours = ['red', 'green', 'blue'];
//append value to the array
selectedColours[3] = 3;

//function performing a task
function greet(name){
    console.log('Hello ' + name );
}
//calculate and return a value
function square(number){
    return number * number;
}


console.log('Hello World');
console.log(name);
console.log(person);
console.log(person.age);
console.log(selectedColours[1]);
console.log(selectedColours);

greet(person['name']);

console.log(square(3))
