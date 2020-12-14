// Set current time
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

// Assign row color 
var todayTime = moment().format("H");
console.log(todayTime);

 
$('.description').each( function(index) {
    var rowTime = $(this).attr("data-index");
    console.log(rowTime);

    if(Number(rowTime) === Number(todayTime))
        $(this).addClass("present")
       
    else if (Number(rowTime) < Number(todayTime))
        $(this).addClass("past")
    
    else $(this).addClass("future"); 
});
 console.log($(".description"));

//Store Taks
var allTasks = [];

$(".saveBtn").click(function(event){
    var task = $(this).siblings().text();
    if ($(this).prev().text() !== "") {
    allTasks.push(task);
    localStorage.setItem("task", JSON.stringify(allTasks));
    }
})

//Display stored  Tasks
var storedTask = JSON.parse(localStorage.getItem("task"));
console.log(storedTask); 
var res = [];

if (storedTask !== null) {
    for (i=0;i<storedTask.length; i++) {
        var res = storedTask[i].split("M");
        console.log(res);
    
    $.each($('.description'), function() {

        if
        ($(this).prev().text().charAt(0) === res[0].charAt(0) &&
         $(this).prev().text().charAt(1) === res[0].charAt(1))

        $(this).append(res[1]);
    })
}}




