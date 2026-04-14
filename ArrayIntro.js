document.getElementById("btnArray").addEventListener("click",function(){
    debugger;
    var indexNumber=Number(document.getElementById("IndexNumber").value);
    var shoppingApps=["myntra","ajio","meesho","flipkart","amazon",];
    document.getElementById("pResult").innerHTML=shoppingApps[indexNumber];
});
document.getElementById("btnFirstElement").addEventListener("click",function(){
    debugger;
    var indexNumber=Number(document.getElementById("IndexNumber").value);
    var shoppingApps=["myntra","ajio","meesho","flipkart","amazon",];
    document.getElementById("pResult").innerHTML=shoppingApps[0];

});
document.getElementById("btnLastElement").addEventListener("click",function(){
    debugger;
      var indexNumber=Number(document.getElementById("IndexNumber").value);
    var shoppingApps=["myntra","ajio","meesho","flipkart","amazon",];
    document.getElementById("pResult").innerHTML=shoppingApps[shoppingApps.length-1];

});