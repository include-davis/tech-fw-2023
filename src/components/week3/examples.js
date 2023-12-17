// functions
function add(a, b) {
  return a + b;
}

let sum = add(1, 2);

// sum = 3
// console.log(sum);
const sum2 = add(5, 5);
// console.log(sum2);

// key idea: arrow function =>

const add2 = (a, b) => {
  return 2 * (a + b);
};

const sum3 = add2(1, 2);
console.log(sum3); // 6

// anonymous function

let hello = () => {
  return "hello";
};

console.log(hello());

// numbers: 1, 2, 2.332323, 0.0000001
// strings: "a", "hello", "yes"
// booleans: true, false
// arrays: [], [1, 2, 3], ["a", "hello", "yes"], [1, true, "hello"]

function square(a) {
  return a * a;
}

const arr = [1, 2, 3, 4];

// taking each element & applying some function to them
console.log(arr.map(square));
console.log(arr.map((element) => {
  const result = element * element;
  return result;
}));

// take out elements you don't want: only evens
console.log(arr.filter((element) => {

    if (element % 2 === 0) {
        return element;
    }
}));