'use strict'
function kangaroo(x1, v1, x2, v2) {
    const YES = "YES"
    const NO = "NO"
    //j is a x +
    let frontKgoo = 0;
    //kangaroo delante
    let fVelKgoo = 0;
    //distance K1
    //i is a x1
    let backKgoo = 0;
    //Kangaroo 2nd place
    let bVelKgoo = 0;
    //distance K2
    if (x1 >= x2) {
        frontKgoo = x1;
        //0
        fVelKgoo = v1;
        //3
        backKgoo = x2;
        //4
        bVelKgoo = v2;
        //2
    } else {
        frontKgoo = x2;
        fVelKgoo = v2;
        backKgoo = x1;
        bVelKgoo = v1
    }
    if (fVelKgoo > bVelKgoo) {
        return NO
    } else if (fVelKgoo === bVelKgoo) {
        if (frontKgoo === backKgoo) {
            return YES
        }
        if (frontKgoo !== backKgoo) {
            return NO
        }
    }

    let s = (backKgoo - frontKgoo) / (fVelKgoo - bVelKgoo)
    let abs = Math.abs(s)
    if (s === abs) {
        return YES
    }
    return NO
}
console.log(kangaroo(0, 3, 4, 2))