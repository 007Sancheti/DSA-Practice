// A Dynamic Programming based solution
// for 0-1 Knapsack problem

// A utility function that returns
// maximum of two integers
function max(a, b) {
    return a > b ? a : b;
}

// Returns the maximum value that can
// be put in a knapsack of capacity j
function knapSack(maxWt, wt, val, n) {
    let i, j;
    let K = new Array(n + 1);

    // Build table K[][] in bottom up manner
    for (i = 0; i <= n; i++) {
        K[i] = new Array(maxWt + 1);
        for (j = 0; j <= maxWt; j++) {
            if (i == 0 || j == 0) {
                K[i][j] = 0;
            } else if (wt[i - 1] <= j) {
                K[i][j] = max(
                    val[i - 1] + K[i - 1][j - wt[i - 1]],
                    K[i - 1][j]
                );
            } else {
                K[i][j] = K[i - 1][j];
            }
        }
    }

    return K[n][maxWt];
}

let val = [60, 100];
let wt = [10, 20];
let maxWt = 50;
let n = val.length;
console.log(knapSack(maxWt, wt, val, n));