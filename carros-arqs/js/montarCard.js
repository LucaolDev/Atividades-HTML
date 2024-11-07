const gridCard = document.querySelector('#gridCards');
let totalCarrosLoja = 0;

carros.forEach(carro => {

    // if (carro.cor.toLowerCase() === 'vermelho') {
        gridCard.innerHTML += `
        <div class="col-md-6 col=lg-4 my-2">
            <div class="card">
                <img src="${carro.foto}" class="card-img-top" alt="${carro.modelo} - ${carro.marca}">
                <div class="card-body">
                    <h5 class="card-title"> ${carro.modelo} - ${carro.marca}</h5>
                    <div class="d-flex justify-content-between">
                        <p>${carro.ano}</p>
                        <p>${carro.cor}</p>
                    </div>
                    <h4 class="text-primary">${formatarMoeda(carro.preco)}</h4>
                    <div class="d-flex justify-content-between">
                    <p>${carro.combustivel}</p>
                    <p>${carro.transmissao}</p>
                     </div>
                </div>
            </div>
        </div>
        `;
        totalCarrosLoja++;
    // }
});

document.querySelector('#totalEstoque').textContent = totalCarrosLoja;

