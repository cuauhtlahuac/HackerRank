// Complete the aVeryBigSum function below.
/*function aVeryBigSum(ar) {
    let sum = 0;
    let array = ar
    let len = array.length;
    len -= 1;
    sum += array[len]
    console.log("SUM= " + sum + "  LEN = " + len + "  ArLen = " + ar[len])
    if (len > 1) {
        return aVeryBigSum(array)
    }
    return sum
}*/

const ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

function aVeryBigSum(ar) {
    let sum = 0;
    ar.forEach(element => {
        sum += element
    });
    return sum
}

console.log(aVeryBigSum(ar))