function adjacentElementsProduct(inputArray) {
    let max = -Infinity;
    for (let i = 1; i < inputArray.length; i++) {
        max = Math.max(inputArray[i] * inputArray[i - 1], max);
    }
    return max;
}

console.log(adjacentElementsProduct([2, 3, -5, -2, 4]));