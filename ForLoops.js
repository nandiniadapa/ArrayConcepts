document.getElementById("btncube").addEventListener("click",function(){
    debugger;
    var number=Number(document.getElementById("txtnumber").value);
    for (i=1;i<=number;i++){
        debugger;
        console.log(i*i*i)
    }
                 
});

document.getElementById("btnsquare").addEventListener("click",function(){
    debugger;
    var number=Number(document.getElementById("txtnumber").value);
    for (i=1;i<=number;i++){
        debugger;
        console.log(i*i)
    }
});


document.getElementById("btnNumberPrinter").addEventListener("click",function(){
    debugger;
    var number=Number(document.getElementById("txtnumber").value);
    for (i=1;i<=number;i++){
        debugger;
        console.log(i)
    }
});

document.getElementById("btnEven").addEventListener("click",function(){
    debugger;
    var number=Number(document.getElementById("txtnumber").value);
    for (i=2;i<=100;i=i+2){
        debugger;
        console.log(i)
    }
});

document.getElementById("btnodd").addEventListener("click",function(){
    debugger;
    var number=Number(document.getElementById("txtnumber").value);
    for (i=1;i<=100;i=i+2){
        debugger;
        console.log(i)
    }
});


