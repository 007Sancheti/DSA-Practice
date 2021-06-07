let reverse = (arr) => {
    for (let i = 0, j = arr.length - 1; i < arr.length / 2; i++, j--) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
        console.log(arr[i]);
    }
    return arr;
};
console.log(reverse([1, 2, 3, 4, 5]));
