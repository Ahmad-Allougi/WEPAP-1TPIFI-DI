/*
function changH1() {
 document.getElementById("h1").innerHTML = "hello from js";   
};
addEventListener("load",changH1);
*/

//JQuery version

$(function () {
  $("#h1").html("hello world from jquery");  
});


$(start)

function start() {

    $("button").on("click", sum)
}

function sum () {    
  let num1 = Number($("input:nth-of-type(1)").val());
  let num2 = Number($("input:nth-of-type(2)").val());
  let total = num1 + num2;
  $("#Result").html(total);
  console.log(total);
}