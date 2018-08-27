function birthdayCandlesCake(ar){
    console.log(ar)
    let len = ar.length
    let bigNum = ar[0];
    let candlesBlowOut = 0;
    let i = 0;
    let j = 1;
        for(;j<len;j++){
            console.log("nj>"+ar[j])
            if(bigNum <= ar[j]){
                bigNum = ar[j]
            }
        }
        for(;i<len;i++){
            if(ar[i] === bigNum){
                candlesBlowOut += 1
            }
        }
        console.log("\nBigNum:" + bigNum)
    return "candlesBlowOut: " + candlesBlowOut
}

const arr = [34,34,34,35,34,34,34,4,2,1,13]
console.log(birthdayCandlesCake(arr))