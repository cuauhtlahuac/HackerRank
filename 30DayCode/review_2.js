function processData(input) {
    let stringOdd = "";
    let stringEven = "";
    for (let i = 1; i < input.length; i++) {
        if (i % 2 !== 0) {
            console.log(input[i])
        }
    }
    for (let i = 1; i < input.length; i++) {
        if (i % 2 === 0) {
            console.log(input[i])
        }
    }
    console.log(stringEven + " " + stringOdd)
}
processData("Hacker")
