// 'use strict';


// // function alpha() {
// //     console.log('alpha:start');
// //     beta();
// //     console.log('alpha:end');
// // }

// // function beta() {
// //     console.log('beta');
// // }


// // const outer = 'global';

// // function demoScope() {
// //   const inner = 'function';
// //   if (true) {
// //     const blockConst = 'block';
// //     var functionVar = 'var-function-scoped';
// //     console.log(outer, inner, blockConst, functionVar);
// //   }
// //   console.log(outer, inner, functionVar);
// // }

// // demoScope();

// // const name = 'GlobalName';

// // function a() {
// //   const name = 'FunctionName';
// //   function b() {
// //     console.log(name); // 'FunctionName' via scope chain
// //   }
// //   b();
// // }

// // a();


// // console.log(varX);
// // console.log(letX);
// // console.log(constX);

// // var varX = 1;
// // let letY = 2;
// // const constX = 3

// // console.log(addDecl (2, 3));
// // console.log(addExpr(2, 3));

// // function addDecl (a, b) {
// //     return a + b;
// // }

// // const addExpr = function (a, b) {
// //     return a + b;
// // };

// // const addArrow = (a, b) => a + b;


// // const person = {
// //     name: 'Jonas',
// //     greet: function() {
// //         console.log(`Hello, my name is ${this.name}`);
// //     },
// // };

// // person.greet();

// // const anotherPerson = {
// //     name: 'Sarah',
// // };

// // anotherPerson.greet = person.greet;
// // anotherPerson.greet();

// // //
// // const greetFunction = person.greet;
// // greetFunction(); 

// // // This breaks in event handlers
// // const button = document.querySelector('button');
// // button.addEventListener('click', person.greet); // `this` becomes the button element!

// // // Fix: use arrow function wrapper
// // button.addEventListener('click', () => person.greet());
// // // Or bind the method
// // button.addEventListener('click', person.greet.bind(person));

// // const obj = {
// //   name: 'Object',

// //   regularMethod: function () {
// //     console.log('Regular:', this.name); // this = obj
// //   },

// //   arrowMethod: () => {
// //     console.log('Arrow:', this.name); // this = global (undefined in strict mode)
// //   },
// // }; 

// // obj.regularMethod(); 
// // obj.arrowMethod(); 

// // const quiz = {
// //   name: 'Quiz Object',
// //   regularMethod() {
// //     console.log('Regular:', this.name);
// //   },
// //   arrowMethod: () => {
// //     console.log('Arrow:', this.name);
// //   },
// // };

// // quiz.regularMethod(); // Predict: ?
// // quiz.arrowMethod(); // Predict: ?


// // const timer = {
// //   name: 'Timer',

// //   // Old approach with self = this
// //   start: function () {
// //     console.log(`${this.name} starting...`);
// //     const self = this;

// //     setTimeout(function () {
// //       console.log(`${self.name} finished`);
// //     }, 1000);
// //   },

// //   // Modern approach with arrow function
// //   startModern: function () {
// //     console.log(`${this.name} starting modern...`);

// //     setTimeout(() => {
// //       console.log(`${this.name} finished modern`); // this works!
// //     }, 1500);
// //   },
// // };

// // timer.start(); 
// // timer.startModern();


// // const user = {
// //   name: 'Alice',
// //   hobbies: ['reading', 'coding', 'gaming'],

// //   // BROKEN: arrow function loses `this`
// //   printHobbiesBad: () => {
// //     this.hobbies.forEach(hobby => {
// //       console.log(`${this.name} likes ${hobby}`); // this.name is undefined!
// //     });
// //   },

// //   // FIXED: regular function preserves `this`
// //   printHobbiesGood() {
// //     this.hobbies.forEach(hobby => {
// //       console.log(`${this.name} likes ${hobby}`); // this.name works!
// //     });
// //   },
// // };

// // user.printHobbiesBad(); 
// // user.printHobbiesGood(); 


// // const functionTypes = {
// //   regularFunction: function () {
// //     console.log('Arguments length:', arguments.length);
// //     console.log('First argument:', arguments[0]);
// //   },

// //   arrowFunction: () => {
// //     // console.log(arguments); // ReferenceError: arguments is not defined
// //     console.log('Arrow function called');
// //   },

// //   modernFunction: (...args) => {
// //     console.log('Args length:', args.length);
// //     console.log('First arg:', args[0]);
// //   },
// // };

// // functionTypes.regularFunction('hello', 'world');
// // functionTypes.arrowFunction('test');
// // functionTypes.modernFunction('modern', 'approach');

// // primative
// // let age = 30;

// // //
// // let oldAge = age; 

// // age = 31;

// // console.log('age', age);

// // console.log('oldAge:', oldAge);

// // // OBJECT HEAP
// // const me = { name: 'Jonas', age: 30 };

// // const friend = me;

// // friend.age = 27;

// // console.log('me', me);
// // console.log('Friend', friend);


// function changeAge(person, newAge) {
//   person.age = newAge;
//   return person;
// }

// const originalPerson = { name: 'Sarah', age: 25 };
// const updatedPerson = changeAge(originalPerson, 30);

// console.log('original:', originalPerson); // { name: 'Sarah', age: 30 } - Changed!
// console.log('updated:', updatedPerson); // { name: 'Sarah', age: 30 } - Same object!
// console.log('same object?:', originalPerson === updatedPerson); // true


// const original = {
//   name: 'Alice',
//   age: 28,
//   hobbies: ['reading', 'coding'],
// };

// // Spread operator shallow copy
// const shallowCopy = { ...original };

// shallowCopy.name = 'Bob';
// console.log('original name:', original.name); // 'Alice' (unchanged)
// console.log('copy name:', shallowCopy.name); // 'Bob' (changed)// But nested objects are still shared
// shallowCopy.hobbies.push('gaming');
// console.log('original hobbies:', original.hobbies); // ['reading', 'coding', 'gaming'] - Changed!
// console.log('copy hobbies:', shallowCopy.hobbies); // ['reading', 'coding', 'gaming'] - Same array!

// // Object.assign alternative
// const anotherCopy = Object.assign({}, original);
// console.log('Object.assign copy:', anotherCopy);



// ////
// const deepOriginal = {
//   name: 'Charlie',
//   age: 32,
//   address: { city: 'Paris', country: 'France' },
//   hobbies: ['travel', 'photography'],
// };

// // Modern deep copy with structuredClone
// const deepCopy = structuredClone(deepOriginal);

// deepCopy.address.city = 'London';
// deepCopy.hobbies.push('cooking');

// console.log('original address:', deepOriginal.address); 
// console.log('copy address:', deepCopy.address); 
// console.log('original hobbies:', deepOriginal.hobbies); 
// console.log('copy hobbies:', deepCopy.hobbies); 

