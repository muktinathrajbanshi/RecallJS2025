//?1 Print Hello World
// console.log("Hello World!");

//?2 Values & Variable
// var myName = "Muktinath Rajbanshi";
// var age = 30;

//?3 Naming Practice
// var _myName = "muktinath";
// var 1myName = "muktinath rajbanshi";
// var _1my__Name = "rajbanshi";
// var $myName = "welcome";
// var myName% = "muktinath";
// console.log(myName%);

//?4 Data Types in JavaScript
// var myName = "Muktinath Rajbanshi";
// console.log(myName);

// var myAge = 23;
// console.log(myAge);

// var iAmMuktis = false;
// console.log(iAmMuktis);

// typeof operator 
// console.log(typeof(iAmMuktis));

//? DataTypes Practice 
// console.log( 10 + "20");
// console.log(9 - "5"); //bug

// console.log("Java " + "Script");

// console.log(" " + " ");

// console.log(" " + 0);

// console.log("muktinath" - "rajbanshi");

// console.log(true + true);

// console.log(true + false);

// console.log(false + true);

// console.log(false - true);

//🙅‍♂️ Interview Question 1
// Difference between null vs undefined 

// var iAmUseless = null;
// console.log(iAmUseless);
// console.log(typeof(iAmUseless)); 
// // 2nd JS bug 

// var iAmStandBy;
// console.log(iAmStandBy);
// console.log(typeof(iAmStandBy));

//🙅‍♂️ Interview Question 2
// What is NaN ?

// NaN is a property of the global object.
// In other words, it is a variable in global scope.
// The initial value of NaN is Not-A-Number

// var myPhoneNumber = 9823959810;
// var myName = "muktinath rajbanshi";

// if(isNaN(myName)) {
//     console.log("Plz enter valid number");
// }

// console.log(isNaN(myPhoneNumber), isNaN(myName));

//🗣️🪸 Challenge

// NaN === NaN;
// Number.NaN === NaN;
// isNaN(NaN);
// isNaN(Number.NaN);
// Number.isNaN(NaN);
// console.log(Number.isNaN(NaN));

//?5 Expressions and Operators

//! 1. Assignment operators
// An assignment operators assigns a value to its left operand
// based on the value of its right operand.
// The simple assignment operator is equal (=)

// var x = 5;
// var y = 5;


// console.log("Is both the x any y are equal " + x == y);
// I will come when there is arise es6
// console.log(`Is both the x and y are equal : ${x == y}`);


//! 2. Arithmetic operators
// An arithmetic operator takes numerical values
// (either literals or variables) as their operands and
// returns a single numerical value.

// console.log(3+3);
// console.log(10-5);
// console.log(20/5);
// console.log(5*6);

// console.log("Remainder Operator " + 81%8);

//! 3. 🙅‍♂️Increment and Decrement operator
// Operator: x++ or ++x or x-- or --x
// If used postfix, with operator after operand (for example, x++),
// the increment operator increments and returns the value before incrementing.

//? 1. postfix example:
// var num = 15;
// var newNum = num-- +4;
// console.log(num);
// console.log(newNum);

//? Postfix increment operator means the expression is evaluated first using the original value
//? of the variable and then the
//? variable is incremented(increased).



//? 1. prefix example:
//? Prefix increment operator means the variable is incremented first and then
//? the expression is evaluated using the new value of the variable.

//? If used prefix, with operator before operand (for example, ++x),
//? the increment operator increments and returns the value after incrementing.

// var num = 15;
// var newNum = --num +4;
// console.log(num);
// console.log(newNum);


//! 4. 🙅‍♂️Comparison operators
//? A comparison operator compares its operands and returns a logical value based on whether the
//? comparison is true.

// var a = 30;
// var b = 10;

// 1. Equal operator (==)
// console.log(a == b);

// 2. Not equal operator (!=)
// console.log(a != b);

// 3. Greater than operator (>)
// console.log(a > b);

// 4. Greater than or equal (>=)
// console.log(a >= b);

// 5. Less than (<)
// console.log(a < b);

// 6. Less than or equal (<=)
// console.log(a <= b);

//! 5. 🙅‍♂️Logical operators
//? Logical operators are typically used with Boolean (logical) values;
//? when they are, they return a Boolean value.

// var a = 30;
// var b = -20;

// 1. Logical AND (&&)
//? The logical AND (&&) operator (logical conjunction) for a set of operands is true if and only if
//? all of its expression are true.

// console.log(a > b && b > -50 && b < 0);


// 2. Logical OR (||)
//? The logical OR (||) operator (logical disjunction) for a set of operands is true if and only if
//? one or more of its operands is true.

// console.log((a < b) || (b > 0) || (b > 0));

// 3. Logical NOT (!)
//? The logical NOT (!) operator (logical complement, negation)
//? takes truth to falsity and vice versa.

// console.log(!((a>0) || (b<0)));
// console.log(!false);

//! 5. 🙅‍♂️String/Concatenation operators
//? The concatenation operator (+) concatenates two string values together, returning another string
//? that is the union of the two operand strings.

// var firstName = "Muktinath";
// var lastName = " Rajbanshi";
// var string = firstName+lastName;
// console.log(string);

// console.log("Hello World");
// console.log("hello " + "world");
// var myName = "muktinath";
// console.log(myName + " rajbanshi");


//🗣️🪸 Challenges
//? 1. What will be the output of 3**3?
//? 2. What will be the output, when we add a number and a string?
//? 3. Write a program to swap two numbers.
//? 4. Write a program to swap two numbers without using third variable.

// sol 1: ✅
// console.log(3**3); //3*3*3

// sol 2: ✅
// console.log(5 - "muktinath");

// sol 3: ✅
// var a = 5;
// var b = 10;

// output b=5; a=10
// var c = b; // c = 10
// b = a; // b = 5;
// a = c;
// console.log("the value of a is " + a);
// console.log("the value of b is " + b);

// sol 4: ✅

// var a = 5;
// var b = 10;

// output b=5; a=10

// a = a+b; // a = 15
// b = a - b; // b = 5
// a = a - b; // a =10

// console.log("the value of a is " + a);
// console.log("the value of b is " + b);


//🙅‍♂️ Interview Question 3

//? What is the Difference between == vs === ?

// soln 
// var num1 = 5;
// var num2 = "5";
// console.log(typeof(num1));
// console.log(typeof(num2));
// console.log(num2);


// console.log(num1 === num2);

//! 6. 🙅‍♂️Control Statement & Loops
//? 1. If..Else
//? 2. Switch Statement
//? 3. While Loop
//? 4. Do-While Loop
//? 5. For Loop
//? 6. For in Loop
//? 7. For of Loop
//? 8. Conditional (ternary) operator


//?! 6.1. If..Else
//? The if statement executes a statement if a specified condition is truthy.
//? If the condition is falsy, another statement can be executed.

