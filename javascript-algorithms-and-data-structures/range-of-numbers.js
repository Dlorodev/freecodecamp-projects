function rangeOfNumbers(startNum, endNum) {
    if (startNum === endNum) {
        return [startNum]
    } else {
        let range = rangeOfNumbers(startNum + 1, endNum);
        range.unshift(startNum);
        return range;
    }
};

console.log(rangeOfNumbers(1, 5));