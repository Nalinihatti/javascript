// WAP to print first 10 even number
// 2 4 6 8 10 12 14 16 18 20
// start = 2, stop = 20, gap = 2

let i = 2;
let output = "";
while (i <= 20) {
    output =output + `${i} `;
    // i = i + 2;
    i += 2;
}
console.log(output);
