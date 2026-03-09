//Create an object car and freeze it so properties cannot be modified.
"use strict"
const car={
    1:"a",
    2:"b"
}

Object.freeze(car);
car[1]="c"//Cannot assign to read only property '1' of object '#<Object>'
console.log(car[1])