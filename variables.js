// types of variables in java 

let age = 56;

console.log(age);

age = age+2;

console.log(age);

x = null;

console.log(x);

y = undefined;

console.log(y);

// boolean types

isfollow = true;
islove = false;

console.log(isfollow);
console.log(islove);

// Primitive Data Types:

// Number: Represents numeric values, including integers and floating-point numbers.
// String: Represents sequences of characters, enclosed in single ('') or double ("") quotes.
// Boolean: Represents a logical value, either true or false.
// Undefined: Represents an uninitialized variable or a function that does not return any value.
// Null: Represents the intentional absence of any object value.
// Symbol (ES6 and later): Represents a unique identifier that's not equal to any other value.
// BigInt (ES2020 and later): Represents arbitrary-precision integers.

// Non-Primitive Data Types (Reference Types):

// Object: Represents a collection of key-value pairs (properties and methods). Objects can be created with {} or new Object().
// Array: Represents an ordered list of values. Arrays can be created with [] or new Array().
// Function: Represents a reusable block of code that can be executed by calling the function. Functions can be created using function declarations, function expressions, arrow functions, etc.
// Date: Represents a specific moment in time, including date and time components. Dates can be created with new Date() constructor.
// RegExp: Represents a regular expression, used for pattern matching within strings. Regular expressions can be created with new RegExp() constructor or using literal notation /pattern/.

// its a dynamic typed language

islove = true;

islove = 99;

console.log(islove);
console.log(islove.typeof(bool))



// variables rules 

// Valid Characters: Variable names can contain letters (both uppercase and lowercase), digits, underscores (_), and dollar signs ($). They cannot start with a digit.

// Reserved Words: You cannot use JavaScript reserved words (keywords) as variable names. Examples of reserved words include var, let, const, if, else, function, return, etc.

// Case Sensitivity: JavaScript is case-sensitive. This means that myVariable, MyVariable, and myvariable are all considered different variables.

// Unicode Support: JavaScript allows the use of Unicode characters in variable names.

// CamelCase Convention: It's a common convention in JavaScript to use camelCase for variable names. This means starting with a lowercase letter and capitalizing the first letter of each subsequent word within the name (except the first word).

// Meaningful Names: Choose descriptive and meaningful names for variables to make your code more readable and understandable.


// reserve words in java script

/*
break
case
catch
class
const
continue
debugger
default
delete
do
else
export
extends
finally
for
function
if
import
in
instanceof
new
return
super
switch
this
throw
try
typeof
var
void
while
with
yield

*/

/*
implements
interface
let
package
private
protected
public
static
enum
*/

let name="Diagram";

let _age = 23;

let totalPrize = 12.89;

_age = "narine";

console.log(_age);

const love = "Diagram";
console.log(love);

// love = "abc"; gives error because of const keyword

console.log(love);

let a;

console.log(a); // it gives undefined

var abc;

console.log(abc); // it gives undefined 

// var ; variable is a global scope

// let : a block scope variable

// const : a block scope variable


{
let a = 89;
// let a = 89; gives an error because let has a local scope 
console.log(a);
}

{
let a = 90;
console.log(a);
}

{
     a = 90;
     console.log(a);
}