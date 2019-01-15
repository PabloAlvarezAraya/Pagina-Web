function ejecuta(){
    //document.querySelector("#principal p:last-child").onclick=saludo;
    var elementos=document.querySelectorAll("#principal p, span");
    for(var i=0;elementos.length;i++){
    
        elementos[i].onclick=saludo;
    }
}

function saludo(){
    alert("ola ke ase");
}

window.onload=ejecuta;