document.getElementById("btnSubmit").addEventListener("click",function(){
debugger;
var Name= [flowers,cars,bikes,ActiveObjects]
    document.getElementById("pResult").innerHTML = Name;
    var index = document.getElementById("txtIndex").value;
    var changeName = document.getElementById("txtChangeName").value;

    Name[index] = changeName;
    document.getElementById("pResultMutable").innerHTML = Name;
});