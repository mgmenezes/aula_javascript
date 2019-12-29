function clicou(){
    
    document.getElementById("agradecimento").innerHTML = "<b>obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.google.com.br/");
    //window.location.href = "link"
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML =  "obrigado por passar o mouse"; 
    //alert("trocar texto");
    elemento.innerHTML = "obrigado por passar o mouse";
}

function voltar(elemento){
    elemento.innerHTML = "passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML =  "passe o mouse aqui"; 
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}


/*function soma(n1,n2){
    return n1+n2;
}

var validar;
function validaIDade(idade){
    
    if(idade>=18){
        validar = true;
    }else{
        validar=frase;
    }
    return validar;
}

var idade = prompt("qual sua idade");
validaIDade(idade);
console.log(validar);
*/
/*
function setReplace(frase,nome,novo_nome){
    return frase.replace(nome,novo_nome)
}
*/

//alert (soma(5,10));
//alert(setReplace("vai japao","japao","brasil"));


/*var d= new Date();
alert(d);
*/



/*var count;
for(count=0; count<=5;count++){
    alert(count);

}
*/


/*var count = 0;
while(count<5){
    console.log(count);
    count += count;
    alert(count);
}

*/






/*
var idade = prompt("qual sua idade?");

if(idade>=18){
    alert("mior de idade");
}else{
    alert("menor de idade");
}

*/

/*var frutas = [{nome:"maça", cor: "vermelha"},nome:"pera", cor: "verde"}];
console.log(frutas.nome);
*/

/*
var fruta = {nome:"maça", cor: "vermelha"};
console.log(fruta.nome);
*/

//-----------------------------------------------------------------------
//var lista = ["maça","uva","pera"];
//lista.push("abacaxi");
//lista.pop();
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.join("  ;  "))

//------------------------------------------------------------------------
//var nome = "moises menezes";
//var idade = 27;
/*var idade2 = 33;
var frase = "japao é o melhor time do mundo"
//alert(idade + idade2);

console.log(nome);
console.log(frase.replace(japão, brasil)); 
console.log(frase.toLocaleLowerCase());
*/
