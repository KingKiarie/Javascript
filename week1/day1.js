// The program should:

// Prompt the user to enter the length and width of the rectangle.
// Calculate the area and perimeter of the rectangle using the length and width entered by the user.
//periemeter of a rectangle
let a = prompt('Enter first number:');
let b = prompt('Enter second number:');

function perimeter(z,y){
    let result = 2*(parseInt(a)+parseInt(b));
    console.log(result);
}

perimeter(a,b);
//area of a rectangle

let num1 = prompt('Enter first number:');
let num2 = prompt('Enter second number');

function area(a,b){
    let result = parseInt(num1)* parseInt(num2);
    console.log(result);
} 

area(num1,num2);
