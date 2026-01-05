<?php 
// we need to create a list of countries only when we are asked for it
$conn = new mysqli("localhost","root","","citiesandcountries");

if (isset($_GET["giveListOFCountries"])) {
    //build a list of countries and print them out:
    $sqlSelect = $conn->prepare("SELECT * from countries");
    $sqlSelect->execute();
    $result = $sqlSelect->get_result();
    while ($row = $result->fetch_assoc()) {
        print("<option value='".$row['countryId']."'>".$row['NameOfCountry']."</option>");
    }
}

if ($_GET["giveListOfCitiesBelongingTo"]) {
    $sqlSelect = $conn->prepare("SELECT * from cities where countryid=?");
    $sqlSelect->bind_param("i",$_GET["giveListOfCitiesBelongingTo"]);
    $sqlSelect->execute();
    $result = $sqlSelect->get_result();
    while ($row = $result->fetch_assoc()) {
    print($row["NameOfCity"]."<br>");
    }
}
?>