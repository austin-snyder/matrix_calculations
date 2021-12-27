//////////////////////////////////////////////////
// MATRIX CHAIN MULTIPLICATION ORDER CALCULATOR //
//////////////////////////////////////////////////

// DEFINITION OF SAMPLE INPUT ARRAY
var matSizes = [ 7, 3, 7, 4, 3];
var numOfMats = matSizes.length - 1;

// DEFINITION OF MATRIX CHAIN ORDER FUNCTION
// returns either maximum or minimum number of multiplications needed
// for performing chain multiplication
function MatrixChainOrder(matrix_array, i , j) {
    if (i == j)
        return 0;
 
    // "Number.MAX_VALUE" for min, "Number.MIN_VALUE" for max
    var min = Number.MAX_VALUE;
 
    var k=0;
    for (k = i; k < j; k++)
    {
        var count = MatrixChainOrder(matrix_array, i, k)
                    + MatrixChainOrder(matrix_array, k + 1, j)
                    + matrix_array[i - 1] * matrix_array[k] * matrix_array[j];

        // "<" for min, ">" for max
        if (count < min)
            min = count;
            
    }
 
    // Return minimum count
    return min;
}

// SAMPLE RUN
console.log(MatrixChainOrder(matSizes, 1, numOfMats))