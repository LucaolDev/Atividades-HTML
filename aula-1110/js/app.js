
const tbody = document.querySelector('#historicoContas');
console.log(tbody);

document.querySelector('form').addEventListener('submit', function (e) {

    e.preventDefault();

    const campos = [
        document.querySelector('#usuario'),
        document.querySelector('#email'),
        document.querySelector('#dataCadastro'),
        document.querySelector('#tipoConta'),
    ];


    const tr = document.createElement('tr');

    campos.forEach(campo => {

        const td = document.createElement('td');

        td.textContent = campo.value;

        tr.appendChild(td);
    });

    tbody.appendChild(tr);
    this.reset();

}); 