$(start);
//Function to create inputs 
function createInput(inputName) {
    let inputField = $("<input>");
    inputField.attr("type", "number");
    inputField.attr("id", inputName);
    inputField.attr("placeholder", inputName)
    $("body").append(inputField);
    return inputField;
}
// function checkesValue() {
//     if (TargetX > 1 && TargetX <Columns) {
//         return true
//     }
//     if (TargetY > 1 && TargetY <Rows) {
//         return true
//     } 
// return false
// }

function creatTable(cols, r, tx, ty) {
    let myTable = $("<table>");

    for (let i = 1; i <= cols; i++) {
        let col = $("<tr>");
        $(myTable).append(col);
        for (let j = 1; j <= r; j++) {
            let row = $("<td>");
            $(col).append(row);
            row.html("Click");
            if (i == tx && j == ty) {
                row.on("click", function () { alert("i got clicked") })
            }
            else {
                row.on("click", function () { alert("no") })
            }

        }

    }
    $("body").append(myTable);


}
function start() {

    //adds input fields
    let Rows = createInput("Rows");
    let Columns = createInput("Cols");
    $("body").append("<br>");
    let TargetX = createInput("TargetX");
    let TargetY = createInput("TargetY");
    //adds button 
    let btn = $("<button>");
    btn.html("Create grid");
    btn.attr("id", "btn");
    $("body").append(btn);

    btn.on("click", function () {
        let ty = Number(TargetY.val());
        let cols = Number(Columns.val());
        let r = Number(Rows.val());
        let tx = Number(TargetX.val());
        if (tx >= 1 && tx <= cols && ty >= 1 && ty <= r) {
            $("body").html("");
            creatTable(cols, r, tx, ty);
            let restBtn = $("<button>");
            restBtn.html("Reset");
            $("body").append(restBtn);
            restBtn.on("click", function () {
                $("body").html("");
                start();
            });
        }
        else {
            alert("is wrong");
        }
        console.log(Rows.val());
    });

}

