document.getElementById("btncube").addEventListener("click",function(){
    debugger;
    var number=Number(document.getElementById("txtnumber").value);
    var content="";
    for (i=1;i<=number;i++){
        debugger;
        content +=i*i*i +"<br>"
        document.getElementById("pResult").innerHTML=content
    }
                 
});

document.getElementById("btnsquare").addEventListener("click",function(){
    debugger;
    var number=Number(document.getElementById("txtnumber").value);
    var content="";
    for (i=1;i<=number;i++){
        debugger;
    content +=i*i +"<br>"
    document.getElementById("pResult").innerHTML=content
    }
});


document.getElementById("btnNumberPrinter").addEventListener("click",function(){
    debugger;
    var number=Number(document.getElementById("txtnumber").value);
    var content="";
    for (i=1;i<=number;i++){
        debugger;
        content += i+"<br>"
        document.getElementById("pResult").innerHTML=content
    }
});

document.getElementById("btnEven").addEventListener("click",function(){
    debugger;
    var number=Number(document.getElementById("txtnumber").value);
    var content="";
    for (i=2;i<=100;i=i+2){
        debugger;
        content += i +"<br>"
        document.getElementById("pResult").innerHTML=content
    }
});

document.getElementById("btnodd").addEventListener("click",function(){
    debugger;
    var number=Number(document.getElementById("txtnumber").value);
    var content="";
    for (i=1;i<=100;i=i+2){
        debugger;
        content += i +"<br>"
        
    }
    document.getElementById("pResult").innerHTML=content
});

document.getElementById("btnDecrease").addEventListener("click",function(){
    debugger;
    var number=Number(document.getElementById("txtnumber").value);
    var content="";
    for (i=100;i>=number;i=i-2){
        debugger;
        content += i + "<br>"
    }
document.getElementById("pResult").innerHTML=content
});

