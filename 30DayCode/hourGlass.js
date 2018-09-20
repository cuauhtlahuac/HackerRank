function hourGlasses(arr) {
    let maxSuma = -10000;
    for (let row = 0; row < 4; row++) {
        let sum = 0;
        for (let col = 0; col < 4; col++) {
              sum = 
              arr[row][col] +
              arr[row][col + 1] + 
              arr[row][col + 2] + 
              arr[row + 1][col + 1] +
              arr[row + 2][col] +
              arr[row + 2][col + 1] + 
              arr[row + 2][col + 2]
            if (sum >= maxSuma) {
                maxSuma = sum;
            }
            sum = 0;
        }
    }
    return maxSuma
}


let arrNeg = 
[
[0, -4, -6, 0, -7, -6],
[-1, -2, -6, -8, -3, -1],
[-8, -4, -2, -8, -8, -6],
[-3, -1, -2, -5, -7, -4],
[-3, -5, -3, -6, -6, -6],
[-3, -6, 0, -8, -6, -7]
]

//expected -19

let arrPos = 
[
[ 1, 1, 1, 0, 0, 0 ],
[ 0, 1, 0, 0, 0, 0 ],
[ 1, 1, 1, 0, 0, 0 ],
[ 0, 0, 2, 4, 4, 0 ],
[ 0, 0, 0, 2, 0, 0 ],
[ 0, 0, 1, 2, 4, 0 ]
]


console.log(hourGlasses(arrNeg))
