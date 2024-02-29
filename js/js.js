let fibonacci = [0, 1];
let numero = 0;

var input = document.getElementById("searchInput"); var valor = input.value; alert("El valor del campo es:"+ valor);

function mostrarSecuenciaDeFibonacci() {
  for (i = 0; i <= 20; i++) {
    numero = fibonacci.at(-1) + fibonacci.at(-2);
    fibonacci.push(numero);
  }
}

mostrarSecuenciaDeFibonacci();

console.log(fibonacci);




let text = "";
let arrayText = [];
function palindromo(text) {
    arrayText = text.split("");
    arrayInvertido = arrayText.reverse();

    // ocupar text y no el arrayText
    if (arrayInvertido == text) {
        console.log("es palindromo");
    } else {
        console.log("no es palindromo");
    }

}
palindromo("tombo");
palindromo("reconocer");