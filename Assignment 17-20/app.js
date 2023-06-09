// Question 1

// var multiArr = [ [], [] ];


// Question 2

// var multiArr = [
//                   [0,1,2,3 + "<br>"],
//                   [1,0,1,2 + "<br>"],
//                   [2,1,0,1]
//                ];
// document.write(multiArr.join(" "));



// Question 3

// for (var i = 1; i <= 10; i++) {
//     document.write(i + "<br>");
// }


// Question 4

// var tableNumber = +prompt("Enter the table number");
// var tableLength = +prompt("Enter the table length");
// document.write("<h2>Multiplication Table of " + tableNumber + "<br>" + "Length " + tableLength + "</h2>");
// for (var i = 1; i <= tableLength; i++) {
//   var result = tableNumber * i;
//   document.write(tableNumber + " x " + i + " = " + result + "<br>");
// }


// Question 5

// var fruits = ["apple", "banana", "mango", "orange", "strawberry", "<br>"];
// document.write(fruits.join("<br>"));
// for (var i = 0; i < fruits.length; i++) {
//     document.write("Element at index " + i + " is " + fruits[i] + "<br>");
// }


// Question 6

// document.write("<h3>Counting:</h3>");
// for (var i = 1; i <= 15; i++) {
//   document.write(i + ", ");
// }

// document.write("<h3>Reverse counting:</h3>");
// for (var i = 10; i >= 1; i--) {
//   document.write(i + ", ");
// }

// document.write("<h3>Even:</h3>");
// for (var i = 0; i <= 20; i += 2) {
//   document.write(i + ", ");
// }

// document.write("<h3>Odd:</h3>");
// for (var i = 1; i <= 19; i += 2) {
//   document.write(i + ", ");
// }

// document.write("<h3>Series:</h3>");
// for (var i = 1; i <= 10; i++) {
//   document.write(2 * i + "k, ");
// }


// Question 7

// var a = ["cake", "apple", "pie", "cookie", "chips", "patties"];
// var input = prompt("Search The Items");
// var flag = false;
// for (var i = 0; i < a.length; i++) {
//     if (a[i] === input) {
//         flag = true;
//         index = i;
//         break;
//     }
// }
// if (flag) {
//     alert(input + " is available at " + index + "in our bakery")
// }
// else {
//     alert("We are Sorry. " + input + " is not available in our bakery")
// }


// Question 8

// var num = [24, 53, 78, 91, 12];
// document.write("Array Items: " + num + "<br>")
// var largeNum = num[0];
// for (var i = 1; i < num.length; i++) {
//   if (num[i] > largeNum) {
//     largeNum = num[i];
//   }
// }
// document.write("The largest number: " + largeNum);


// Question 9

// var num = [24, 53, 78, 91, 12];
// document.write("Array Items: " + num + "<br>")
// var smallNum = num[0];
// for (var i = 1; i < num.length; i++) {
//   if (num[i] < smallNum) {
//     smallNum = num[i];
//   }
// }
// document.write("The smallest number: " + smallNum);


// Question 10

// for (var i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         document.write(i + ",");
//     }
// }