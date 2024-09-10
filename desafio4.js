// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  


const distribuidora = [    
    {estado: "SP", faturamento: 67.83643},
    {estado: "RJ", faturamento: 36.67866},
    {estado: "MG", faturamento: 29.22988},
    {estado: "ES", faturamento: 27.16548},
    {estado: "Outros", faturamento: 19.84953}
]

    
//faturamento total
    
let faturamentoTotal = 0;
for (const item of distribuidora) {
    faturamentoTotal += item.faturamento;
}
    
//Percentual de cada estado
    
const percentualEstado = [];
for (const item of distribuidora) {
    const percentual = (item.faturamento / faturamentoTotal) * 100;
    percentualEstado.push({
        estado: item.estado,
        percentual: percentual + '%'
    });
}


console.log(percentualEstado);