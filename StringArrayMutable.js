document.getElementById("btnSubmit").addEventListener("click",function(){
debugger;
    var names = ["nandini","jaanu","hima","navya","viparna"];
    document.getElementById("pResult").innerHTML = names;
      var index = document.getElementById("txtIndex").value;
      var changeName = document.getElementById("txtChangeName").value;

    names[index] = changeName;
    document.getElementById("pResultMutable").innerHTML = names;
});