// if raining = raincoat
// else no raincoat

// var tom_r = "sunny";

// if (tom_r == "rain") {
//     console.log("take a raincoat");
// } else {
//     console.log("No need to take a raincoat"); 
// }

//🗣️🪸 Challenges
//! 1. Write a program that works out whether if a given year is a leap year or not ?
//? A normal year has 365 days, leap years have 366, with an extra day in February.

// var year = 2020;
// debugger;
// if(year % 4 === 0) {
//     if(year % 100 === 0) {
//         if(year % 400 === 0) {
//                console.log("the " +year+ " is a leap year!"); 
//         }else {
//             console.log("the " +year+ " is not a leap year!");
//         }
//     }else {
//         console.log("the " +year+ " is a leap year!");  
//     }
// }else {
//     console.log("the " +year+ " is not a leap year!");
    
// }

//! 2. What is truthy and falsy values in Javascript?
//? we have total 5 falsy values in javascript
// 👉 0,"",undefined,null,NaN,false** is false anyway

// if(score = 0) {
//     console.log("OMG, We loss the game 😪");  
// } else {
//     console.log("Yay, We won the game 😀");
// }

//?! 6.2. Conditional (ternary) operator
//? The conditional (ternary) operator is the only JavaScript operator that takes three operands

// var age = 17;
// if(age >= 18) {
//     console.log("you are eligible to vote"); 
// } else {
//     console.log("You are not eligible to vote");   
// }

// var age = 15;
// console.log((age >= 18) ? "you are eligible to vote" :  "You are not eligible to vote"); 

//?! 6.3. Switch Statement
//? Evaluates an expression, matching the expression's value to a case clause, and executes statements
//? associated with that case.

//? 1. Without break statement
// Find the Area of circle, triangle and rectangle?

// var area = "square";
// var PI = 3.142, l=5, b=4, r=3;

// if(area == "circle") {
//     console.log("the area of circle is : " + PI*r**2);  
// } else if(area == "triangle") {
//     console.log("the area of triangle is : " + (l*b)/2);
// } else if(area == "rectangle") {
//     console.log("the area of rectangle is : " + (l*b));
// } else {
//     console.log("please enter valid data");
// }

// var area = "ggg";
// var PI = 3.142, l=5, b=4, r=3;


// switch(area) {
//     case "circle":
//        console.log("the area of circle is : " + PI*r**2); 
//        break;
//     case "triangle":
//         console.log("the area of triangle is : " + (l*b)/2);
//          break;
//     case "rectangle":
//          console.log("the area of rectangle is : " + (l*b));
//           break;
//     default:
//        console.log("please enter valid data");  
// }


// 🤫break
// Terminates the current loop, switch, or label
// statement and transfers
// program control to the statement following the terminated statement.

//?! 6.4. While Loop Statement
//? The while statement creates a loop that executes a specified statement as long as the test condition
//? evaluates to true.

// var num = 20;
// // block scope 
// while (num <= 10) {
//     console.log(num); //infinite loop
//     num++;
// }

//?! 6.5. Do-While Loop Statement

// var num = 20;
// do {
//     debugger;
//     console.log(num); //infinite loop
//     num++;
// } while (num <= 10); 

//?! 6.6. For Loop Statement
// for (var num = 0; num<=10; num++) {
//     debugger;
//     console.log(num);
    
// }

//🗣️🪸 Challenges
//? Javascript program to print table for given number (8)?
// output : 8 * 1 = 8 

// for(var num = 1; num<=10; num++){
//     var eight = 8;
//     console.log(eight + " * " + num + " = " +(eight*num));
// }

//! 7. 👉 Functions in JavaScript
//? A Javascript function is a block of code designed to perform a particular task.

//?! 7.1Function Definition
//? Before we use a function, we need to define it.
//? A function definition (also called a function declaration, or function statement) consists of the
//? function keyword, followed by:

//? The name of the function.
//? A list of parameters to the function, enclosed in parentheses and separated by commas.
//? The JavaScript statements that define the function, enclosed in curly brackets, {...}.

// var a = 10;
// var b = 20;
// var sum = a+b;
// console.log(sum);

// function sum() {
//     var a = 10, b = 20;
//     var total = a+b;
//     console.log(total);
    
// }

//?! 7.2 Calling functions
//? Defining a function does not execute it.
//? A JavaScript function is executed when "something" invokes it (calls it).

// function sum() {
//     var a = 10, b = 20;
//     var total = a+b;
//     console.log(total);
    
// }
// sum();

//🗣️🪸 Challenges time
//? 1. What is the difference between function parameter vs function arguments?
//? Function parameters are the names listed in the function's definition.
//? Function arguments are the real values passed to the function.

// function sum(a, b) {
//     var total = a+b;
//     console.log(total); 
// }
// sum();
// sum(20, 30);
// sum(50, 50);
// sum(5, 6);

//🙅‍♂️ Interview Question 4
//? Why Functions?

//? You can reuse code: Define the code once, and use it many times.
//? You can use the same code many times with different arguments, to produce different results.

//? OR

//? A function is a group of reusable code which can be called anywhere in your program.
//? This eliminates the need of writing the same code again and again.

// DRY => do not repeat yourself 


//?! 7.3 Function expressions
//? Function expressions simply means create a function and put it into the variable.

// function sum(a, b) {
//     var total = a+b;
//     console.log(total); 
// }
// var funExp = sum(40, 50);
// funExp;

//?! 7.4 Return keywords
//? When Javascript reaches a return statement, the function will stop executing.
//? Functions often compute a return value.
//? The return value is "returned" back to the "caller"

// function sum(a, b) {
//     return total = a+b;
// }
// var funExp = sum(50, 50);
// console.log("The sum of two num is " + funExp);

//?! 7.4 Anonymous Function
//? A function expression is similar to and has the same syntax as a function declaration one can 
//? define "named" function expressions (where the name of the expression might be used in the call
//? stack for example)
//? or "anonymous" function expressions.

// var funExp = function (a, b) {
//     return total = a+b;
// }

// var sum = funExp(75, 15);
// var sum1 = funExp(50, 50);
// console.log(sum > sum1);

// *************************************
// 😎 Now It's Time for Modern JavaScript 😍🤪
// 🙏🙏 Features of ECMAScript 2015 also known as ES6 ✅🙅‍♂️
//! 1. LET VS CONST VS VAR

// var myName = "muktinath rajbanshi";
// console.log(myName);
// myName = "milan rajbanshi";
// console.log(myName);

// let myName = "hirubba rajbanshi";
// console.log(myName);
// myName = "milan rajbanshi";
// console.log(myName);

// const myName = "hirubba rajbanshi";
// console.log(myName);
// myName = "nimda rajbanshi";
// console.log(myName);

