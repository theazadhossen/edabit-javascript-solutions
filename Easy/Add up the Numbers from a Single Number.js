// using for loop
addUp = num => {
    let result = 0;
    for(let i = 0; i <= num; i++) {
        result += i;
    }
    return result;
};

// using arithmatic formula
addUp = num => num * (num + 1) / 2;