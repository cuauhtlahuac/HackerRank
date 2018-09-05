function processData(input) {
    //Enter your code here
    let arr = input.split("\n")
    console.log(arr)
    const num = Number(arr[0])
    let nameTel = arr.slice(1, num + 1);
    let names = arr.slice(-num);
    let objNameTel = [];
    nameTel.forEach((element,index)=>{
        let temp = []
        temp.push(element.split(" "))
        objNameTel.push({
            name: temp[0][0],
            tel: temp[0][1]
        })
        temp = []
    }
    )
    let arrv2 = objNameTel.map((e,i)=>{
        names.forEach((ele,ind)=>{
            if (e.name === ele) {
                return console.log(ele + "=" + e.tel)
            }else{}
        }
        )
        return console.log("Not found")
    }
    )
    console.log(objNameTel)

}

const str = `3
sam 99912222
tom 11122222
harry 12299933
sam
edward
harry`
processData(str)