//? var => Function scope
//? let and const => Block Scope

// function biodata() {
//     const myFirstName = "muktinath";
//     console.log(myFirstName);  

//     if(true) {
//         const myLastName = "rajbanshi";
//         console.log("Inner " + myLastName);
//         console.log("Inner " + myFirstName);   
//     }
//      console.log("InnerOuter " + myLastName);
// }
// console.log(myFirstName);

// biodata();

//! 2. Template literals (Template strings)
//? JavaScript program to print table for given number (8) ?

// output: 8 * 1 = 8
//         8 * 2 = 16
//         8 * 10 = 80

    // for(let num = 1; num <=10; num++){
    //     let tableOf = 8;
    //     // console.log(tableOf + " * " + num + " = " + tableOf * num);
    //     console.log(` ${tableOf} * ${num} = ${tableOf * num} `);       
    // }

    //! 3. Default Parameters 
    //? Default function parameters allow named parameters to be initialized with default values
    //? if no value or undefined is passed.

    // function mult(a, b = 5) {
    //     return a * b;
    // }

    // console.log(mult(3));

    //! 4. Fat Arror Function
    // 🧜‍♂️ Normal Way of writing function

    // function sum() {
    //     let a = 5; b = 6;
    //     let sum = a + b;
    //     return `the sum of the two number is ${sum}`;
    // }
    // console.log(sum());

    // 🕵️‍♂️ How to convert in into Fat Arrow Function
    
    // const sum = () => `the sum of the two number is ${(a = 6) + (b = 6)}`;
    // console.log(sum());

    //! 8. 👉 Spread Operator in JavaScript

    // const colors = ["red", "green", "blue", "white"];

    // const myColors = ["red", "green", "blue", "white", "yellow", "black"];
    // //? 2nd time add one more color on top and tell we need to write it again on myColors array too

    // const myFavColors = [ ...colors, "yellow", "black"];
    
    // console.log(myFavColors);
    
    //?! ES7 (2016) Features

    //? 1. Array.prototype.includes(array include) 
    // const colors = ["red", "green", "blue", "white", "pink"];
    // const isPresent = colors.includes("purple");
    // console.log(isPresent);

    //? 2. Exponential Operator [power (**)] 
    // console.log(2**3);

    //?! ES8 (2017) Features

    //? 1. String padding
    //? 2. Object.values()
    //? 3. Object.entries()

    // const message = "my name is muktinath";
    // console.log(message);
    // console.log(message.padStart(5));
    // console.log(message.padEnd(10));

    // const person = { name: "Fred", age: 23};

    // console.log(Object.values(person));
    // console.log(Object.entries(person));

      //?! ES 2018

      // const person = { name: "Fred", age: 23, degree : "BCA" };
      // const sPerson = { ...person };

      // console.log(person);
      // console.log(sPerson);

      //?! ES 2019

      //? Array.prototype.{flat,flatMap}
      //? Object.fromEntries()
      
    //   const arr = [
    //     ["zone_1", "zone_2"],
    //     ["zone_3", "zone_4"],
    //     ["zone_5", "zone_6"],
    //     ["zone_7", "zone_8", ["zone_9", ["zone_9", "zone_10"]]]
    // ];

    // let flatArr = arr.reduce((accum, curElem) => {
    //     return accum.concat(curElem);
    // })
    // console.log(arr.flat(Infinity));
    
    // const person = { name: "Fred", age: 23};

    // console.log(Object.values(person));
    // const arrObj = Object.entries(person);
    // console.log(Object.fromEntries(arrObj));
    
    
    //?! ES2020
    //? #1: BigInt

    // let oldNum = Number.MAX_SAFE_INTEGER;
    // console.log(oldNum);
    // console.log(9007199254740991n + 12n);

    // const newNum = 9007199254740991n + 12n;

    // console.log(newNum);
    // console.log(typeof newNum);

    //? #2 Nullish Coalescing

    // const foo = null ?? "default string";

    // console.log(foo);

    //?! ES2014 update again

  //   "use strict";

  //  let x = 3.14;
  //   console.log(x);    

    //! 8. 👉 Arrays in JavaScript
    //? When we use var, we can stored only one value at a time.
    // var frnd1 = "ramesh";
    // var frnd2 = "arjun";
    // var frnd3 = "harish";

    // var myFriends = ["ramesh", "arjun", "harish", 23, male];


    //? When we feel like storing multiple values in one variable then instead of var, we will use
    //? an Array.
    //? In JavaScript, we have an Array class, and arrays are the prototype of this class.

    //? example 😎

    // var myFriends = new Array; //optional
    // var myFriends = ["ramesh", "arjun", "harish", 23, male];

     //! 8.1 👉 Traversal in Array
     //? navigate through an array
     //? If we want to get the single data at a time and also if we want to change the data

    // var myFriends = ["muktinath", "ramesh", "arjun", "harish", "ramesh", "arjun", "krishna"];
    // console.log(myFriends[myFriends.length - 1]);

    //? If we want to check the length of data
    // console.log(myFriends.length);
    

    //? we use for loop to navigate
    // var myFriends = ["muktinath", "ramesh", "arjun", "krishna"];

    // for(var i = 0; i<myFriends.length; i++) {
    //     console.log(myFriends[i]);
    // }

    //? After ES6 we have for..in and for..of loop too
    // var myFriends = ["muktinath", "ramesh", "arjun", "krishna"];

    // for(let elements in myFriends) {
    //     console.log(elements);   
    // }

    // for(let elements of myFriends) {
    //     console.log(elements);
    // }

    //? Array.prototype.forEach() 👨‍✈️👨‍✈️
    //? Calls a function for each element in the array.

    // var myFriends = ["muktinath", "ramesh", "arjun", "krishna"];

    // myFriends.forEach(function (element, index, array) {
    //     console.log(element + " index : " + index + "  " + array);
    // });

    // myFriends.forEach((element, index, array) => {
    // console.log(element + " index : " + index + "  " + array);
    // });
    
     //! 8.1 👉 Searching and Filter in an Array
     //? Array.prototype.indexOf() 👨‍🎓👨‍🎓👨‍🎓
     //? Returns the first (least) index of an element within the array equal
     //? to an element, or -1 if none is found. It search the element from the 0th index number

    // var myFriends = ["muktinath", "ramesh", "krishna", "arjun", "arjun"];

    // console.log(myFriends.indexOf("krishna"));

     //? Array.prototype.lastIndexOf() 👨‍🎓👨‍🎓👨‍🎓
    // var myFriends = ["muktinath", "ramesh", "arjun", "krishna", "arjun"];

    // console.log(myFriends.lastIndexOf("krishna"));

    //? Array.prototype.includes() 👨‍🎓👨‍🎓👨‍🎓
    // var myFriends = ["muktinath", "ramesh", "arjun", "krishna"];

    // console.log(myFriends.includes("ramesh"));

    //?! search with filteration find() 
    //? Returns the found element in the array if some element in the array satisfies the testing 
    //? function or undefined.

    // const prices = [200, 300, 350, 400, 450, 500, 600];

    // const elements = prices.find((curElem) => curElem < 400);

    // console.log(prices.find((curElem) => curElem < 400));

    //?! search with filteration findIndex() 
    //? Returns the found index in the array if an element in the array satisfies the testing
    //? function else -1 if not found.

    // const prices = [200, 300, 350, 400, 450, 500, 600];

    // console.log(prices.findIndex((curElem) => curElem < 400));


    //?! search with filteration filter() 
    //? Returns a new array containing all elements of the calling array for which the providing 
    //? filtering function return true.

    // const prices = [200, 300, 350, 400, 450, 500, 600];

    // const newPriceTag = prices.filter((curElem, index) => {
    //     return curElem < 400;
    // });
    // console.log(newPriceTag);
    
    //! 8.2 👉 How to sort and compare an array sort()
    //? array.sort(): Sorts the elements of an array in place and returns the sorted array. The
    //? default sort order is ascending build converting the elements into strings then comparing
    //? their sequence of UTF 16 code units value.

    // const month = ["March", "January", "February", "May", "April", "June", "September"];
    // const prices = [1, 30, 4, 21, 100000, 99];

    // console.log(prices.sort());

     //! 8.3 👉 Array Subsection 😎 Perform CRUD
     //? Array.prototype.push() 🙅‍♂️
     //? The push() method adds one or more elements to the end of an array and returns the new
     //? length of the array.
     
    //  const animals = ["pigs", "goats", "sheep"];

    //  const count = animals.push("chicken");
    //  console.log(count);

    //  animals.push("chicken", "mutton", "banana", "apple");
    //  console.log(animals);
     
     //? Array.prototype.unshift() 🙅‍♂️
    // const animals = ["pigs", "goats", "sheep"];
    
    // const count = animals.unshift("chicken");
    // console.log(count);
    // console.log(animals);

    // animals.unshift("chicken", "mutton", "banana", "apple");
    // console.log(animals);

    // const myNumbers = [1, 2, 3, 5];

    // myNumbers.unshift(4,6);
    // console.log(myNumbers);

    //? Array.prototype.pop() 🙅‍♂️
    //? The pop() method removes the last element from an array and returns that element. This method
    //? changes the length of the array.

    // const plants = ["broccauli", "cauliflower", "kale", "tomato", "cabbage"];

    // console.log(plants);
    // console.log(plants.pop());
    // console.log(plants);

    //? Array.prototype.shift() 🙅‍♂️
    //? The shift() method removes the first element from an array and returns that removed
    //? element. This method changes the length of the array.

    // const plants = ["broccauli", "cauliflower", "kale", "tomato", "cabbage"];

    // console.log(plants);
    // console.log(plants.shift());
    // console.log(plants);
    
    //🗣️🪸 Challenges time ❤️❤️💖
    //? Array.prototype.splice() 🙅‍♂️
    //? Adds and/or removes elements from an array.

    //? 1. Add Dec at the end of an array?
    //? 2. What is the return value of splice method?
    //? 3. update march to March (updata)?
    //? 4. Delete June from an array?


    //? soln1:
    // const newMonth = months.splice(months.length, 0, "Dec");
    // console.log(months);

    //? soln2:
    // const months = ["Jan", "march", "April", "June", "July"];
    // console.log(newMonth);

    //? soln3: 
    // const months = ["Jan", "march", "April", "June", "July"];

    // const indexOfMonth = months.indexOf("June");

    // if(indexOfMonth != -1) {
    // const updateMonth = months.splice(indexOfMonth,1,"june");
    // console.log(months);
    
    // } else {
    //     console.log("No such data found");
    // }

    //? soln4:
    //  const months = ["Jan", "march", "April", "June", "July"];

    // const indexOfMonth = months.indexOf("April");

    // if(indexOfMonth != -1) {
    // const updateMonth = months.splice(indexOfMonth,Infinity);
    // console.log(months);
    // console.log(updateMonth);
    
    
    // } else {
    //     console.log("No such data found");
    // }

      //! 8.4 👉 Map and Reduce Method
      //? Array.prototype.map() 🕵️‍♂️

      //? let newArray = arr.map(callback(currentValue[, index[, array]]){
      //? return element for newArray, after executing something
      //? }[, thisArg]);

      //? Returns a new array containing the results of calling a function on every element in this
      //? array.
      //? It returns new array without mutating the original array

    // const array1 = [1, 4, 9, 16, 25];
    // num > 9
    // let newArr = array1.map((curElem, index, arr) => {
    //     return curElem > 9;
    // })

    // console.log(array1);
    // console.log(newArr);
    
    // let newArr = array1.map((curElem, index, array) => {
    //     return `Index no = ${index} and the value is ${curElem} belong to ${array}`
    // })

    // let newArrfor = array1.forEach((curElem, index, array) => {
    //     return `Index no = ${index} and the value is ${curElem} belong to ${array}`
    // })
    
    // console.log(newArr);
    // console.log(newArrfor);
    
    //🗣️🪸 Challenges time ❤️❤️💖
    //? 1. Find the square root of each element in an array?
    //? 2. Multiply each element by 2 and return only those elements which are greater than 10.

    //? soln1:
    // let arr = [25, 36, 49, 64, 81];

    // let arrSqr = arr.map((curElem) => Math.sqrt(curElem))
    // console.log(arrSqr);

    //? soln2:
    // let arr = [2, 3, 4, 6, 8];

    // let arr2 = arr.map((curElem) => curElem * 2).filter((curElem) => curElem > 10).reduce((accumulator, curElem) => accumulator += curElem);
    // console.log(arr2);
    
     //! 8.4 👉 Reduce Method
    //? flatten an array means to convert the 3d or 2d array into a single dimensional array

    //? The reduce() method executes a reducer function (that you provide) on each element of the
    //? array, resulting in single output value.

    //? The reducer function takes four arguments:

    //? Accumulator
    //? Current Value
    //? Current Index
    //? Source Array

    // let arr = [5, 6, 2];

    // let sum = arr.reduce((accumulator, curElem) => {
    //     debugger;
    //     return accumulator += curElem;
    // },7)
    // console.log(sum);

    //? How to fatten an array
    //? converting 2d and 3d array into one dimensional array

    // const arr = [
    //     ["zone_1", "zone_2"],
    //     ["zone_3", "zone_4"],
    //     ["zone_5", "zone_6"],
    //     ["zone_7", "zone_8", ["zone_9", "zone_10"]]
    // ];

    // let flatArr = arr.reduce((accum, curElem) => {
    //     return accum.concat(curElem);
    // })
    // console.log(flatArr);

     //! 9. 👉 Strings in JavaScript
     //? A JavaScript string is zero or more characters written inside quotes.
     //? JavaScript strings are used for storing and manipulating text.
     //? You can use single or double quotes

     //? Strings can be created as primitives,
     //? from string literals, or as objects, using the String() constructor

    // let myName = "muktinath rajbanshi";
    // let myChannelName = 'muktinathrajbanshi2';

    // // let ytName = new String("Muktinath Tech");
    // let ytName = "muktinath tech";

    // console.log(myName);
    // console.log((ytName));

    //? 🙅‍♂️ How to find the length of a string 
    //? String.prototype.length 🧜‍♂️
    //? Reflects the length of the string.

    // let myName = "mukti raj";
    // console.log(myName.length);

    //?! 👉 Escape Character

    //  let anySentence = "We are the so-called \"Vikings\" from the north.";
    // console.log(anySentence);

    //? if you don't want to mess, simply use the alternate quotes

    //  let anySentence = 'We are the so-called "Vikings" from the north.';
    // console.log(anySentence);
    
    // let anySentence = "We are the so-called 'Vikings' from the north.";
    // console.log(anySentence);
    
    //?! 👉 Finding a String in a String
    //? String.prototype.indexOf(searchValue [, fromIndex]) 🙅‍♂️
    
    //? The indexOf() method returns the index of (the position of) the first occurrence of a
    //? specified text in a string

    // const myBioData = 'I am mukti rajm';
    // console.log(myBioData.indexOf("m",7));
    
   //?! String.prototype.lastIndexOf(searchValue [, fromIndex]) 🙅‍♂️  
   //? Returns the index within the calling String object of the last occurrence of searchValue, or
   //? -1 if not found.
   
    // const myBioData = 'I am muktinath rajbanshi';
    // console.log(myBioData.lastIndexOf("a",15));

     //?! 👉 Searching for a String in a String

     //? String.prototype.search(regexp) 🙅‍♂️

     //? The search() method searches a string for a specified value and returns the position of
     //? the match

    // const myBioData = "I am muktinath rajbanshi";

    // let sData = myBioData.search("muktinath");
    // console.log(sData);

     //? The search() method cannot take a second start position argument.


    //?! 👉 Extracting String Parts

    //? There are 3 methods for extracting a part of a string:
    
    //? slice(start, end)
    //? substring(start, end)
    //? substr(start, length)

    //?! The slice() Method 🙅‍♂️
    //? slice() extracts a part of a string and returns the extracted part in a new string.

    //? The method takes 2 parameters: the start position,
    //? and the end position (end not included).

    // var str = "Apple, Banana, Kiwi, mango";

    // // let res = str.slice(0,4);
    // let res = str.slice(7);
    // console.log(res);

    //? The slice() method selects the elements starting at the given start argument, and ends at,
    //? but does not include, the given end argument.

    //? Note: The original array will not be changed.

    //? Remember: JavaScript counts positions from zero. First position is 0 and last we have to choose
    //? by default it takes all the length after
    
   //🗣️🪸 Challenges time ❤️❤️💖
   //? Q1. Display only 280 characters of a string like the one used in Twitter ?

  //  let myTweets = "Python is an easy to learn, powerful programming language. It has efficient high-level data structures and a simple but effective approach to object-oriented programming. Python’s elegant syntax and dynamic typing, together with its interpreted nature, make it an ideal language for scripting and rapid application development in many areas on most platforms."

  //  let myActualTweet = myTweets.slice(0, 280);
  // console.log(myActualTweet);
  // console.log(myActualTweet.length);

  //?! The substring() Method 🙅‍♂️
