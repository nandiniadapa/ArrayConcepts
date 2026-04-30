document.getElementById("btnSubmit").addEventListener("click",function(){
debugger;
var numbers = [10, 20, 30, 40, 50]
    document.getElementById("pResult").innerHTML = numbers;
    var index = document.getElementById("txtIndex").value;
    var changeNumber = document.getElementById("txtChangeNumber").value;
    numbers[index] = changeNumber;
    document.getElementById("pResultMutable").innerHTML = numbers;
});
