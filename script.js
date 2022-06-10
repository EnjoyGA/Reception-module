"use strict";

const number = 1;

(function(){
    const number = 7;
    console.log(number + 3);
}());

console.log(number);

const user = (function(){
    const privat = function(){
        console.log("it's ok");
    };

    return {
        sayHello: privat
    };
}());

user.sayHello();