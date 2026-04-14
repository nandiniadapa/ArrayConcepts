document.getElementById("btnArray").addEventListener("click",function(){
    debugger;
    var indexNumber=Number(document.getElementById("IndexNumber").value);
    var shoppingApps=["myntra","ajio","meesho","flipkart","amazon"];
    document.getElementById("pResult").innerHTML=shoppingApps[indexNumber];
});