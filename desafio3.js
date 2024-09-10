// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

const dados = require("./dados.json");

const diasComFaturamento = dados.filter(dia => dia.valor > 0);

//Menor Valor
const menorValor = diasComFaturamento.reduce((acumulador, menor) => {
  return Math.min(acumulador, menor.valor);
}, Infinity);

//Maior Valor
const maiorValor = diasComFaturamento.reduce((acumulador, maior) => {
  return Math.max(acumulador, maior.valor);
}, 0);

//Media Mensal

const mediaMensal = diasComFaturamento.reduce((acumulador, dia) => {
  return acumulador + dia.valor;
}, 0);

const media = mediaMensal / diasComFaturamento.length;

//Faturamento acima da media

const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > media).length;

console.log(dados, "Menor Valor:", menorValor, "Maior Valor:", maiorValor, "Dias acima da media:", diasAcimaDaMedia);