//? substring() is simpler to slice().
//? The difference is that substring() cannot accept negative indexes.

// var str = "Apple, Banana, Kiwi";
// let res = str.substring(8, -2);
// console.log(res);


//? If we give negative value then the characters are counted from the oth pos

//?! The substr() Method 🙅‍♂️
//? substr() is similar to slice()

//? The difference is that the second parameter specifies the length of the extracted part.

// var str = "Apple, Banana, Kiwi";
// // let res = str.substr(7,-2);
// let res = str.substr(-4);
// console.log(res);
  

//?! 👉 Replacing String Content()
//? String.prototype.replace(searchFor, replaceWith) 🙅‍♂️

//? The replace() method replaces a specified value with another value in a string.

// let myBioData = `I am muktinath rajbanshi muktinath`;

// let replaceData = myBioData.replace("Muktinath", "Muktinath");
// console.log(replaceData);
// console.log(myBioData);



//? Points to remember
//? 1. The replace() method does not change the string it is called on. It returns a new string.
//? 2. By default, the replace() method replaces only the first match
//? 3. By default, the replace() method is case sensitive.
//? Writing VINOD (with upper-case) will not work

//?! 👉 Extracting String Characters

//? There are 3 methods for extracting string characters:

//? charAt(position)
//? charCodeAt(position)
//? Property access []

