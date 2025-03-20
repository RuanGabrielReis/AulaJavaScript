function ex1(n1){
let quadrado = Number(n1)**2;
let numero = Number(n1);
let cubo = Number(n1)**3;
document.getElementById("quadrado").innerHTML = "o quadrado do numero é: " + quadrado;
document.getElementById("quadrado").innerHTML = "o quadrado do numero é: " + quadrado;
document.getElementById("quadrado").innerHTML = "o quadrado do numero é: " + quadrado;

}

function ex6(){
    let qtde = document.getElementById("qtde").value;
    let preco = document.getElementById("preco").value;
    
    let subtotal = qtde*preco;
    let desconto = subtotal*0.1;
    let valorFinal = subtotal-desconto;

    document.getElementById("subtotal").innerHTML = "O subtotal é de: " + subtotal;
    document.getElementById("desconto").innerHTML = "O desconto é de: " + desconto;
    document.getElementById("valorFinal").innerHTML = "O valor final é de: " + valorFinal;

}
    
function calcularMedia() {
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var nota3 = parseFloat(document.getElementById('nota3').value);

    var media = (nota1 + nota2 + nota3) / 3;

    document.getElementById('media').innerText = 'A média aritmética é: ' + media.toFixed(2);
}