function mudarCor() {
    // Gera um número aleatório entre 0 e 255
    var corR = Math.floor(Math.random() * 256);
    var corG = Math.floor(Math.random() * 256);
    var corB = Math.floor(Math.random() * 256);

    // Converte o número aleatório em uma string hexadecimal
    var corHex = "#" + corR.toString(16) + corG.toString(16) + corB.toString(16);

    // Altera a cor de fundo da página
    document.body.style.backgroundColor = corHex;
}
