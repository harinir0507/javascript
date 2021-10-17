//check whether a number is positive or nagative//
const number = 6;
if (number > 0) {
    console.log("the number ios positive");
} else {
    console.log("the number ios negative");
}

//swap two numbers//
let a = prompt("enter the first variable:");
let b = prompt("enter the second variable:");
let c;
c = a;
a = b;
b = c;
console.log("the value of a after swapping: ${a}");
console.log("the value of a after swapping: ${b}");

//check whether a character is a an alphabet or not//
char ch;
if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
    console.log("the character is an alphabet", ch);
} else {
    console.log("the character is not  an alphabet", ch);
}

//check whether a character is vowel or consonant//
var input = prompt("enter a character:");
if (input == 'a' || input == 'A' || input == 'E' || input == 'e' || input == 'i' || input == 'I' || input == 'O' || input == 'o' || input == 'u' || input == 'U') {
    console.log("its vowel");
} else {
    console.log("its consonant");
}

//find the largest number among three numbers//
const num1 = prompt("enter the  first no");
const num1 = prompt("enter the  second no");
const num1 = prompt("enter the  third no");
let largest;
if (num1 >= num2 && num1 >= num3) {
    largest = num1;
} else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
} else {
    largest = num3;
}
console.log("the largest number is" + largest);

//find the roots of a quadratic equation//
var a, b, c, r1, r2, d;
console.log("enter the value of a,b,c")
console.log("%f %f %f", & a, & b, & c);
d = b * b - 4 * a * c;
if (d > 0) {
    r1 = -b + sqrt(d) / (2 * a);
    r2 = -b - sqrt(d) / (2 * a);
    console.log("the real roots = %f %f", r1, r2);
} else if (d == 0) {
    r1 = -b / (2 * a);
    r2 = -b / (2 * a);
    console.log(" roots are equal = %f %f", r1, r2);
} else {
    console.log(" roots are imaginary");
}

//check leap year//
varfunction(year)
const year = prompt("enter the year:");
if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
    console.log(year + 'is a leap year');
} else {
    console.log(year + 'is not a leap year');
}

//find factorial of a number//
const number = prompt('Enter a positive integer: ');
if (number < 0) {
    console.log(' Factorial for negative number does not exist.');
} else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
} else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log('The factorial of ${number} is ${fact}');
}

//gernerate multiplication table//
const number = prompt('Enter an integer: ');
for (let i = 1; i <= 10; i++) {
    const result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}

//display fibonacci sequence//
const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0,
    n2 = 1,
    nextTerm;
console.log('Fibonacci Series:');
for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

//find GCD of two numbers//
function gcdtwonumbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number'))
        return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}
console.log(gcdtwonumbers(12, 13));
console.log(gcdtwonumbers(9, 3));

//find LCM of two numbers//
const num1 = prompt('Enter a first positive integer: ');
const num2 = prompt('Enter a second positive integer: ');
let min = (num1 > num2) ? num1 : num2;
while (true) {
    if (min % num1 == 0 && min % num2 == 0) {
        console.log(`The LCM of ${num1} and ${num2} is ${min}`);
        break;
    }
    min++;
}
//display character from A to Z using loop//
char c;
for (c = 'A'; c <= 'Z'; ++c)
    console.log("%c ", c);

//count number of digits in an integer//
const num = 2353454;
const digits = (num, count = 0) => {
    if (num) {
        return digits(Math.floor(num / 10), ++count);
    }
    return count;
}
console.log(digits(num));
console.log(digits(123456));
console.log(digits(53453));
console.log(digits(5334534534));

//reverse a number//
function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
const string = prompt('Enter a string: ');
const result = reverseString(string);
console.log(result);

//calculate the power of a number//

//check whether a number is palindrome or not//
function checkPalindrome(str) {
    const len = string.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
const string = prompt('Enter a string: ');
const value = checkPalindrome(string);

//check whether a number is prime or not//
const number = prompt("Enter a positive number: ");
let isPrime = true;
if (number === 1) {
    console.log("1 is prime or not.");
} else if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }

    //display prime number between two intervals//
    const lowerNumber = parseInt(prompt('Enter lower number: '));
    const higherNumber = parseInt(prompt('Enter higher number: '));
    console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);
    for (let i = lowerNumber; i <= higherNumber; i++) {
        let flag = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
        console.log(i);
    }
}

