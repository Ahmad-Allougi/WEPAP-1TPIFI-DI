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
  /*
    <h1 id="h1">a</h1>
    <label> Please type A:</label>
   <input id="numA"/> <label> Please type B:</label><input id="numB">
    <button id="add">Add</button>
    <div id="Result"></div>
    </script>
  */
 //adds label
  let newLabelElement = $("<label>");
  newLabelElement.html("Please type A ");
  $("body").append(newLabelElement);
  //adds input
  let newInput = $("<input>");
  $("body").append(newInput);
  newInput.attr("id","numA");
  //adds second label
  let newLabelElement2 = $("<label>");
  newLabelElement2.html("Please type B ");
  $("body").append(newLabelElement2);
//adds second input
  let newInput2 = $("<input>");
  $("body").append(newInput2);
  newInput2.attr("id","numB");
  //adds button
  let btn = $("<button>");
  btn.html("Add");
  $("body").append(btn);
  btn.attr("id","add");
  //adds div Result
let div = $("<div>");
  div.html(" ");
  div.attr("id","Result");
  $("body").append(div);

    $("button").on("click", add)
}

function sum () {    
  let num1 = Number($("input:nth-of-type(1)").val());
  let num2 = Number($("input:nth-of-type(2)").val());
  let total = num1 + num2;
  $("#Result").html(total);
  console.log(total);
}

function add() {
  let numA = Number($("#numA").val());
  let numB = Number($("#numB").val());
  let total = numA + numB;
  $("#Result").html(total);
  console.log(total);
}
