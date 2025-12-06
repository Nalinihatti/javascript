// TASK
/*
1. Array ->
["Java","BEST","Is","Language"]
Change to below solution
["BEST","Language","Is","Java"]
*/

let arr = ["Java","BEST","Is","Language"];
console.log(arr);

 arr.shift();
console.log(arr);

arr.pop();
arr.pop();
console.log(arr);
arr.push("language", "Is", "Java");
console.log("Modified array = ",arr);

