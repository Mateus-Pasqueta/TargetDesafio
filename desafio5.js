// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

const string = "Desafio 5";  
let stringInvertida = "";
for (let i = string.length - 1; i >= 0; i--) {
    stringInvertida += string[i];
}       
console.log(stringInvertida);