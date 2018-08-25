function compareTriplets(a, b) {
let c = [0,0];
    for(let i = 0; i < a.length; i++){
        if(a[i] > b[i]){
            c[0]+=1;
        }if(a[i] < b[i]){
            c[1]+=1;
        }
    }
    return c;
}

const a = [2, 2, 3]
const b = [3, 1, 10]
console.log(compareTriplets(a,b))