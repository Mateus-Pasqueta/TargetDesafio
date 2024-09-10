// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

function fibonacci(limit) {
    let fibSequence = [0, 1];  

    // Calcula a sequencia de fibonacci
    while (true) {
        let nextFib = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
        if (nextFib > limit) break;  
        fibSequence.push(nextFib);   
    }

    return fibSequence;
}

// verifica a sequência de Fibonacci
function pertenceFibonacci(numero) {
    let fibSequence = fibonacci(numero); 
    if (fibSequence.includes(numero)) {
        return `O número ${numero} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${numero} NÃO pertence à sequência de Fibonacci.`;
    }
}


let numero = 21;  // Troque este valor para o número que você deseja testar

console.log(pertenceFibonacci(numero));





