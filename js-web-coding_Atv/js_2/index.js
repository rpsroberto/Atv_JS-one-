function calcularCompra(produto, numParcelas) {
    let valorFinal; // Variável para armazenar o valor final do produto

    // Caso seja uma compra à vista (numParcelas igual a 0)
    if (numParcelas === 0) {
        valorFinal = produto.valor * 0.9; // Aplicando 10% de desconto
        console.log(`Compra à vista. Valor com desconto: R$ ${valorFinal.toFixed(2)}`);
    
    // Caso seja uma compra parcelada sem juros (entre 1 e 10 parcelas)
    } else if (numParcelas >= 1 && numParcelas <= 10) {
        let valorParcela = produto.valor / numParcelas;
        console.log(`Compra parcelada em ${numParcelas}x sem juros. Valor de cada parcela: R$ ${valorParcela.toFixed(2)}`);
    
    // Caso seja uma compra parcelada com juros de 2% (entre 11 e 12 parcelas)
    } else if (numParcelas >= 11 && numParcelas <= 12) {
        valorFinal = produto.valor * 1.02; // Aplicando 2% de juros
        let valorParcela = valorFinal / numParcelas;
        console.log(`Compra parcelada em ${numParcelas}x com juros. Valor de cada parcela: R$ ${valorParcela.toFixed(2)}`);
    
    // Caso o número de parcelas seja maior que 12
    } else {
        console.log("Número de parcelas não permitido.");
    }
}

// Exemplo de uso:
const produto = { nome: "Celular", valor: 1200 };

// Testando os diferentes casos
calcularCompra(produto, 0);  // Compra à vista
calcularCompra(produto, 5);  // Compra parcelada em 5x sem juros
calcularCompra(produto, 11); // Compra parcelada em 11x com juros
calcularCompra(produto, 13); // Número de parcelas não permitido
