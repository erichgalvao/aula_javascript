function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("Https://www.grupotpc.com/");
    //window.location.href = "Https://www.grupotpc.com/";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*
function soma (n1, n2){\
    return n1 + n2;
}


function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual a sua idade:");
console.log(validaIdade(idade));
*/

//alert(soma(5, 10));

//alert(setReplace("vai Japão", "Japão", "Brasil"));

/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}*/

/*
var d = new Date();
//alert(d);
alert(d.getMinutes());
*/

/*
var count;
for (count=0; count <= 5; count++){
    alert(count);
}*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
}*/

/*
var idade = prompt("Qual sua idade?");
//var idade = 18;
if (idade >= 18){
    alert("maior de idade");
} else{
    alert("menor de idade")
}; */

//var fruta = {nome:"maça", cor:"vermelha"}
//console.log(fruta);
//console.log(fruta.nome);
//alert(fruta.cor);
//var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
//console.log(frutas);
//alert(frutas[1].nome);

//var nome = " Erich Galvão";
//var idade = 30;
//var idade_2 = 10;
//var frase = "Japão é a melhor seleção do mundo."
//alert(nome + " tem " + idade);

//console.log(frase)
//console.log(frase.replace("Japão", "Brasil"))
//alert(frase.replace("Japão", "Brasil"))

//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista.length);
//console.log(lista);
//console.log(lista.toString());
//onsole.log(lista.join(" - "));
