var op;


function subtracao(){
var total= document.getElementById("total");
var valor1= document.getElementById("valor1").value;
var valor2= document.getElementById("valor2").value;
var resultado = valor1- valor2;
total.innerHTML=resultado;
console.log(total)
}

function soma(){
    var total= document.getElementById("total");
    var valor1= document.getElementById("valor1").value;
    var valor2= document.getElementById("valor2").value;
    var resultado = parseInt(valor1) + parseInt(valor2);
    total.innerHTML=resultado;
}

function divisao(){
    var total= document.getElementById("total");
    var valor1= document.getElementById("valor1").value;
    var valor2= document.getElementById("valor2").value;
    var resultado= valor1 / valor2;
    total.innerHTML= resultado;
}

function multiplicacao(){
    var total= document.getElementById("total");
    var valor1= document.getElementById("valor1").value;
    var valor2= document.getElementById("valor2").value;
    var resultado= valor1 * valor2;
    total.innerHTML= resultado;
}

