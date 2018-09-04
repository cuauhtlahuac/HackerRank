function processData(input) {
    let lineEven = "";
    let lineOdd = "";
    let finalStr = "";
    let arr = input.split("\n")
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (/[a-zA-Z]/.test(arr[i][j]) && j % 2 === 0) {
                lineEven += arr[i][j]
            } else if (/[a-zA-Z]/.test(arr[i][j]) && j % 2 !== 0) {
                lineOdd += arr[i][j]
            }
        }
        finalStr += lineEven + " " + lineOdd
        lineEven = "";
        lineOdd = "";
        if(i !== arr.length){
            finalStr += "\n"
        }
    }
    return console.log(finalStr)
}
let str = "2\nHacker\nRank\nLeopark"
processData(str)
