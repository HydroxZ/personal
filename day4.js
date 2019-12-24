const minRange = 235741,
    maxRange = 706948;
let counter = 0;

for (let i = minRange; i < maxRange; i++) {
    if (checkIncreaseFactor(i) && checkAdjacentsDigits(i)) {
        counter++;
        console.log(i)
    }
}
console.log(counter)

function checkAdjacentsDigits(number) {
    let a = number.toString();
    let digit;
    for (let i in a) {
        if (digit == a[i]) {
            return true;
        }
        digit = a[i];
    }
}

function checkIncreaseFactor(number) {
    let a = number.toString();
    let digit;
    let counter = 0;
    for (let i in a) {
        if (a[i] >= digit) {
            counter++;
        }
        digit = a[i];
    }
    if (counter >= a.length - 1) {
        return true;
    }
}