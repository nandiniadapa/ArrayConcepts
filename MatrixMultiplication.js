document.getElementById("btnMatrix").addEventListener("click", function () {
    debugger;
    var multiplier = document.getElementById("txtmultiplier").value;
    var matrix = [[1, 2, 3],
                  [4, 5, 6],
                  [7, 8, 9]];
    let output = " ";
    for (i = 0; i< matrix.length; i++){
       for(j=0; j<matrix[i].length; j++){
          output += matrix[i][j] * multiplier + " ";
       }
       output += "<br>";
    }
    document.getElementById("pResult").innerHTML = output;
})
