$(start);

function start() {
    let selectOfCountries = $("<select>");
    $("body").append(selectOfCountries);
    let btnShowCities = $("<button>");
    btnShowCities.html("Show Cities");
    $("body").append(btnShowCities);
    $.get("serverApi.php", { giveListOFCountries: "1"},function(dataBack){
        selectOfCountries.append(dataBack);
    })
    let citiesResult= $("<div>");
    $("body").append(citiesResult);   
    btnShowCities.on("click",function(){
        $.get("serverApi.php",{giveListOfCitiesBelongingTo:selectOfCountries.val()},function(dataBack){
            citiesResult.html(dataBack);
        })
    })
    }
