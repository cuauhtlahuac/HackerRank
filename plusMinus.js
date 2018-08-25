const arr = [-4, 3, -9, 0, 4, 1 ]

let len = arr.length
let positives = 0;
let negatives = 0;
let zeros = 0;

function plusMinus(arr){
for(let i = 0; i< arr.length;i++){
if(arr[i] < 0){
console.log("Negative ", arr[i])
    negatives += 1
}
else if(arr[i] > 0){
    console.log("Positive ", arr[i])
positives += 1
}
else{
    console.log("zero ", arr[i])
    zeros += 1
}
}
console.log(
    (positives/len).toFixed(6)+"\n"+(negatives/len).toFixed(6)+"\n"+(zeros/len).toFixed(6)
    )
    /*return negatives;*/
    }
    console.log(plusMinus(arr))
