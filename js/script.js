/**
 * Simula a adição de um produto ao carrinho de compras
 */
function adicionarAoCarrinho(nomeProduto) {
    alert(`Sucesso! O produto "${nomeProduto}" foi adicionado ao seu carrinho.`);
    console.log(`Produto adicionado: ${nomeProduto} em: ${new Date().toLocaleTimeString()}`);
}