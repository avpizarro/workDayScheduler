//var today = moment();
//$("#currentDay").text(today);
 //var today = moment(testDate).format('MM/DD/YYYY');
console.log(moment());

var today = moment();
console.log(today);

$("#currentDay").text(today.format("dddd, MMMM Do"));
console.log($("#currentDay"));