//?! The charAt() Method 🙅‍♂️
//? The charAt() method returns the character at a specified index (position) in a string

// let str = "HELLO WORLD";

// console.log(str.charAt(0));

//?! The charCodeAt() Method 🙅‍♂️
//? The charCodeAt() method returns the unicode of the character at a specified index in a string:
//? The method returns a UTF-16 code (an integer between 0 and 65535).
//? The Unicode Standard provides a unique number for every character, no matter the platform, device,
//? application, or language. UTF-8 is a popular Unicode encoding which has 88-bit code units.


// var str = "HELLO WORLD";
// console.log(str.charCodeAt(0));

//? Property Access
//? ECMAScript 5 (2009) allows property access [ ] on strings

// var str = "HELLO WORLD";
// console.log(str[1]);



//!🗣️🪸 Challenges time ❤️❤️💖
//? Return the Unicode of the last character in a string

// let str = "HELLO WORLD";

// let lastChar = str.length - 1;
// console.log(str.charCodeAt(lastChar));


    //!👉 Other useful methods

    // let myName = "muktinath rajbanShi";
    // console.log(myName.toUpperCase());
    // console.log(myName.toLowerCase());

    //? The concat() Method 🙅‍♂️
    //? concat() method joins two or more strings

    // let fName = "muktinath";
    // let lName = "rajbanshi";

    // console.log(fName  + lName);
    // console.log(`${fName} ${lName}`);
    
    // console.log(fName.concat(lName));
    // console.log(fName.concat(" ", lName));

    //?! String.trim() 🙅‍♂️
    //? The trim() method removes whitespace from both sides of a string

    // var str = "             Hello World!                            ";
    // console.log(str.trim());

    //?! splite() Method Converting a String to an Array
    //? A string can be converted to an array with the split() method

    // var txt = "a, b, c, | d, e"; //String
    // console.log(txt.split(","));  // Split on commas
    // console.log(txt.split(" "));  // Split on spaces
    // console.log(txt.split("|"));  // Split on pipe
    
    //! 8. 👉 Date and Time in JavaScript
    
    //? JavaScript Date objects represent a single moment in time in a platform-independent format.
    //? Date objects contain a Number that represents milliseconds since 1st January 1970 UTC.

    //? 👉 Creating Date Objects
    //? There are 4 ways to create a new date object:

    // new Data()
    // new Date(year, month, day, hours, minutes, seconds, milliseconds)
    // //? It takes 7 arguments
    // new Date(milliseconds)
    // //? we cannot avoid month section
    // new Date(date string)

    //?! new Date() 🙅‍♂️
    //? Date objects are created with the new Date() constructor.
    
    // let currDate = new Date();
    // console.log(currDate);
    
    // console.log(new Date());
    // console.log(new Date().toLocaleString());
    // console.log(new Date().toString());

  //?! Date.now() 🙅‍♂️
  //? Returns the numeric value corresponding to the current time-the number of milliseconds
  //? elapsed since January 1, 1970 00:00:00 UTC

  // console.log(Date.now());

  //? new Date(year, month, ...) 🙅‍♂️
  //? 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order)
  //? Note: JavaScript counts months from 0 to 11.

  //? January is 0. December is 11.

  // var d = new Date(2025, 0, 5, 20, 33, 30, 0);
  // console.log(d.toLocaleString());
  
  //? new Date(dateString) 🙅‍♂️
  //? new Date(dateString) creates a new date object from a date string

  // var d = new Date("September 25, 2025 11:13:00");
  // console.log(d);

  //? new Date(milliseconds) 🙅‍♂️
  //? new Date(milliseconds) creates a new date object as zero time plus millisecond

  // var d = new Date(0);
  // var d = new Date(1768654890820);
  // var d = new Date(86400000*2);
  // console.log(d.toLocaleString());
  
  //👉 Dates Method

  // const curDate = new Date();

  // //? how to get the individual date
  // console.log(curDate.toLocaleString());
  // console.log(curDate.getFullYear());
  // console.log(curDate.getMonth());
  // console.log(curDate.getDate());
  // console.log(curDate.getDay());

  //? how to set the individual date

  // console.log(curDate.setFullYear(2025));
  // //? The setFullYear() method can optionally set month and day
  // console.log(curDate.setFullYear(2025, 6, 1));
  // console.log(curDate.setMonth(10));
  // console.log(curDate.setDate(5));
  // console.log(curDate.toLocaleString());
  
  
  //?! 👉 Times Method
  // const curTime = new Date();

  //? how to get the individual time

  // console.log(curTime.getTime());
  // //? The getTime() method returns the number of milliseconds since January 1, 1970
  // console.log(curTime.getHours());
  // //? The getHours() method returns the hours of a date as a number
  // console.log(curTime.getMinutes());
  // console.log(curTime.getSeconds());
  // console.log(curTime.getMilliseconds());


  //?! 👉 how to set the individual time
  
  // let curTime = new Date();

  // console.log(curTime.setTime());
  // console.log(curTime.setHours(5));
  // console.log(curTime.setMinutes(5));
  // console.log(curTime.setSeconds(5));
  // console.log(curTime.setMilliseconds(5));
  
  //!🗣️🪸 Challenges time ❤️❤️💖
  // (function(){
  //   setInterval(() => {
  //     console.log(new Date().toLocaleTimeString());    
  //   }, 1000)
  // })();

  //! 👉 Practice Time
  // new Date().toLocaleTimeString(); //9:30:18
  
  // new Date().toLocaleDateString(); // 12/17/2025

  // new Date().toLocaleString() // 12/17/2025, 9:30:18

    //! 9. 👉 Math Object in JavaScript
    //? The JavaScript Math object allows you to perform mathematical tasks on numbers.

    // console.log(Math.PI); 🙅‍♂️

    // Math.round() 🙅‍♂️
    // ? returns the value of x rounded to its nearest integer

    // let num = 10.9565;
    // console.log(Math.round(num));

    // Math.pow() 🙅‍♂️
    //? Math.pow(x, y) returns the value of x to the power of y

    // console.log(Math.pow(2,3));
    // console.log(2**3);
    
    // Math.sqrt() 🙅‍♂️
    //? Math.sqrt(x) returns the square root of x

    // console.log(Math.sqrt(25));
    // console.log(Math.sqrt(81));
    // console.log(Math.sqrt(66));

    // Math.abs() 🙅‍♂️
    //? Math.abs(x) returns the absolute (positive) value of x

    // console.log(Math.abs(-55));
    // console.log(Math.abs(-55.5));
    // console.log(Math.abs(-955));
    // console.log(Math.abs(4-6));
    

    // Math.ceil() 🙅‍♂️
    //? Math.ceil(x) returns the value of x rounded up to its nearest integer

    // console.log(Math.ceil(4.51));
    // console.log(Math.round(4.51));
    // console.log(Math.ceil(99.1));
    // console.log(Math.round(99.1));

    // Math.floor() 🙅‍♂️
    //? Math.floor(x) returns the value of x rounded down to its nearest integer

    // console.log(Math.floor(4.7));
    // console.log(Math.floor(99.1));

    // Math.min() 🙅‍♂️
    //? Math.min() can be used to find the lowest value in a list of argument.

    // console.log(Math.min(0, 150, 30, 20, -8, -200));

    // Math.max() 🙅‍♂️
    //? Math.max() can be used to find the highest value in a list of argument.

    // console.log(Math.max(0, 150, 30, 20, -8, -200));

    // Math.random() 🙅‍♂️
    //? Math.random() returns a random number between 0 (inclusive), and 1

    // console.log(Math.random()*10);
    
    // console.log(Math.floor(Math.random()*10)); // 0 to 9 

    // Math.trunc() 🙅‍♂️
    //? The trunc() method returns the integer part of a number

    // console.log(Math.trunc(4.6));
    // console.log(Math.trunc(-99.1));
    // console.log(Math.ceil(-99.1));
    

    //?! Practice Time
    //? if the argument is a positive number, Math.trunc() is equivalent to
    //? Math.floor(), otherwise Math.trunc() is equivalent to Math.ceil().
    
    //! 10. 👉 Document Object Model in JavaScript

    //? 1. Window is the main container or we can say the global Object
    //? and any operations related to entire browser window can be a part of window object.

    //? For ex 👉 the history or to find the url etc.

    //? 2. whereas the DOM is the child of Window Object.

    //? 2. All the members like objects, methods or properties.
    //? If they are the part of window object then we do not refer the window
    //? object. Since window is the global object so you do not have to write down window.
    //? it will be figured out by the runtime.
    
    //? For example
    //? 👉 window.screen or just screen is a small information object about physical screen dimensions.
    //? 👉 window.location giving the current URL
    //? 👉 window.document or just document is the main object
    //? of the potentially visible (or better yet: rendered) 
    //? document object model/DOM.

    //? Where in the DOM we need to refer the document,
    //? if we want to use the document object, methods or properties
    //? For example
    // ? 👉 document.getElementById()
    
    //? 3 Window has methods, properties and object.
    //? ex setTimeout() or setInterval() are the methods
    //? where as Document is the object of the Window and

    //*! DOM vs BOM

    //? 👉 The DOM is the Document Object Model, which deals with the document, the HTML elements themselves,
    //? e.g document and all traversal you would do in it, events, etc.

    //? For ex: 💁
    //? change the background color to red
    //? document.body.style.background = "red";

    //? 👉 The BOM is the Browser Object Model, which deals with browser components aside from the document, like history,
    //? location, navigator and screen (as well as some others that vary by browser). OR in simple meaning all the
    //? Window operations which comes under BOM are performed using BOM

    //? Let's see more practical on History Object

    //? Functions alert/confirm/prompt are also a part of BOM:
    //? they are directly not related to the document,
    //? but represent pure browser methods of communicating with the user.

    // alert(location.href); //? shows current URL
    // if(confirm("Want to Visit MuktinathTech?")) {
    //   location.href = "https://muktinathrajbanshi.com/"; //redirect the page
    // }

    //?👉 Section 3: Navigate through the DOM
  //? 1: document.documentElement
  //? returns the Element that is the root element of the document.

  //? 2: document.head
  //? 3: document.body
  //? 4: document.body.childNodes (include tab, enter and whiteSpace) list of the direct children only
  //? 5: document.body.children (without text nodes, only regular Elements)
  //? 6: document.childNodes.length
  //? 7: document.body.childNodes() (to check whether child node is exist or not)

  //? 👉 Practice Time
  //? How to check whether an element has child nodes or not?
  //? we will use hasChildNodes()
  
  //? 👉 Practice Time
  //? How to find the child in DOM tree
  //? firstChild vs firstElementChild
  //? lastChild vs lastElementChild
  //? const data = document.body.firstElementChild;
  //? undefined
  //? data
  //? data.firstElementChild
  //? data.firstElementChild.firstElementChild
  //? data.firstElementChild.firstElementChild.style.color = "red"
  //? vs
  //? document.querySelector(".child-two").style.color = "yellow";

  //? 👉 How to find the Parent Nodes
  //? document.body.parentNode
  //? document.body.parentElement

  //? 👉 How to find or access the siblings
  //? document.body.nextSibling
  //? document.body.nextElementSibling
  //? document.body.previousSibling
  //? document.body.previousElementSibling


    //? SECTION 4: How to search the Elements and the References 
    //? We will see the new file

    //?! Section 11 👉 EVENTS in JavaScript

    //? HTML events are "things" that happen to HTML elements.
    //? When JavaScript is used in HTML pages, JavaScript can "react" on these events.

    //? 💁 HTML Events
    //? An HTML event can be something the browser does, or something a user does.

    //? Here are some examples of HTML events:

    //? An HTML web page has finished loading
    //? An HTML input field was changed
    //? An HTML button was clicked
    //? Often, when events happen, you may want to do something.

    //? JavaScript lets you execute code when events are detected.

    //? HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.

    //?! 👉 4 ways of writing Events in JavaScript

    //? 1. using inline events alert();
    //? 2: By Calling a function (We already seen and most common way of writing)
    //? 3: using Inline events (HTML onclick="" property and element.onclick)
    //? 4: using Event Listeners (addEventListener and IE's attachEvent)
    
    //? Check the Events HTML File

    //?! Section 2: What is Event Object?
    //? Event object is the parent object of the event object.
    //? for Example

    //? MouseEvent, focusEvent, KeyboardEvent etc

    //?! Section 3: MouseEvent in JavaScript
    //? The MouseEvent Object
    //? Events that occur when the mouse interacts with the HTML
    //? document belongs to the MouseEvent Object.

    //?! Section 4: KeyboardEvent in JavaScript
    //? Events that occur when user presses a key on the keyboard,
    //? belongs to the keyboardEvent Object.
    //? https://www.w3schools.com/jsref/obj_keyboardevent.asp
    
    
     //?! Section 5: InputEvents in JavaScript
     //? The onchange event occurs when the value of an element has been changed.
     
     //? For radiobuttons and checkboxes, the onchange event occurs when the 
     //? checked state has been changed.
    

    //?! 👉 JavaScript Timing Events

    //? The window object allows execution of code at specified time intervals.

    //? These time intervals are called timing events.
    //? The two key methods to use with JavaScript are:

    //? setTimeout(function, milliseconds)
    //? Executes a function, after waiting a specified number of milliseconds.
    
    //? setInterval(function, milliseconds)
    //? Same as setTimeout(), but repeats the execution of the function continuously.

    //? 1. setTimeout()
    //? 2. clearTimeout()
    //? 3. setInterval()
    //? 4. clearInterval()
    
    //?! 👉 object oriented in JavaScript

    //? 1. What is Object Literal?

    //? Object literal is simply a key:value pair data structure.
    //? Storing variables and functions together in one container,
    //? we can refer this as an Objects.

    //? object = school bag

    //? How to create an Object?

    //? 1st way

    // let bioData = {
    //   myName : "muktinath tech",
    //   myAge : 26,
    //   getData : function() {
    //     console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
    //   }
    // }
    // bioData.getData();

    //? 2nd way no need to write functions as well after es6

  //   let bioData = {
  //    myName : "muktinath tech",
  //    myAge : 26,
  //    getData () {
  //      console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
  //    }
  //  }
  //  bioData.getData();

  //? 👉 What if we want object as a value inside an Object

  //   let bioData = {
  //    myName : {
  //     realName : "muktinath",
  //     channelName : "@muktinathrajbanshi219"
  //    },
  //    myAge : 26,
  //    getData () {
  //      console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
  //    }
  //  }
  //  console.log(bioData.myName.channelName);

  //? 2 What is this Object?

  //? The definition of "this" object is that it contain the current context.
  //? The this object can have different values depending on where it is placed.

  //? For Example 1:
  // console.log(this.alert("Awesome"));
  //? it refers to the current context and that is window global object

  //? ex 2:
  // function myName() {
  //   console.log(this);
  // }
  //  myName();
    
  //? ex 3:
  // var realName = "muktinath";
  // function myName() {
  //   console.log(this.realName);
  // }
  // myName();

  //? ex 4:
  // const obj = {
  //   myAge : 23,
  //   myName() {
  //     console.log(this.myAge);
  //   }
  // }
  // obj.myName();

  //? ex 5: 

  // const obj = {
  //   myAge : 23,
  //     myName : () => {
  //     console.log(this);
  //    }
  //   }
  //  obj.myName();

  //? ex 6:
  // let bioData = {
  //   myName : {
  //     realName : "muktinath rajbanshi",
  //     channelName : "@muktinathrajbanshi219"
  //   },
  //   // things to remember is that the myName is the 
  //   myAge : 23,
  //   getData () {
  //     console.log(`My name is ${this.myName.realName} and my age is ${this.myAge}`);
  //   }
  // }
  // bioData.getData();

  //?! 4. Destructuring in ES6
  //? The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from
  //? arrays, or properties from objects, into distinct variables.

  //? 👉 Array Destructuring 🦸‍♂️ 

  
  // const myBioData = ["muktinath", "rajbanshi", 23];
  
  // let myFName =myBioData[0];
  // let myLName = myBioData[1];
  // let myAge = myBioData[2];
  
  
  // let [myFName, myLName, myAge] = myBioData;
  // console.log(myFName);

  //? we can add values too

  // let [myFName, myLName, myAge, myDegree="BCA"] = myBioData;
  // console.log(myDegree);
  
    //? 👉 Object Destructuring 🦸‍♂️ 
    
    // const myBioData = {
    //   myFname : "muktinath",
    //   myLname : "rajbanshi",
    //   myAge : 23
    // }

    // // let age = myBioData.age;
    // // let myFName = myBioData.myFname;
    
    // let {myFname, myLname, myAge, myDegree="BCA"} = myBioData;
    // console.log(myLname);
    

      //? 👉 Object Properties 🦸‍♂️ 

      //? 👉 We can now use Dynamic Properties

        // let myName = "muktinath";
        // const myBio = {
        //   [myName] : "hello how are you?",
        //   [20 + 3] : "is my age"
        // }
        // console.log(myBio);
        

      //? 👉 no need to write key and value, if both are same
      // let myName = "muktinath rajbanshi";
      // let myAge = 23;

      // const myBio = {myName, myAge}
      // console.log(myBio);
      

      