//check Armstrong number//
const number = prompt("Enter a positive integer");
const numberOfDigits = number.length;
let sum = 0;
let temp = number;
while (temp > 0) {
    sum += remainder ** numberOfDigits;
    temp = parseInt(temp / 10);
}

if (sum == number) {
    console.log('${number} is an Armstrong number');
} else {
    console.log('${number} is not an Armstrong number');
}
//display armstrong number//
//display armstrong number between two intervals//
const lowNumber = parseInt(prompt('Enter a positive low integer value: '));
const highNumber = parseInt(prompt('Enter a positive high integer value: '));

console.log('Armstrong Numbers:');
for (let i = lowNumber; i <= highNumber; i++) {
    let numberOfDigits = i.toString().length;
    let sum = 0;
    let temp = i;
    while (temp > 0) {
        let remainder = temp % 10;
        sum += remainder ** numberOfDigits;
        temp = parseInt(temp / 10);
    }

    //display factor of a number//
    const num = prompt('Enter a positive number: ');
    console.log(`The factors of ${num} is:`);
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            console.log(i);
        }
    }

    //display prime numbers between intervals using function//
    // program to print prime numbers between the two numbers

    // take input from the user
    const lowerNumber = parseInt(prompt('Enter lower number: '));
    const higherNumber = parseInt(prompt('Enter higher number: '));
    console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);
    for (let i = lowerNumber; i <= higherNumber; i++) {
        let flag = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
        if (i > 1 && flag == 0) {
            console.log(i);
        }
    }

    //check prime and armstrong number using user-defined function//
    //check whether a number can be expressed as sum of two prime numbers//
    //convert binary number to decimal and vice-versa//
    function convertToBinary(x) {
        let bin = 0;
        let rem, i = 1,
            step = 1;
        while (x != 0) {
            rem = x % 2;
            console.log('Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(x/2)}');
            x = parseInt(x / 2);
            bin = bin + rem * i;
            i = i * 10;
        }
        console.log(`Binary: ${bin}`);
    }
    let number = prompt('Enter a decimal number: ');
    convertToBinary(number);

    //calculate average using arrays//
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    function calculateAverage(array) {
        var total = 0;
        var count = 0;
        array.forEach(function(item, index) {
            total += item;
            count++;
        });
        return total / count;
    }
    console.log(calculateAverage(arr));

    //find largest element in an array//
    var array = [5, 8, 2, 58, 39, 96, 89, 35];
    var largest = 0;
    for (i = 0; i <= largest; i++) {
        if (array > largest) {
            var largest = array[i];
        }
    }
    console.log(largest);

    //calculate standard deviation//

    //add two matrices using multi-dimensional arrays//
    let x = [
        ['harini', 27],
        ['jerusha', 28],
        ['deepthi', 24]
    ];
    console.log(x[0]); // ["harini", 27]
    console.log(x[0][0]); // harini
    console.log(x[2][1]); // 27

    //multiply two matrices using//
    let b = [
        [1, 4, 7, 3, 4, 6],
        [2, 5, 8, 7, 3, 2],
        [3, 6, 9, 6, 7, 8],
        [1, 1, 1, 2, 3, 6]
    ];
    console.log(multiplyMatrices(a, b));

    //multi-dimensional arrays//
    let x = [
        ['harini', 27],
        ['jerusha', 28],
        ['deepthi', 24]
    ];
    console.log(x[0]); // ["harini", 27]
    console.log(x[0][0]); // harini
    console.log(x[2][1]); // 27

    //find transpose of a matrix//
    const arr = [
        [1, 1, 1],
        [2, 2, 2],
        [3, 3, 3],
    ];
    const transpose = arr => {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < i; j++) {
                const tmp = arr[i][j];
                arr[i][j] = arr[j][i];
                arr[j][i] = tmp;
            };
        }
    }
    transpose(arr);
    console.log(arr);