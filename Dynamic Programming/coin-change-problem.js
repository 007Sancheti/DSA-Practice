/* Dynamic Programming javascript implementation of Coin
   Change problem */
 
   function countWays(S , m , n)
   {
       //Time complexity of this function: O(mn)
       //Space Complexity of this function: O(n)
    
       // table[i] will be storing the number of solutions
       // for value i. We need n+1 rows as the table is
       // constructed in bottom up manner using the base
       // case (n = 0)
       // Initialize all table values as 0
       //O(n)
       var table = Array(n+1).fill(0);
        
    
       // Base case (If given value is 0)
       table[0] = 1;
    
       // Pick all coins one by one and update the table
       // values after the index greater than or equal to
       // the value of the picked coin
       for (i=0; i<m; i++)
           for (j=S[i]; j<=n; j++) 
               table[j] += table[j-S[i]];
    
       return table[n];
   }
    
   // Driver Function to test above function
   var arr = [3];
   var m = arr.length;
   var n = 4;
   console.log(countWays(arr, m, n));
    