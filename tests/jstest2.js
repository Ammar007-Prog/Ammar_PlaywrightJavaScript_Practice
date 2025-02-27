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


//Section 3. Finding elements 

//indexOf() - it will find the first maching element index in array
// syntax - const index = array.indexOf(searchElement, fromIndex)
// searchElement  is the element to locate in the array.
// fromIndex is a zero-based index at which the method starts searching.

const scores4 = [10, 20, 30, 10, 40, 20, ,11, 10];
let index = scores4.indexOf(40);

console.log({ index });

index = scores4.indexOf(10, 4);

console.log({ index });

//
const guests = [
    { name: 'John Doe', age: 30 },
    { name: 'Lily Bush', age: 20 },
    { name: 'William Gate', age: 25 },
  ];
  
const guestIndex = guests.findIndex((g) => g.name == 'Lily Bush' && g.age == 20);
  
console.log({ guestIndex });

//lastIndexOf()
//const index = array.lastIndexOf(searchElement, fromIndex)
// ii will search from last index


const scores5 = [10, 20, 30, 10, 40,10, 20];
index = scores5.lastIndexOf(10);

console.log({ index });

//includes()
// syntax - array.includes(searchElement, fromIndex)
//it is conditional search it will give output true or false
// When 0 <= fromIndex < array.length , then the includes() searches from the fromIndex to the end of the array.

const numbers3 = [1, 2, 3];
let result = numbers3.includes(3, 2);



console.log({ result });

//find()
//const match = array.find(callbackFn)
//callbackFn(element, index, array)
// The following example uses the find() method to search 
// for the first even number in an array of numbers:


const numbers4 = [1, 2, 3, 4, 5];
const x = numbers4.find((e) => e % 2 == 0);

console.log({ x });

//
let todos = [
    {
      id: 1,
      text: 'Learn JavaScript',
      isCompleted: false,
    },
  
    {
      id: 2,
      text: 'Master React',
      isCompleted: false,
    },
  
    {
      id: 3,
      text: 'Build an App ',
      isCompleted: false,
    },
  ];
  
  const todo = todos.find((todo) => todo.id === 2);
  
  console.log(todo);

//findIndex()
//findIndex(callbackFn)
// The findIndex() method has a second optional argument called thisArg:
// findIndex(callbackFn, thisArg)
// The thisArg is used as this inside the callbackFn function.
//findIndex() method to return the index of the first occurrence

let numbers5 = [1, 5, 7, 8, 10, 7];
index = numbers5.findIndex((n) => n === 8);

console.log({ index });


// *****----------Section 4. High-order methods---------

//map()
//map(callbackFn, thisArg);
// Use the map() method to create a new array 
// that includes elements by applying a provided 
// function on every element in the calling array.

//filter()
// The filter() method creates a new array with elements 
// from the original array, which passes a test function.


//reduce()
//array.reduce(callbackFn,initialValue)
// The reduce() method executes a function for each value in the array 
// from left to right and store the return value of the function in a accumulator.

//reduceRight()
//const value = array.reduceRight(callbackFn, initialValue)
// The reduceRight() method applies a function to an accumulator and 
// each element in an array from right to left to reduce them into a single value.


//every() – check if every element in an array passes a test.
//some() – check if at least one element in an array passed a test.

let list = [12, 3, 5, 6, 8]


let newMapLIst = list.map((x)=>x/2)//.forEach((x)=> console.log(x))//.filter((x)=> x >=50 && x<100)
                        

console.log({newMapLIst})


numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15

let chars = ['E', 'C', 'M', 'A'];
result = chars.reduce((a, c) => a + c, 'z');

console.log({ result });//op - { result: 'zECMA' }

result = chars.reduceRight((a, c) => a + c, 'z');

console.log({ result });//op - { result: 'zAMCE' }


result = chars.reduceRight((a, c) => {y = a + c ; console.log(y); return y} , 'z');

console.log({ result });
//op - zA
// zAM
// zAMC
// zAMCE
// { result: 'zAMCE' }



//sort() – sort elements in an array.
//The sort() method allows you to sort elements of an array in place. 
//It changes the positions of the elements in the original array and returns the sorted array.
//The sort() method sorts array elements in place and returns the sorted array.
//The sort() method converts numbers into strings before sorting.

numbers = [0, 2, 5, 3, 10];
numbers.sort();
console.log(numbers);


numbers.sort((a, b) => a - b);

console.log(numbers);

//

let employees = [
    { name: 'John', salary: 90000, hireDate: 'July 1, 2010' },
    { name: 'David', salary: 75000, hireDate: 'August 15, 2009' },
    { name: 'Ana', salary: 80000, hireDate: 'December 12, 2011' },
  ];
  
  employees.sort((x, y) => {
    let a = x.name.toUpperCase(),
      b = y.name.toUpperCase();
    return a == b ? 0 : a > b ? 1 : -1;
  });
  
  console.table(employees);
  



//with()
//let newArray = array.with(index, value)
// The Array with() method returns a new array with an element
// at a specified index replaced by a new one.


numbers = [1, 2, 3];

const newNumbers = numbers.with(1, 20);

console.log({ numbers });
console.log({ newNumbers });


//

todos = [
    { id: 1, title: 'Learn HTML', completed: true },
    { id: 2, title: 'Learn CSS', completed: false },
    { id: 3, title: 'Learn JavaScript', completed: false },
  ];
  
const newTodos = todos.with(1, { ...todos[1], completed: true });
  
console.log({ newTodos });





