for (let contador = 1; contador <= 10; contador++) {
    // escreva aqui um código para calcular exibir o resultado da tabuada do número 7. Ou seja, exibir o resultado de quanto é 7x1, 7x2, 7x3, 7x4, 7x5, etc
    // veja que você pode utilizar o contador para fazer este cálculo.
}

function mostra (frase) {
    console.log (frase);
}

let multiplicador = 1
while(multiplicador <=10) {
    mostra ("7 vezes " + multiplicador + " é igual a " + 7 * multiplicador);
    multiplicador = multiplicador + 1;
}