function minMax(arr) {
    let len = arr.length;
    let i = 0;
    let j = 0;
    let k = 0;
    let sum = 0;
    let sumTot = [];
    for (; i < len; i++) {
        for (; j < len; j++) {
            //console.log(arr[j].valueOf() + " < j - k > "+ arr[k])
            if (j != k) {
                sum += arr[j]
            }
            //console.log(sum)
        }
        k++;
        j = 0;
        sumTot.push(sum)
        sum = 0;
        //console.log(sumTot)
    }
    let max = Math.max(...sumTot)
    let min = Math.min(...sumTot)
    return  min + " " +  max
}
const array = [1, 2, 3, 4, 5]
console.log(minMax(array))