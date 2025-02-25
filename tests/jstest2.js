//ARRAY methods

let SampleArray = ["one", "two", "three"]

console.log("array length : ", SampleArray.length)  // o/p - 3

SampleArray.push("four")

console.log("array length : ", SampleArray.length)  // o/p - 4

SampleArray = ["one", ,"two", "three"]

console.log("array length : ", SampleArray.length)  // o/p - 4

//Modifying JavaScript Array length property

const fruits = ['Apple', 'Orange', 'Strawberry'];
fruits.length = 0; // it delete the array list and make an empty arrat

console.log("fruits length : ", fruits); // []

fruits.push('Apple', 'Orange', 'Strawberry');

fruits.length = 2 // it trim/delete array because it assaign array lenth less than original array length.
console.log("fruits length : ", fruits); // ['Apple', 'Orange']

fruits.length = 4 // it add 2 more empty elements to array because its increses the array length compare to original

console.log("fruits length : ", fruits); // ['Apple', 'Orange', empty × 2]
 

// --------------------------------- //

let numbers = [10, 20, 30];

const length = numbers.push(40, 50);

console.log({ numbers });
console.log({ length });

// push one array to another arrat

let colors = ['red', 'green', 'blue'];
let cmyk = ['cyan', 'magenta', 'yellow', 'back'];

// //method 1
// for (const color of cmyk) {
//   colors.push(color);
// }

//method 2

colors.push(...cmyk);

console.log(colors); // o/p -  ['red', 'green', 'blue', 'cyan', 'magenta', 'yellow', 'back']

//---unshift()  use to add in from of an array 

colors.unshift("22")

console.log(colors) // 
console.log(colors); // o/p -  ['22','red', 'green', 'blue', 'cyan', 'magenta', 'yellow', 'back']



// -- pop() is use to delete from last
// -- shift() is useto delete from first

const numbers2 = [10, 20, 30];

numbers2.pop()

console.log(numbers2) // [10, 20]

numbers2.shift()

console.log(numbers2) // [20]


//splice() – manipulate elements in an array by deleting, inserting, and replacing elements.

// syntax -- 
// const removedElements = array.splice(start(index), deleteCount, elements to add);

let scores = [1, 2, 3, 4, 5];

let deletedScores = scores.splice(1, 0, 11,22);

console.log(scores ); // [1, 11, 22, 2, 3, 4, 5]
console.log(deletedScores ); // []

let scores2 = [1, 2, 3, 4, 5];

let deletedScores2 = scores2.splice(2, 3, 11,22);

console.log(scores2 ); // [1, 2, 11, 22]
console.log(deletedScores2 ); // [3, 4, 5]


//-- syntax 
// slice(start, stop);

var colors3 = ['red','green','blue','yellow','purple'];
var rgb = colors3.slice(1,4);
console.log(rgb); // ['green','blue','yellow']

// continue from below 
// Section 3. Finding elements





