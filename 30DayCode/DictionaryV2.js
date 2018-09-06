function processData(input) {
    //Enter your code here
    let arr = input.split("\n")
    const num = Number(arr[0])
    let nameTel = arr.slice(1, num + 1);
    let names = arr.slice(num + 1);
    //console.log(nameTel)
    let objNameTel = {};
    nameTel.forEach((element,index)=>{
        let temp = []
        temp.push(element.split(" "))
        objNameTel[temp[0][0]] = temp[0][1]
        temp = []
    }
    )
    //console.log(objNameTel)
    names.forEach((name)=>{
        if (objNameTel.hasOwnProperty(name)) {
            console.log(name + "=" + objNameTel[name])
        } else {
            console.log("Not Founded")
        }
    }
    )
}

function busqueda1() {
    let arrv2 = objNameTel.map((e,i)=>{
        let x = 0;
        let finded = false;
        while (x < names.length) {
            finded = false;
            if (names[x] === e.name) {
                console.log(e.name + "=" + e.tel)
                finded = true;
                break
            }
            x++
        }
        if (!finded) {
            console.log("Not found")
        }
    }
    )
}
function busqueda2() {
    names.forEach((name)=>{
        let finded = objNameTel.find((element,index)=>{
            return element.name && element.name === name
        }
        )
        if (finded) {
            console.log(finded.name + " " + finded.tel)
        } else {
            console.log("#")
        }
    }
    )
}

const str = `4
sam 99912222
tom 11122222
harry 12299933
tommy 55753131
sam
edward
harry
jasinto
fulanito
tommy`
processData(str)
