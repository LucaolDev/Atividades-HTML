const tbody = document.querySelector('tbody');

let totalEstoque = 0;

carros.forEach(carro => {
    tbody.innerHTML += `
        <tr>
            <td>${carro.marca}</td>
            <td>${carro.modelo}</td>
            <td>${carro.ano}</td>
            <td>${carro.cor}</td>
            <td>${carro.transmissao}</td>
            <td>${carro.combusivel}</td>
            <td>${formatarMoeda(carro.preco)}</td>
        </tr>
    `;
    totalEstoque += carro.preco;
});

document.querySelector('#total').textContent = formatarMoeda(totalEstoque);