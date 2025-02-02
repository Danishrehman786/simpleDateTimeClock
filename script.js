// let date = new Date();
// console.log(date);

function clock() {
    let clock = document.getElementById("clock");
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();
    let period = "AM";

    if (hour >= 12) {
        period = "PM";
        if (hour > 12) {
            hour -= 12;
        }
    } else if (hour === 0) {
        hour = 12;
    }

    clock.textContent = `${hour}:${minute}:${second} ${period}`;
}

setInterval(clock, 1000);
clock();




function date() {
    let clock = document.getElementById("date");
    let day = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayName = days[new Date().getDay()];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthName = months[new Date().getMonth()];

    clock.textContent = `${dayName}/${monthName}, ${day}/${month}/${year}`;
}
date();
