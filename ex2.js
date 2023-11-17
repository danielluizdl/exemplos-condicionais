const valor = 100;
const parcelas = 12;

if (parcelas === 1) {
    console.log(`Voce tera 10% de desconto ficando R$ ${valor * 0.9}`)
} else if (parcelas >= 2 && parcelas <= 6) {
    const valorDaParcela = valor / parcelas
    console.log(`Voce ira pagar R$ ${valorDaParcela.toFixed(2)} em ${parcelas} parcelas`)

} else if (parcelas >= 7 && parcelas <= 12) {
    const valorComJuros = valor * (1 + 0.01) ** parcelas
    console.log(`voce ira pagar R$ ${valorComJuros.toFixed(2)} dividido em ${parcelas} vezes com juros`)
} else {
    console.log("numeros de parcela Invalida")
}

