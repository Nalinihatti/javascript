let arr1 = [10, 20, 30, 50, 70, -15, 89, 36, 74, 73];

console.log(arr1);
// Only to delete -> start index, and delete count
console.log("Deleted elements are: ", arr1.splice(2,3));
console.log(arr1);

// Only Insert at specified position -> start index, and delete count 0, new element
console.log(arr1.splice(3,0, "sprk", "hello", 3.14, 6.78));

console.log("After adding elements at position 3");
console.log(arr1);

// Here
// Delete and insert combine
// start index, delete count, new elements to be added at same position
// start index

arr1.splice(5, 3, "Nalini", "Hatti", 21, "Female");
console.log(arr1);