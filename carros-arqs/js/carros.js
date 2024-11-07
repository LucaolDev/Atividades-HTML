const carros = [{
        marca: 'Toyota',
        modelo: 'Corolla',
        ano: 2022,
        cor: 'Prata',
        preco: 99999.99,
        combustivel: 'Gasolina',
        transmissao: 'Automática',
        foto: './images/01.png'
    },
    {
        marca: 'Honda',
        modelo: 'Civic',
        ano: 2023,
        cor: 'Preto',
        preco: 105000.00,
        combustivel: 'Flex',
        transmissao: 'CVT',
        foto: './images/02.png'
    },
    {
        marca: 'Ford',
        modelo: 'Mustang',
        ano: 2022,
        cor: 'Vermelho',
        preco: 150000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
        foto: './images/03.png'
    },
    {
        marca: 'Chevrolet',
        modelo: 'Camaro',
        ano: 2023,
        cor: 'Amarelo',
        preco: 180000.00,
        combustivel: 'Gasolina',
        transmissao: 'Automática',
        foto: './images/04.png'
    },
    {
        marca: 'Volkswagen',
        modelo: 'Golf',
        ano: 2022,
        cor: 'Azul',
        preco: 85000.00,
        combustivel: 'Flex',
        transmissao: 'Automática',
        foto: './images/05.png'
    },
    {
        marca: 'Tesla',
        modelo: 'Model 3',
        ano: 2023,
        cor: 'Branco',
        preco: 50000.00,
        combustivel: 'Elétrico',
        transmissao: 'Automática',
        foto: './images/06.png'
    },
    {
        marca: 'Mercedes-Benz',
        modelo: 'C-Class',
        ano: 2022,
        cor: 'Cinza',
        preco: 120000.00,
        combustivel: 'Diesel',
        transmissao: 'Automática',
        foto: './images/07.png'
    },
    {
        marca: 'Audi',
        modelo: 'A4',
        ano: 2023,
        cor: 'Verde',
        preco: 95000.00,
        combustivel: 'Gasolina',
        transmissao: 'Automática',
        foto: './images/08.png'
    },
    {
        marca: 'Nissan',
        modelo: 'Altima',
        ano: 2022,
        cor: 'Marrom',
        preco: 90000.00,
        combustivel: 'Flex',
        transmissao: 'CVT',
        foto: './images/09.png'
    },
    {
        marca: 'Hyundai',
        modelo: 'Elantra',
        ano: 2023,
        cor: 'Roxo',
        preco: 80000.00,
        combustivel: 'Gasolina',
        transmissao: 'Automática',
        foto: './images/010.png'
    },
    {
        marca: 'BMW',
        modelo: 'X5',
        ano: 2023,
        cor: 'Prata',
        preco: 120000.00,
        combustivel: 'Diesel',
        transmissao: 'Automática',
        foto: './images/011.png'
    },
    {
        marca: 'Mazda',
        modelo: 'CX-5',
        ano: 2022,
        cor: 'Azul',
        preco: 95000.00,
        combustivel: 'Gasolina',
        transmissao: 'Automática',
        foto: './images/012.png'
    },
    {
        marca: 'Kia',
        modelo: 'Seltos',
        ano: 2023,
        cor: 'Vermelho',
        preco: 80000.00,
        combustivel: 'Flex',
        transmissao: 'CVT',
        foto: './images/013.png'
    },
    {
        marca: 'Jaguar',
        modelo: 'F-PACE',
        ano: 2022,
        cor: 'Preto',
        preco: 130000.00,
        combustivel: 'Gasolina',
        transmissao: 'Automática',
        foto: './images/014.png'
    },
    {
        marca: 'Subaru',
        modelo: 'Outback',
        ano: 2023,
        cor: 'Verde',
        preco: 100000.00,
        combustivel: 'Gasolina',
        transmissao: 'CVT',
        foto: './images/015.png'
    },
    {
        marca: 'Porsche',
        modelo: '911',
        ano: 2022,
        cor: 'Amarelo',
        preco: 180000.00,
        combustivel: 'Gasolina',
        transmissao: 'Automática',
        foto: './images/016.png'
    },
    {
        marca: 'Lexus',
        modelo: 'RX',
        ano: 2023,
        cor: 'Branco',
        preco: 110000.00,
        combustivel: 'Híbrido',
        transmissao: 'CVT',
        foto: './images/017.png'
    },
    {
        marca: 'Land Rover',
        modelo: 'Discovery',
        ano: 2022,
        cor: 'Cinza',
        preco: 150000.00,
        combustivel: 'Diesel',
        transmissao: 'Automática',
        foto: './images/018.png'
    },
    {
        marca: 'Acura',
        modelo: 'MDX',
        ano: 2023,
        cor: 'Prata',
        preco: 120000.00,
        combustivel: 'Gasolina',
        transmissao: 'Automática',
        foto: './images/019.png'
    },
    {
        marca: 'Fiat',
        modelo: 'Uno',
        ano: 2022,
        cor: 'Vermelho',
        preco: 35000.00,
        combustivel: 'Flex',
        transmissao: 'Manual',
        foto: './images/020.png'
    },
    {
        marca: 'Volvo',
        modelo: 'XC90',
        ano: 2022,
        cor: 'Branco',
        preco: 130000.00,
        combustivel: 'Híbrido',
        transmissao: 'Automática',
        foto: './images/021.png'
    },
    {
        marca: 'Infiniti',
        modelo: 'Q50',
        ano: 2023,
        cor: 'Cinza',
        preco: 90000.00,
        combustivel: 'Gasolina',
        transmissao: 'Automática',
        foto: './images/022.png'
    },
    {
        marca: 'Jeep',
        modelo: 'Cherokee',
        ano: 2022,
        cor: 'Verde',
        preco: 95000.00,
        combustivel: 'Flex',
        transmissao: 'Automática',
        foto: './images/023.png'
    },
    {
        marca: 'Alfa Romeo',
        modelo: 'Giulia',
        ano: 2023,
        cor: 'Vermelho',
        preco: 120000.00,
        combustivel: 'Gasolina',
        transmissao: 'Automática',
        foto: './images/024.png'
    },
    {
        marca: 'Buick',
        modelo: 'Encore',
        ano: 2022,
        cor: 'Preto',
        preco: 80000.00,
        combustivel: 'Flex',
        transmissao: 'CVT',
        foto: './images/025.png'
    },
    {
        marca: 'Chrysler',
        modelo: 'Pacifica',
        ano: 2023,
        cor: 'Azul',
        preco: 35000.00,
        combustivel: 'Híbrido',
        transmissao: 'Automática',
        foto: './images/026.png'
    },
    {
        marca: 'Mitsubishi',
        modelo: 'Outlander',
        ano: 2022,
        cor: 'Prata',
        preco: 90000.00,
        combustivel: 'Gasolina',
        transmissao: 'CVT',
        foto: './images/027.png'
    },
    {
        marca: 'Lincoln',
        modelo: 'Navigator',
        ano: 2023,
        cor: 'Branco',
        preco: 150000.00,
        combustivel: 'Gasolina',
        transmissao: 'Automática',
        foto: './images/028.png'
    },
    {
        marca: 'Genesis',
        modelo: 'G80',
        ano: 2022,
        cor: 'Dourado',
        preco: 110000.00,
        combustivel: 'Gasolina',
        transmissao: 'Automática',
        foto: './images/029.png'
    },
    {
        marca: 'Ram',
        modelo: '1500',
        ano: 2023,
        cor: 'Cinza',
        preco: 120000.00,
        combustivel: 'Flex',
        transmissao: 'Automática',
        foto: './images/030.png'
    },
    {
        marca: 'Ford',
        modelo: 'Model T',
        ano: 1927,
        cor: 'Preto',
        preco: 3000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
        foto: './images/031.png'
    }, {
        marca: 'Chevrolet',
        modelo: 'Bel Air',
        ano: 1957,
        cor: 'Azul e Branco',
        preco: 25000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
        foto: './images/032.png'
    }, {
        marca: 'Volkswagen',
        modelo: 'Beetle',
        ano: 1965,
        cor: 'Vermelho',
        preco: 12000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
        foto: './images/033.png'
    }, {
        marca: 'Fiat',
        modelo: '500',
        ano: 1972,
        cor: 'Amarelo',
        preco: 8000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
        foto: './images/034.png'
    }, {
        marca: 'Mercedes-Benz',
        modelo: '300SL',
        ano: 1954,
        cor: 'Prata',
        preco: 95000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
        foto: './images/035.png'
    }, {
        marca: 'Cadillac',
        modelo: 'Eldorado',
        ano: 1959,
        cor: 'Rosa',
        preco: 40000.00,
        combustivel: 'Gasolina',
        transmissao: 'Automática',
        foto: './images/036.png'
    }, {
        marca: 'Jaguar',
        modelo: 'E-Type',
        ano: 1961,
        cor: 'Verde',
        preco: 70000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
        foto: './images/037.png'
    }, {
        marca: 'Porsche',
        modelo: '356',
        ano: 1956,
        cor: 'Prata',
        preco: 60000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
        foto: './images/038.png'
    }, {
        marca: 'Chevrolet',
        modelo: 'Corvette',
        ano: 1969,
        cor: 'Laranja',
        preco: 35000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
        foto: './images/039.png'
    }, {
        marca: 'Ferrari',
        modelo: '250 GTO',
        ano: 1962,
        cor: 'Vermelho',
        preco: 18000000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
        foto: './images/040.png'
    }, {
        marca: 'Ford',
        modelo: 'Mustang Fastback',
        ano: 1968,
        cor: 'Azul',
        preco: 45000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
        foto: './images/041.png'
    }, {
        marca: 'Volkswagen',
        modelo: 'Karmann Ghia',
        ano: 1969,
        cor: 'Branco',
        preco: 15000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
        foto: './images/042.png'
    }, {
        marca: 'Chevrolet',
        modelo: 'Camaro Z28',
        ano: 1969,
        cor: 'Preto',
        preco: 55000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
        foto: './images/043.png'
    }, {
        marca: 'Mercedes-Benz',
        modelo: '190SL',
        ano: 1955,
        cor: 'Azul',
        preco: 85000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
        foto: './images/044.png'
    }, {
        marca: 'Pontiac',
        modelo: 'GTO',
        ano: 1969,
        cor: 'Vermelho',
        preco: 48000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
        foto: './images/045.png'
    }, {
        marca: 'Dodge',
        modelo: 'Charger',
        ano: 1969,
        cor: 'Laranja',
        preco: 42000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
        foto: './images/046.png'
    }, {
        marca: 'Buick',
        modelo: 'Skylark',
        ano: 1967,
        cor: 'Verde',
        preco: 25000.00,
        combustivel: 'Gasolina',
        transmissao: 'Automática',
        foto: './images/047.png'
    }, {
        marca: 'Toyota',
        modelo: 'Land Cruiser',
        ano: 1970,
        cor: 'Bege',
        preco: 18000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
        foto: './images/048.png'
    }, {
        marca: 'Plymouth',
        modelo: 'Barracuda',
        ano: 1964,
        cor: 'Amarelo',
        preco: 32000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
        foto: './images/049.png'
    }, {
        marca: 'Nissan',
        modelo: 'Fairlady Z',
        ano: 1970,
        cor: 'Azul',
        preco: 28000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
        foto: './images/050.png'
    },
    {
        marca: 'Rolls-Royce',
        modelo: 'Silver Cloud',
        ano: 1957,
        cor: 'Branco',
        preco: 120000.00,
        combustivel: 'Gasolina',
        transmissao: 'Automática',
        foto: './images/051.png'
    }, {
        marca: 'Studebaker',
        modelo: 'Avanti',
        ano: 1963,
        cor: 'Prata',
        preco: 35000.00,
        combustivel: 'Gasolina',
        transmissao: 'Automática',
        foto: './images/052.png'
    }, {
        marca: 'Austin-Healey',
        modelo: '3000',
        ano: 1959,
        cor: 'Vermelho',
        preco: 45000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
        foto: './images/053.png'
    }, {
        marca: 'Aston Martin',
        modelo: 'DB5',
        ano: 1964,
        cor: 'Cinza',
        preco: 100000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
        foto: './images/054.png'
    }, {
        marca: 'Alfa Romeo',
        modelo: 'Spider Duetto',
        ano: 1966,
        cor: 'Verde',
        preco: 55000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
        foto: './images/055.png'
    }, {
        marca: 'Datsun',
        modelo: '240Z',
        ano: 1970,
        cor: 'Azul',
        preco: 28000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
        foto: './images/056.png'
    }, {
        marca: 'Maserati',
        modelo: 'Ghibli',
        ano: 1967,
        cor: 'Preto',
        preco: 80000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
        foto: './images/057.png'
    }, {
        marca: 'Lotus',
        modelo: 'Elan',
        ano: 1963,
        cor: 'Amarelo',
        preco: 30000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
        foto: './images/058.png'
    }, {
        marca: 'MG',
        modelo: 'MGB',
        ano: 1969,
        cor: 'Azul',
        preco: 18000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
        foto: './images/059.png'
    }, {
        marca: 'Triumph',
        modelo: 'TR6',
        ano: 1973,
        cor: 'Vermelho',
        preco: 22000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
        foto: './images/060.png'
    }
];




