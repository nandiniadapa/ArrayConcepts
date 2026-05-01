document.getElementById("btnStringArray").addEventListener("click", function () {
    debugger
    var colours = ["Blue", "Red", "yellow"];
    var content = "";
    for (i = 0; i < colours.length; i++) {
        content = content + "<p> " + (i + 1) + "." + colours[i ] + "</p>";
        document.getElementById("divResult").innerHTML = content;
    }
});
