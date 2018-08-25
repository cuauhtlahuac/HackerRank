function stairCase(n) {
    let u = n;
    let line = "";
    let i = 0;
    let j = 1;
    let k = 0;
    for (i = 0; i < n; i++) {
        for (; j < u; j++) {
            line += " "
        }
        for (k = n; k >= u; k--) {
            line += "#"
        }
        j = 1
        u--
        if (i != n - 1) {
            line += "\n"
        }
    }
    console.log(line)
}
stairCase(30)
function matriz(num) {
    let i = 0;
    let j = 0;
    let line = "";
    for (y = 0; y < num; y++) {
        for (x = 0; x < num; x++) {
            let figure = ""
            if ((i + j) % 2 == 0) {
                line += "#"
                figure = "#"
            } else {
                line += "0"
                figure = "0"
            }
            console.log(i + "," + j + " : " + figure)
            j++
        }
        j = 0
        i++
        line += "\n"
    }
    return line
}
