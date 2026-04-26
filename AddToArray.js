
var flowers=[];
document.getElementById("btnAddtoArray").addEventListener("click",function(){
    debugger;
    var flower=document.getElementById("txtFlower").value;
    
    flowers.push(flower)
    document.getElementById("pResult").innerHTML=flowers;
    var flower=document.getElementById("txtFlower").value="";
});