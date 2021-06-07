let sort012 = (a, n) => {
    let low = 0,
        mid = 0,
        temp,
        high = n - 1;
    for (mid = 0; mid <= high; mid++) {
        if (a[mid] == 0) {
            temp = a[mid];
            a[mid] = a[low];
            a[low] = temp;
            low++;
        }
        if (a[mid] == 2) {
            temp = a[mid];
            a[mid] = a[high];
            a[high] = temp;
            high--;
        }
    }
    return a;
};
console.log(sort012([0, 1, 1, 0, 2, 1], 6));
