var maxMin = (arr) => {
    let max = arr[0];
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return [max, min];
};

const [max, min] = maxMin([5, 11, 45, 4, 67, 50]);
console.log(`maximum element ${max}, minimum element ${min}`);
