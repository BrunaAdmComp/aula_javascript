function botao(){
    document.getElementById("Agradecimento").innerHTML = "<b>Obrigada por Clicar</b>";
   // console.log(document.getElementById("Agradecimento"));
  //alert("Obrigada por clicar!")  
}

function redirecionar(){
    window.open("https://globalacademy.com/");
   // window.location.href = "https://globalacademy.com/";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigada por passar o mouse"
    //document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse";
   // alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui"
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
};




/*function soma(n1, n2){
    return n1 + n2;
}
*/

/*var validar;
function validaIdade(idade){
    validar 
    if (idade >=18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual é a sua idade?");
validaIdade(idade)
console.log(validar);
*/

//console.log(validaIdade(idade));

//function setReplace(frase, nome, novo_nome){
 //   return frase.replace(nome, novo_nome)
//}

//alert(soma(5, 10));
//alert(setReplace("Vai Brasil", "Brasil", "Brasil"));

/*
var d = new Date();
alert (d.getDay());
alert (d.getHours());
alert (d.getMinutes());
*/

/*
var count;
for(count=0; count <=5; count++){
    alert(count);
};
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
};
*/

//var idade = prompt("Qual a sua idade?");
//var idade = 18;
//if (idade >= 18){
//    alert("maior de idade");
//}else{
//    alert("menor de idade");
//};



/*
var frutas = [{nome: "maça", cor: "vermelha"}, {nome:"uva", cor: "roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/


/*
var fruta = {nome: "maça", cor: "vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista[0]);
//console.log(lista.toString());
//console.log(lista.join(" - "))


//alert(lista[1]);





/*var nome = "Bruna de Paula";
var n1 = 33;
var n2 = 10;
var frase = "Brasil é o melhor time do mundo";/*
/*alert(nome + "tem" + idade + "anos");*/
//alert(idade + idade2);
//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.toLowerCase());
//alert(frase.replace("Brasil", "Alemanha"))