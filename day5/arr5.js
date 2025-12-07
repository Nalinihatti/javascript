let arr = [5, 1, 7, 4, 2];
console.log(arr);
// let newArr = arr.splice(0);
let newArr = arr.splice();

console.log("New Array = ", newArr);

newArr.push("SPRK", "TECH");

console.log("After push in new Array = ", newArr);

console.log("Old Array = ", arr);
