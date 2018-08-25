/*const arr = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
]*/
const arr = [
    [-1, 1, -7, -8],
    [-10, -8, -5, -2],
    [0, 9, 7, -1],
    [4, 4, -2, 1]
]

let i = arr.length - 1
let x = 0
let sumi = 0
let sumj = 0
let k = 0;

for (; i >= 0; i--) {
    sumi += arr[i][i]
    sumj += arr[i][k]
    k += 1;
}
console.log(sumj)
console.log(sumi)
x = sumi - sumj
console.log("result = ", Math.abs(x))
/*for(;j >= 0;j--){
    let k = 0;
    sumj += arr[j][k]
    console.log(sumj)
}*/



