// WAP to check whether the number is a prime number or not

/*
input = 11
check input is divisible by 2,3,4,5,6,7,8,9,10
*/

let num = Number(prompt("Enter a number to check prime or not: "));

// Assumption -> any value of num is a prime number
let isprime = true;

if (num <= 1){
    isprime = false;
}

for (let i = 2; i <= num - 1; i++){
    if(num % i == 0){
        //  assumption -> modify
        isprime = false;
        //  stop
        break;
    }
}
if (isprime == true){
    alert(`Number = ${num} is a prime number`);
}
else{
    alert(`Number = ${num} is not a prime number`);
}