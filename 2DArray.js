var cars =[["Nandini","X5","2021"],["hima","Beleno","2022"],["sony","G600","2020"],["likitha","e-Pace","2023"],
              ["sowji","XUV500","2024"]];


document.getElementById("btnArrayToArray").addEventListener("click", function () {
    debugger;
   
var content = "";
    for (var i = 0; i < cars.length; i++) {

    content = content + "<p>" + (i+1) + "."+
        "Name of the car is " + cars[i][0] + 
        " and model is " + cars[i][1] + 
        " and year of manufacturing is " + cars[i][2] + 
    "</p>";

}
    document.getElementById("pResult").innerHTML = content
    
});