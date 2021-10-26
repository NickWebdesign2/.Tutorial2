alert('hello, world');

console.log(1);
console.log(2);

<!-- will run in order from log 1 to 2 -->

let age = 25;
let year = 2019;

// log thing to console
// console.log(age, year);

/* age = 30;
console.log(age);

const points = 100;
console.log(points); */

var score = 75;
console.log(score)

//strings
console.log('hello, world');

let email = 'mario@thenetninja.co.uk';
console.log(email);

// string concatenation
let firstName = 'Brandon';
let lastName = 'Sanderson';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

//getting characters
console.log(fullName[2]);

//string lenght
console.log(fullName.lenght);

//string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf('@')

//common string methods

//let result = email.lastIndexOf('n');

//let result = email.slice(2,5);

//let result = email.substr(4,10);

console.log(result);

let radius = 10;
const pi = 3.14;

//console.log(radius, pi);

//math operators +, -, *, /, **, %

//console.log(10 / 2);
//let result = radius % 3;
//let result = pi * radius**2

//order of operation - B I D M A S

//let result = 5 * (10-3)**2;

//console.log(result);

let likes = 10;

//likes = likes + 1;
//likes++;
//likes--;

//likes += 10;
//likes -= 5;
//likes *= 2;
//likes /= 2;

//console.log(likes);

// NaN - not a number

//console.log(5 / 'hello');
//console.log(5 * 'hello');



//template strings
const title = 'Best reads of 2019'
const author = 'Mario';

//concatenation way
//let result = 'The blog called' + title + 'by' + author + 'has' + likes + 'likes';
//console.log(result);

//template string way
console.log(result);

//creating html templates
let html = `
<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog has ${likes} likes</span>
`;

console.log(html);


let ninjas = ['shaun', 'ryu', 'chun-li'];

//ninjas[1] = 'ken';
//console.log(ninjas[1]);

//let ages = [2-,25,30,35];
//console.log(ages[2]);

//let random = ['shaun', 'crystal', 30, 20];
//console.log(random);

//console.log(ninjas.lenght);

//array methods

//let result = ninja.join('-');
//let result = ninja.indexOf('chun-li');
//let result = ninjas.concat(['ken', 'crystal'])

console.log(ninjas);


//booleans & comparisons
console.log(true, false, "true", "false");

//methods can return booleans
//let email = 'luigi@thenetninja.co.uk';
//let names = ['mario', 'luigi', 'toad'];

//let result = email.includes('!');
//let result = names.includes('luigi');

//console.log(result);

//comparison operators
//let age = 25;

//console.log(age == 25);
//console.log( age == 30);
//console.log(age != 30);
//console.log(age > 20);
//console.log(age < 20);
//console.log(age <= 25);
//console.log(age >= 25);

//let name = 'shaun';

//console.log(name == 'shaun');
//console.log(name == 'Shaun');
//console.log(name > 'crystal');
//console.log(name > 'Shaun');
//console.log(name > 'Crystal');


//loose comparison (different types can still be euqal)

//console.log(age == 25);
//console.log(age == '25');
//console.log(age != 25);
//console.log(age != '25');

//strict comparison (different types cannot be equal)

//console.log(age === 25);
//console.log(age === '25');
//console.log(age !== 25);
//console.log(age !== '25');

//type conversion
//let score = 100

//score = Number(score);
//console.log(score + 1);
//console.log(typeof score);

//let result = Number('hello');
//let result = String(50);
//let result = Boolean(0);
//let result = Boolean('');

//console.log(result, typeof result);




// Modern JavaScript Part #3 -------------------------------------



//Control Flow

//Use loops for cycling through data
//Use conditional statements fo checking conditions

//while loops
//const names = ['shaun' , 'mario', 'luigi'];
//let i = 0;

//while(i < 5){
// console.log('in loop: ', i);
// i++;
//}

//let i = 0;
//while(i < names.lenght){
//  console.log(names[i]);
//  i++
//}

//do while loops

//let i = 3;

// do{
// console.log('val of i is: ', i);
// i++;
// } while(i < 5);
