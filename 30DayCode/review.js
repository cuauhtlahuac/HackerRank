function processData(input) {
    let lineEven = "";
    let lineOdd = "";
    let finalStr = "";
    let init = 0;
    let i = 0;
    let arr = input.split("")
    while(i<arr.length){
      if(/[\n]/.test(arr[i])){
          return init = i+1
          break
      }
      i++;
    }   
    console.log("init = "+init)
    for (let i = init; i < arr.length; i++) {
        //console.log(arr[i])
        if (/[a-zA-Z]/.test(arr[i]) && i % 2 === 0) {
            lineEven += arr[i]
        }
        if (/[a-zA-Z]/.test(arr[i]) && i % 2 !== 0) {
            lineOdd += arr[i]
        }
        if (/[\n]/.test(arr[i])) {
            finalStr += lineEven + " " + lineOdd + "\n"
            lineEven = "";
            lineOdd = "";
        }

    }
    finalStr += lineEven + " " + lineOdd
    console.log(finalStr)
}
let str = `2\nHacker\nRank`
processData(str)
