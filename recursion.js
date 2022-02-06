// function recursionNumber(i) {
//     if (i > 6) {
//         return;
//     }
//     console.log(i);
//     recursionNumber(i + 1);
// }
// recursionNumber(1);


//recursion

// function sum(i) {
//     console.log(i);
//     if (i == 1) {
//         return 1;
//     }
//     return i + sum(--i);
// }
// console.log(sum(5));

//factorial

// let factorial = 1;
// for (let i = 4; i >= 1; i--) {
//     factorial = factorial * i
// }
// console.log(factorial);
function factorial(i) {
    if (i == 1) {
        return 1;
    }
    return i * factorial(--i);
}
console.log(factorial(5));