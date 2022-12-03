function isPrimeNumber(num){
    if ((num < 2) || (num > 1000)) {
        return "is not correct!";
    } else {
        for (let i = 2; i < num; i++){
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
}

let randNum = Math.floor(Math.random() * 2000);
let p = isPrimeNumber(randNum);
console.log("Number " + randNum + ' is Prime = ' + p);