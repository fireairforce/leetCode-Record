function fizzBuzz(num) {
    if (typeof num !== 'number' || num === '') {
        return false;
    }
    if (num % 3===0 && num % 5===0) {
        return 'fizzbuzz';
    } else if (num % 3===0 && num % 5!==0) {
        return 'fizz';
    } else if (num % 5===0 && num % 3!==0) {
        return 'buzz';
    }
    return num;
}
// console.log(fizzBuzz(15));