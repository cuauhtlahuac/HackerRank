function numToBytes(num) {
    let arr = [];
    let numDiv = 0;
    let numBit = 0;
    let times = Math.log(num) / Math.log(2)
    //console.log(times)
    for (i = times; i >= 0; i--) {
        numDiv = num - num % 2
        numBit = num % 2
        arr.push(numBit)
        num = numDiv / 2;
        numDiv = 0
        numBit = 0
    }
    arr = arr.reverse()
    return arr
    return arr.toString().replace(/,/g, "")
}
function mine() {
    const n = 5
    let base2 = numToBytes(n)
    console.log(base2)
    let i = 0;
    let j = 0;
    let totalOnes = 0;
    let maxOnes = 0;
    for (; i < base2.length; i++) {
        console.log("i: " + base2[i])
        if (base2[i] === 1) {
            for (j = i; base2[j] === 1; j++) {
                i = j
                console.log("j: " + base2[j])
                totalOnes += 1;
                console.log("total Ones: " + totalOnes)
            }
            if (maxOnes < totalOnes) {
                maxOnes = totalOnes
            }
            totalOnes = 0
        }

    }
    return maxOnes
}

mine()
