function alterarCor() {
    const corEscolhida = prompt('Digite a cor desejada para o fundo:');

    if (corEscolhida !== null && corEscolhida.trim() !== '') {
        document.querySelector('main').style.background = corEscolhida;
    }
}

alterarCor();
