// Arrays k Methods
// Array are mutable -> Changing
/*
1. push -> Add elements at the end and returns length of updated array
2. pop  -> Delete the last element
3. shift -> remove the first element
4. unshift -> add elements at the start(also can add more than one)
5. slice
6. splice
*/

let arr = [20,30,50,40,10];
console.log(arr);
arr[2] = -8;
console.log(arr);
console.log("Old Length of arr = ", arr.length);

console.log("After push length = ", arr.push(-567));
console.log("After push array = ", arr);

// If I want to add more than one element
//push

console.log("After adding 3 more element now length = ", arr.push(90,-30, 25));
console.log(arr);

console.log("Deleted element = ", arr.pop());
console.log("After pop = ", arr);

console.log("After unshift new length is:", arr.unshift("SPRK", "TECH"));
console.log("After unshift:", arr);
console.log("Shift Method:", arr.shift());
console.log("After shift:", arr);







