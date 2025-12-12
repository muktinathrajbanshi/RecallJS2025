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
    // const prices = [200, 300, 350, 400, 450, 500, 600];

    // console.log(prices.sort());

     //! 8.3 👉 Array Subsection 😎 Perform CRUD
     //? Array.prototype.push() 🙅‍♂️
     //? The push() method adds one or more elements to the end of an array and returns the new
     //? length of the array.
     
     const animals = ["pigs", "goats", "sheep"];

     const count = animals.push("chicken");
     console.log(animals);
     console.log(count);
     
     
    
    