// ***********************************************************************
  //? 👉 How JavaScript Works? Advanced and Asynchronous JavaScript
  // ***********************************************************************

  //? Advanced JavaScript Section
  //? 1. Event Propagation (Event Bubbling and Event Capturing)
  //? check html file

  //? 2. Higher Order Function
  //? function which takes another function as an arguments is called HOF
  //? wo function jo dusre function ko as an argument accept krta hai use HOF


  //? 3. Callback Function
  //? function which get passed as an argument to another function is called CBF
  //? A callback function is a function that is passed as an argument to another function, to be "called back"
  //? at a later time.
  //? jis bhi function ko hum kisi or function ke under as an arguments passed krte hai
  //? then usko hum CallBack fun bolte hai


  //? we need to create a calculator

  // const add = (a,b) => {
  //   return a+b;
  // }
  // const subs = (a,b) => {
  //   return Math.abs(a-b);
  // }
  // const mult = (a,b) => {
  //   return a*b;
  // }

  // const calculator = (num1, num2, operator) => {
  //   return operator(num1,num2);
  // }

  // console.log(calculator(5,2,add));
  // console.log(calculator(5,2,subs));
  // console.log(calculator(5,2,mult));
  

  //? In the above example, calculator is the higher-order function, which accepts three arguments,
  //? the third one being the callback.
  //? Here the calculator is called the Higher Order Function because it takes another function as an argument.

  //? and add, sub and mult are called the callback function bcz they are passed as an argument to another function

  //? I have to do the hardcoded for each operation which is bad we will use the callback and HOF to
  //? make it simple to use

  
  //?! Asynchronous JavaScript

  //? 1. Hoisting in JavaScript

  //? we have a creation phase and execution phase.
  //? Hoisting in JS is a mechanism where variables and functions declarations are moved to the top of their
  //? scope before the code execute.

  //? For Example 👇
  // console.log(myName);
  // var myName;
  // myName = "Muktinath";
  
  //? How it will be in output during creation phase

  //? 1. var myName;
  //? 2. console.log(myName);
  //? 3. myName = "Muktinath";

  //? 🦹‍♂️ In ES2015 (a.k.a. ES6), hoisting is avoided by using the let keyword instead of var. (The other difference)
  //? is that variables declared with let are local to the surrounding block, not the entire function.)


 //? 2 .What is Scope Chain and Lexical Scoping in JavaScript?
 
 //? The scope chain is used to resolve the value of variable names in JS.
 //? scope chain in JS is lexically defined, which means that we can see what the scope chain will be by looking
 //? at the code.

 //? At the top, we have the Global Scope, which is the window Object in the browser.
 //? Lexical Scoping means Now, the inner function can get access to their parent functions variables But the
 //? vice-versa is not true.

 //? For Example 👇 
    // let a = "Hello guys. "; //global scope

    // const first = () => {
    //   let b = " How are you?"

    //         const second = () => {
    //           let c = " Hii, I am fine thank you🙏";
    //           console.log(a+b+c); 
    //         } 
    //         second();
    //         // console.log(a+b+c); // I can't use C
    // }

    // first();    
    
    //? 3. What is Closure in JavaScript 😎
    //? A closure is the combination of a function bundled together (enclosed) with references
    //? to its surrounding state (the lexical environment).

    //? In other words, a closure gives you access to an outer function's scope from an inner function.

    //? In JS, closures are created every time a function is created, at function creation time.
    
    //? For Example 👇

    // const outerFun = (a) => {
    //   let b = 10;
    //   const innerFun = () => {
    //     let sum = a+b;
    //     console.log(`the sum of the two no is ${sum}`);
    //   }
    //   innerFun();
    // }

    // outerFun(5);

    //? One more Example 👇 

    // const outerFun = (a) => {
    //   let b = 10;
    //   const innerFun = () => {
    //     let sum = a+b;
    //     console.log(`the sum of the two no is ${sum}`);
    //   }
    //   return innerFun;
    // }
    // let checkClosure = outerFun(5);
    // console.dir(checkClosure);

    // "use strict"

    // let x = "muktinath";
    // console.log(x);
    
    //? Synchronous Javascript Programming

    // const fun2 = () => {
    //   console.log(`Function 2 is called`);
    // }

    // const fun1 = () => {
    //   console.log(`Function 1 is called`);
    //   fun2();
    //   console.log(`Function 1 is called again ✌️`);
    // }
    // fun1();

    //? Asynchronous Javascript Programming

    const fun2 = () => {
      setTimeout(() => {
        console.log(`Function 2 is called`);
      }, 2000);
    }

    const fun1 = () => {
      console.log(`Function 1 is called`);
      fun2();
      console.log(`Function 1 is called again ✌️`);
    }
    fun1();

     
    
    

  
  
  
  
  
  
  
  

  
  
  
  
  
  
    
    
    
    
    
    
    
    

    



    
    

    
    

    
    
