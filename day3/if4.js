// Nested If else
// if(){if else}

/* WAP to check whether the triangle is 
Input = 3, conditions = 3
1. Equilateral -> all sides are equal
2. Isoceles -> Any 2 sides are same
3. Scalene  
*/

let s1 = 5;
let s2 = 5;
let s3 = 5;

if(s1 == s2 && s2 == s3){
    console.log("Triangle is Equilateral");
}
else if(s1 == s2 || s2 == s3) {
    console.log("Triangle is Isoceles");
} else {
    
    console.log("Triangle is Scalene");
}