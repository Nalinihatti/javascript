let user_name = "SPRK TECHNOLOGIES";

console.log(user_name);
console.log(typeof user_name);

console.log("Length of ", user_name, " = ", user_name.lenght);

console.log("Vlaue at index 2 = ", user_name[2]);

if(user_name[0] == "A" && user_name.length >= 5) {
    console.log("String starts with 'A' and have length more than equal to 5");
    
} else {
    console.log("string doesn't starts with 'A'");
    
}

user_name = "I am learning javascript, javascript is simple, I also like java";
console.log(user_name);

console.log("javascript at index = ", user_name.indexOf("javascript"));
console.log("java at index = ", user_name.indexOf("java"));

console.log("java at index start searching from position 15 = ", user_name.indexOf("java") + 1);
console.log("java at last occurence index = ", user_name.lastIndexOf("java"));

let str = "   Hello, I am nalini hatti   ";

console.log(str);
console.log(str.length);

console.log(str.trim());
console.log(str.trim().length);
console.log(str.trim().toUpperCase());
console.log(str);
console.log(str.trim().toLowerCase());
console.log(str);





