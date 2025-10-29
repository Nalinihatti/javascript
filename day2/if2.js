// WAP to check whether the last digit of number is divisible by 3 or not
// Ex: n = 156
//     last_digit = 6 -> 6 is divisible by 3

let n = 124;

let last_digit = n % 10;

if(last_digit % 3 == 0){
    console.log(`Lastdigit ${last_digit} is divisible by 3`);
    
}
else{
    console.log(`Lastdigit ${last_digit} is not divisible by 3`);

}