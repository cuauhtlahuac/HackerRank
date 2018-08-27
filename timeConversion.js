let toDay = new Date();
//console.log(toDay)
let day = toDay.day;
//console.log(day)
function timeConversion(s) {
    let mmss = s.slice(2, 8)
    let hh = s.slice(0, 2)
    let pm = s.slice(-2)
    let hour = Number(hh)
    if (pm === "PM") {
        if(hour <= 11){
            hour += 12
        }
        return String(hour) + mmss
    } else if(pm === "AM") {
        if(hh === "12"){
            hh = "00"
        }
        return hh + mmss
    }
}

const time = "11:00:23PM"
console.log(timeConversion(time))
