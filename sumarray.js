'use strict';

function simpleArraySum(ar) {
    let sumar = 0;
    let i = 0;
    while (i < ar.length) {
        sumar += ar[i]
        i++
        console.log("SUMAR " + sumar)
    }
    return sumar
}

let arr = [1, 2, 3, 4, 10, 11]

console.log(simpleArraySum(arr))