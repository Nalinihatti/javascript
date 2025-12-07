let arr1 = [4, 3, 6, 4, 5, 7, 2, 9, 8, 10, 1];

console.log(arr1);
let newArr = arr1.slice(2, 5);

console.log("New Array = ", newArr);

console.log("Actual Array = ", arr1);
let deletedArr = arr1.splice(2, 3);
console.log("Deleted Array element = ", deletedArr);

console.log("Actual Array = ", arr1);
