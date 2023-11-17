const valor = 100;
const parcelas = 3;

if (parcelas === 1) {
    console.log(`Voce tera 10% de desconto ficando R$ ${valor * 0.9}`)
} else {
    const valorDaParcela = valor / parcelas
    console.log(`Voce ira pagar R$ ${valorDaParcela.toFixed(2)} em ${parcelas} parcelas`)

}

