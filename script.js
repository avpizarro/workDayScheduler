var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

var todayTime = moment().format("LT");
console.log(todayTime);

var hour = $(".hour").text();
console.log(hour);

if (hour === todayTime) {
    $(".description").addClass("present");
}
console.log($(".description"));

if ($(".hour").text() < todayTime) {
    $(".description").addClass("past");
}

if ($(".hour").text() > todayTime) {
    $(".description").addClass("future");
}

