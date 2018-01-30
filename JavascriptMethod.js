// 'use strict';
// var Person = {
//     name:"Perry Xiang",
//     country:"Sichuan Province",
//     fast:"fast"
// };
// Object.preventExtensions(Person);
// Person.name = "Qin";
// console.log(Person.name);
// // Person.age = 26;
// // console.log(Person.age);
// delete Person.fast;
// console.log(Person.fast);
// console.log(Object.isSealed(Person));
// Object.seal(Person);
// // delete Person.country;
// // console.log(Person.country);
// console.log(Object.isSealed(Person));

// // Update and Add after Seal
// Person.name = "China";
// console.log(Person.name);

// // Freeze
// console.log(Object.isFrozen(Person));
// Object.freeze(Person);
// console.log(Object.isFrozen(Person));
// // Update and Add after freeze
// Person.name = "America";
// console.log(Person.name);
console.log(applicationCache.status);