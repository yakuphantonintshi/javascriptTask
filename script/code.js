//Write 3 ways using Javascript code to swap the values of the code above.

//TEMPORARY VARIABLE
let first_number = 15;
let second_number = 17;
console.log(`Before swapping: first number is: ${first_number} , second number is: ${second_number}`);

let hold = first_number;
first_number = second_number;
second_number = hold;

console.log(`After swapping: first number is: ${first_number} , second number is: ${second_number}`);

//Second method in swapping values - destructuring
let numb1 = 15;
let numb2 = 17;
console.log(`Before swapping: first number is: ${numb1} , second number is: ${numb2}`);
[numb1, numb2] = [numb2, numb1];
console.log(`Values after swapping are: first is: ${numb1}, second is ${numb2}`);

//Third method in swapping values - Arithmetic
let first = 15;
let second = 17;
console.log(`Before swapping: first number is: ${first} , second number is: ${second}`);

first = first + second;
second = first - second;
first = first -second;

console.log(`Values after swapping are: first is: ${first}, second is ${second}`);