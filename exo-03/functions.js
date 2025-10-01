function isEven(n) {
    return n % 2 === 0;
}
const isOdd = (n) => n % 2 === 0;

console.log({
    'isEven(1)' : isEven(1),
    'isEven(2)' : isEven(2),
    'isOdd(1)' : isOdd(1),
    'isOdd(2)' : isOdd(2)
});