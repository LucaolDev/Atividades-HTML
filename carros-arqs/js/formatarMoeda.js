function formatarMoeda (valor) {
    const valorFormatado = new Intl.NumberFormat('pt-BR', {
        //Estilo de formataçao
        style: 'currency', 
        //Qual a moeda
        currency: 'BRL'
    }).format(valor);

    return valorFormatado;
}